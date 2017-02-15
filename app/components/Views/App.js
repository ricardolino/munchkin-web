import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

import { addNewPlayer, updatePlayer } from '../store/actions/playersActions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        webSocketIo.on('connect', () => {
            console.log('Client has connected to the server!');
        });
        // Add a connect listener
        webSocketIo.on('player:update', (data) => {
            this.props.updatePlayer(data);
            console.log('player:update', data);
        });

        webSocketIo.on('player:new', (data) => {
            this.props.addNewPlayer(data);
            console.log('player:new', data);
        });
        // Add a disconnect listener
        webSocketIo.on('disconnect', () => {
            console.log('The client has disconnected!');
        });
    }

    render () {
        return (
            <div className="app">{ this.props.children }</div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ updatePlayer, addNewPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);



