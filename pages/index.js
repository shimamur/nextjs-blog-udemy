import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import {getPostsData} from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostData = getPostsData();
  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>
        私はフルスタックエンジニアです。
      </p>
    </section>

    <section>
      <h2>✍エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostData.map(({id,title,date,thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage}></img>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>{date}</small>
          </article>
        ))}
       </div>
    </section>
  </Layout>
  );
}
