import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const returnObj = {
    photo: null,
    user: null,
  };

  try {
    returnObj.photo = await uploadPhoto();
    returnObj.user = await createUser();
  } catch (err) {
    returnObj.photo = null;
    returnObj.user = null;
  }

  return returnObj;
}
