import React,{Component} from 'react';
import './stylesheets/main.css';
import Buscador from './component/Buscador';
import Resultado from './component/Resultado';
class App extends Component{

    state = {
        termino : '',
        imagenes : []
    }
    consultarApi = () =>{
        const url = `https://pixabay.com/api/?key=18243761-bf1922d214d7a4a0d0f893e9f&q=${this.state.termino}`;
        console.log(url);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => this.setState({imagenes:resultado.hits}))
    }
    datosBusqueda = (termino) =>{
        console.log(termino);
        this.setState({
            termino
        },()=>{
            this.consultarApi();
        })
    }
    render(){
        return(
            <div className="container">
                <header className="header">
                    <div className="header__left">
                        <div className="header__logo">
                            <img className="header__img" alt="Logo">
                            </img>
                            <p className="header__link">loreminsup</p>
                        </div>
                    </div>
                    <div className="header__rigth">
                        <nav className="header__list">
                                <div className="header__item">
                                    <p className="hedaer__link">item-1</p>
                                </div>
                                
                                <div className="header__item">
                                    <p className="hedaer__link">item-1</p>
                                </div>

                                <div className="header__item">
                                        <p className="hedaer__link">item-1</p>
                                </div>

                                <div className="header__item">
                                        <p className="hedaer__link">item-1</p>
                                </div>

                                <div className="header__item">
                                        <p className="hedaer__link">item-1</p>
                                </div>

                                <div className="header__item">
                                        <p className="hedaer__link">item-1</p>
                                </div>
                        </nav>
                    </div>
                </header>
                <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
                <Resultado imagenes={this.state.imagenes}></Resultado>
            </div>
        );
    }
}
export default App;
