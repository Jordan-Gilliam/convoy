var database = require('../../firebase.js');

database.ref().on("value", function(snapshot) {
   var users = snapshot.val().users;
   console.log(users);
})