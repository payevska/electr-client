import React from "react"
import PropTypes from "prop-types"
const Price = ({ desc }) => {
    return (
        <>
            {
                desc.map((item)=>{
                    return (
                        <ul key={item.id}>
                            <li className="colum-big">{item.name}</li>
                            <li>{item.measurement}</li>
                            <li>{(item.brick) ? "-" : (item.price)}</li>
                            <li>{(item.panel) ? "-" : (item.price)}</li>
                        </ul>
                    )
                })
            }  
        </>
    )    
}

/* Price.propTypes = {
    name: PropTypes.string.isRequired
} */

export default Price


/* <li>{item.brick}</li> */
                        /* <li>{item.panel}</li> */

                        /* {desc.map((item)=>(
                            <li>{(item.brick === true) ? "Да" : "Нет"}</li>
                            ))}  */                       