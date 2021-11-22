import React from 'react'
import styled from 'styled-components'

function SmallHeading({title, identifier}) {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

const SmallHeadingStyled = styled.div`
    h3{
        
    }
`
export default SmallHeading
