import path from 'path';
import { getAllIds, getData, getSortedData } from './markdownParser';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
const data = getSortedData(postsDirectory);
return data;
}

export function getAllPostIds() {
 const ids = getAllIds(postsDirectory);
 return ids;
}

export async function getPostData(id) {
 const data = getData(id,postsDirectory);
 return data;
}
