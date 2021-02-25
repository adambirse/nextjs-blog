/* eslint-disable no-unused-vars */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { About } from '../components/about';
import { Blog } from '../components/blog-list';
import { Accordion } from '../components/accordion/accordion';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
      <Accordion title={'Show me show me'} content={'I am some really cool content'}></Accordion>
      <Blog allPostsData={allPostsData} />
    </Layout>
  );
}
