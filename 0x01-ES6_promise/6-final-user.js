import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const results = await Promise.allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)])
  return results;
}
