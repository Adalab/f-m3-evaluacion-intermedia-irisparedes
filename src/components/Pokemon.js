import React from 'react';

class Pokemon extends React.Component {
    render() {
        const {url, name, types} = this.props;
        return (
            <div className="card">
              <div className="card__image">
                <img src={url} alt={name}/>
            </div>
              <h2 className="title">{name}</h2>
              <ul className="powers">
                  {types.map((type, indexType) => {
                    return (
                    <li className="power" key={indexType}>{type}</li>
                  )})}
              </ul>
            </div>     
        );
    }
}              
                
export default Pokemon;
