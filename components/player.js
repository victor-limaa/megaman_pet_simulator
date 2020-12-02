import React from 'react'
import Image from 'next/image'
import style from '../styles/Player.module.sass'


export default class Player extends React.Component {

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
            alert('você perdeu!')
        } else {
            this.setState({hpLength: []})
            for (let i = 1; i > newHp; i++) {
                this.state.hpLength.push(i)
            }
        }
    }

    attack = () => {
        this.props.attack(this.state.strenght)
    }


    render() {

        return (
            <div className={style.box}>
                <Image src='/hero.jpg' alt='hero' width={100} height={100} />

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