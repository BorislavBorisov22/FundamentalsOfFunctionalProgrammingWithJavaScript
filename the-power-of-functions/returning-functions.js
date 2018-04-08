const users = [{
    id: 1,
    name: 'somename'
}, {
    id: 2,
    name: 'someothername'
}];

const byId = (id) => {
    return (item) => {
        return item.id === id;
    };
};

const targetUser = users.find(byId(2));
console.log(targetUser);