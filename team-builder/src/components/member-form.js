import React, {useState} from 'react'

const MemberForm = (props) => {
    const [team, setTeam] = useState({name: props.name, email: '', role: ''});

    const onChange = (evt) => {
        console.log('team onChanges', evt.target.value)

        const newTeamObj = {...team, [evt.target.name]: evt.target.value}
        console.log('new team obj', newTeamObj)
        setTeam(newTeamObj)
        console.log(team)
    }

    const submitNewMemeber = evt => {
        evt.preventDefault()
        props.newTeam(team)
    }

    return (
        <form onSubmit= {submitNewMemeber}>
            <label htmlFor='name'>Name</label>
                <input type='text' 
                placeholder='Enter Name' 
                name='name' 
                id='name' 
                value={team.name} 
                onChange={onChange} 
                />
            <label htmlFor='email' >Email</label>
                <input type='email' 
                placeholder='Email' 
                name='email' 
                id='email' 
                value={team.email}  
                onChange={onChange} 
                />
            <label htmlFor='role'>Role</label>
                <input type='text' 
                placeholder='Enter Role' 
                name='role' 
                id='role' 
                value={team.role}  
                onChange={onChange} 
                />
            <button type = 'submit'>Add Member</button>
        </form>
    )
}


export default MemberForm


