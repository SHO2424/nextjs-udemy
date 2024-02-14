import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css"
import { getPostsData } from '../lib/post';


//ssgの場合　
export async function getStaticProps(){
  const allPostsData=getPostsData()//id,title,date,thumbnail
  console.log(allPostsData);
  return {
    props:{
      allPostsData,
    }
  }
}

//ssrの場合
//  
export default function Home({allPostsData}) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <section>
        <p className={utilStyles.headingMd}>i am akiwa shoei akiwa 20years old. i like soccer.</p>
      </section>
      <section>
        <h2>🗒shoeiのブログ</h2>
      <div className={styles.grid }>
        {allPostsData.map(({id,title,date,thumbnail})=>(
             <article key={id }>
             <Link href={`/posts/${id}`}>
             <img src={thumbnail}
             className={styles.thumbnailImage}/>
             </Link>
             <Link legacyBehavior href={`/posts/${id}`} >
             <a className={utilStyles.boldText}>{title}</a> 
             </Link>
             <br/>
            <small className={utilStyles.lightText}>
              {date}
            </small>
           </article>
        ))}
     
      </div>
      </section>
      
    </Layout>
  );
}
