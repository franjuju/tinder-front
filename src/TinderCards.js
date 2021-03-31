import React, {useState, useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card"
import axios from "./axios"

function TinderCards() {
  const [people, setPeople] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/card')
      
      setPeople(req.data);
    }

    fetchData();
  }, []) // --> if [] is empty : When tindercards load, run this piece of code once and not run it again / else : it rerun when the value passed inside is changed

  console.log(people)

  const swiped = (nameToDelete) => {
    console.log(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name)
  }
  return (
    <div className="TinderCards">
      <div className="TinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        onSwipe={() => swiped(person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}>
          <div style={{ backgroundImage: "url(" + person.url + ")"}} className="card">
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
      
    </div>
  )
}

export default TinderCards
