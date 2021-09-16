import React, { useState } from 'react'
import VerticalBars from './comp/VerticalBars'

const VisualArea = ({No_sample, list_sample, sampleWidth}) => {

    return (
        <>
            <div className="graph-area">
                <hr className="hr-styling"/>
                <div className="visualizing-area">
                    {
                        list_sample.map((height, index) => (
                            <VerticalBars key={"" + index} height={height} sampleWidth={sampleWidth} />
                        ))
                        
                    }
                </div>

            </div>
        </>
    )
}

export default VisualArea
