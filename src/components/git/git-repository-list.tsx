import React from 'react';
import { Accordion } from '../accordion/accordion';
import { GitRepository } from './git-repository';
const utilStyles = require('../../styles/utils.module.scss');
const listStyles = require('./git-repository-list.module.scss');

interface Repositories {
  repositories: Repository[];
}

interface Repository {
  name: string;
  url: string;
}

export const GitRepositoryList: React.FC<Repositories> = ({ repositories }) => {
  return (
    <>
      <Accordion title={'Repositories'} children={getContent(repositories)}></Accordion>
    </>
  );
};

function getContent(repositories): React.ReactNode {
  return (
    <>
      <div className={listStyles.scroller}>
        <ul className={utilStyles.list}>
          {repositories.map((repo, pos) => (
            <div className={listStyles.item} key={pos}>
              <li className={utilStyles.listItem}>
                <GitRepository name={repo.name} url={repo.url} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
