import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import CharacterCard from './components/Character';
import {BASE_URL} from './Constants';

const App = ()=> {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [urlPage, setUrlPage] = useState('');
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() =>{
    // debugger
    axios.get(`${BASE_URL}${urlPage}`)
    .then(response =>{
      console.log(response);
      setCharacters(response.data.results);
    })
    .catch(error =>{
      console.log(error);
    })
  }, []);


  return (
    <AppDiv>
      <h1>Characters</h1>
      <div className= 'characters'>
        {characters.map((item) =>{
          return <CharacterCard key ={item.name} character = {item}/>
        })}
      </div>
      <div className= 'buttons'>
        <button onClick={()=>{
          setUrlPage(`?page=2`)
        }}>Previous</button>
        <button>Next</button>
      </div>
    </AppDiv>
  );
};

export default App;

const AppDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h1{
    text-align: center;
    background-color: white;
    opacity: 65%;
    padding: 5%;
    font-size: 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }

  div.characters{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }

  div.buttons{
    display: flex;
    justify-content: space-evenly;

    button{
      padding: 1%;
      margin: 5%;
      opacity: 65%;

    }

    button:active{
      background-color: white;
    }
  }

`