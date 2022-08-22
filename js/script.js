// Scripts
// Get User starts here
class loadUser {
    constructor(users) {
        this.users = users;
    }
    
    loadUserIntoHtml() {
        console.log('this.users', this.users)
        let userRows = [];
        let userRowForm = this.users.map(user => `<div class="user-box">
            <img src=${user.picture.medium} />
            <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
        </div>`)
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
