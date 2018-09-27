/**
 * 创建人： XUPQ
 * 时间： 2018-09-19 下午6:12
 * 功能描述：所有路由的集合
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from 'bundle-loader?lazy&name=index!./loginHome/index.jsx';
import AppLayoutRoutes from './AppLayoutRoutes';
import RetrievePassword from 'bundle-loader?lazy&name=RetrievePassword!./login/components/RetrievePassword';
import NoMatch from "bundle-loader?lazy&name=NoMatch!./stateCode/components/NoMatch";
// import NoAuthority from "bundle-loader?lazy&name=NoAuthority!./stateCode/components/NoAuthority";
import {createComponent} from '../components/router/RouterTrick';
import { Provider } from 'react-redux';
import store from './../store/createStore';
import {history} from './../store/createStore';
import {persistStore} from 'redux-persist-immutable';
import {ConnectedRouter} from 'react-router-redux'
import './../../src/css/style.less';
import {hot} from 'react-hot-loader';

class AppRoutes extends React.Component {

    constructor() {
        super();
        this.state = { rehydrated: false }
    }

    componentWillMount(){
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true });
        })
    }

    render() {
        if(!this.state.rehydrated){
            return <div>加载数据ing......................</div>;
        }
        return (
            // 使用 redux 管理 router
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={createComponent(IndexPage)} />
                            <Route path="/appLayout" component={AppLayoutRoutes} />
                            <Route path="/retrievePassword" component={createComponent(RetrievePassword)} />
                            {/*<Route path="/noAuthority" component={createComponent(NoAuthority)} />*/}
                            <Route component={createComponent(NoMatch)} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
// 热部署
export default hot(module)(AppRoutes)