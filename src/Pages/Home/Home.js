import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPilots, goToStarships } from '../../Routes/Coordinator'
import { Container, Buttons, BodyContainer, ButtonsHome } from './HomeStyled'




const Home = () => {

    const history = useHistory();

    return (
        <BodyContainer>
            <Container>
                <Buttons>
                    <ButtonsHome onClick={() => goToStarships(history)}> Starships </ButtonsHome>
                    <ButtonsHome onClick={() => goToPilots(history)}> Pilots </ButtonsHome>
                </Buttons>
            </Container>

        </BodyContainer>
    )
}

export default Home