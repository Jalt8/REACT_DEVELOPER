import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card-list">
        {this.props.monsters.map((monster, index) => (
            <Card key={index} monster={monster} index={index}/>
        ))}
      </div>
    );
  }
}

export default CardList;
