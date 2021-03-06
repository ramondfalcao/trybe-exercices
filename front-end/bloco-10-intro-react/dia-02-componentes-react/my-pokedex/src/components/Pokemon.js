import PropTypes from 'prop-types';
import React from 'react';
    

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image} = this.props.pokemonData;
        return (
            <section className='card'>
                <h2>{name}</h2>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image} alt=''></img>
            </section>
        );
    }
}

Pokemon.propTypes = {
    pokemonData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })
}

export default Pokemon;