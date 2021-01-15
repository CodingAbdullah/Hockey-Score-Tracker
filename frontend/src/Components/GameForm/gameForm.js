import { Component } from 'react';
import './gameForm.css';
import gameAction from '../../redux/action/gameAction';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class GameForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            season: '',
            seasonType: 'regular',
            seasonDate: '',
            awayTeam: '',
            homeTeam: ''
        }
    }

    formHandler = () => {
        const season = this.state.season;
        const seasonDate = this.state.seasonDate.split("-")[0] + this.state.seasonDate.split("-")[1] + this.state.seasonDate.split("-")[2];
        const seasonType = this.state.seasonType;
        const awayTeam = this.state.awayTeam;
        const homeTeam = this.state.homeTeam;

        console.log(season + " " + seasonDate + " " + seasonType + " " + awayTeam + " " + homeTeam);
        
       // useDispatch(gameAction(this.state.season, this.state.seasonDate, this.state.seasonType, this.state.awayTeam, this.state.homeTeam));        this.props.gameAction(season, seasonDate, seasonType, awayTeam, homeTeam);
       this.props.gameAction(season, seasonDate, seasonType, awayTeam, homeTeam);
    }

        /*
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            }
        }
        
        // Node server will make call to API to fetch and return data

        fetch("http://localhost:5050/form", options)
        .then(response => response.json())
        .then(res => {
            this.state.setState({data: res.references})
        })
        .catch(err => {
            console.log(err);
        })
        */
    
    render() {
        const teamList = ['ANA - Anaheim Ducks', 'ARI - Arizona Coyotes', 'BOS - Boston Bruins', 'BUF - Buffalo Sabres', 'CGY - Calgary Flames', 'CAR - Carolina Hurricanes',
        'CBJ - Columbus Blue Jackets', 'CHI - Chicago Blackhawks', 'COL - Colorado Avalanche', 'DAL - Dallas Stars', 'DET - Detroit Red Wings', 'EDM - Edmonton Oilers',
        'FLO - Florida Panthers', 'LAK - Los Angeles Kings', 'MIN - Minnesota Wild', 'MTL - Montreal', 'NJD - New Jersey Devils', 'NSH - Nashville Predators',
        'NYI - New York Islanders', 'NYR - New York Rangers', 'OTT - Ottawa Senators', 'PHI - Philadelphia Flyers', 'PIT - Pittsburgh Penguins',
        'SJS - San Jose Sharks', 'STL - St. Louis Blues', 'TBL - Tampa Bay Lightning', 'TOR - Toronto Maple Leafs', 'VAN - Vancouver Canucks',
        'VGK - Vegas Golden Knights', 'WPJ - Winnipeg Jets', 'WSH - Washington Capitals'];

        const seasonListings = ['2007-2008', '2008-2009', '2009-2010', '2010-2011', 
        '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020'];

        const optionMap = (seasonListings.map(season => { return (<option onClick={() => {this.setState({season: season})}} value={season}>{season}</option>)}));
        const teamMap = (teamList.map(team => { return ( <option value={team.split("-")[0].trim()}>{team}</option> )}));

        return (
            <div className="gameComponent">
                <form className="gameForm" onSubmit={this.formHandler}>
                    <h1 className='gameSelectionTitle'>Game Selection</h1>
                    <label className="formLabel">Date</label>
                    <input className='formComponent' type="date" name="gameDate"
                            min="2007-01-01" max="2020-12-31" onChange={(e) => {this.setState({seasonDate: e.target.value})}} /><br />
                    <label className="formLabel">Season Listing</label>
                    <select name="season" className='formComponent' onChange={(e) => {this.setState({season: e.target.value})}}>
                        {optionMap}
                    </select><br />
                    <label className="formLabel">Season Type</label>
                    <select name="seasonType" className='formComponent' onChange={(e) => {this.setState({seasonType: e.target.value})}}>
                        <option value="regular">Regular</option>
                        <option value="playoff">Playoffs</option>
                    </select><br />
                    <label className="formLabel">Away Team</label>
                    <select name="awayTeam" className='formComponent' onChange={(e) => {this.setState({awayTeam: e.target.value})}}>
                        {teamMap}
                    </select><br />
                    <label className="formLabel">Home Team</label>
                    <select name="homeTeam" className='formComponent' onChange={(e) => {this.setState({homeTeam: e.target.value})}}>
                        {teamMap}
                    </select><br />
                    <Link to="/gameSheet"><input className='btn btn-success formComponent' type='submit' name='submit' value='View Results' /></Link>
                </form>
            </div>
        )
    }
}

GameForm.prototypes = {
    gameAction: Proptypes.func.isRequired
}

export default connect(null, { gameAction })( GameForm );