import React from 'react'
import Player from './player'
import Enemy from './enemy'
import Field from './field'
import Image from 'next/image'

export default class Battle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            enemyHitted: false,
            playerHitted: false,
            turn: 0,
        }
    }


    hitField = hit => {
       hit && this.state.turn === 0 ? this.setState({enemyHitted: true}) : alert('Errou Miseravi!')
       hit && this.state.turn === 1 ? this.setState({playerHitted: true}) : alert('Errou Miseravi!')
    }

    finishHit = () => {
        this.state.turn === 0 ?
            this.setState({enemyHitted: false})
        : this.setState({playerHitted: false})
        alert('fim de turno')
    }

    render() {

        return (
            <>
                <Field hasVirus={this.props.hasVirus}
                    dificult={this.props.dificult} hit={hit => this.hitField(hit)} />

                <div className='fightBox'>
                    <Player hasHitted={this.state.playerHitted} hitPoint={3} finishHit={this.finishHit} />
                    <Image src='/vs.jpg' alt='met' width={100} height={100} />
                    <Enemy hasHitted={this.state.enemyHitted} hitPoint={3} finishHit={this.finishHit} />
                </div>
            </>
        )
    }
}