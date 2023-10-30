import axios from "axios";

const API_URL = 'https://652abda34791d884f1fd5090.mockapi.io/Webihouse'

//Fungsi untuk get data API
export const fetchWebihouseData = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error){
        throw error
    }
}

//Fungsi post data API
export const postWebihouseData = async (data) => {
    try {
        const response = await axios.post(API_URL, data)
        return response.data
    } catch (error){
        throw error
    }
}

//Fungsi Delete data API
export const deleteWebihouseData = async (id) =>{
    try{
        const response = await axios.delete(`${API_URL}/${id}`)
        return response.data
    } catch (error){
        throw error
    }
}

export const updateWebihouseData = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data)
        return response.data
    } catch (error){
        throw error
    }
}

// export const countDisewakanData = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       const data = response.data;
  
//       // Filter dan hitung data dengan status "Disewakan"
//       const disewakanCount = data.filter((item) => item.status === 'Disewakan').length;
//       return disewakanCount;
//     } catch (error) {
//       throw error;
//     }
//   };
  
  export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}