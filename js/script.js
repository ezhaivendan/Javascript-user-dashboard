// Scripts
// Get User starts here
class loadUser {
    constructor(users) {
        this.users = users;
    }
    // set category into html select box.
    loadUserIntoHtml() {
        console.log('this.users', this.users)
        let userRows = [];
        let userRowForm = this.users.map(user => `<h3>${user.gender}</h3>`)
    
        console.log('****',userRowForm);
        document.getElementById('user_container').innerHTML = userRowForm.join('');
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
