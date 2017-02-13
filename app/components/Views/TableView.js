import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import Player from '../Player/';
import Ranking from '../Ranking/';
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
                        return (
                            <Player
                                playerKey={key}
                                player={ player } />
                        )
                    })
                }
                <div className="new-player">
                    <span className="new-player-title">New Player</span>
                    <input
                        className="new-player-name-field"
                        onChange={ linkEvent(this, this._addNewPlayer) } />
                </div>
                <Ranking
                    players={ this.props.players } />
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
