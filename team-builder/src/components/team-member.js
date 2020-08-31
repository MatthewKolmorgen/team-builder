import React from 'react'
import teamData from './team-data'

const Team = props => {
    return (
        <div>
            {props.members.map(props => (
                <div>
                    <h2>Name: {props.name}</h2>
                    <h3>Position: {props.role}</h3>
                    <h3>Email: {props.email}</h3>
                </div>
            ))}
        </div>
    )
}


export default Team