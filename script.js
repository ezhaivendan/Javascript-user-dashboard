// Scripts
class loadUser {
    constructor(users) {
        this.users = users;
    }
    // set category into html select box.
    loadUserIntoHtml() {
        console.log('users', this.users)
    }
}

async function fetchUserFromAPI() {
    let jsonRes = await fetch('https://randomuser.me/api/?results=20');
    let response = await jsonRes.json();
    return formuserResponse(response);
}

function formuserResponse(users) {
    new loadUser(users.results).loadUserIntoHtml();
}

fetchUserFromAPI()
