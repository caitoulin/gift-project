import React from 'react';
import {
    useParams,
    useRouteMatch,
    Link,
    Switch,
    Route,
} from 'react-router-dom';
import AniverPage from '../TabPage/AniverPage/AniverPage';
import MarketPage from '../TabPage/MarketPage/MarketPage';
import RecordsPage from '../TabPage/RecordsPage/RecordsPage';
import ToursimPage from '../TabPage/ToursimPage/ToursimPage';
import WordPage from '../TabPage/WordPage/WordPage';
interface RouteParams {
    topicId: string;
}
interface SetRoutes {
    name: string;
    id: string;
}
const routeComponents: any = {
    word: WordPage,
    toursim: ToursimPage,
    anniversary: AniverPage,
    records: RecordsPage,
    market: MarketPage,
};
const SelectPage = () => {
    const includesContent: Array<SetRoutes> = [
        { name: '情话', id: 'word' },
        { name: '旅游', id: 'toursim' },
        { name: '纪念日', id: 'anniversary' },
        { name: '积分赚取', id: 'records' },
        { name: '商城', id: 'market' },
    ];
    const { url, path } = useRouteMatch();
    return (
        <div>
            <header>
                <div>
                    <ul>
                        {includesContent.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`${url}/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div>用户中心</div>
                </div>
            </header>
            <Switch>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
};
function Topic() {
    const { topicId } = useParams<RouteParams>();
    const GetTopic = routeComponents[topicId];
    return (
        <div>
            <GetTopic />
        </div>
    );
}
export default SelectPage;
