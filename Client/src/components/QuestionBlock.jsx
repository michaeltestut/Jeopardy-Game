import React from 'react';


export default function QuestionBlock() {
  return (
    <Container>
      <div className='block'>
        <p className='question'>{props.category}</p>
      </div>
    </Container>
  )
}
