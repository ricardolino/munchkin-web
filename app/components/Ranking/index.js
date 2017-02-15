import Component from 'inferno-component';
import { linkEvent } from 'inferno';

import RankingList from './RankingList';

const ORDER_BY_LEVEL = ['level', 'power'];
const ORDER_BY_POWER = ['power', 'level'];

class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: ORDER_BY_LEVEL
        }
    }

    _toggleOrderBy (self) {
        let orderBy = (self.state.orderBy === ORDER_BY_LEVEL) ? ORDER_BY_POWER : ORDER_BY_LEVEL;

        self.setState({
            orderBy
        });
    }

    render () {
        let { players } = this.props;
        let { orderBy } = this.state;

        if (players.length <= 1) {
            return null;
        }

        return (
            <div className="ranking">
                <h3 className="title">Ranking</h3>
                <button
                    onClick={ linkEvent(this, this._toggleOrderBy) }
                    disabled={ orderBy === ORDER_BY_LEVEL }
                    className={ 'button by-level ' + (( orderBy === ORDER_BY_LEVEL) ? 'active' : '') }
                    >Level</button>
                <button
                    onClick={ linkEvent(this, this._toggleOrderBy) }
                    disabled={ orderBy === ORDER_BY_POWER }
                    className={ 'button by-power ' + (( orderBy === ORDER_BY_POWER) ? 'active' : '') }
                    >Power</button>

                <RankingList
                    players={ players }
                    orderBy={ orderBy } />
            </div>
        )
    }
}

export default Ranking;