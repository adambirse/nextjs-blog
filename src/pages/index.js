/* eslint-disable no-unused-vars */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { About } from '../components/about';
import { Blog } from '../components/blog-list';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
      <Blog allPostsData={allPostsData} />
    </Layout>
  );
}
