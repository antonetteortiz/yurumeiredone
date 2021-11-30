import React from 'react'
import styled from 'styled-components'
function FillerContainer() {
    return (
        <FillerContainerStyled>
            <div className="container"></div>
        </FillerContainerStyled>
    )
}
const FillerContainerStyled = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("./assets/phrasebackground.png");
`;

export default FillerContainer
