import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainHeader, Navigation, ListHeader } from "./HeaderStyled"
import { goToPilots, goToStarships, goToHome } from '../../Routes/Coordinator'

export const Header = () => {

    const history = useHistory()

    return (
        <MainHeader>
            <h1>Star Wars catalog</h1>
            <nav>
                <Navigation>
                    <ListHeader onClick={() => goToHome(history)}>Home</ListHeader>
                    <ListHeader onClick={() => goToStarships(history)}>Starships</ListHeader>
                    <ListHeader onClick={() => goToPilots(history)}>Pilots</ListHeader>
                </Navigation>
            </nav>
        </MainHeader>
    )
}