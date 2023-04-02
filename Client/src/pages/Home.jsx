import React from 'react'
import styled from 'styled-components'
import Background from "../assets/Background.jpeg"

export default function Home() {
  return (
      <Container>
          <div className="front-page">  
              <img src={Background} alt="background image" className="background-image" />
              <h2 className='subtitle'>Welcome to</h2>
          </div>
      </Container>
  )
}

const Container = styled.div`
    .front-page{
        position:relative;
        display:flex;
    }
    .background-image{
        height:100vh;
        width:100vw;
    }
    .subtitle{
        color: white;
        text-align: center;
        position: absolute;
        left:0px;
        right: 0px;
        top: 100px;

    }

`
