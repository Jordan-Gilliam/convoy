import axios from "axios";

export default {
  // Saves a convoy to the database
  // getEmail: function(convoyData) {
  //   return axios.get("/api/emails", convoyData);
  // },
  
  postEmail: function(emailsHere) {
    // console.log('running here', emailsHere);
    return axios.post("/api/emails", { to: emailsHere })
    .catch(function(err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    });
  },
  
   
};




