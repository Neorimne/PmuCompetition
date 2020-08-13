import React from "react";
import Fade from 'react-reveal/Fade';

const Judge = (props) => {
    return (
    <Fade> 
        <div className={props.styles}>
            <img src={props.imgSrc} alt ="JudgePhoto" />
        </div>
    </Fade>
    )
}

export default Judge;