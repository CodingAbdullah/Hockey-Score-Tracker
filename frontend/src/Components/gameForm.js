import { Component } from 'react';
import './gameForm.css';

class GameForm extends Component  {

    constructor(props){
        super(props);

        this.state = {
            seasonListings: ['2007-2008', '2008-2009', '2009-2010', '2010-2011', 
            '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020'],
           
            team : ['ANA - Anaheim Ducks', 'ARI - Arizona Coyotes', 'BOS - Boston Bruins', 'BUF - Buffalo Sabres', 'CGY - Calgary Flames', 'CAR - Carolina Hurricanes',
            'CBJ - Columbus Blue Jackets', 'CHI - Chicago Blackhawks', 'COL - Colorado Avalanche', 'DAL - Dallas Stars', 'DET - Detroit Red Wings', 'EDM - Edmonton Oilers',
            'FLO - Florida Panthers', 'LAK - Los Angeles Kings', 'MIN - Minnesota Wild','MTL - Montreal', 'NJD - New Jersey Devils', 'NSH - Nashville Predators',
            'NYI - New York Islanders', 'NYR - New York Rangers', 'OTT - Ottawa Senators', 'PHI - Philadelphia Flyers', 'PIT - Pittsburgh Penguins',
            'SJS - San Jose Sharks', 'STL - St. Louis Blues', 'TBL - Tampa Bay Lightning', 'TOR - Toronto Maple Leafs', 'VAN - Vancouver Canucks',
            'VGK - Vegas Golden Knights', 'WPJ - Winnipeg Jets', 'WSH - Washington Capitals'],

            season: '',
            seasonDate: '',
            awayTeam: '',
            homeTeam: ''
        }
        
    }

    formHandler = () => {
        
    }
    
    render () {
        const optionMap = (this.state.seasonListings.map(season => {return (<option onClick={() => {this.setState({season: season})}} value={season}>{season}</option>)}));
        const teamMap = (this.state.team.map(team => {return (<option value={team.split("-")[0].trim()}>{team}</option>)}));

        return (
            <div className="gameComponent">
                <form className="gameForm">
                    <label class="formLabel">Date</label>
                    <input type="date" id="start" name="trip-start"
                            min="2007-01-01" max="2020-12-31" onChange={(e) => {this.setState({seasonDate: e.target.value})}} /><br />
                    <label class="formLabel">Season Listing</label>
                    <select id="seasonSelecter" onChange={(e) => {this.setState({season: e.target.value})}}>
                        {optionMap}
                    </select><br />
                    <label class="formLabel">Away Team</label>
                    <select id="awayTeamSelector" onChange={(e) => {this.setState({awayTeam: e.target.value})}}>
                        {teamMap}
                    </select><br />
                    <label class="formLabel">Home Team</label>
                    <select id="homeTeamSelector" onChange={(e) => {this.setState({homeTeam: e.target.value})}}>
                        {teamMap}
                    </select><br />
                    <input class='btn btn-success' type='submit' name='submit' value='View Results' />
                </form>
            </div>
        )
    }
}

export default GameForm;
