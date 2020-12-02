import React from 'react'
import style from '../styles/Field.module.css'



class Field extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            field: this.props.dificult === 'hard' ? [1, 2, 3, 4, 5, 6, 7, 8, 9] :
                    this.props.dificult === 'medium' ? [1, 2, 3, 4] :
                    this.props.dificult === 'easy' ? [1, 2] : [],
            
            virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 :
                            this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 :
                            this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
            
            chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0,
            
        }
    }

    hit = pos => {
        if(this.state.virusPosition === pos) {
            alert('acertou')
            this.props.hit(true)
            this.setState({
                virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 :
                    this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 :
                    this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,
                chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0,})

        } else {
            alert('errou')
            this.props.hit(false)
            if(this.state.chance > 0)
                this.setState({chance: this.state.chance - 1})
            if(this.state.chance === 0) {
                this.setState({virusPosition: this.props.dificult === 'easy' ? Math.floor(Math.random() * (3 - 1)) + 1 :
                    this.props.dificult === 'medium' ? Math.floor(Math.random() * (5 - 1)) + 1 :
                    this.props.dificult === 'hard' ? Math.floor(Math.random() * (10 - 1)) + 1 : null,})
                this.setState({chance: this.props.dificult === 'easy' ? 0 : this.props.dificult === 'medium' ? 1 : this.props.dificult === 'hard' ? 2 : 0,})
            }
        }
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {

        return (
            <div className={this.props.dificult === 'hard' ? style.field3 : style.field2}>
                {this.state.field.map((f, i) => {
                    return(
                        <p key={i} className={style.area}
                            onClick={() => this.hit(f)}
                        >
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default Field