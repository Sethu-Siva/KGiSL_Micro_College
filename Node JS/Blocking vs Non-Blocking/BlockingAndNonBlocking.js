const getUserInfo = require('./userInfo');
console.log(getUserInfo);

// const userOne = getUserInfo(1);
// console.log(userOne);
// const userTwo = getUserInfo(2);
// console.log(userTwo);
// const sum = 1 + 3;
// console.log(sum);

getUserInfo(1, (user) => {
    console.log(user);
});

getUserInfo(2, (user) => {
    console.log(user);
});

const sum = 1 + 3;
console.log(sum);