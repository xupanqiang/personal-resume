/**
 * 创建人： XUPQ
 * 时间： 2018-09-19 下午5:01
 * 功能描述：生产时布局路由设置
 */
import React from "react";
import {Route, Switch} from "react-router-dom";
import AppLayout from "./appLayout/components/AppLayout";
import NoMatch from "bundle-loader?lazy&name=NoMatchALR!./stateCode/components/NoMatch";
// import UserInfo from "bundle-loader?lazy&name=UserInfo!../routes/po/components/UserInfo";
import BankMaintain from "bundle-loader?lazy&name=BankMaintain!../routes/po/components/BankMaintain";
import BorrowerMaintain from "bundle-loader?lazy&name=BorrowerMaintain!../routes/po/components/BorrowerMaintain";
import BBMaintain from "bundle-loader?lazy&name=BBMaintain!../routes/po/components/BBMaintain";
import Home from "bundle-loader?lazy&name=Home!../routes/home/components/Home";
import Loan from 'bundle-loader?lazy&name=Loan!../routes/la/components/Loan';
import Procurement from 'bundle-loader?lazy&name=Procurement!../routes/pur/components/Procurement';
/*肖亚男开始*/
import Func from "bundle-loader?lazy&name=Func!../routes/sys/components/Func";
/*肖亚男结束*/

/* 王强开始*/
import BankMaintainBaseInfo from "bundle-loader?lazy&name=BankMaintainBaseInfo!../routes/po/routes/poBaseInfo/components/BankMaintainBaseInfo";
import BBMaintainBaseInfo from "bundle-loader?lazy&name=BBMaintainBaseInfo!../routes/po/routes/poBaseInfo/components/BBMaintainBaseInfo";
import BorrowerMaintainBaseInfo from "bundle-loader?lazy&name=BorrowerMaintainBaseInfo!../routes/po/routes/poBaseInfo/components/BorrowerMaintainBaseInfo";
import FBMaintainBaseInfo from "bundle-loader?lazy&name=FBMaintainBaseInfo!../routes/po/routes/poBaseInfo/components/FBMaintainBaseInfo";
import FBMaintain from "bundle-loader?lazy&name=FBMaintain!../routes/po/components/FBMaintain";
import HospitalAllotVendor from "bundle-loader?lazy&name=FBMaintain!../routes/po/components/HospitalAllotVendor";
import VendorToBeAllocated from "bundle-loader?lazy&name=FBMaintain!../routes/po/components/VendorToBeAllocated";
import LogOperationTable from "bundle-loader?lazy&name=LogOperationTable!../routes/sys/components/LogOperationTable";
/* 王强结束*/
import Role from "bundle-loader?lazy&name=Role!../routes/sys/components/Role";
import UserGroup from "bundle-loader?lazy&name=UserGroup!../routes/sys/components/UserGroup";
import User from "bundle-loader?lazy&name=User!./sys/components/User";
import SysParameter from "bundle-loader?lazy&name=SysParameter!../routes/sys/components/SysParameter";
import {createComponent} from "../components/router/RouterTrick";
/*判断session失效，相关引用*/

/* 徐盼强开始*/
/*医院信息*/
import HospitalMaintain from "bundle-loader?lazy&name=HospitalMaintain!../routes/po/components/HospitalMaintain";
import HospitalMaintainBaseInfo from "bundle-loader?lazy&name=HospitalMaintainBaseInfo!../routes/po/routes/poBaseInfo/components/HospitalMaintainBaseInfo";
/*银行分配供应商*/
import BankDistributionSuppliers from "bundle-loader?lazy&name=BankDistributionSuppliers!../routes/po/components/BankDistributionSuppliers";
import ToBeAssignedDistribution from "bundle-loader?lazy&name=ToBeAssignedDistribution!../routes/po/components/ToBeAssignedDistribution";
/* 徐盼强结束*/


class AppLayoutRoutesPROD extends React.Component {


    render() {
        console.log("===========AppLayoutRoutes 组件渲染===========");
        const logged = sessionStorage.getItem('logged'); //从本地缓存中取值
        return (
            <AppLayout>
                <Switch>
                    {/*张博开始*/}
                    {/*主页*/}
                    <Route path="/appLayout/home" component={createComponent(Home)}/>
                    <Route path='/appLayout/role' component={createComponent(Role)}/>
                    {/*重置密码*/}
                    {/*<Route path="/appLayout/resetPassword/:passwordType" component={createComponent(ResetPassword)}/>*/}
                    {/*借款*/}
                    <Route path="/appLayout/loan" component={createComponent(Loan)}/>
                    {/*采购*/}
                    <Route path="/appLayout/pur/:purchaseLoanStatus/:purchaseLoanId" component={createComponent(Procurement)}/>
                    {/*张博结束*/}

                    {/*肖亚男开始*/}
                    <Route path="/appLayout/func" component={createComponent(Func)}/>
                    {/*肖亚男结束*/}

                    {/*徐盼强开始*/}
                    {/*医院信息*/}
                    <Route path="/appLayout/HospitalMaintain" component={createComponent(HospitalMaintain)}/>
                    <Route path="/appLayout/HospitalMaintainBaseInfo" component={createComponent(HospitalMaintainBaseInfo)}/>
                    {/*银行分配供应商*/}
                    <Route path="/appLayout/BankDistributionSuppliers" component={createComponent(BankDistributionSuppliers)}/>
                    <Route path="/appLayout/ToBeAssignedDistribution/:bankId" component={createComponent(ToBeAssignedDistribution)}/>
                    {/*徐盼强结束*/}

                    {/*王强开始*/}
                    <Route path="/appLayout/BankMaintainBaseInfo" component={createComponent(BankMaintainBaseInfo)}/>
                    <Route path="/appLayout/BBMaintainBaseInfo" component={createComponent(BBMaintainBaseInfo)}/>
                    <Route path="/appLayout/FBMaintainBaseInfo" component={createComponent(FBMaintainBaseInfo)}/>
                    <Route path="/appLayout/hospitalAllotVendor" component={createComponent(HospitalAllotVendor)}/>
                    <Route path="/appLayout/vendorToBeAllocated/:hospitalId" component={createComponent(VendorToBeAllocated)}/>
                    <Route path="/appLayout/BorrowerMaintainBaseInfo"
                           component={createComponent(BorrowerMaintainBaseInfo)}/>
                    <Route path="/appLayout/fBMaintain" component={createComponent(FBMaintain)}/>
                    {/*销售小票*/}
                    <Route path="/appLayout/borrowerMaintain" component={createComponent(BorrowerMaintain)}/>
                    <Route path="/appLayout/bbMaintain" component={createComponent(BBMaintain)}/>
                    <Route path="/appLayout/bankMaintain" component={createComponent(BankMaintain)}/>
                    <Route path="/appLayout/logOperationTable/" component={createComponent(LogOperationTable)}/>
                    {/*王强结束*/}
                    {/*徐东阳开始*/}
                    <Route path="/appLayout/user" component={createComponent(User)}/>
                    <Route path="/appLayout/sysParameter" component={createComponent(SysParameter)}/>
                    <Route path="/appLayout/userGroup" component={createComponent(UserGroup)}/>
                    {/*徐东阳结束*/}
                    {/*无匹配页面*/}
                    <Route component={createComponent(NoMatch)}/>
                    {/*有规定但没有用到的页面*/}
                </Switch>
            </AppLayout>
        );
    }
}

export default AppLayoutRoutesPROD;