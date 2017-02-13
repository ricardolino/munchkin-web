import _ from 'lodash';

function orderByLevel (a, b) {
    console.log(a.level - b.level);
    return a.level - b.level;
}

function Ranking (props) {
    if (props.players.length <= 1) {
        return null;
    }

    return (
        <div className="ranking">
            <h3 className="title">Ranking</h3>
            <button
                className="button by-level"
                >Level</button>
            <button
                className="button by-power"
                >Power</button>
            <ul className="list">
                {
                    _.orderBy(props.players, ['level', 'gear'], ['desc', 'desc']).map((player, key) => {
                        return (
                            <li class="player">
                                <span className="level">{ player.level }</span>
                                { player.name }
                                <span className="power">{ player.level + player.gear }</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Ranking;