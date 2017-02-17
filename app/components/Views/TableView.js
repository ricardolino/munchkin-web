import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import Player from '../Player/';
import NewPlayer from '../Player/NewPlayer';
import Ranking from '../Ranking/';
import { addNewPlayer } from '../store/actions/playersActions';

class TableView extends Component {
    render () {
        return (
            <div className="view-table">
                <div className="content">
                    {
                        this.props.players.map((player, key) => {
                            return (
                                <Player
                                    playerKey={key}
                                    player={ player }
                                    star />
                            )
                        })
                    }
                    <NewPlayer />
                </div>
                <div className="sidebar">
                    <Ranking
                        players={ this.props.players } />
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
