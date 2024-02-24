$(document).ready(function(){
//when we start to type we need AJAx request to catch what we are typing
$('#searchUser').on('keyup',function(e){
let userName = e.target.value; //get the value written
$.ajax({
    url:'https://api.github.com/users/'+ userName,
    headers: {
        'Authorization': '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' +btoa('f530a5eb462293ef7315'+':'+'bb95e78058203bdb1dd09c380099d78d77ce46bb')
        // Authenticator token along with client id and secret key for unlimited api hits
    }
    
}).done(function(user){ // JS promise
    console.log(user);
    $('#profile').html(`
    <div class="card border-primary mb-3" style="max-width: 100rem;">
    <div class="card-header"><h3>${user.name}</h3></div>
    <div class="card-body">
      <div class="row">
      <div class="col-md-3">
        <img class="img-thumbnail avatar" src="${user.avatar_url}">
        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="a">Public Repos: ${user.public_repos}</span>
        <span class="b">Public Gists: ${user.public_gists}</span>
        <span class="c">Followers: ${user.followers}</span>
        <span class="d">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  <h3 class="page-header">Latest Repos</h3>
  <div id="repos"></div>
    `
        );
});
})
}

);

//btn btn-pimary btn-block creates a block with a color shade, _blank makes it open in a new page.
//then get some bootstrap labels