import { crearCarta, pedirCarta,valorCarta} from "./index.js";

/**
 *
 * @param {Number} puntosMinimos Puntos minimos que la pc necesita para ganar
 * @param {HTMLElement} puntosHTML elemento Html donde se mostrarán los puntos
 * @param {Array<String>} deck
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!deck) throw new Error("El deck es necesario");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCarta(carta);
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
