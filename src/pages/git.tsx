import Head from 'next/head';
import React from 'react';
import { GitHeader } from '../components/git/git-header';
import { GitRepositoryList } from '../components/git/git-repository-list';
import Layout from '../components/layout';
import { git_account } from '../config/customisation';

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
    name: git_account,
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
  const res = await fetch(`https://api.github.com/users/${git_account}/repos`);
  const repositories = await res.json();
  return repositories;
}

async function getOverview() {
  const res = await fetch(`https://api.github.com/users/${git_account}`);
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
