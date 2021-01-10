import { Component } from 'react';
import LogoBox from '../LogoBox/logobox';

class GameSheet extends Component  {

    state = {

    }

    constructor(props){
        super(props);
    }
    
    render = () => {
        return (
            <div className="gameSheet">
                <LogoBox awayTeam="" homeTeam="" />
            </div>
        )
    }
}

export default GameSheet;