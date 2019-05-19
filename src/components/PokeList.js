import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
    render() {
        return(
            <ul className="pokemon__list">
                {this.props.pokemon.map((item) => {
                    return (
                    <li className="cardLi" key={item.id}>
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
PokeList.propTypes = {
    pokemon: PropTypes.arrayOf(PropTypes.object)
}
export default PokeList;