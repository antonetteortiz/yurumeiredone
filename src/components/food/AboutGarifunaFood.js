import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";

function AboutGarifunaFood() {
  return (
    <AboutGarifunaFoodStyled>
      <InnerLayout>
        <div className="aboutContainer">
          <h1 className="heading">Garifuna Food</h1>
          <p>
            Arawak cooking combined with African influences, come together as a
            mouth-watering delicacy that is Garifuna food. Garifuna food is
            unique, flavorful, spicy, and savory with staples such as plantains,
            coconut, cassava, fish, and bananas. The foods are very labor
            intensive and used to be cooked over an open fire hearth. Though
            stoves save time, most of the Garifuna families still prefer to cook
            their food over the fire hearth because of the unique taste it adds
            to the meals.
          </p>
          <br />
          <p>
            The colors of the Garifuna flag reflect the importance of cassava to
            the Garifuna people, as the yellow stripe represents the color of
            cassava bread (“ereba” in the Garifuna language). Cassava is not
            only made into flatbread, but also into sweet deserts such as
            cassava pudding (also known as plastic cake due to its rubbery
            consistency), and sweetened drinks like sahou. It is also sometimes
            included in stews.
          </p>
          <p></p>
        </div>
      </InnerLayout>
    </AboutGarifunaFoodStyled>
  );
}

const AboutGarifunaFoodStyled = styled.div``;

export default AboutGarifunaFood;
