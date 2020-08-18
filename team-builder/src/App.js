import React, {useState} from 'react';
import './App.css';
import MemberForm from './components/member-form';
import Team from './components/team-member'
import teamData from './components/team-data'



function App() {

    const [teamMembers, setTeamMembers] = useState(teamData)
    const newTeam = (teams) => {
    const newMember = {
        name: teams.name,
        email: teams.email,
        role: teams.role
  }

  setTeamMembers([...teamMembers,newMember])}

    return (
        <div>
            <div className="header">
                <h1> Meet the Team</h1>
            </div>

            <div>
                <Team members={teamMembers}/>
            </div>
            <div>
                <h1>Join the Team</h1>
                <MemberForm newTeam={newTeam}/>
            </div>
        </div>
    );
}

export default App;