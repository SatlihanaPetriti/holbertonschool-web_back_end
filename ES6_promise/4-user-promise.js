/*eslint-disable*/
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

const myPromise1 = new Promise((resolve, reject) => {
        return resolve("I am first promise");
    }, 1000);
