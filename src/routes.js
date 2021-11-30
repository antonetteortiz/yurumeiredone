import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import TraditionsPage from './pages/TraditionsPage';
import LanguagePage from './pages/LanguagePage';
import MusicPage from './pages/MusicPage';
import FoodPage from './pages/FoodPage';

export default (
    <Switch>
        <Route path="/food" component={FoodPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/traditions" component={TraditionsPage} />
        <Route path="/language" component={LanguagePage} />
        <Route path="/" component={HomePage} />

    </Switch>
)