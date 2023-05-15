import React from 'react'
import styled from 'styled-components'


export default function PriceBlock(props) {

  const handleClick = () => {
    console.log("clicked")
    console.log(props.category_id)
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

