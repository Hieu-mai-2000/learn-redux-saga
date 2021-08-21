import axiosClient from "../common/axiosClient";
import { API_ENDPOINT } from "../constants";

const url = 'tasks'

export const getAll = ()=>{
      return axiosClient.get(`${API_ENDPOINT}/${url}`)
}