import { GitRepository } from "./git-repository";
const utilStyles = require("../../styles/utils.module.css");
const listStyles = require("./git-repository-list.module.css");

interface Repositories {
  repositories: Repository[];
}

interface Repository {
  name: string;
  // TODO changed because of git api format. need to sort out destructuring in git.tsx
  html_url: string;
}

export const GitRepositoryList: React.FC<Repositories> = ({ repositories }) => {
  return (
    <>
      <h2>My git repositories</h2>
      <div className={listStyles.scroller}>
        <ul className={utilStyles.list}>
          {repositories.map((repo, pos) => (
            <div className={listStyles.item} key={pos}>
              <li className={utilStyles.listItem}>
                <GitRepository name={repo.name} url={repo.html_url} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
