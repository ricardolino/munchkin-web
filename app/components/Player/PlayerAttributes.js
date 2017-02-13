import { linkEvent } from 'inferno';
import Component from 'inferno-component';

function PlayerAttributes (props) {
    let { level, gear } = props.data;
    let { self, levelDown, levelUp, gearDown, gearUp } = props.events;

    let isGearDownDisabled = (gear < 1) ? true : false;
    let isLevelUpDisabled = (level > 9) ? true : false;
    let isLevelDownDisabled = (level <= 1) ? true : false;

    return (
        <div className="player-attributes">
            <div className="attributes level">
                <button
                    className="button decrease"
                    disabled={ isLevelDownDisabled }
                    onClick={ linkEvent(self, levelDown) }></button>
                <h3 className="value">Level { level }</h3>
                <button
                    className="button increase"
                    disabled={ isLevelUpDisabled }
                    onClick={ linkEvent(self, levelUp) }></button>
            </div>
            <div className="attributes gear">
                <button
                    className="button decrease"
                    disabled={ isGearDownDisabled }
                    onClick={ linkEvent(self, gearDown) }></button>
                <h3 className="value">Gear { gear }</h3>
                <button
                    className="button increase"
                    onClick={ linkEvent(self, gearUp) }></button>
            </div>
        </div>
    )
}

export default PlayerAttributes;
