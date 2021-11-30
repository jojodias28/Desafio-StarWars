import React, { useState, useEffect } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL } from '../constants/Url'
import useRequestData from '../Hooks/UseRequestData'
import axios from 'axios'


export const GlobalState = (props) => {

    const [numberPage, setNumberPage] = useState(1)
    const [listShipsData] = useRequestData(`${BASE_URL}/starships//?page=${numberPage}`)
    const [listPilotsData] = useRequestData(`${BASE_URL}/people/?page=${numberPage}`)



    const onChangePage = (event, value) => {
        setNumberPage(value)
    }


    const pilots = listPilotsData?.results.filter((item) => item.starships.length > 0)

    const state = {
        onChangePage,
        listShipsData,
        pilots
    }


    return (
        <GlobalStateContext.Provider value={state}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

