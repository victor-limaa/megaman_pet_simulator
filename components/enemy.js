import React from 'react'
import Image from 'next/image'
import style from '../styles/Enemy.module.sass'


export default class Enemy extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hp: 10,
            hpLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            strenght: this.props.strenght
        }
    }

    loseHp = hit => {
        let newHp = this.state.hp - hit
        this.setState({
            hp: newHp
        })

        if(newHp <= 0) {
            this.setState({hpLength: []})
            alert('você Ganhou!')
        } else {
            let hpbar = []
            for(let i = 0; i <= newHp; i++) {
                hpbar.push(i)
            }
            console.log(hpbar)
            this.setState({hpLength: hpbar})
        }
    }

    attack = () => {
        this.props.attack(this.state.strenght)
    }

    render() {

        if(this.props.hasHitted){
            alert('inimigo atingido')
            this.loseHp(this.props.hitPoint)
            this.props.finishHit()
        }
        
        return (
            <div className={style.box}>
                <Image src='/met.png' alt='met' width={100} height={100} />

                <div className={style.bar}>
                    {
                        this.state.hpLength.map(hp => {
                            return (
                                <p className={style.hp}></p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}