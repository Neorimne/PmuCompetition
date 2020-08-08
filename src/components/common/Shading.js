import React from "react";
import shadingpixel from "../../assets/img/shadingPixel/shadingpixel.jpg";
import shading300 from "../../assets/img/shadingPixel/300x200.jpg";
import shading600 from "../../assets/img/shadingPixel/600x399.jpg";
import shading768 from "../../assets/img/shadingPixel/768x511.jpg";
import shading1024 from "../../assets/img/shadingPixel/1024x681.jpg";

const Shading = () => {
    return (
        <picture>
                <source media="(max-width: 300px)" srcSet = {shading300} />
                <source media="(max-width: 600px)" srcSet = {shading600} />
                <source media="(max-width: 768px)" srcSet = {shading768} />
                <source media="(max-width: 1024px)" srcSet = {shading1024} />
                <img src={shadingpixel} alt="Lashes" />
        </picture>
    )
}

export default Shading;