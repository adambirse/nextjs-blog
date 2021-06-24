import Head from 'next/head';
import React from 'react';
import { CVListing } from '../components/cv/cvListing';
import Layout from '../components/layout';
import { getSortedCVData } from '../lib/cvs';

export async function getStaticProps() {
  const cvEntries = await getSortedCVData();
  return {
    props: {
      cvEntries,
    },
  };
}

export default function CV({ cvEntries }) {
  return (
    <Layout home={false}>
      <Head>
        <title>CV</title>
      </Head>
      {cvEntries.length !== 0 &&
        cvEntries.map((cv) => (
          <CVListing
            company={cv.company}
            role={cv.role}
            startDate={cv.start_date}
            endDate={cv.end_date}
            description={cv.content}
          />
        ))}
    </Layout>
  );
}
