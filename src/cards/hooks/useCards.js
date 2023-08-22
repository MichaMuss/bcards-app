import { useCallback, useState } from "react";
import { createCard, getCards, getMyCards, getCard, updateCard } from "../services/cardApiService";
import { useSnack } from "../../providers/SnackBarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useErrorHandler from "../../hooks/useErrorHandler";

export default function useCards() {

  const [cards, setCards] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {handleGlobalError} = useErrorHandler();
  const navigate = useNavigate();
  const snack = useSnack();

  const filterCards = (text) => {
      if (text===null || text === undefined || text === "" || cards==null)
        return cards;

      return cards.filter( (item) => item.title.includes(text));
  }

  const handleGetCards = useCallback(async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [getCards]);

  const handleGetFavCards = useCallback( async (user) => {

    if (user === null){
      navigate(ROUTES.LOGIN);
      return;
    }

    try {
      setLoading(true);
      const cards = await getCards();
      setLoading(false);
      setCards(cards.filter(card => card.likes.includes(user.favoriteIdentifier)));
      snack("success", "your favorite cards has been loaded!");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  },[]);

  const handleGetMyCards = useCallback( async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All your cards has been loaded!");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, []);

  const handleCreateCard = async (cardData) => {
    try {
      setLoading(true);
      const data = await createCard(cardData);
      setLoading(false);
      navigate(ROUTES.MY_CARDS);
    } catch (err) {
      handleGlobalError(err);
    }
  }

  const handleUpdateCard = async (cardId, cardData) => {
    try {
      setLoading(true);
      const data = await updateCard(cardId, cardData);
      setLoading(false);
      navigate(ROUTES.MY_CARDS);
    } catch (err) {
      setLoading(false);
      handleGlobalError(err);
    }
  }

  const handleGetCard = async (cardId) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCard(cardId);
      setLoading(false);
      return renormalizeCard(data);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }
  
  const renormalizeCard = (card) => {
    return {
      title: card.title,
      subtitle: card.subtitle,
      description: card.description,
      phone: card.phone,
      email: card.email,
      web: card.web,
      url: card.image.url,
      alt: card.image.alt,
      likes: card.likes,
      street: card.address.street,
      city: card.address.city,
      state: card.address.state,
      houseNumber: card.address.houseNumber,
      country: card.address.country,
      zip: card.address.zip,
    };
  }

  return {
    cards,
    setCards,
    filterCards,
    isLoading,
    error,
    handleGetCards,
    handleGetMyCards,
    handleGetFavCards,
    handleCreateCard,
    handleGetCard,
    handleUpdateCard,
  };
}
