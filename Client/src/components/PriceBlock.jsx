import React from 'react'
import styled from 'styled-components'

export default function PriceBlock() {
  return (
    <Container>
      <div className='block'>
        <p className='price'>$PRICE</p>
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
`

