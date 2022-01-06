export const ADD_COLLECTION = "ADD_COLLECTION";
export const DELETE_COLLECTION = "DELETE_COLLECTION";

export function addCard(card) {
  return {
    type: ADD_COLLECTION,
    payload: card,
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_COLLECTION,
    payload: cardId,
  };
}
