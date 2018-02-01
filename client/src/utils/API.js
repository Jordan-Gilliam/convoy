import axios from "axios";

export default {
  // Saves a convoy to the database
  // getEmail: function(convoyData) {
  //   return axios.get("/api/emails", convoyData);
  // },
  
  sendEmail: function(emailsHere) {
    console.log('running here', emailsHere);
    return axios.post("/api/emails", { to: emailsHere });
  }, 

};


