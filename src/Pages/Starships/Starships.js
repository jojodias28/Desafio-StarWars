import React, { useContext } from 'react'
import Pagination from '@mui/material/Pagination'
import { BodyContainer, Image, Card, MainCard, Text, Pages, Paragraph } from './StarStyled'
import { GlobalStateContext } from '../../context/GlobalStateContext'

const Starships = () => {

    const { listShipsData, onChangePage } = useContext(GlobalStateContext)

    return (
        <BodyContainer>

            <Text>Starships</Text>

            <MainCard>
                {listShipsData?.results.map((list) => {
                    return (

                        <Card>

                            <Image src="/img/starship.png" />
                            <Paragraph>
                                <p key={list.id}> {list.name}</p>
                            </Paragraph>
                        </Card>

                    )
                })}
            </MainCard>

            <Pages>
                <Pagination count={4} color='primary' onChange={onChangePage} />
            </Pages>


        </BodyContainer>
    )
}

export default Starships