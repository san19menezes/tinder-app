import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";

export default function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = usseState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  switch (action) {
    case "ADD_TO_LIKED_USER":
      break;
    case "ADD_TO_DISLIKED_USER":
      break;
    case "ADD_TO_SUPERLIKED_USER":
      break;
    default:
      return people;
  }
  return (
    <div className="app">
      <Header />
      {people[1] ? (
        <Person
          key={person[1].id}
          person={people[1]}
          modifySufercialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUsersImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
}
