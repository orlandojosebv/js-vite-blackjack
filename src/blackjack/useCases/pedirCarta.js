
/**
 * @param {Array<String>} deck Es un arreglo de String de cartas
 * @returns  {String} Retorna la carta pedida del deck
 */

export const pedirCarta = (deck) => {
  if (deck.length === 0 || !deck) {
    throw new Error("No hay cartas en el deck");
  }
  const carta = deck.pop();
  return carta;
};
