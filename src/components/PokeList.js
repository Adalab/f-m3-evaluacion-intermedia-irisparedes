import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return(
            <ul className="pokemon__list">PokeList
                {this.props.pokemon.map((item, index) => {
                    return (
                    <li className="cardLi" key={index}>
                        <Pokemon 
                            url={item.url}
                            name={item.name}
                            types={item.types}
                        />
                    </li>
                    );
                })}
            </ul>
        )
    }
}

export default PokeList;