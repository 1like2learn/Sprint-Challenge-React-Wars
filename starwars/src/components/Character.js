// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const charactersCard = (props) =>{

    const {character} = props;

    return(
        <CharacterDiv>
            <h2>{character.name}</h2>
            <ul>
                <li>Height: {character.height} centimeters</li>
                <li>Mass: {character.mass} kilograms</li>
                <li>Birth Year: {character.mass}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Gender: {character.gender}</li>
            </ul>
        </CharacterDiv>
    );
};
export default charactersCard;

const CharacterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: white;
    width: 40%;
    margin: 4%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 60%;

    h2{
        font-size: 2rem;
        padding: 4% 0 4% 0;
        width: 100%;
        text-align: center;

    }

    ul{
        padding-bottom: 4%;
        align-self: center;
        li{
            padding: 1%;
            width: 100%;
            
        }

    }

`