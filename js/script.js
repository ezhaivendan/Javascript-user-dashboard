// Scripts
// Get User starts here
class loadUser {
    constructor(users) {
        this.users = users;
    }
    // set category into html select box.
    loadUserIntoHtml() {
        let userRows = [];
        let userRowForm = this.users.map(user => {
            console.log('user', user.gender);
            `<h3>${user.gender}</h3>`
        })
    
        console.log('****',userRowForm);
        //document.getElementById('user_container').innerHTML = userRows.join("");
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