/**
 * 创建人： XUPQ
 * 时间： 2018-09-19 下午5:01
 * 功能描述：开发时布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router-dom";
import AppLayout from "./appLayout/components/AppLayout";
import NoMatch from "./stateCode/components/NoMatch";
import BankMaintain from "../routes/po/components/BankMaintain";
import BorrowerMaintain from "../routes/po/components/BorrowerMaintain";
import BBMaintain from "../routes/po/components/BBMaintain";
import Home from "../routes/home/components/Home";
import Loan from './la/components/Loan';
import Procurement from './pur/components/Procurement';
// import ResetPassword from "../routes/sys/components/ResetPassword";

/*肖亚男开始*/
import Func from "../routes/sys/components/Func";
/*肖亚男结束*/

/* 王强开始*/
import BankMaintainBaseInfo from "../routes/po/routes/poBaseInfo/components/BankMaintainBaseInfo";
import BBMaintainBaseInfo from "../routes/po/routes/poBaseInfo/components/BBMaintainBaseInfo";
import FBMaintainBaseInfo from "../routes/po/routes/poBaseInfo/components/FBMaintainBaseInfo";
import FBMaintain from "../routes/po/components/FBMaintain";
import HospitalAllotVendor from "../routes/po/components/HospitalAllotVendor";
import VendorToBeAllocated from "../routes/po/components/VendorToBeAllocated";
import LogOperationTable from "../routes/sys/components/LogOperationTable";
/* 王强结束*/
import Role from "../routes/sys/components/Role";
import UserGroup from "../routes/sys/components/UserGroup";
import User from "./sys/components/User";
import SysParameter from "../routes/sys/components/SysParameter";
/*判断session失效，相关引用*/


/* 徐盼强开始*/
/*医院信息*/
import HospitalMaintain from "../routes/po/components/HospitalMaintain";
import HospitalMaintainBaseInfo from "../routes/po/routes/poBaseInfo/components/HospitalMaintainBaseInfo";

/*银行分配供应商*/
import BankDistributionSuppliers from "../routes/po/components/BankDistributionSuppliers";

import ToBeAssignedDistribution from "../routes/po/components/ToBeAssignedDistribution";

/* 徐盼强结束*/


export default class AppLayoutRoutesDEV extends React.Component {

    render() {
        console.log("===========AppLayoutRoutes 组件渲染===========");
        const logged = sessionStorage.getItem('logged'); //从本地缓存中取值
        return (
            <AppLayout>
                <Switch>
                    {/*张博开始*/}
                    {/*主页*/}
                    <Route path="/appLayout/home" component={Home}/>
                    {/*角色管理*/}
                    <Route path='/appLayout/role' component={Role}/>
                    {/*<IsLoginRoute logged={logged} path='/appLayout/role' component={Role}/>*/}
                    {/*重置密码*/}
                    {/*<Route path="/appLayout/resetPassword/:passwordType" component={ResetPassword}/>*/}
                    {/*借款*/}
                    <Route path="/appLayout/loan" component={Loan}/>
                    {/*采购*/}
                    <Route path="/appLayout/pur/:purchaseLoanStatus/:purchaseLoanId" component={Procurement}/>
                    {/*张博结束*/}

                    {/*肖亚男开始*/}
                    <Route path="/appLayout/func" component={Func}/>
                    {/*肖亚男结束*/}

                    {/*徐盼强开始*/}
                    {/*医院信息*/}
                    <Route path="/appLayout/HospitalMaintain" component={HospitalMaintain}/>
                    <Route path="/appLayout/HospitalMaintainBaseInfo" component={HospitalMaintainBaseInfo}/>
                    {/*银行分配供应商*/}
                    <Route path="/appLayout/BankDistributionSuppliers" component={BankDistributionSuppliers}/>
                    <Route path="/appLayout/ToBeAssignedDistribution/:bankId" component={ToBeAssignedDistribution}/>
                    {/*徐盼强结束*/}

                    {/*王强开始*/}
                    <Route path="/appLayout/BankMaintainBaseInfo" component={BankMaintainBaseInfo}/>
                    <Route path="/appLayout/BBMaintainBaseInfo" component={BBMaintainBaseInfo}/>
                    <Route path="/appLayout/FBMaintainBaseInfo" component={FBMaintainBaseInfo}/>
                    <Route path="/appLayout/fBMaintain" component={FBMaintain}/>
                    <Route path="/appLayout/hospitalAllotVendor" component={HospitalAllotVendor}/>
                    <Route path="/appLayout/vendorToBeAllocated/:hospitalId" component={VendorToBeAllocated}/>
                    {/*销售小票*/}
                    <Route path="/appLayout/borrowerMaintain" component={BorrowerMaintain}/>
                    <Route path="/appLayout/bbMaintain" component={BBMaintain}/>
                    <Route path="/appLayout/bankMaintain" component={BankMaintain}/>
                    <Route path="/appLayout/logOperationTable/" component={LogOperationTable}/>
                    {/*王强结束*/}
                    {/*徐东阳开始*/}
                    <Route path="/appLayout/user" component={User}/>
                    <Route path="/appLayout/sysParameter" component={SysParameter}/>
                    <Route path="/appLayout/userGroup" component={UserGroup}/>
                    {/*徐东阳结束*/}
                    <Route component={NoMatch}/>
                    {/*有规定但没有用到的页面*/}
                </Switch>
            </AppLayout>
        );
    }
}
