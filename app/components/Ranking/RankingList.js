import _ from 'lodash';

const RankingList = (props) => {
    let { players, orderBy } = props;

    return (
        <ul className="list">
            {
                _.orderBy(players, orderBy, ['desc', 'desc']).map((player, key) => {
                    let style = {
                        backgroundColor: player.color
                    }

                    return (
                        <li
                            className="player"
                            style={ style }>
                            <span className="level">{ player.level }</span>
                            <span className="name">{ player.name }</span>
                            <span className="power">{ player.power }</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RankingList;