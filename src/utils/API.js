import axios from "axios";
export default {
    getTable: function() {
      return axios.get("https://randomuser.me/api/?results=50");
    }
  };