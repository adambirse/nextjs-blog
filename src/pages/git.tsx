import Head from 'next/head';
import React from 'react';
import { GitHeader } from '../components/git/git-header';
import { GitRepositoryList } from '../components/git/git-repository-list';
import Layout from '../components/layout';
import { git_account } from '../config/customisation';

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/${git_account}/repos`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      repositories: extract(data),
    },
  };
}

const extract = (data: any) => {
  let respositories = [];
  data.map((repo) => {
    respositories.push({
      id: repo.id,
      name: repo.full_name,
      url: repo.html_url,
    });
  });
  return respositories;
};

export default function Git({ repositories }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Git</title>
      </Head>
      <GitHeader />
      <GitRepositoryList repositories={repositories} />
    </Layout>
  );
}
