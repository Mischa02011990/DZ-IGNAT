import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} //кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>

            <button onClick={set} value={'all'}>All</button>
            <button onClick={set} value={'high'}>High</button>
            <button onClick={set} value={'middle'}>Middle</button>
            <button onClick={set} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
