// Write your Character component here
import React from 'react';
import syled from 'styled-components';

const charactersCard = (props) =>{

    const {character} = props;

    return(
        <div>
            <p>{character}</p>
        </div>
    );
};
export default charactersCard;
