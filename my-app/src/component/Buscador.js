import React,{Component} from 'react';
class Buscador extends Component{
    busquedaRef = React.createRef();
    obtenerDatos = (e)=>{
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }
    render(){
        return(
            <form className="buscador" onSubmit={this.obtenerDatos}>
                <input ref={this.busquedaRef} className="buscador__textbox" type="text" placeholder="Ingresa la imagen a buscar"></input>
                <button type="submit" lassName="buscador__btn">Buscar</button>
            </form>
        );
    }
}
export default Buscador;
