import React from 'react'
import Enemy from '../components/enemy'
import Field from '../components/field'
import Player from '../components/player'
import Battle from '../components/Battle'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            hasVirus: false,
            canCount: false,
            dificult: '',
            turn: null,
        }
    }


    getVirus = () => {
        this.setState({hasVirus: true})
    }




    render(){

        return(
            <>
                <div>
                    <input onChange={e => this.setState({dificult: e.target.value})} type='radio' name='dificult' id='easy' value='easy'></input>
                    <label for='easy'>Fácil</label>

                    <input onChange={e => this.setState({dificult: e.target.value})} type='radio' name='dificult' id='medium' value='medium'></input>
                    <label for='medium'>Médio</label>

                    <input onChange={e => this.setState({dificult: e.target.value})} type='radio' name='dificult' id='hard' value='hard'></input>
                    <label for='hard'>Difícil</label>
                </div>
                <button onClick={this.getVirus}>Verificar Vírus</button>
            
                {
                    this.state.hasVirus ?
                    <>
                        <Battle hasVirus={this.state.hasVirus} dificult={this.state.dificult} />
                    </>
                    : null
                }
            
            </>
        )
    }
}

export default App