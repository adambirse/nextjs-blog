import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';


export default function CV() {
  return (
    <Layout home={false}>
      <Head>
        <title>CV</title>
      </Head>
      <h1>CV</h1>
    </Layout>
  );
}
