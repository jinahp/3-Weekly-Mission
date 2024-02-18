export const BASE_URL = 'https://bootcamp-api.codeit.kr';

export const SAMPLE_FOLDER_URL = `${BASE_URL}/api/sample/folder`;
export const USER_URL = `${BASE_URL}/api/users/1`;

export const FOLDER_DATA_LIST = `${BASE_URL}/api/users/1/folders`;

export const folderUrl = (userId, folderId) =>
  `${BASE_URL}/api/users/${userId}/folders/${folderId}`;

export const linksUrl = (folderId) => {
  const url = new URL(`${BASE_URL}/api/users/1/links`);
  if (folderId) {
    url.searchParams.append('folderId', folderId);
  }
  return url.toString();
};

export const sharedUrl = (origin, folderId) => {
  return `${origin}/shared?user=1&folder=${folderId}`;
};
