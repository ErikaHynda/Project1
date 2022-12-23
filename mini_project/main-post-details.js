let divWrap = document.createElement('div');
divWrap.classList.add('wrap', 'display', 'justify');
let divPost = document.createElement('div');
divPost.classList.add('divPost', 'display');
let posts = JSON.parse(localStorage.getItem('posts'));
for (const post of posts) {
    let postUserId = document.createElement('div');
    postUserId.classList.add('display', 'justify', 'w80', 'border', 'text', 'marginY5');
    postUserId.innerText = `User id - ${post.post.userId}`;
    let postId = document.createElement('div');
    postId.classList.add('display', 'justify', 'w80', 'border', 'text', 'marginY5');
    postId.innerText = `Post id - ${post.post.id}`;
    let postTitle = document.createElement('div');
    postTitle.classList.add('postTitle', 'w80', 'border', 'text', 'marginY5', 'backgroundPlum');
    postTitle.innerText = post.post.title;
    let postBody = document.createElement('div');
    postBody.classList.add('display', 'justify', 'w80', 'border', 'text', 'marginY5');
    postBody.innerText = post.post.body;
    let buttonComments = document.createElement('button');
    buttonComments.classList.add('w80', 'backgroundPlum', 'marginY5');
    buttonComments.innerText = 'All comments';
    buttonComments.onclick=function (e) {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.post.id + '/comments')
            .then(response => response.json())
            .then(comments=>{
                let commentsWrap = document.getElementsByClassName('commentsWrap');
                if (commentsWrap.length > 0) {
                    commentsWrap[0].remove();
                }
                commentsWrap = document.createElement('div');
                commentsWrap.classList.add('comments','commentsWrap', 'display', 'w80', 'backgroundPlum', 'border');
                for (const comment of comments) {
                    let divComment = document.createElement('div');
                    divComment.classList.add('divComment', 'w50', 'border');
                    let divCommentPostId = document.createElement('div');
                    divCommentPostId.classList.add('postId', 'backgroundSilver', 'border', 'text', 'margin2');
                    divCommentPostId.innerText = `Post id - ${comment.postId}`;
                    let divCommentId = document.createElement('div');
                    divCommentId.classList.add('commentId', 'backgroundSilver', 'border', 'text', 'margin2');
                    divCommentId.innerText = `Comment id - ${comment.id}`;
                    let divCommentName = document.createElement('div');
                    divCommentName.classList.add('commentName', 'backgroundSilver', 'commentName', 'border', 'text',
                        'margin2');
                    divCommentName.innerText = comment.name;
                    let divCommentEmail = document.createElement('div');
                    divCommentEmail.classList.add('commentEmail', 'backgroundSilver', 'border', 'text', 'margin2');
                    divCommentEmail.innerText = comment.email;
                    let divCommentBody = document.createElement('div');
                    divCommentBody.classList.add('commentBody', 'backgroundSilver', 'commentBody', 'border', 'text',
                        'margin2');
                    divCommentBody.innerText = comment.body;
                    divComment.append(divCommentPostId, divCommentId, divCommentName, divCommentEmail, divCommentBody);
                    commentsWrap.appendChild(divComment);
                    divPost.appendChild(commentsWrap);
                }
            })
    }
    divPost.append(postUserId, postId, postTitle, postBody, buttonComments);
}
divWrap.appendChild(divPost);
document.body.appendChild(divWrap);