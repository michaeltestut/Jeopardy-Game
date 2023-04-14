import React from 'react'
import TitleBlock from '../components/TitleBlock'
import styled from 'styled-components';
import PriceBlock from '../components/PriceBlock';
import Background from '../assets/Background.jpeg';
import { fetchCategories } from '../services/JeopardyService';


export default function Jeopardy() {
    const fetch = () => {
        
        const categories = fetchCategories();
        console.log(categories)
    }
    return (
        <Container>
            <table className='gameboard'>
                <thead>
                    <tr>
                        <th><TitleBlock category="title1" /></th>
                        <th><TitleBlock category="title2" /></th>
                        <th><TitleBlock category="title3" /></th>
                        <th><TitleBlock category="title4" /></th>
                        <th><TitleBlock category="title5" /></th>
                        <th><TitleBlock category="title6" /></th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td><PriceBlock price="200" /></td>
                        <td><PriceBlock price="200" /></td>
                        <td><PriceBlock price="200" /></td>
                        <td><PriceBlock price="200" /></td>
                        <td><PriceBlock price="200" /></td>
                        <td><PriceBlock price="200" /></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="400" /></td>
                        <td><PriceBlock price="400" /></td>
                        <td><PriceBlock price="400" /></td>
                        <td><PriceBlock price="400" /></td>
                        <td><PriceBlock price="400" /></td>
                        <td><PriceBlock price="400" /></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="600" /></td>
                        <td><PriceBlock price="600" /></td>
                        <td><PriceBlock price="600" /></td>
                        <td><PriceBlock price="600" /></td>
                        <td><PriceBlock price="600" /></td>
                        <td><PriceBlock price="600" /></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="800" /></td>
                        <td><PriceBlock price="800" /></td>
                        <td><PriceBlock price="800" /></td>
                        <td><PriceBlock price="800" /></td>
                        <td><PriceBlock price="800" /></td>
                        <td><PriceBlock price="800" /></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="1000" /></td>
                        <td><PriceBlock price="1000" /></td>
                        <td><PriceBlock price="1000" /></td>
                        <td><PriceBlock price="1000" /></td>
                        <td><PriceBlock price="1000" /></td>
                        <td><PriceBlock price="1000" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={fetch}>Fetch Categories</button>
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
