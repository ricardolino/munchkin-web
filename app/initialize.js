import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'inferno-redux';

import App from './components/Views/App';
import TableView from './components/Views/TableView';
import PlayerView from './components/Views/PlayerView';
import NoMatchView from './components/Views/NoMatchView';

import store from './components/store';

const browserHistory = createBrowserHistory();

const routes = (
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route component={ App }>
                <IndexRoute component={ TableView }/>
                <Route path="player/:playerName" component={ PlayerView } />
                <Route path="*" component={ NoMatchView }/>
            </Route>
        </Router>
    </Provider>
);

Inferno.render(routes, document.getElementById('app'));
