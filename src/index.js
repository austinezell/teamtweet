

let authorizeGuests =() =>{

  if(localStorage["firebase:session::twitteam"]){
    return;
  }

  let ref = new Firebase("https://twitteam.firebaseio.com");
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      alert("Authenticated successfully with payload:", authData);
    }
  });
}

authorizeGuests()
