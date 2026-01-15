import React, {useState} from "react";

function About() {
  const [teams, setTeam] = useState([]);

  const getTeam = () => {
    axios.get('employees').then(response => setTeam(response.data))
  }

    return <div>
      <button onClick={getTeam}>Show Team</button>

      {teams.map((team) => (
        <li key={team.name}>{team.name} - {team.role}</li>
      ))}
    </div>;
}

export default About;
