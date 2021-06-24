import Head from 'next/head';
import React from 'react';
import { CVListing } from '../components/cv/cvListing';
import Layout from '../components/layout';
import { getSortedCVData } from '../lib/cvs';
const utilStyles = require('../styles/utils.module.scss');


export async function getStaticProps() {
  const postData = await getSortedCVData();
  return {
    props: {
      postData,
    },
  };
}

export default function CV({postData}) {
  console.log(postData);

  return (
    <Layout home={false}>
      <Head>
        <title>CV</title>
      </Head>
      {postData.length !== 0 &&
          postData.map((post) => (
               <CVListing
        company={post.company}
        role={post.role}
        startDate={post.start_date}
        endDate={post.end_date}
        description={post.contentHtml}
      />
          ))}
     
    </Layout>
  );
}
