import axios from "axios";

export default {
  // Saves a convoy to the database
  getEmail: function(convoyData) {
    return axios.get("/api/emails", convoyData);
  },
  
  postEmail: function(data) {
      return axios.post("api/emails", data);
  }
};

