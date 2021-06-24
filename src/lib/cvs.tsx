import path from 'path';
import { getSortedData } from './markdownParser';

const postsDirectory = path.join(process.cwd(), 'cv');

export function getSortedCVData() {
  const data = getSortedData(postsDirectory, true);
  return data;
}
