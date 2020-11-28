import React from "react"

const Price = ({desc}) => {
    const {id,name,brick,cement,measurement,foamed} = desc
    return (
        <>
            <ul key={id}>
                <li className="colum-big">{name}</li>
                <li className="table-li">{measurement}</li>
                <li className="table-li">{foamed}</li>
                <li className="table-li">{brick}</li>
                <li className="table-li">{cement}</li>
            </ul>
        </>
    )    
}

export default Price

