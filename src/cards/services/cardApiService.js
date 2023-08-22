import axios from "axios";

const apiUrl = "http://localhost:8181";

const normalizeCard = (cardData) => ({
  title: cardData.title,
  subtitle: cardData.subtitle,
  description: cardData.description,
  phone: cardData.phone,
  email: cardData.email,
  web: cardData.web,
  image: {
    url: cardData.url,
    alt: cardData.alt
  },
  address:{
      street: cardData.street,
      houseNumber: 
      cardData.houseNumber,
      city:cardData.city,
      country:cardData.country,
      state:cardData.state,
      zip:cardData.zip
    },
    user_id: cardData.user_id,
});

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
};


export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
};

export const createCard = async (cardData) => {
  try {

    const normalizedCard = normalizeCard(cardData);

    const {data} = await axios.post(`${apiUrl}/cards`, normalizedCard);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
};

export const updateCard = async (cardId, cardData) => {
  try {

    const normalizedCard = normalizeCard(cardData);

    const {data} = await axios.put(`${apiUrl}/cards/${cardId}`, normalizedCard);
    return data;
  } catch ({response}) {
    return Promise.reject(response?.data);
  }
};

export const toggleCardlike = async (cardId) => {
  try{
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;

  } catch ({response}) {
    return Promise.reject(response?.data);
  }

};

export const getCard = async (cardId) => {
  try{
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
    return data;
  }  
  catch({response}){
    return Promise.reject(response?.data);
  }

};

export const deleteCard = async (cardId) => {
  try{
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  }  
  catch({response}){
    return Promise.reject(response?.data);
  }

};
