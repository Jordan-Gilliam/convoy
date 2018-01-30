import axios from "axios";

export default {
  // Saves a convoy to the database
  // getEmail: function(convoyData) {
  //   return axios.get("/api/emails", convoyData);
  // },
  
  postEmail: function() {
      return axios.post("/api/emails");
  }
};

