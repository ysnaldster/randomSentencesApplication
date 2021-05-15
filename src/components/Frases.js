import React from 'react'
import { useChange } from '../hook/useChange'
import { mensajes } from '../utils/mensajes'
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image } from 'react-bootstrap';
import '../styles/frases.css'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


const StyledMainContainer = styled(Container)`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let inicio = random(1, 10);
function Frases() {

    // Numeros aleatorios 
    const { cambiar, cambiarMensaje } = useChange(inicio);
    return (
        <React.Fragment>
            <StyledMainContainer fluid style={{ background: `${mensajes[cambiar].color}`}}>
                <main id='quote-box' className='frases-main-container '>
                    <div id='text' style={{ color: `${mensajes[cambiar].color}`}}>
                        <a style={{ marginRight: '15px' }}>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: `${mensajes[cambiar].color}` }} />
                        </a>
                        {mensajes[cambiar].mensaje};
                    </div>
                    <div id='author' className='autor-container' style={{ color: `${mensajes[cambiar].color}` }}>
                        {mensajes[cambiar].autor}
                    </div>
                    <div className='interaccion-container'>
                        <div className='interaccion-twitter-container'>
                            <a style={{ background: `${mensajes[cambiar].color}`, borderRadius: '5px' }} href={`https://twitter.com/intent/tweet/?text="${mensajes[cambiar].mensaje}${mensajes[cambiar].autor}"&hashtags=quotes`} target='_blank' id='tweet-quote'>
                                <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
                            </a>
                            <a style={{ background: `${mensajes[cambiar].color}`, borderRadius: '5px' }} href={`https://api.whatsapp.com/send?phone=573148208464&text=${mensajes[cambiar].mensaje}${mensajes[cambiar].autor}`} target='_blank' id='whatsapp-quote' className = 'ms-1'>
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white' }} />
                            </a>
                        </div>
                        <button onClick={cambiarMensaje} style={{ background: `${mensajes[cambiar].color}`, color: 'white', padding: '10px', borderRadius: '5px', border: '0px' }} id = 'new-quote'>Nueva Frase</button>
                        <div>
                        </div>
                    </div>
                </main>
            </StyledMainContainer>
        </React.Fragment>
    )
}

export default Frases
