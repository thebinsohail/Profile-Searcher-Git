function find() {
  user=document.getElementById('username').value;
  repository="Total Public Repositories : ";
  followers="Total Followers : ";
  about="About\n"
    fetch("https://api.github.com/users/"+user)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        document.getElementById('user-image').src = data.avatar_url;
        document.getElementById('name').innerHTML=data.name;
        document.getElementById('bio').innerHTML=data.bio;
        document.getElementById('repos').innerHTML=repository+data.public_repos;
        document.getElementById('followers').innerHTML=followers+data.followers;
        document.getElementById('visithead').innerHTML="Visit Profile Below";
        document.getElementById('link').innerHTML="https://github.com/"+user;
      });

    
   
}

