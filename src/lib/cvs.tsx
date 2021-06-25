import path from 'path';
import { getSortedData } from './markdownParser';

const cvsDirectory = path.join(process.cwd(), 'cv');

export function getSortedCVData() {
  const data = getSortedData(cvsDirectory, true);
  return data;
}
