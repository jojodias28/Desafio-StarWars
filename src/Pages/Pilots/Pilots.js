import React, { useContext } from 'react'
import Pagination from '@mui/material/Pagination'
import { Image, MainCard, Card, BodyContainer, Paragraph, Text, Pages } from './PilotStyled'
import { GlobalStateContext } from '../../context/GlobalStateContext'


const Pilots = () => {

    const { onChangePage, pilots } = useContext(GlobalStateContext)

    return (
        <BodyContainer>
            <Text>Pilots</Text>

            <MainCard>
                {pilots?.map((item) => {
                    return (
                        <Card>
                            <Image src="/img/logo2.png" alt="" />
                            <Paragraph>
                                <p>{item.name}</p>
                            </Paragraph>
                        </Card>
                    )
                })}
            </MainCard>


            <Pages>
                <Pagination count={4} onChange={onChangePage} />
            </Pages>

        </BodyContainer>
    )
}
export default Pilots