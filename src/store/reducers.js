/**
 * 创建人： XUPQ
 * 时间： 2018-09-19 下午6:10
 * 功能描述：合并所有的reduce
 */
import {combineReducers} from "redux-immutable";
import home from "../routes/home/modules/home";
import appLayout from "../routes/appLayout/modules/appLayout";
import logOperation from "../routes/sys/modules/logOperation";
import sysParameter from "../routes/sys/modules/sysParameter";
import userGroup from "../routes/sys/modules/userGroup";
import user from "../routes/sys/modules/user";
import role from "../routes/sys/modules/role";
import bBMaintain from "./../routes/po/modules/bBMaintain";
import bankMaintain from "./../routes/po/modules/bankMaintain";
import borrowerMaintain from "./../routes/po/modules/borrowerMaintain";
import fBMaintain from "./../routes/po/modules/fBMaintain";
import hospitalAllotVendor from "./../routes/po/modules/hospitalAllotVendor";
// import sellOutSto from "./../routes/sto/modules/sellOutSto";
// import payMoney from "./../routes/sto/modules/payMoney";
// import storeSellOutSto from "../routes/sto/modules/storeSellOutSto";
// import stockOutMonitor from "../routes/sto/modules/stockOutMonitor";
// import stockOutMonitorDetail from "../routes/sto/modules/stockOutMonitorDetail";
// import sellReceipt from "../routes/sto/modules/sellReceipt";
// import receivedPayment from "../routes/sto/modules/receivedPayment";
// import initialStoreBalance from "../routes/sto/modules/initialStoreBalance";
// import riskManagement from "../routes/sto/modules/riskManagement";
// import storeAdjustment from "../routes/sto/modules/storeAdjustment";
// import storeAdjustmentDetail from "../routes/sto/modules/storeAdjustmentDetail";
import bankMaintainBaseInfo from "./../routes/po/routes/poBaseInfo/modules/bankMaintainBaseInfo";
import bBMaintainBaseInfo from "./../routes/po/routes/poBaseInfo/modules/bBMaintainBaseInfo";
import borrowerMaintainBaseInfo from "./../routes/po/routes/poBaseInfo/modules/borrowerMaintainBaseInfo";
import fBMaintainBaseInfo from "./../routes/po/routes/poBaseInfo/modules/fBMaintainBaseInfo";
import login from "../routes/login/modules/login";
import loan from '../routes/la/modules/loan';
import procurement from '../routes/pur/modules/procurement';
// import sWMaintain from "../routes/po/modules/sWMaintain";
// import wallet from "../routes/wallet/modules/wallet";
import resetPassword from "../routes/sys/modules/resetPassword";
// import viewSto from "../routes/sto/modules/viewSto";
// import checkSto from "../routes/sto/modules/checkSto";
// import creQuery from "../routes/credit/modules/creQuery";
import msgReducer from "../js/msgReducer";
/*肖亚男开始*/
// import pur from "../routes/pur/modules/pur";
// import purEdit from "../routes/pur/modules/purEdit";
// import loan from "../routes/la/modules/loan";
// import loanEdit from "../routes/la/modules/loanEdit";
// import lr from "../routes/lr/modules/lr";
// import lrEdit from "../routes/lr/modules/lrEdit";
/*功能列表*/
import funcTable from "./../routes/sys/modules/funcTable";
/*功能form*/
import funcForm from "./../routes/sys/modules/funcForm";
/*找回密码*/
import retrievePassword from "../routes/login/modules/retrievePassword";
/*肖亚男结束*/


/*徐盼强 开始*/
import hospitalMaintain from "../routes/po/modules/hospitalMaintain";

import hospitalMaintainBaseInfo from "./../routes/po/routes/poBaseInfo/modules/hospitalMaintainBaseInfo";

import bankDistributionSuppliers from "../routes/po/modules/bankDistributionSuppliers";

/*徐盼强 结束*/

export default combineReducers({
    //张博 开始
    appLayout, //appLayout reducer
    role, // 角色权限
    login, // 登陆
    loan, // 借款
    procurement, // 采购
    resetPassword, // 重置密码
    home,
    msgReducer,
    //张博 结束

    //肖亚男 开始
    funcTable,
    funcForm,
    retrievePassword,
    //肖亚男 结束

    //王强 开始
    bBMaintain,
    bankMaintain,
    bankMaintainBaseInfo,
    bBMaintainBaseInfo,
    borrowerMaintain,
    borrowerMaintainBaseInfo,
    fBMaintain,
    logOperation,fBMaintainBaseInfo,hospitalAllotVendor,
    // sellOutSto, storeSellOutSto, receivedPayment, payMoney,
    // initialStoreBalance, sellReceipt, storeAdjustment, storeAdjustmentDetail,
    // stockOutMonitor, stockOutMonitorDetail, riskManagement,
    //王强 结束

    //徐东阳 开始
    sysParameter,
    userGroup,
    user,
    //徐东阳 结束

    //徐盼强 开始
    hospitalMaintain,
    hospitalMaintainBaseInfo,
    bankDistributionSuppliers,
    //徐盼强 结束
});