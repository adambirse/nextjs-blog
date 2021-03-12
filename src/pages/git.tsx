import Head from 'next/head';
import React from 'react';
import { GitHeader } from '../components/git/git-header';
import { GitRepositoryList } from '../components/git/git-repository-list';
import Layout from '../components/layout';
import { GIT_ACCOUNT } from '../config/customisation';

export async function getServerSideProps() {
  const repositories = await getRepositories();
  const overview = await getOverview();
  if (!repositories) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      repositories: mapRepositories(repositories),
      header: mapOverview(overview),
    },
  };
}

const mapOverview = (data: any) => {
  return {
    name: GIT_ACCOUNT,
    repoCount: data.public_repos,
  };
};

const mapRepositories = (data: any) => {
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

async function getRepositories() {
  const res = await fetch(`https://api.github.com/users/${GIT_ACCOUNT}/repos`);
  const repositories = await res.json();
  return repositories;
}

async function getOverview() {
  const res = await fetch(`https://api.github.com/users/${GIT_ACCOUNT}`);
  const overview = await res.json();
  return overview;
}

export default function Git({ repositories, header }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Git</title>
      </Head>
      <GitHeader name={header.name} repoCount={header.repoCount} />
      <GitRepositoryList repositories={repositories} />
    </Layout>
  );
}
