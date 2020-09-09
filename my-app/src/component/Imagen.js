import React from 'react';
const Imagen = (props)=>{
    const {previewURL} = props.imagen;
    return(
        <div>
            <div>
                <img src={previewURL}></img>
            </div>
        </div>
    )
}
export default Imagen;