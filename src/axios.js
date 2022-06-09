//axios Set
import axios from "axios"

export const axiosC = axios.create({
  headers: {
    accessToken: localStorage.getItem("accessToken"),
  },
})
