let retriveLocalUser;
document.getElementById("user_details").classList.add("is-hidden");
document.getElementById("user_details_overlay").classList.add("is-hidden");
async function fetchUserFromAPI() {
    if(!retriveLocalUser){
    let jsonRes = await fetch('https://randomuser.me/api/?results=20');
    let response = await jsonRes.json();
    localStorage.setItem('userArray', JSON.stringify(response));
    retriveLocalUser = JSON.parse(localStorage.getItem('userArray'))
    }
    console.log('retriveLocalUser', retriveLocalUser);
    let userRowForm = retriveLocalUser.results.map(user => `<div class="user-box">
            <img title="${user.name.title} ${user.name.first} ${user.name.last}" src=${user.picture.large} />
            <div class="user_name" onclick='getUserDetails("${user.picture.large}")'>${user.name.title} ${user.name.first} ${user.name.last}</div>
            <div class="user_detail">${user.dob.age}, ${user.location.country}</div>
        </div>`)
    
    document.getElementById('user_container').innerHTML = userRowForm.join('');
}

fetchUserFromAPI()

function getUserDetails(userImg) {
    console.log("user", userImg)
    document.getElementById("user_details").classList.remove("is-hidden");
    document.getElementById("user_details_overlay").classList.remove("is-hidden");
    let filterUser = retriveLocalUser.results.filter(user => user.picture.large === userImg);
    let userDet = filterUser.map(userDet => 
        `<div class="user-img">
            <img src=${userDet.picture.large} />
        </div>`
    );

    document.getElementById('user_details').innerHTML = userDet.join('');
}
