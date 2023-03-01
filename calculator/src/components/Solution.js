import React, { useContext } from "react";


const Solution = ({solution}) => {
    

    return (
        <div>
            <div> Solución: </div>
            <div className = "solution">{solution}</div>

        </div>
        
    )
}

export default Solution