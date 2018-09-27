import {fork} from "redux-saga/effects";
import {watchSagaMonitor} from "./../js/sagaUtil";
import {watchRoleSagaMonitor} from "./../routes/sys/modules/roleSaga";
import {refreshSysParametersMonitor} from "./../routes/sys/modules/sysParameterSaga";
import {watchAttrVendorSagaMonitor} from "./../routes/po/modules/bBMaintainSaga";
import {watchAttrBankSagaMonitor} from "./../routes/po/modules/bankMaintainSaga";
import {watchOperatorSagaMonitor} from "./../routes/po/modules/fBMaintainSaga";
import {watchHospitalAllotVendorSagaMonitor} from "./../routes/po/modules/hospitalAllotVendorSaga";
// import {watchSellOutStoSagaMonitor} from "./../routes/sto/modules/sellOutStoSaga";
// import {watchStockBalanceMonitor} from "./../routes/sto/modules/initialStoreBalanceSaga";
// import {watchPayMoneySagaMonitor} from "./../routes/sto/modules/payMoneySaga";
// import {watchstoreAdjustmentSagaMonitor} from "./../routes/sto/modules/storeAdjustmentSaga";
import {watchAttrBorrowerSagaMonitor} from "./../routes/po/modules/borrowerMaintainSaga";
import {watchLoginSagaMonitor} from "./../routes/login/modules/loginSaga";
import {watchProcurementSagaMonitor} from './../routes/pur/modules/procurementSaga';
import {watchLoanSagaMonitor} from './../routes/la/modules/loanSaga';
import {watchUserGroupSagaMonitor} from "./../routes/sys/modules/userGroupSaga";
import {watchUserSagaMonitor} from "./../routes/sys/modules/userSaga";
// import {walletSagaMonitor} from "./../routes/wallet/modules/walletSaga";

/*肖亚男开始*/
// import {loanInfoMonitor} from "./../routes/la/modules/loanSaga";
// import {purInfoMonitor} from "./../routes/pur/modules/purSaga";
// import {lrInfoMonitor} from "./../routes/lr/modules/lrSaga";
import {refreshFunctionsMonitor} from "./../routes/sys/modules/funcSaga";
/*肖亚男结束*/

// import {checkStoSagaMonitor} from './../routes/sto/modules/checkStoSaga';
// import {watchCreQuerySagaMonitor} from './../routes/credit/modules/creQuerySaga';




//徐盼强
import {watchAttrHospitalSagaMonitor} from "./../routes/po/modules/hospitalMaintainSaga";
import {watchBankSuppliersSagaMonitor} from "./../routes/po/modules/bankDistributionSuppliersSaga";
//徐盼强
/**
 * 创建人： 张博
 * 时间： 2017-06-19 下午2:47
 * 功能描述：合并saga
 */
export default function* rootSaga() {
    yield [
        fork(watchSagaMonitor),
        //张博
        fork(watchRoleSagaMonitor),
        fork(watchLoginSagaMonitor),
        fork(watchProcurementSagaMonitor),
        fork(watchLoanSagaMonitor),
        // fork(walletSagaMonitor),
        // fork(checkStoSagaMonitor),
        // fork(watchCreQuerySagaMonitor),
        //张博
        //肖亚男
        fork(refreshFunctionsMonitor),
        //肖亚男
        //徐东阳
        fork(refreshSysParametersMonitor),
        fork(watchUserGroupSagaMonitor),
        fork(watchUserSagaMonitor),
        //徐东阳
        //王强
        fork(watchAttrVendorSagaMonitor),
        fork(watchAttrBankSagaMonitor),
        fork(watchAttrBorrowerSagaMonitor),
        // fork(watchSellOutStoSagaMonitor),
        // fork(watchPayMoneySagaMonitor),
        fork(watchOperatorSagaMonitor),
        fork(watchHospitalAllotVendorSagaMonitor),
        // fork(watchStockBalanceMonitor),
        // fork(watchstoreAdjustmentSagaMonitor),
        //王强
        //徐盼强
        fork(watchAttrHospitalSagaMonitor),
        fork(watchBankSuppliersSagaMonitor),
        //徐盼强
    ];
}