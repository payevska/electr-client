import React from "react"

const Price = ({desc}) => {
    const {id,name,brick,cement,measurement,foamed} = desc
    return (
        <>
            <ul key={id}>
                <li className="colum-big">{name}</li>
                <li>{measurement}</li>
                <li>{foamed}</li>
                <li>{brick}</li>
                <li>{cement}</li>
            </ul>
        </>
    )    
}

export default Price

