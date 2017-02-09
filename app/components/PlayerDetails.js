import { linkEvent } from 'inferno';
import Component from 'inferno-component';

export function PlayerDetails (props) {
    let { events, playerName, playerLevel, playerGear } = props;
    let power = parseInt(playerLevel + playerGear, 10);

    let isGearDownDisabled = (playerGear < 1) ? true : false;
    let isLevelUpDisabled = (playerLevel > 9) ? true : false;
    let isLevelDownDisabled = (playerLevel <= 1) ? true : false;

    return (
        <div className="player">
            <input
                className="player-name-title"
                defaultValue={ playerName }
                onChange={ linkEvent(events.reference, events.changeTitle) }
                />
            <span className="player-power-title"> Power [ { power } ] </span>
            <div className="player-interactions">
                <span className="player-gear-title"> Gear { playerGear } </span>
                <span className="player-level-title"> Level { playerLevel } </span>
                <div className="player-gear-buttons">
                    <button
                        className="player-button"
                        onClick={ linkEvent(events.reference, events.gearUp) }>
                        Gear Up
                    </button>
                    <button
                        className="player-button"
                        disabled={ isGearDownDisabled }
                        onClick={ linkEvent(events.reference, events.gearDown) }>
                        Gear Down
                    </button>
                </div>
                <div className="player-level-buttons">
                    <button
                        className="player-button"
                        disabled={ isLevelUpDisabled }
                        onClick={ linkEvent(events.reference, events.levelUp) }>
                        Level Up
                    </button>
                    <button
                        className="player-button"
                        disabled={ isLevelDownDisabled }
                        onClick={ linkEvent(events.reference, events.levelDown) }>
                        Level Down
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails;
