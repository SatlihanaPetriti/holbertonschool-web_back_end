/*eslint-disable*/
import asyncUploadUser from './100-await';

const run = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

run();
