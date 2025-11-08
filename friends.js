const USER_COUNT = 50000;
let usersA = [];
let usersB = [];
const createUser = (id) => ({id: `user_${id}`, name: `User ${id}`})
for(let i = 0; i < USER_COUNT; i++){
    usersA.push(createUser(i));
    usersB.push(createUser(i + 25000))
}
const commonFriendsFast = (usersA, usersB) => {
    const numbFriends = new Set(usersA.map(userA => userA.id))
    const commonFriends= []
    usersB.forEach((userB) => {
        if(numbFriends.has(userB.id)){
            commonFriends.push(usersA)
        }
    })
    return {counts: commonFriends.length}
}
console.log(commonFriendsFast(usersA, usersB));