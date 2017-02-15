import { linkEvent } from 'inferno';
import { bindActionCreators } from 'redux';
import { connect } from 'inferno-redux';

import getRandomColor from '../../Utils/ColorUtils';
import { addNewPlayer } from '../store/actions/playersActions';

const NewPlayer = (props) => {
    return (
        <div className="new-player">
            <span className="new-player-title">New Player</span>
            <input
                className="new-player-name-field"
                onChange={
                    linkEvent(this, (self, event) => {
                        let playerData = {
                            name: event.target.value,
                            level: 1,
                            gear: 0,
                            power: 1,
                            color: getRandomColor()
                        };

                        event.target.value = '';

                        webSocketIo.emit('player:new', playerData);
                        // props.addNewPlayer(playerData);
                    })
                } />
        </div>
    )
}

function mapStateToProps (state) {
    return {
        players: state.players
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addNewPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);
