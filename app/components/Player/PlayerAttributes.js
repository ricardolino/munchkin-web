import { linkEvent } from 'inferno';
import Component from 'inferno-component';

const PlayerAttributes = (props) => {
    let { level, gear, color } = props.data;
    let { self, levelDown, levelUp, gearDown, gearUp } = props.events;

    let isGearDownDisabled = (gear < 1) ? true : false;
    let isLevelUpDisabled = (level > 9) ? true : false;
    let isLevelDownDisabled = (level <= 1) ? true : false;

    let borderStyle = {
        borderColor: color
    }

    let buttonStyle = {
        backgroundColor: color
    }

    return (
        <div className="player-attributes">
            <div
                className="attributes level"
                style={ borderStyle }>
                <button
                    className="button decrease"
                    style={ buttonStyle }
                    disabled={ isLevelDownDisabled }
                    onClick={ linkEvent(self, levelDown) }></button>
                <h3 className="value">Level { level }</h3>
                <button
                    className="button increase"
                    style={ buttonStyle }
                    disabled={ isLevelUpDisabled }
                    onClick={ linkEvent(self, levelUp) }></button>
            </div>
            <div
                className="attributes gear"
                style={ borderStyle }>
                <button
                    className="button decrease"
                    style={ buttonStyle }
                    disabled={ isGearDownDisabled }
                    onClick={ linkEvent(self, gearDown) }></button>
                <h3 className="value">Gear { gear }</h3>
                <button
                    className="button increase"
                    style={ buttonStyle }
                    onClick={ linkEvent(self, gearUp) }></button>
            </div>
        </div>
    )
}

export default PlayerAttributes;
