import { GetStaticPaths, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { useEffect } from "react";
import { prismicClient } from "../../../services/prismic";
import styles from "../post.module.scss";

interface IPostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: IPostPreviewProps) {
  const { data } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (data?.activeSubscription) {
      push(`/posts/${post.slug}`);
    }
  }, [data?.activeSubscription, post.slug]);

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
            className={`${styles.postContent} ${styles.previewContet}`}
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
          <div className={styles.continueReading}>
            Wanna continue reading
            <Link href="/">Subscribe now 🤗</Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const prismic = prismicClient();

  const response = await prismic.getByUID("publication", slug);

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
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
    revalidate: 60 * 30, // 30 min
  };
};
