import React from 'react';
import classNames from 'classnames';
import './main.less';
import {
    useRouteMatch,
    RouteComponentProps,
} from 'react-router-dom';

const MainFlow: React.FC<RouteComponentProps> = (props) => {
    const includesContent: string[] = [
        '情话',
        '旅游',
        '纪念日',
        '积分赚取',
        '商城',
    ];
    const cssNames: string[] = [
        'button-one',
        'button-two',
        'button-three',
        'button-four',
        'button-five',
    ];
    const routeNames: string[] = [
        'word',
        'toursim',
        'anniversary',
        'records',
        'market',
    ];
    const tabClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        const getId = (e.target as HTMLElement).id;
        switch (getId) {
            case 'word':
                props.history.push({
                    pathname: `home/${getId}`,
                });
                break;
            case 'toursim':
                props.history.push({
                    pathname: `home/${getId}`,
                });
                break;
            case 'aniversary':
                props.history.push({
                    pathname: `home/${getId}`,
                });
                break;
            case 'records':
                props.history.push({
                    pathname: `home/${getId}`,
                });
                break;
            case 'market':
                props.history.push({
                    pathname: `home/${getId}`,
                });
                break;
        }
    };
    return (
        <div className="main-menu">
            {includesContent.map((item, index) => {
                return (
                    <div
                        className={classNames('include-modal', cssNames[index])}
                        id={routeNames[index]}
                        onClick={tabClick}>
                        <span>{item}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default MainFlow;
