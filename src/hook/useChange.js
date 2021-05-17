import {useState} from 'react'
import { mensajes } from '../utils/mensajes'

export const useChange = (iniciador) => {
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    const [cambiar, setCambiar] = useState(iniciador)

    const cambiarMensaje = () => {
        let aleatorio = random (0, mensajes.length -1);
        setCambiar(aleatorio);
    }
    return{
        cambiar,
        cambiarMensaje
    }
}

