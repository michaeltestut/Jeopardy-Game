import React from 'react'
import TitleBlock from '../components/TitleBlock'
import styled from 'styled-components';
import PriceBlock from '../components/PriceBlock';
import Background from '../assets/Background.jpeg'

export default function Jeopardy() {
    return (
        <Container>
            <table className='gameboard'>
                <tr>
                    <th><TitleBlock /></th>
                    <th><TitleBlock /></th>
                    <th><TitleBlock /></th>
                    <th><TitleBlock /></th>
                    <th><TitleBlock /></th>
                    <th><TitleBlock /></th>
                    
                </tr>
                <tr>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                </tr>
                <tr>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                </tr>
                <tr>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                </tr>
                <tr>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                </tr>
                <tr>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                    <td><PriceBlock /></td>
                </tr>


            </table>
        </Container>
    )
}

const Container = styled.div`
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size:100%;   
        width:100vw;
        height:100vh;
        display:flex;
        align-items:start;
        justify-content:center;
    .gameboard{
        margin-top:1rem;
        border:2px solid black;
        background-color:white;
    }
`
