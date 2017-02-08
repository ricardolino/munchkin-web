import { linkEvent } from 'inferno';
import Component from 'inferno-component';

class PlayerDetails extends Component {
    constructor (props) {
        super(props);

        this.state = {
            level: 1,
            gear: 0,
            playerName: null
        }
    }

    _levelUpHandler (instance) {
        instance.setState((prevState) => {
            if (prevState.level > 9) {
                return null;
            }
            return {
                level: prevState.level + 1
            };
        });
    }

    _levelDownHandler (instance) {
        instance.setState((prevState) => {
            if (prevState.level <= 1) {
                return null;
            }
            return {
                level: prevState.level - 1
            };
        });
    }

    _GearUpHandler (instance) {
        instance.setState((prevState) => {
            return {
                gear: prevState.gear + 1
            };
        });
    }

    _GearDownHandler (instance) {
        instance.setState((prevState) => {
            if (prevState.gear < 1) {
                return null;
            }
            return {
                gear: prevState.gear - 1
            };
        });
    }

    _changeTitleHandler (instance, event) {
        console.log(event);

        instance.setState({
            playerName: event.target.value
        })
    }

    componentDidMount () {
        this.setState({
            playerName: this.props.playerName
        })
    }

    render () {
        return (
            <div className="player">
                <input
                    className="player-name-title"
                    defaultValue={ this.state.playerName }
                    onChange={ linkEvent(this, this._changeTitleHandler) } />

                <span
                    className="player-power-title">
                    Power [ { this.state.level + this.state.gear } ]
                </span>
                <div className="player-interactions">
                    <span
                        className="player-gear-title">
                        Gear { this.state.gear }
                    </span>

                    <span
                        className="player-level-title">
                        Level { this.state.level }
                    </span>

                    <div className="player-gear-buttons">
                        <button
                            className="player-button"
                            onClick={ linkEvent(this, this._GearUpHandler) }>
                            Gear Up
                        </button>

                        <button
                            disabled={(this.state.gear < 1) ? true : false}
                            className="player-button"
                            onClick={ linkEvent(this, this._GearDownHandler) }>
                            Gear Down
                        </button>
                    </div>

                    <div className="player-level-buttons">
                        <button
                            disabled={(this.state.level > 9) ? true : false}
                            className="player-button"
                            onClick={ linkEvent(this, this._levelUpHandler) }>
                            Level Up
                        </button>

                        <button
                            disabled={(this.state.level <= 1) ? true : false}
                            className="player-button"
                            onClick={ linkEvent(this, this._levelDownHandler) }>
                            Level Down
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerDetails;
