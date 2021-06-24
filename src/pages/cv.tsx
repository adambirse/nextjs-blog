import Head from 'next/head';
import React from 'react';
import { CVListing } from '../components/cv/cvListing';
import Layout from '../components/layout';

export default function CV() {
  return (
    <Layout home={false}>
      <Head>
        <title>CV</title>
      </Head>
      <CVListing
        company="Company"
        role="Engineer"
        startDate="12/12/2018"
        endDate="12/12/2019"
        description={'Something'}
      />
      <CVListing company="Company 2 " role="Tech lead" startDate="12/12/2019" description={'Did tech lead things'} />
    </Layout>
  );
}
