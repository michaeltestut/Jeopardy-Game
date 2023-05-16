import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getClues } from '../services/JeopardyService'

export default function PriceBlock(props) {

  const handleClick = async () => {
    console.log("clicked")
    console.log(props.category_id)
    let clues = await getClues(props.category_id)
    let clue = clues[props.clueNum];
    console.log(clue)
  }
  return (
    <Container>
      <div className='block' onClick={handleClick}>
          <p className='price'>${props.price}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .price{
    color:gold;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
  }
  button{
    background-color: rgba(0,0,0,0);
    width: 100%;
    height: 100%;
  }
`

