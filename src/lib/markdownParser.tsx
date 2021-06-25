import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getSortedData(directory: string, withContent?: boolean) {
  const fileNames = fs.readdirSync(directory);
  const promises = fileNames.map((fileName) => extractDataFromFile(fileName, directory, withContent));
  const data = await Promise.all(promises);
  // Sort data by date
  return data.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllIds(directory: string) {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: extractId(fileName),
      },
    };
  });
}

export async function getData(id, directory: string) {
  const matterResult = await getMetaData(id, directory);
  const content = await getContent(matterResult);

  return {
    id,
    content,
    ...matterResult.data,
  };
}

async function getContent(matterResult: matter.GrayMatterFile<string>) {
  return matterResult.content;
}

export function getMetaData(id, directory: string) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);
  return matterResult;
}

async function extractDataFromFile(fileName: string, directory: string, withContent?: boolean) {
  const id = extractId(fileName);

  const matterResult = getMetaData(id, directory);
  const content = withContent ? await getContent(matterResult) : '';
  // Combine the data with the id
  const entry = {
    id,
    content,
    date: matterResult.data.date,
    ...matterResult.data,
  };
  return entry;
}

function extractId(fileName: string) {
  // Remove ".md" from file name to get id
  return fileName.replace(/\.md$/, '');
}
