import React from "react";
import styled from "styled-components";
import drums from "../../img/music/drums.jpg";

function MusicInfo() {
  return (
    <MusicInfoStyled>
      <div className="left-content">
        <div className="leftTextContainer">
          <h1>Garifuna Music</h1>
          <p>
          Garifuna music is an ethnic music and dance with African, Arawak, and Kalinago elements, originating with the Afro-Indigenous Garifuna people from Central America and Saint Vincent and the Grenadines. In 2001, Garifuna music, dance, and language were collectively proclaimed as a Masterpiece of the Oral and Intangible Heritage of Humanity by UNESCO.
          </p>
          <br />
          <p>
          The Garifuna culture displays many influences of its African heritage, and this is extremely evident when comparing their music with the indigenous music of the African societies from which their ancestors originated. Much like the music of these areas, the Garifuna style of music relies heavily on call and response patterns. These patterns are less overlapping than many traditional ones found in Africa, but none the less in Belize music the Garifunas leader-chorus organization is very consistent with those of African styles.
          </p>
          <br />
          <p>
          The importance of the drum in Garifuna music is another similarity to their African influence. Garifuna music relies heavily on the drum, and in many instances their music is dictated by it. Often times a particular drum style will call for two drummers (except for sacred music, which usually uses three). Typically, one drummer will play a fixed, consistent pattern. This drummer is usually called the segundo player. Another more intricate part made up of cross-patterns is normally played by the primero player. The drums of the Garifuna are usually made of hardwoods that are uniformly shaped and carved out in the centers.    
          </p>
        </div>
      </div>
      <div className="right-content">
        <img src={drums} className="family" alt="family" />
      </div>
    </MusicInfoStyled>
  );
}

const MusicInfoStyled = styled.div`
padding: 4rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    padding-bottom: 8rem;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      padding-bottom: 1.4rem;
      @media screen and (max-width: 800px){
                font-size: 2.5rem;
            }
    }
    p {
      padding-bottom: 1.4rem;
      line-height: 1.8rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    .family {
      width: 80%;
    }
    
  }
`;

export default MusicInfo;
