// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)


let wrap = document.getElementById('wrap');
let key = 'users';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
            for (const user of users) {
                let divUserWrap = document.createElement('div');
                divUserWrap.classList.add('divUserWrap', 'hAuto', 'display', 'justify', 'align', 'backgroundPlum');
                let divUser = document.createElement('div');
                divUser.classList.add('divUser', 'display', 'align');
                let divUserId = document.createElement('div');
                divUserId.classList.add('divUserId', 'border1', 'backgroundWhite', 'w40', 'marginY5', 'text');
                divUserId.innerText = `User id - ${user.id}`;
                let divUserName = document.createElement('div');
                divUserName.classList.add('divUserName', 'text', 'border1', 'backgroundWhite', 'w90', 'marginY5');
                divUserName.innerText = `${user.name}`;
                let buttonUserInfo = document.createElement('button');
                buttonUserInfo.classList.add('backgroundPlum', 'w80', 'marginY5');
                buttonUserInfo.innerText = 'User information';
                buttonUserInfo.onclick = function (e) {
                    e.preventDefault();
                    let userInfo = JSON.parse(localStorage.getItem('user')) || [];
                    userInfo.push({user});
                    localStorage.setItem(key, JSON.stringify(userInfo));
                    document.location.href = 'user-details.html';
                }
                divUser.append(divUserId, divUserName, buttonUserInfo);
                divUserWrap.appendChild(divUser);
                wrap.appendChild(divUserWrap);
            }
        }
    );