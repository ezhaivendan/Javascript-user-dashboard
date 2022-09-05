// Scripts

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
}

fetchUserFromAPI()
