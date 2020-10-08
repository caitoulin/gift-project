import React from 'react';
import {
    useParams,
    useRouteMatch,
    Link,
    Switch,
    Route,
} from 'react-router-dom';
import classNames from 'classnames';
import AniverPage from '../TabPage/AniverPage/AniverPage';
import MarketPage from '../TabPage/MarketPage/MarketPage';
import RecordsPage from '../TabPage/RecordsPage/RecordsPage';
import ToursimPage from '../TabPage/ToursimPage/ToursimPage';
import WordPage from '../TabPage/WordPage/WordPage';
import './select.less';
import '../../src/assets/fonts/iconfont.css';
interface RouteParams {
    topicId: string;
}
interface SetRoutes {
    name: string;
    id: string;
    icon: string;
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
        { name: '情话', id: 'word', icon: 'icon-qinghua' },
        { name: '旅游', id: 'toursim', icon: 'icon-lvyou' },
        { name: '纪念日', id: 'anniversary', icon: 'icon-jinianri' },
        { name: '积分赚取', id: 'records', icon: 'icon-jifen' },
        { name: '商城', id: 'market', icon: 'icon-ziyuan' },
    ];
    const { url, path } = useRouteMatch();
    return (
        <div>
            <header className="gift-header">
                <div className="include-item">
                    <Link to="/main" className="name">
                        {'Gift'}
                    </Link>
                    <ul>
                        {includesContent.map((item, index) => {
                            return (
                                <li key={index}>
                                    <i
                                        className={classNames(
                                            'iconfont',
                                            item.icon
                                        )}></i>
                                    <Link to={`${url}/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="user-menu">
                        <Link to="/">
                            <span className="img-user">
                                <img src="https://himg.bdimg.com/sys/portraitn/item/0dcb77657274796473636cca54" />
                            </span>
                            <span className="name-user">{'jacklin'}</span>
                        </Link>
                    </div>
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
