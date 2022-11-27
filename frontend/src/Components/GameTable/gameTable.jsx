import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GameTable = () => {
    const awayTeam = localStorage.getItem('awayTeam');
    const homeTeam = localStorage.getItem('homeTeam');
    const typeOfSeason = localStorage.getItem('season');
    const completeDate = localStorage.getItem('completeDate');
    const awayScore = localStorage.getItem('awayScore');
    const homeScore = localStorage.getItem('homeScore');
    let playDescriptionRefined = "";
    let typeOfGoal = "";
    let minutes = 0;
    let seconds = 0;
    const session = localStorage.getItem('periods');
    const copySession = localStorage.getItem('periods').map((item, key) => item.key = key);
    const periodData = session.map((item, key) => item.key = key).splice(0, 3) // Map key to each session and remove the extra sessions, if any
    const extraCount = ( session === null || session === undefined ) ? null : session.map((item, key) => item.key = key).splice(3); // Filter OT or SO sessions 
    let totalSecondsElapsed = 0

    const navigate = useNavigate(); // Use Navigate hook for navigating to display format of tables

    useEffect(() => {
        if (awayTeam === undefined || homeTeam === undefined || completeDate === undefined || awayScore === undefined ||
            playDescriptionRefined === undefined || homeScore === undefined || typeOfGoal === undefined || minutes === undefined ||  
            seconds === undefined || totalSecondsElapsed === undefined || periodData === undefined) {
                navigate('/')
        }
        else if (awayTeam === null || homeTeam === null || completeDate === null || awayScore === null ||
            playDescriptionRefined === null || homeScore === null || typeOfGoal === null || minutes === null ||  
            seconds === null || totalSecondsElapsed === null || periodData === null) {
                navigate('/')
        }
    }, [])

    // const awayTeam = useSelector(state => data);
        return (
            <div className="gameTable">
                <div class="col-lg-12">
                    <h1 class="date-heading">{ completeDate }</h1>
                </div>
                <div class="row">
                    <div class="red col-lg-4 col-md-4 col-sm-4">
                        <div class="away-team-section">
                            <img class="away-image" src="nhl_logos/<%= awayTeamImage %>.gif" height="120" width="165" />
                            <h4 class="team-name-heading">{ awayTeam }</h4>
                        </div>
                    </div>
                    <div class="score-section col-lg-4 col-md-4 col-sm-4">
                        <p class="score">{ awayScore - homeScore }</p> 
                    </div>
                    <div class="blue col-lg-4 col-md-4 col-sm-4">
                        <div class="home-team-section">
                            <img class="home-image" src="nhl_logos/<%= homeTeamImage %>.gif" height="120" width="165" /> 
                            <h4 class="team-name-heading">{ homeTeam }</h4>
                        </div>    
                    </div>
                </div>
                <div class="table-section col-lg-12">
                    <h3 class="scoring-heading">Scoring</h3>
                        <table class="table">
                                <tr style={{ textAlign: 'center' }}>
                                    <th>Team</th>
                                    {
                                        periodData.map(item => {
                                            return (
                                                <th>{ item.key }</th>
                                            )
                                        })
                                    }
                                    {
                                        extraCount.map(item => {
                                            if (typeOfSeason === "playoff") {
                                                return <th>OT {item.key}</th>
                                            }
                                            else if (item.key === 1 && typeOfSeason === 'regular') {
                                                return <th>OT</th>
                                            }
                                            else if (item.key === 2 && typeOfSeason === 'regular') {
                                                return <th>SO</th>
                                            }
                                        })
                                    }
                                    <th>Final</th>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td style={{ textAlign: 'left' }}>{ awayTeam }</td>
                                        {
                                            copySession.map(p => {
                                                return (
                                                    <td>{ p.awayScore }</td>
                                                )
                                            })
                                        }
                                    <td><b>{ awayScore }</b></td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td style={{ textAlign: 'left' }}>{ homeTeam }</td>
                                        { 
                                            copySession.map(p => {
                                                return (
                                                    <td>{ p.homeScore }</td>
                                                )
                                            })
                                        }
                                    <td><b>{ homeScore }</b></td>
                                </tr>
                        </table>
                        {
                          periodData.map(item => {
                            for (var i = 0; i < item.scoringPlays.length; i++) {
                                totalSecondsElapsed = parseInt(item.scoringPlays[i].periodSecondsElapsed);
                                minutes = Math.floor(parseInt(totalSecondsElapsed/60));
                                seconds = totalSecondsElapsed - minutes*60;

                                if (seconds < 10) {
                                    seconds = "0" + seconds;
                                }
                                
                                if (item.scoringPlays[i].playDescription.trim().substring(0, 1) === '(') {
                                    if (item.scoringPlays[i].playDescription.trim().substring(0, 5) === '(PPG)' || item.scoringPlays[i].playDescription.trim().substring(0, 5) === '(SHG)') {
                                        playDescriptionRefined = item.scoringPlays[i].playDescription.trim().substring(5);
                                        typeOfGoal = item.scoringPlays[i].playDescription.trim().substring(1, 4);

                                        return (
                                            <tr className="table-description-row">
                                                <td>{ i + 1 }</td>
                                                <td>{ minutes }:{ seconds }</td>
                                                <td>{ typeOfGoal }</td>
                                                <td>{ item.scoringPlays[i].team.abbreviation } - { playDescriptionRefined }</td>
                                            </tr>
                                        )
                                    }
                                    else if ((item.scoringPlays[i].playDescription.trim().substring(0, 11) === "(Empty Net)") && (i == 2) && ( minutes > 17 )) {
                                        playDescriptionRefined = item.scoringPlays[i].playDescription.trim().substring(11);
                                        typeOfGoal = item.scoringPlays[i].playDescription.trim().substring(1, 10);
                                        
                                        return (
                                            <tr className="table-description-row"> 
                                                <td>{ i + 1 }</td>
                                                <td>{ minutes }:{ seconds }</td>
                                                <td>{ typeOfGoal.toUpperCase() }</td>
                                                <td>{ item.scoringPlays[i].team.abbreviation } - { playDescriptionRefined }</td>
                                            </tr>
                                        )
                                    } 
                                    else {
                                        playDescriptionRefined = item.scoringPlays[i].playDescription;

                                        if (playDescriptionRefined.trim().substring(0, 11) === "(Empty Net)") {
                                            playDescriptionRefined = playDescriptionRefined.trim().substring(11);
                                        }

                                        typeOfGoal = "EVEN";

                                        return (
                                            <tr class="table-description-row">
                                                <td>{ i + 1 }</td>
                                                <td>{ minutes }:{ seconds }</td>
                                                <td>{ typeOfGoal }</td>
                                                <td>{ item.scoringPlays[i].team.abbreviation } - { playDescriptionRefined }</td>
                                            </tr>
                                        )
                                    }
                                }
                                else {
                                    playDescriptionRefined = item.scoringPlays[i].playDescription;
                                    typeOfGoal = "EVEN";

                                    return (
                                        <tr class="table-description-row">
                                            <td>{ i + 1 }</td>
                                            <td>{ minutes }:{ seconds }</td>
                                            <td>{ typeOfGoal }</td>
                                            <td>{ item.scoringPlays[i].team.abbreviation } - { playDescriptionRefined }</td>
                                        </tr>
                                    )
                                }
                            }
                          })  
                        }
                </div>
            </div>
        )
}

