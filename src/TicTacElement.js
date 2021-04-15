import React from 'react'

const TicTacElement = (props) => {
    const thisPosition = props.position
    return(
    <td className="border square align-middle text-uppercase"
    onClick={()=> props.handleChangeTable(thisPosition)}>{props.elem}</td>
    )
}


export default TicTacElement