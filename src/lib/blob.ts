/**
 *  uploads a file
 *  @todo - function not implemented
 */
export async function upload(file: Blob, key: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("key", key);

  // TODO
  throw new Error("upload() not implemented");

  return await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });
}

/**
 * @returns the route to get a photo
 */
function getImageRoute(key: string): string {
  return `https://cdn.jsdelivr.net/gh/unswdata/static/elixir/${key}`;
}

export function getGithubLink(key: string): string {
  return `https://github.com/unswdata/static/blob/main/elixir/${key}`;
}

// EVENT CPs
export function getEventImageKey(eventId: string, imageId: string): string {
  return `events/${eventId}/${imageId}`;
}

export function getEventImageRoute(eventId: string, imageId: string): string {
  return getImageRoute(getEventImageKey(eventId, imageId));
}

// BLOG IMAGES
export function getBlogImageKey(blogId: string, imageId: string): string {
  return `blogs/${blogId}/${imageId}`;
}

export function getBlogImageRoute(blogId: string, imageId: string): string {
  return getImageRoute(getBlogImageKey(blogId, imageId));
}

// COMPANY LOGO
export function getCompanyImageKey(companyId: string, imageId: string): string {
  return `companies/${companyId}/${imageId}`;
}

export function getCompanyImageRoute(
  companyId: string,
  imageId: string
): string {
  return getImageRoute(getCompanyImageKey(companyId, imageId));
}

// COVER PHOTO
export function getCoverPhotoKey(imageId: string): string {
  return `coverphoto/${imageId}`;
}

export function getCoverPhotoRoute(imageId: string): string {
  return getImageRoute(getCoverPhotoKey(imageId));
}

// USER PROFILE PICTURES
export function getUserProfilePicKey(userId: string, imageId: string): string {
  return `users/${userId}/${imageId}`;
}

export function getUserProfilePicRoute(
  userId: string,
  imageId: string
): string {
  return getImageRoute(getUserProfilePicKey(userId, imageId));
}

// RESOURCE FILES
export function getResourceFileKey(resourceId: string, fileId: string): string {
  return `resources/${resourceId}/${fileId}`;
}

export function getResourceFileRoute(
  resourceId: string,
  fileId: string
): string {
  return getImageRoute(getResourceFileKey(resourceId, fileId));
}
