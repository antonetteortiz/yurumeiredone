import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';


export default (
    <Switch>
        <Route path="/history" component={HistoryPage} />
        <Route path="/" component={HomePage} />

    </Switch>
)