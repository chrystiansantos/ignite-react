import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { prismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link key={post.slug} href={`posts/${post.slug}`}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = prismicClient({ previewData });

  const response = await client.getAllByType("publication", {
    fetch: ["publication.title", "publication.content"],
    pageSize: 100,
  });

  const posts = response.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt: RichText.asText(
      new Array(
        post.data.content.find(
          (content: any) => content.type === "paragraph"
        ) ?? ""
      )
    ),

    updatedAt: new Date(post.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  }));

  return {
    props: {
      posts,
    },
  };
};
