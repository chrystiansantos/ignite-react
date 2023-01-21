import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { useEffect } from "react";
import { prismicClient } from "../../services/prismic";
import styles from "./post.module.scss";

interface IPostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: IPostProps) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Ignews`}</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params as { slug: string };
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `posts/preview/${slug}`,
        permanent: false,
      },
    };
  }

  const prismic = prismicClient({ req });

  const response = await prismic.getByUID("publication", slug);

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
