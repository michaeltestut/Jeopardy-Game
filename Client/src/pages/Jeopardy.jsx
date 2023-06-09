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
        setCategory0(categories[0])
        setCategory1(categories[1])
        setCategory2(categories[2])
        setCategory3(categories[3])
        setCategory4(categories[4])
        setCategory5(categories[5])
        
    }
    useEffect(() => {
            fetch()
    },[]);
    return (
        <Container>
            <table className='gameboard'>
                <thead>
                    <tr>
                        <th><TitleBlock category={category0.title} /></th>
                        <th><TitleBlock category={category1.title} /></th>
                        <th><TitleBlock category={category2.title} /></th>
                        <th><TitleBlock category={category3.title} /></th>
                        <th><TitleBlock category={category4.title} /></th>
                        <th><TitleBlock category={category5.title} /></th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td><PriceBlock price="200" category_id={category0.id} clueNum="0" /></td>
                        <td><PriceBlock price="200" category_id={category1.id} clueNum="0"/></td>
                        <td><PriceBlock price="200" category_id={category2.id} clueNum="0" /></td>
                        <td><PriceBlock price="200" category_id={category3.id} clueNum="0" /></td>
                        <td><PriceBlock price="200" category_id={category4.id} clueNum="0" /></td>
                        <td><PriceBlock price="200" category_id={category5.id} clueNum="0" /></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="400" category_id={category0.id} clueNum="1"/></td>
                        <td><PriceBlock price="400" category_id={category1.id} clueNum="1"/></td>
                        <td><PriceBlock price="400" category_id={category2.id} clueNum="1"/></td>
                        <td><PriceBlock price="400" category_id={category3.id} clueNum="1"/></td>
                        <td><PriceBlock price="400" category_id={category4.id} clueNum="1"/></td>
                        <td><PriceBlock price="400" category_id={category5.id} clueNum="1"/></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="600" category_id={category0.id} clueNum="2" /></td>
                        <td><PriceBlock price="600" category_id={category1.id} clueNum="2"/></td>
                        <td><PriceBlock price="600" category_id={category2.id} clueNum="2"/></td>
                        <td><PriceBlock price="600" category_id={category3.id} clueNum="2"/></td>
                        <td><PriceBlock price="600" category_id={category4.id} clueNum="2"/></td>
                        <td><PriceBlock price="600" category_id={category5.id} clueNum="2"/></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="800" category_id={category0.id} clueNum="3"/></td>
                        <td><PriceBlock price="800" category_id={category1.id} clueNum="3"/></td>
                        <td><PriceBlock price="800" category_id={category2.id} clueNum="3"/></td>
                        <td><PriceBlock price="800" category_id={category3.id} clueNum="3"/></td>
                        <td><PriceBlock price="800" category_id={category4.id} clueNum="3"/></td>
                        <td><PriceBlock price="800" category_id={category5.id} clueNum="3"/></td>
                    </tr>
                    <tr>
                        <td><PriceBlock price="1000" category_id={category0.id} clueNum="4"/></td>
                        <td><PriceBlock price="1000" category_id={category1.id} clueNum="4"/></td>
                        <td><PriceBlock price="1000" category_id={category2.id} clueNum="4"/></td>
                        <td><PriceBlock price="1000" category_id={category3.id} clueNum="4"/></td>
                        <td><PriceBlock price="1000" category_id={category4.id} clueNum="4"/></td>
                        <td><PriceBlock price="1000" category_id={category5.id} clueNum="4"/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3>Score:</h3>
            </div>
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
        flex-direction:column;
        align-items:start;
        justify-content:center;
        h3{
            color:white;
        }
        .gameboard{
            margin-top:1rem;
            border:2px solid black;
            background-color:white;
        }
`
