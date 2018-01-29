import axios from "axios";

export default {
  // Saves a convoy to the database
  saveConvoy: function(convoyData) {
    return axios.post("/api/emails", convoyData);
  }
};

