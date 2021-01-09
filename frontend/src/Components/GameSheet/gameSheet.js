import store from '../../../src/redux/store/store';
import { Component } from 'react';
import LogoBox from '../LogoBox/logobox';

class GameSheet extends Component  {

    state = {
        data: ''
    }

    componentDidMount() {
        this.setState({store});
    }

    render = () => {
        return (
            <div className="gameSheet">
                <LogoBox />
            </div>
        )
    }
}

export default GameSheet;