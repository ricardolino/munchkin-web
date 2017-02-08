import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import PlayerDetails from '../PlayerDetails';

class PlayerView extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let key = this.props.params.playerName;

        return (
            <PlayerDetails
                playerKey={ key }
                playerName={ this.props.players[key].name }
                playerLevel={ this.props.players[key].level }
                playerGear={ this.props.players[key].gear } />
        );
    }
}

function mapStateToProps (state) {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(PlayerView);



