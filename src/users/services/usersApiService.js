import axios from "axios";

const apiUrl = "http://localhost:8181/users";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/login`, user);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
};

export const signup = async (details) => {

  try {
    const { data } = await axios.post(`${apiUrl}`, details);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};



export const getUsers = async (details) => {

  try {
    const { data } = await axios.get(`${apiUrl}`, details);
    return data;
  } catch ({response}) {
    return Promise.reject(response);
  }

};

export const getUser = async (id) => {

  try {
    const { data } = await axios.get(`${apiUrl}/${id}`);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};

export const updateUser = async (userId, details) => {

  try {
    const { data } = await axios.put(`${apiUrl}/${userId}`, details);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};
export const updatePassword = async (userId, password) => {

  try {
    const { data } = await axios.put(`${apiUrl}/password/${userId}`, password);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};


export const getProfile = async () => {

  try {
    const { data } = await axios.get(`${apiUrl}/profile`);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};

export const updateBusinessStatus = async (id) => {
  try {
    const {data} = await axios.patch(`${apiUrl}/${id}`);
    return data;  
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
  
};

export const toggleLockStatus = async (id) => {
  try {
    const {data} = await axios.patch(`${apiUrl}/locker/${id}`);
    return data;  
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
  
};