/*
    <div class="table-section col-lg-12">
            <h3 class="scoring-heading">Scoring</h3>
            <table class="table">
                    <tr style="text-align:center;">
                        <th>Team</th>
                        <% let j = 1; %>
                        <% for (var i = 1; i <= periods.length; i++) { %>

                            <!-- Add special consideration to OT periods in a playoff game -->
                            <% if (i > 3 && typeOfSeason === "playoff") { %>
                                    <th>OT<%= j %></th>

                                    <!-- If game is regular, only 1 OT session is played followed by a Shootout, if necessary -->
                                    <%  j++; } else if (i > 3 && typeOfSeason === "regular") { %>
                                    <% if (i === 4) { %>
                                        <th>OT</th>
                                    <% } else if (i == 5) { %>
                                        <th>SO</th>
                                    <% } %>
                                    <% } else { %>
                                        <th><%= i %></th>
                                      <% } %>
                        <% } %>
                        <th>Final</th>
                    </tr>

                    <!-- Set the row for the away team in the match -->
                    <tr style="text-align:center;">
                        <td style="text-align:left;"><%= awayTeam %></td>
                        <% for (var i = 0; i < periods.length; i++) { %>
                            <td><%= periods[i].awayScore %></td>
                        <% } %>
                        <td><b><%= awayScore %></b></td>
                    </tr>
                    <!-- Set the row for the home team in the match -->
                    <tr style="text-align:center;">
                        <td style="text-align:left;"><%= homeTeam %></td>
                        <% for (var i = 0; i < periods.length; i++) { %>
                            <td><%= periods[i].homeScore %></td>
                        <% } %>
                        <td><b><%= homeScore %></b></td>
                    </tr>
            </table>
            <h3 class="summary-heading">Game Summary</h3>
            <table class="scoring-summary table">
                <!-- Set up the table for period, time, goal, and description. The scoring summary chart -->
                <tr>
                    <th class="table-hockey-description-heading">Period</th>
                    <th class="table-hockey-description-heading">Time</th>
                    <th class="table-hockey-description-heading">Goal</th>
                    <th class="table-hockey-description-heading">Description</th>
                </tr>
                    <% let playDescriptionRefined = ""; %>
                    <% let typeOfGoal = ""; %>
                    <% let minutes = 0; %>
                    <% let seconds = 0; %>
                    <% let totalSecondsElapsed = 0; %>

                        <!-- Retrieve, from the API response, scoring plays from each of the FIRST 3 periods of play -->
                        <% for (var a = 0; a < 3; a++) { %>
                            <% for (var b = 0; b < periods[a].scoringPlays.length; b++) { %>
                                <% totalSecondsElapsed = parseInt(periods[a].scoringPlays[b].periodSecondsElapsed); %>
                                <% minutes = Math.floor(parseInt(totalSecondsElapsed)/60); %>
                                <% seconds = totalSecondsElapsed - minutes*60; %>
                                <% if (seconds < 10) { %>
                                    <% seconds = "0" + seconds; %>
                                <% } %>

                            <!-- Filter those scoring plays based on special teams: shorthanded, powerplay goals -->
                            <% if (periods[a].scoringPlays[b].playDescription.trim().substring(0, 1) === "(") { %>
                                <% if (periods[a].scoringPlays[b].playDescription.trim().substring(0, 5) === "(PPG)" || periods[a].scoringPlays[b].playDescription.trim().substring(0, 5) === "(SHG)") { %>

                                    <% playDescriptionRefined = periods[a].scoringPlays[b].playDescription.trim().substring(5); %>
                                    <% typeOfGoal = periods[a].scoringPlays[b].playDescription.trim().substring(1, 4); %>
                                    <tr class="table-description-row">
                                        <td><%= a+1 %></td>
                                        <td><%= minutes %>:<%= seconds %></td>
                                        <td><%= typeOfGoal %></td>
                                        <td><%= periods[a].scoringPlays[b].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                    </tr>

                                    <!-- Check to see the goal was scored on an empty net and set the type of goal to that -->
                                <% } else if ((periods[a].scoringPlays[b].playDescription.trim().substring(0, 11) === "(Empty Net)") && (a == 2) && (minutes > 17)) { %>
                                    <% playDescriptionRefined = periods[a].scoringPlays[b].playDescription.trim().substring(11); %>
                                    <% typeOfGoal = periods[a].scoringPlays[b].playDescription.trim().substring(1, 10); %>
                                    
                                    <tr class="table-description-row"> <!-- Set the rows for the scoring summary table defining the period, time, type of goal and description -->
                                        <td><%= a+1 %></td>
                                        <td><%= minutes %>:<%= seconds %></td>
                                        <td><%= typeOfGoal.toUpperCase() %></td>
                                        <td><%= periods[a].scoringPlays[b].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                    </tr>
                                <% } else { %>
                                        <% playDescriptionRefined = periods[a].scoringPlays[b].playDescription; %>
                                        <% if (playDescriptionRefined.trim().substring(0, 11) === "(Empty Net)") { %>
                                            <% playDescriptionRefined = playDescriptionRefined.trim().substring(11); %>
                                        <% } %>
                                        <% typeOfGoal = "EVEN"; %>
                                        <tr class="table-description-row"> <!-- Set the rows for the scoring summary table if the goal is scored as empty net -->
                                            <td><%= a+1 %></td>
                                            <td><%= minutes %>:<%= seconds %></td>
                                            <td><%= typeOfGoal %></td>
                                            <td><%= periods[a].scoringPlays[b].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                        </tr>
                                 <% } %>
                            <% } else { %>
                                <% playDescriptionRefined = periods[a].scoringPlays[b].playDescription; %>
                                <% typeOfGoal = "EVEN"; %>
                                    <tr class="table-description-row"> <!-- Set the rows for the scoring summary table if the goal is scored as even strength -->
                                        <td><%= a+1 %></td>
                                        <td><%= minutes %>:<%= seconds %></td>
                                        <td><%= typeOfGoal %></td>
                                        <td><%= periods[a].scoringPlays[b].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                    </tr>
                            <% } %>
                        <% } %>
                    <% } %>
                    <% if (typeOfSeason === "regular") { %> <!-- If the season is of type regular, check to see if the game went to OT -->
                        <% if (periods.length === 4) { %>
                            <% totalSecondsElapsed = parseInt(periods[3].scoringPlays[0].periodSecondsElapsed); %>
                            <% minutes = Math.floor(parseInt(totalSecondsElapsed)/60); %>
                            <% seconds = totalSecondsElapsed - minutes*60; %>
                            <% typeOfGoal = periods[3].scoringPlays[0].playDescription.trim().substring(1, 4); %>

                            <% if ((typeOfGoal != "PPG") && (typeOfGoal != "SHG")) { %> <!-- If the type of goal is not PPG or SHG, set it to EVEN -->
                                <% typeOfGoal = "EVEN"; %>
                            <% } %>
            
                            <% if (seconds < 10) { %>
                                <% seconds = "0" + seconds; %>
                            <% } %>

                            <% playDescriptionRefined = periods[3].scoringPlays[0].playDescription; %> <!-- Check to see if the goal is scored on an empty net -->
                                <% if (playDescriptionRefined.trim().substring(0, 11) === "(Empty Net)") { %>
                                    <% playDescriptionRefined = playDescriptionRefined.trim().substring(11); %>
                                <% } %>
                            <tr class="table-description-row"> <!-- Add the row and the score, time, and description -->
                                <td>OT</td>
                                <td><%= minutes %>:<%= seconds %></td>
                                <td><%= typeOfGoal %></td>
                                <td><%= periods[3].scoringPlays[0].team.abbreviation %> - <%= playDescriptionRefined %></td>
                            </tr>
                        <% } else if (periods.length === 5) { %> <!-- If the game goes to a shootout, add a row informing the user, no scoring in OT -->
                            <tr class="table-description-row">
                                    <td>OT</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>No Scoring</td>
                            </tr>
                            <% for (var so = 0; so < periods[4].scoringPlays.length; so++) { %> <!-- For all the scoring plays in the shootout, go thru each and render the info as a row in the scoring summary table -->
                                <% playDescriptionRefined = periods[4].scoringPlays[so].playDescription; %>

                                <% if (playDescriptionRefined.trim().substring(0, 11) === "(Empty Net)") { %>
                                    <% playDescriptionRefined = playDescriptionRefined.trim().substring(11); %>
                                <% } %>
                                <tr class="table-description-row"> <!-- Add the shootout attempt descriptions (if attempt was successful) -->
                                    <td>SO</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><%= periods[4].scoringPlays[so].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                </tr>
                            <% } %>
                        <% } %>
                    <% } else { %>
                        <% if ((typeOfSeason === "playoff") && (periods.length > 3)) { %> <!-- If the game was in the playoffs, consecutive OT's take place, until a goal is scored -->
                            <% for (var ot = 3; ot < periods.length; ot++) { %> <!-- Go thru all the OT sessions to find the winning play -->
                                <% if (periods[ot].scoringPlays.length != 0) { %>
                                    <% totalSecondsElapsed = parseInt(periods[ot].scoringPlays[0].periodSecondsElapsed) %>
                                    <% minutes = Math.floor(parseInt(totalSecondsElapsed)/60) %>
                                    <% seconds = totalSecondsElapsed - minutes*60 %>
                                    <% typeOfGoal = periods[ot].scoringPlays[0].playDescription.trim().substring(1, 4) %> <!-- Find the time and play description -->

                                    <% if ((typeOfGoal != "PPG") && (typeOfGoal != "SHG")) { %> <!-- Find what type of goal was scored -->
                                        <% typeOfGoal = "EVEN" %>
                                    <% } %>

                                    <% if (seconds < 10) { %>
                                        <% seconds = "0" + seconds; %> <!-- Make sure single digit seconds are represented in 0x form -->
                                    <% } %>
                                    
                                    <% playDescriptionRefined = periods[ot].scoringPlays[0].playDescription; %>

                                        <% if (playDescriptionRefined.trim().substring(0, 11) === "(Empty Net)") { %>
                                            <% playDescriptionRefined = playDescriptionRefined.trim().substring(11) %>
                                        <% } else if (playDescriptionRefined.trim().substring(0, 5) === "(PPG)" || playDescriptionRefined.trim().substring(0, 5) === "(SHG)") { %>
                                            <% playDescriptionRefined = playDescriptionRefined.trim().substring(5) %>
                                        <% } %>
                                    <tr class="table-description-row"> <!-- Add the winning play to the table along with the play description, time and team -->
                                        <td>OT<%= ot - 2; %></td>
                                        <td><%= minutes %>:<%= seconds %></td>
                                        <td><%= typeOfGoal; %></td>
                                        <td><%= periods[ot].scoringPlays[0].team.abbreviation %> - <%= playDescriptionRefined %></td>
                                    </tr>
                                <% } %>
                            <% } %>
                        <% } %>
                <% } %>
            </table>
    </div>
</body>
</html>
*/
export default GameTable;