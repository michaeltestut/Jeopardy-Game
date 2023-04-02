import React from 'react'
import styled from 'styled-components'

export default function TitleBlock() {
    return (
        <Container>
            <div className='block'>
                <p className='title'>TITLE</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .title{
        width:100%;
        letter-spacing: 0.1rem;
        font-size: 1.25rem;
        color:white;
}
`
