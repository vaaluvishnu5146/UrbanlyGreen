import { Product, Services } from "../interfaces/data.interface";
import axios from "axios";
import { LoginResponse } from "../interfaces/response.interface";
const apiClient = axios.create({
    baseURL: 'https://755c75d2.eu-gb.apigw.appdomain.cloud/api',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'X-IBM-Client-Id': '363d7f47-2650-4d0c-8a0b-42e3c0e7b516'
    }
  });
export const getListings = async (user_id: string) => {
  try {
    let user: any = localStorage.getItem('user');
    user = user ?  JSON.parse(user) : {};
    console.log(user)
    const response = await apiClient.get('/get-user-products?user_id='+(user ? user.user_id : ""));
    console.log(response.data.data)
    console.log({
      status: response.status,
      error: false,
      data: Array<Product>(response.data.data)
  })
  let data: Product[] = response.data.data
    return {
        status: response.status,
        error: false,
        data: data
    }
  } catch (err) {
    if (err && err.response) {
      console.log(JSON.stringify(err))
      let data: Product[] = []
      return {
          status: Number(err.response.status),
          error: true,
          errorMsg: String(err.response.data),
          data: data
      }
    }
    
    throw err;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await apiClient.get('/get-all-products');
    console.log(response.data.data)
    console.log({
      status: response.status,
      error: false,
      data: Array<Product>(response.data.data)
  })
  let data: Product[] = response.data.data
    return {
        status: response.status,
        error: false,
        data: data
    }
  } catch (err) {
    if (err && err.response) {
      console.log(JSON.stringify(err))
      let data: Product[] = []
      return {
          status: Number(err.response.status),
          error: true,
          errorMsg: String(err.response.data),
          data: data
      }
    }
    
    throw err;
  }
};


export const getAllServices = async () => {
  try {
  const response = await apiClient.get('/get-all-services');
  let data: Services[] = response.data.data
    return {
        status: response.status,
        error: false,
        data: data
    }
  } catch (err) {
    if (err && err.response) {
      console.log(JSON.stringify(err))
      let data: Services[] = []
      return {
          status: Number(err.response.status),
          error: true,
          errorMsg: String(err.response.data),
          data: data
      }
    }
    
    throw err;
  }
};

export const loginUser = async (values: any) => {
  try {
  const response = await apiClient.post('/login-user', values);
  let data: LoginResponse = response.data
    return data
  } catch (err) {
    if (err && err.response) {
      console.log(JSON.stringify(err))
      let data: LoginResponse = {error: "some error occurred"}
      return data
    } 
    throw err;
  }
};