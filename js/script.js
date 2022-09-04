// Scripts
// Get User starts here

// class loadUser {
//     constructor(users) {
//         this.users = users;
//     }
//     // set category into html select box.
//     loadUserIntoHtml() {
//         console.log('this.users', this.users)
//         let userRows = [];
//         let userRowForm = this.users.map(user => `<div class="user-box">
//             <img src=${user.picture.medium} />
//             <div class="user_name">${user.name.title} ${user.name.first} ${user.name.last}</div>
//             <div class="user_detail">${user.dob.age}, ${user.location.country}</div>
//         </div>`)
    
//         document.getElementById('user_container').innerHTML = userRowForm.join('');
//     }
// }

// let userArray = [];


async function fetchUserFromAPI() {
    let jsonRes = await fetch('https://randomuser.me/api/?results=20');
    let response = await jsonRes.json();
    localStorage.setItem('userArray', JSON.stringify(response));
    let retriveLocalUser = JSON.parse(localStorage.getItem('userArray'))
    console.log('retriveLocalUser', retriveLocalUser);
    let userRowForm = retriveLocalUser.results.map(user => `<div class="user-box">
            <img src=${user.picture.medium} />
            <div class="user_name">${user.name.title} ${user.name.first} ${user.name.last}</div>
            <div class="user_detail">${user.dob.age}, ${user.location.country}</div>
        </div>`)
    
    document.getElementById('user_container').innerHTML = userRowForm.join('');
    // let userArr = JSON.parse(localStorage.getItem("user"));
    // console.log('user from local', userArr)
    //return formuserResponse(response);
}

fetchUserFromAPI()

// function formuserResponse(users) {
//     new loadUser(users.results).loadUserIntoHtml();
// }

// fetchUserFromAPI()
