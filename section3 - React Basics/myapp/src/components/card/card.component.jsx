import { Component } from "react";

class Card extends Component {
    render(){
        return (
            <div className="card-container">
            <h1 key={this.props.index}>{this.props.monster.name}</h1>
            <img src={`https://robohash.org/${this.props.index}?set=set2&size=180x180`} alt={`moster ${this.props.monster.name}`} />
          </div>
        )
    }
}

export default Card;