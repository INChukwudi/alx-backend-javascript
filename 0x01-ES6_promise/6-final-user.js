import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const res = await Promise.allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)]);
  return res.map((result) => ({
    status: result.status,
    value: (result.value !== undefined) ? result.value : `${result.reason}`,
  }));
}
