import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Background from "../assets/Background.jpeg"
import gyparody from "../assets/fonts/gyparody hv.ttf"

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="front-page center">
                <div>
                    <div className='text'>
                        <h2 className='subtitle'>Welcome to</h2>
                        <h1 className='title'> Jeopardy! </h1>
                    </div>
                    <div className='button'>
                        <button className='play' onClick={() => navigate('/jeopardy')}>Click to Play</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .front-page{
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size:100%;
        height:100vh;
        width:100vw;
        display:flex;
    }
    .background-image{
        height:100vh;
        width:100vw;
    }
    .subtitle{
        color: white;
        text-align: center;
        font-family:'gyparody';
        font-size:3rem;
        text-shadow: 2px 2px black;
        padding-top:50px;
        margin-bottom: -50px;
    }

    .title{
        color: white;
        text-align: center;
        font-family:'gyparody';
        font-size: 10rem;
        text-shadow: 2px 2px black;

    }
    .button{
        text-align:center;
    }
    .play{
        width: 30vh;
        height: 7vh;
        background-color:white;
        border: 1px solid rgba(45,0,125,255);
        border-radius: 10px;
        box-shadow: 2px 2px 2px rgba(45,0,125,255);
        color: rgba(45,0,125,255);
        font-size: 1.5rem;
        font-weight: bold;
        cursor:pointer;
        transition:0.3s ease-in-out;
        &:hover{
            background-color: rgba(128,0,144,255);
            color: white;
        }
        
    }

`
