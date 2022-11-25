import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { teamList, seasonListings } from '../../Utils/Constants';
import './gameForm.css';

const GameForm = () => {
    // React 18 constants, no class components
    const [season, updateSeason] = useState('');
    const [seasonType, updateSeasonType] = useState('regular');
    const [seasonDate, updateSeasonDate] = useState('');
    const [awayTeam, updateAwayTeam] = useState('');
    const [homeTeam, updateHomeTeam] = useState('');

    const [result, updateResult] = useState({
        information: null
    });

    const navigate = useNavigate(); // React-router added here

    const optionMap = ( seasonListings.map( season => { return ( <option onClick={ () => { this.setState({ season: season })}} value={ season }>{ season }</option> )}));
    const teamMap = ( teamList.map( team => { return ( <option value={ team.split("-")[0].trim() }>{ team }</option> )}));

    const formHandler = () => {
        // Once form is submitted make API call
        let sD = seasonDate.split("-")[0] + seasonDate.split("-")[1] + seasonDate.split("-")[2];
        
        const options = {
            method: 'POST',
            body: JSON.stringify({ season, seasonType, sD, awayTeam, homeTeam }),
            headers: {
                'content-type': 'application/json'
            }
        }
            
        // Node server will make call to API to fetch and return data
        axios.post("http://localhost:5050/form", options)
        .then(response => {
            if (response.status === 200) {
                updateResult((prevState) => {
                    return {
                        ...prevState,
                        information: response.data
                    }
                });
                localStorage.setItem('result', result);
            }
            else {
                updateResult((prevState) => {
                    return {
                        ...prevState,
                        information: null
                    }
                });
            }
        })
    }
        if (result.information !== null) {
            navigate("/gameSheet");
        }
        else {
            return (
                <div className="gameComponent">
                    <form className="gameForm" onSubmit={formHandler}>
                        <h1 className='gameSelectionTitle'>Game Selection</h1>
                        <label className="formLabel">Date</label>
                        <input className='formComponent' type="date" name="gameDate"
                                min="2007-01-01" max="2020-12-31" onChange={ (e) => { updateSeasonDate(e.target.value) }} /><br />
                        <label className="formLabel">Season Listing</label>
                        <select name="season" className='formComponent' onChange={ (e) => { updateSeason(e.target.value) }}>
                            {optionMap}
                        </select><br />
                        <label className="formLabel">Season Type</label>
                        <select name="seasonType" className='formComponent' onChange={(e) => { updateSeasonType(e.target.value) }}>
                            <option value="regular">Regular</option>
                            <option value="playoff">Playoffs</option>
                        </select><br />
                        <label className="formLabel">Away Team</label>
                        <select name="awayTeam" className='formComponent' onChange={(e) => { updateAwayTeam(e.target.value) }}>
                            {teamMap}
                        </select><br />
                        <label className="formLabel">Home Team</label>
                        <select name="homeTeam" className='formComponent' onChange={(e) => { updateHomeTeam(e.target.value) }}>
                            {teamMap}
                        </select><br />
                        <input className='btn btn-success formComponent' type='submit' name='submit' value='View Results' />
                    </form>
                </div>
            )
        }
}

export default GameForm;