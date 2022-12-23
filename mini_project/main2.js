// const container = document.createComment('div');
// document.body.append(container);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
      for (let user of users){
          let div = document.createElement('div');
          let paraghraph = document.createElement('p');
          paraghraph.innerText = `${user.id} - ${user.name}`;
          let link = document.createElement('a');
          link.href = `mini_project/user-details.html = ${user.id}`;
          let button = document.createElement('button');
          button.innerText = `Info about ${user.name}`;
          link.appendChild(button);
          link.appendChild(paraghraph, link);
          document.body.appendChild(div);

        }

})