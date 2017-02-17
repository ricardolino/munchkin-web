import { linkEvent } from 'inferno';
import { Link } from 'inferno-router';

const PlayerInfo = (props) => {
    let { name, level, gear, power, color } = props.data;
    let { self, toggleAttributes, changeTitle } = props.events;
    let style = {
        backgroundColor: color
    }

    let _renderStar = () => {
        if (!props.star) {
            return null
        }

        return <Link className="favorite icon-star-empty" to={`/player/${props.playerKey}`}></Link>;
    }

    return (
        <div
            className="player-info"
            style={style}>
            { _renderStar() }

            <h2
                className="level"
                onClick={ linkEvent(self, toggleAttributes) }>{ level }</h2>
            <input
                className="name"
                defaultValue={ name }
                onChange={ linkEvent(self, changeTitle) } />
            <div
                className="bar">
                <h2 className="gear"
                    onClick={ linkEvent(self, toggleAttributes) }>{ gear }</h2>
                <h2 className="status"></h2>
                <h2 className="power">{ power }</h2>
            </div>
        </div>
    )
}

export default PlayerInfo;