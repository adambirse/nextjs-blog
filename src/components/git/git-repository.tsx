import Link from "next/link";

interface GitRepositoryProps {
  name: string;
  url: string;
}

export const GitRepository: React.FC<GitRepositoryProps> = ({ name, url }) => {
  return (
    <Link href={url}>
      <a target="_blank">{name}</a>
    </Link>
  );
};
