// Dependencies & Packages Import
import axios from "axios";

// Backend Link (Do Not Modify)
let LinkRequest = "http://192.168.1.62:3000/";

export default async function requestPost(linkParam, content) {
  return await axios
    .post(`${LinkRequest}${linkParam}`, content)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
