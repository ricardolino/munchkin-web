import { linkEvent } from 'inferno';
import { Link } from 'inferno-router';

const PlayerInfo = (props) => {
    let { name, level, gear, power, color, gender } = props.data;
    let { self, toggleAttributes, changeTitle, changeGender } = props.events;
    let style = {
        backgroundColor: color
    }

    let _renderStar = () => {
        if (!props.star) {
            return null
        }

        return <Link className="favorite icon-star-empty" to={`/player/${props.playerKey}`}></Link>;
    }

    let _renderGender = () => {
        return (
            <select value={gender} onChange={ linkEvent(self, changeGender) }>
                <option value="Male">&#9794;</option>
                <option value="Female">&#9792;</option>
            </select>
        )
    }

    return (
        <div
            className="player-info"
            style={style}>

            { _renderStar() }

            { _renderGender() }

            <h2
                className="level"
                onClick={ linkEvent(self, toggleAttributes) }>{ level }<i className="icon-crown"></i></h2>

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
