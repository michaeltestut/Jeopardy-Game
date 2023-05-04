import React from 'react'
import TitleBlock from '../components/TitleBlock'
import styled from 'styled-components';
import PriceBlock from '../components/PriceBlock';
import Background from '../assets/Background.jpeg';
import { fetchCategories } from '../services/JeopardyService';
import { useEffect, useState } from 'react';


export default function Jeopardy() {
    const [category0, setCategory0] = useState("");
    const [category1, setCategory1] = useState("");
    const [category2, setCategory2] = useState("");
    const [category3, setCategory3] = useState("");
    const [category4, setCategory4] = useState("");
    const [category5, setCategory5] = useState("");
    
    const fetch = async () => {
        let categories = await fetchCategories();
        console.log(categories)
        setCategory0(categories[0].title)
        setCategory1(categories[1].title)
        setCategory2(categories[2].title)
        setCategory3(categories[3].title)
        setCategory4(categories[4].title)
        setCategory5(categories[5].title)
        
    }
    useEffect(() => {
            fetch()
    }, []);
    return (
        <Container>
            <table className='gameboard'>
                <thead>
                    <tr>
                        <th><TitleBlock category={category0} /></th>
                        <th><TitleBlock category={category1} /></th>
                        <th><TitleBlock category={category2} /></th>
                        <th><TitleBlock category={category3} /></th>
                        <th><TitleBlock category={category4} /></th>
                        <th><TitleBlock category={category5} /></th>

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
