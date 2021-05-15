import {useState} from 'react'


export const useChange = (iniciador) => {
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    const [cambiar, setCambiar] = useState(iniciador)

    const cambiarMensaje = () => {
        let aleatorio = random (1,2);
        console.log(aleatorio);
        setCambiar(cambiar + aleatorio);
    }
    return{
        cambiar,
        cambiarMensaje
    }
}

