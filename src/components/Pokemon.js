import React from 'react';


class Pokemon extends React.Component {
    render() {
        const {url, name, types} = this.props;
        return (
            <div className="card">{url}</div>
            <h2 className="title">{name}</h2>
            <ol className="Powers">
                {types.map((type, indexType) => {
                  return (
                  <li className="power" key={indexType}>{types}</li>
                  

                )}
                )}
              </ol>
        );
    }
}
export default Pokemon;
