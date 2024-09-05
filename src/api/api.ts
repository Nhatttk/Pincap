import axios from "axios";

export function fetchUser(){
  axios.get('http://127.0.0.1:8000/photo/get_all_photo_api/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
}