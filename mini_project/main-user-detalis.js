// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);
let key2 = 'posts';
let users = JSON.parse(localStorage.getItem('users'));
for (const user of users) {
    let divUser = document.createElement('div');
    divUser.classList.add('divUser', 'display', 'backgroundSilver');
    let divUserId = document.createElement('div');
    divUserId.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'w90');
    divUserId.innerText = `User id -  ${user.user.id}`;
    let divUserName = document.createElement('div');
    divUserName.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'text20', 'w90');
    divUserName.innerText = user.user.name;
    let divUserUsername = document.createElement('div');
    divUserUsername.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'text20', 'w90');
    divUserUsername.innerText = user.user.username;
    let divEmail = document.createElement('div');
    divEmail.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'w90');
    divEmail.innerText = user.user.email;
    let divAddress = document.createElement('div');
    divAddress.classList.add('address', 'display', 'ai', 'column', 'border', 'w60');
    divAddress.innerText = 'Address';
    let divAddressStreet = document.createElement('div');
    divAddressStreet.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w60');
    divAddressStreet.innerText = user.user.address.street;
    let divAddressSuite = document.createElement('div');
    divAddressSuite.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w60');
    divAddressSuite.innerText = user.user.address.suite;
    let divAddressCity = document.createElement('div');
    divAddressCity.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w60');
    divAddressCity.innerText = user.user.address.city;
    let divAddressZipcode = document.createElement('div');
    divAddressZipcode.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w60');
    divAddressZipcode.innerText = user.user.address.zipcode;
    let divAddressGeo = document.createElement('div');
    divAddressGeo.classList.add('geo', 'display', 'ai', 'column', 'border', 'backgroundWhite', 'w60');
    let divGeoLat = document.createElement('div');
    divGeoLat.classList.add('display', 'justify', 'backgroundPlum', 'marginBottom5', 'border', 'w50');
    divGeoLat.innerText = user.user.address.geo.lat;
    let divGeoLng = document.createElement('div');
    divGeoLng.classList.add('display', 'justify', 'backgroundPlum', 'marginBottom5', 'border', 'w50');
    divGeoLng.innerText = user.user.address.geo.lng;
    let divPhone = document.createElement('div');
    divPhone.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'w90');
    divPhone.innerText = user.user.phone;
    let divWebsite = document.createElement('div');
    divWebsite.classList.add('display', 'justify', 'marginBottom10', 'border', 'backgroundWhite', 'w90');
    divWebsite.innerText = user.user.website;
    let divCompany = document.createElement('div');
    divCompany.classList.add('display', 'justify', 'column', 'address', 'ai', 'border', 'w60');
    divCompany.innerText = 'Company';
    let divCompanyName = document.createElement('div');
    divCompanyName.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w90');
    divCompanyName.innerText = user.user.company.name;
    let divCompanyCatchPhrase = document.createElement('div');
    divCompanyCatchPhrase.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w90');
    divCompanyCatchPhrase.innerText = user.user.company.catchPhrase;
    let divCompanyBs = document.createElement('div');
    divCompanyBs.classList.add('display', 'justify', 'marginBottom5', 'border', 'backgroundWhite', 'w90');
    divCompanyBs.innerText = user.user.company.bs;
    let buttonPost = document.createElement('button');
    buttonPost.classList.add('buttonPost', 'display', 'justify', 'w90');
    buttonPost.innerText = 'Post of current user';
    buttonPost.onclick = function (e) {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users/' + user.user.id + '/posts')
            .then(response => response.json())
            .then(posts => {
                let divPosts = document.getElementsByClassName('divPosts');
                if (divPosts.length > 0) {
                    divPosts[0].remove();
                }
                divPosts = document.createElement('div');
                divPosts.classList.add('divPosts', 'display', 'backgroundPlum', 'border');
                for (const post of posts) {
                    let divPost = document.createElement('div');
                    divPost.classList.add('divPost', 'backgroundWhite', 'border');
                    divPost.innerText = 'Post';
                    let divPostTitle = document.createElement('div');
                    divPostTitle.classList.add('postTitle', 'backgroundSilver', 'border');
                    divPostTitle.innerText = post.title;
                    let buttonPostInfo = document.createElement('button');
                    buttonPostInfo.classList.add('buttonPostInfo');
                    buttonPostInfo.innerText = 'Post detail';
                    buttonPostInfo.onclick = function (e) {
                        e.preventDefault();
                        let userPost = JSON.parse(localStorage.getItem('post')) || [];
                        userPost.push({post});
                        localStorage.setItem(key2, JSON.stringify(userPost));
                        document.location.href = 'post-details.html';
                    }
                    divPost.append(divPostTitle, buttonPostInfo);
                    divPosts.appendChild(divPost);
                    divUser.appendChild(divPosts);
                }
            });
    };
    divCompany.append(divCompanyName, divCompanyCatchPhrase, divCompanyBs);
    divAddressGeo.append(divGeoLat, divGeoLng);
    divAddress.append(divAddressStreet, divAddressSuite, divAddressCity, divAddressZipcode, divAddressGeo);
    divUser.append(divUserId, divUserName, divUserUsername, divEmail, divAddress, divPhone, divWebsite,
        divCompany, buttonPost);
    divWrap.appendChild(divUser);
}