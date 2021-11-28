import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import TraditionsPage from './pages/TraditionsPage';


export default (
    <Switch>
        <Route path="/history" component={HistoryPage} />
        <Route path="/traditions" component={TraditionsPage} />
        <Route path="/" component={HomePage} />

    </Switch>
)