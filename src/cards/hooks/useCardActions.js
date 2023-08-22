import { Navigate, Routes, useNavigate } from "react-router-dom";
import { useSnack } from "../../providers/SnackBarProvider";
import { toggleCardlike, deleteCard } from "../services/cardApiService";
import ROUTES from "../../routes/routesModel";
import { useCallback } from "react";
import useErrorHandler from "../../hooks/useErrorHandler";

const useCardActions = (cards, setCards) => {
    
    const snack  = useSnack();
    const navigate = useNavigate();
    const { handleGlobalError } = useErrorHandler();
    const handleDelete = useCallback(async (cardId) => {
        try{
            const card = await deleteCard(cardId);
            snack("success","Card deleted successfully");
            removeCard(card);
        }catch(error){
            handleGlobalError(error);
        }
    },[]);
    const handleShare = (cardId) => {
        
    }
    const handleCall = (cardId) => {
        
        const card = findCardById(cardId);
        
        if(card)
            window.location = `tel:${card.phone}`;
            

    }
    const handleToggleLike = useCallback(async (cardId) => {
        try {
            const card = await toggleCardlike(cardId);    
            snack("success","Card updated successfully");
            replaceCard(card);
        } catch (error) {
            handleGlobalError(error);
        }
    },[]);

    const handleEdit = (cardId) => {

            navigate(`${ROUTES.EDIT_CARD}/${cardId}`)
    }


    const replaceCard = (card) => {
        
        const cardIndex = cards.findIndex((c) => c._id === card._id);

        if (cardIndex < 0){
            snack("warning", "Couldn't find the card in the list");
            return;
        }

        const newCards = [...cards.slice(0, cardIndex), card , ...cards.slice(cardIndex + 1)];

        setCards(newCards);

    }

    const removeCard = (card) => {
        
        const cardIndex = cards.findIndex((c) => c._id === card._id);
        if (cardIndex > 0)
            setCards([...cards.slice(0, cardIndex ), ...cards.slice(cardIndex + 1)]);
        else
            snack('warning','Could not remove the card from the list');

    }

    const findCardById = (cardId) => cards.find((c) => c._id === cardId);
    

    return ({ handleCall, handleToggleLike, handleEdit, handleDelete });

}
export default useCardActions;