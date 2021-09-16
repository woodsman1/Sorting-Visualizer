import React from 'react'

const VerticalBars = ({height, sampleWidth}) => {

    const coustom_style = {
        height : ""+ height+"vh",
        width :""+sampleWidth + "%",
        backgroundColor:"#6495ED",
    }


    return (
        <>
            <div className="vertical-bars" style={coustom_style}>
            </div>
        </>
    )
}

export default VerticalBars
