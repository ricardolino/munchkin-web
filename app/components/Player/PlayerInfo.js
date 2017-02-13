import { linkEvent } from 'inferno';


function PlayerInfo (props) {
    let { name, level, gear } = props.data;
    let power = level + gear;
    let { self, toggleAttributes, changeTitle } = props.events;

    return (
        <div className="player-info">
            <h2
                className="level"
                onClick={ linkEvent(self, toggleAttributes) }>{ level }</h2>
            <input
                className="name"
                defaultValue={ name }
                onChange={ linkEvent(self, changeTitle) } />
            <div
                className="bar"
                onClick={ linkEvent(self, toggleAttributes) }>
                <h2 className="gear">{ gear }</h2>
                <h2 className="status"></h2>
                <h2 className="power">{ power }</h2>
            </div>
        </div>
    )
}

export default PlayerInfo;