import React from "react";
import lashesOriginal from "../../assets/img/lashes/lashesOriginal.jpg";
import lashes244 from "../../assets/img/lashes/244x300.jpg";
import lashes833 from "../../assets/img/lashes/833x1024.jpg";
import lashes600 from "../../assets/img/lashes/600x738.jpg";


const Lashes = () => {
    return (
        <picture>
                <source media="(max-width: 244px)" srcSet = {lashes244} />
                <source media="(max-width: 600px)" srcSet = {lashes600} />
                <source media="(max-width: 833px)" srcSet = {lashes833} />
                <img src={lashesOriginal} alt="Lashes" />
        </picture>
    )
}

export default Lashes;