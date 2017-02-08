import { Link } from 'inferno-router';

export default function PlayerInfo (props) {
  return (
        <Link to={`/player/${props.playerKey}`} className="player">
            <h1 className="player-name-title">{ props.playerName }</h1>
            <span className="player-power-title">Power [ { props.playerLevel + props.playerGear } ]</span>
            <div className="player-interactions">
                <span className="player-gear-title">Gear { props.playerGear }</span>
                <span className="player-level-title">Level { props.playerLevel }</span>
            </div>
        </Link>
    )
}
