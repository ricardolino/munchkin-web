import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import PlayerInfo from '../PlayerInfo';
import { addNewPlayer } from '../store/actions/playersActions';

class TableView extends Component {
    constructor(props) {
        super(props);
    }

    _addNewPlayer (instance, event) {
        let newName = event.target.value;

        event.target.value = '';

        instance.props.addNewPlayer({ name: newName, level: 1, gear: 0 });
    }

    render () {
        return (
            <div className="view-table">
                {
                    this.props.players.map((player, key) => {
                        console.log(key);
                        return (
                            <PlayerInfo
                                playerKey={key}
                                playerName={ player.name }
                                playerLevel={ player.level }
                                playerGear={ player.gear } />
                        )
                    })
                }
                <div className="player">
                    <span className="player-power-title">New Player</span>
                    <input
                        className="player-name-title"
                        onChange={ linkEvent(this, this._addNewPlayer) } />
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        players: state.players
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addNewPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
