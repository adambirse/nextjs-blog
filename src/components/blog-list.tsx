import React from 'react';
import Link from 'next/link';
import Date from '../components/date';
const utilStyles = require('../styles/utils.module.css');

export interface Props {
  allPostsData: PostData[];
}

interface PostData {
  id: string;
  date: string;
  title: string;
}

export const Blog: React.FC<Props> = ({ allPostsData }) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map((post) => (
          <li className={utilStyles.listItem} key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={post.date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
};
