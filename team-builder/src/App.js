import React, {useState} from 'react';
import Members from "./components/Members";
import MemberForm from "./components/OurMemberForm"
import './App.css';

function App() {
  const [team, setTeam]= useState([
    { name: "Julie", role: "Team Lead", email: "juile@lambda.com" },
    {name: "Josh", role: "Student", email: "josh@lambda.come"},
    { name: "Ben", role: "Student", email: "ben@lambda.com" },
  ]);

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <MemberForm setTeam={setTeam} />
      {team.map(person => (
        <Members key={person.name} person={person} />
      ))}
    </div>
  );
}

export default App;
