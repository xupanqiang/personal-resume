/*BseUrl*/
export const BASE_URL = 'http://localhost:8088';//前端访问地址
// export const BASE_URL = 'http://medical.lianliantech.cn';//前端访问地址
// export const BASE_URL = 'http://www.test.medical.cn';//前端访问地址
// export const BASE_URL = 'http://medical.lianliantech.cn';//前端访问地址
// export const API_BASE_URL = 'http://localhost:8089'; //后端api url
// export const API_BASE_URL = 'http://medical.lianliantech.cn/api'; //后端api url
// export const API_BASE_URL = 'http://www.test.medical.cn/api'; //后端api url
export const API_BASE_URL = 'http://medical.lianliantech.cn/api'; //后端api url
/*文件上传通用地址url地址*/
/*文件下载url地址*/
export const FILE_DOWNLOAD_URL = API_BASE_URL + '/file/download';
export const FILE_DOWNLOAD_HTTP_URL = API_BASE_URL + '/file/downloadUrl';
export const FILE_DOWNLOAD_ALL_URL = API_BASE_URL + '/file/downloadAll';
/*文件上传url地址*/
export const FILE_UPLOAD_URL = API_BASE_URL + '/file/upload';
//张博 开始
//--------角色开始
export const FIND_ROLES_BY_ROLE_NAME = '/rc/findRolesByRoleName'; //根据角色名称查询角色表信息
export const DELETE_ROLES_BY_ROLE_ID = '/rc/deleteRoleByRoleId'; //根据角色id删除角色表信息
export const FIND_FUNC_TREE_BY_ROLE_ID = '/rc/findFuncTreeByRoleId'; //根据角色id，查询功能树
export const FIND_ROLE_BY_ROLE_ID = '/rc/findRoleByRoleId'; //根据角色id查询角色对象
export const FIND_USER_INFO_BY_ROLE_ID = '/rc/findUserInfoByRoleId'; //根据角色id，查询用户分页
export const CREATE_ROLE = '/rc/createRole'; //角色保存并保存与功能和用户的对应关系的操作
export const UPDATE_ROLE = '/rc/updateRoleByRoleId'; //角色更新并更新与功能和用户的对应关系的操作
//--------角色结束
//--------登陆开始
export const LOGIN = '/user/login'; // 用户登陆
export const CHECK_PAYMENT_PASSWORD = '/user/checkPaymentPassword'; // 校验当前登录用户的支付密码是否正确的url
export const LOGOUT = '/user/logout'; // 用户登出
//--------登陆结束
//--------重置密码开始
export const RESET_LOGIN_PASSWORD_CHECK = '/user/resetLoginPasswordCheck'; //重置登陆密码，校验当前密码
export const UPDATE_LOGIN_PASSWORD = '/user/updateLoginPassword'; //重置登陆密码
export const FIND_RESET_LOGIN_V_CODE = '/user/findLoginResetVCode'; //重置登陆密码验证码
export const RESET_V_CODE_CHECK = '/user/resetVCodeCheck'; //重置登陆密码时，需要检验的验证码是否正确
export const CLEAN_REDIS_LOGIN_KEY = '/user/cleanRedisLoginKey'; //清除redis中登陆信息
/*找回密码重新打开的页面*/
export const RETRIEVE_PASSWORD = `${BASE_URL}/llkj/retrievePassword`;
export const VERIFICATION_MOBILE_URL = '/user/retrievePassword/verificationMobile/'; //验证用户是否已绑定手机号
export const RETRIEVE_PASSWORD_VCODE_URL = '/user/retrievePassword/retrievePasswordVCode/'; //找回密码发送验证码
export const VERIFICATION_RETRIEVE_VCODE_URL = '/user/retrievePassword/verificationRetrieveVCode/'; //验证验证码
export const RETRIEVE_UPDATE_PASSWORD_URL = '/user/retrievePassword/retrieveUpdatePassword/'; //修改密码
//--------重置密码开始结束
//--------借款开始
export const FIND_LOAN_AND_INTEREST_DETAILS = '/la/findLoanAndInterestDetails'; // 得到不同实体下的借款总额和各种利息详情
export const FIND_BANK_INFO_BY_PURCHASE_LOAN_ID = '/la/findBankInfoByPurchaseLoanId'; // 根据采购借款编号得到银行借款信息
export const FIND_LOAN_INFO_BY_PURCHASE_LOAN_ID = '/la/findLoanInfoByPurchaseLoanId'; // 根据采购借款编号得到借款信息
export const CREATE_CLAUSE = '/la/createClause'; // 创建医院补款
export const FIND_PUR_PAYOFF_BY_PURCHASE_LOAN_ID = '/la/findPurPayoffByPurchaseLoanId'; // 根据采购借款编号得到医院回款数据
export const CREATE_REPAYMENT_OF_VENDOR = '/la/createRepaymentOfVendor'; // 创建保存供应商发起还款数据
export const CALC_BANK_INTEREST = '/la/calcBankInterest'; // 计算银行利息
export const CREATE_LOAN_APPROVAL = '/la/createLoanApproval'; // 创建保存借款审批数据
//--------借款结束
//--------采购开始
export const FIND_PUR_LOAN_TABLE = '/pur/findPurLoanTable'; // 采购还款表格
export const FIND_HOSPITAL_NAME_BY_ENTITY_VALUE = '/attrHospital/findHospitalNameByEntityValue'; // 根据实体值得到医院名称, 只给创建采购时用
export const FIND_HOSPITAL_VENDOR_RELATIONS = '/pur/findHospitalVendorRelations'; // 得到当前医院所对应的供应商
export const CREATE_PUR = '/pur/createPur'; // 创建采购
export const FIND_CREATE_PUR_SHOW_INFO_BY_PURCHASE_LOAN_ID = '/pur/findCreatePurShowInfoByPurchaseLoanId'; // 根据采购借款 id 得到创建采购信息
export const FIND_ATTR_VENDOR_BY_VENDOR_ID = '/attrVendor/findAttrVendorByVendorId'; // 根据实体值得到供应商名称, 只给供应商发货时用
export const CREATE_VENDOR_SENT = '/pur/createVendorSent'; // 保存供应商发货信息
export const FIND_VENDOR_SENT_SHOW_INFO_BY_PURCHASE_LOAN_ID = '/pur/findVendorSentShowInfoByPurchaseLoanId'; // 根据采购借款 id 得到供应商发货信息
export const CREATE_HOSPITAL_CONFIRMS_RECEIPT = '/pur/createHospitalConfirmsReceipt'; // 保存医院确认信息
export const FIND_HOSPITAL_CONFIRMS_RECEIPT_SHOW_INFO_BY_PURCHASE_LOAN_ID = '/pur/findHospitalConfirmsReceiptShowInfoByPurchaseLoanId'; // 根据采购借款编号得到医院确认数据
export const UPDATE_PURCHASE_LOAN_INFO = '/pur/updatePurchaseLoanInfo'; // 更新采购借款申请基本信息表数据
export const FIND_VENDOR_BANK_RELATIONS = '/pur/findVendorBankRelations'; // 根据实体值得到供应商与银行的关系数据
export const CREATE_VENDOR_LOAN = '/pur/createVendorLoan'; // 保存供应商借款数据
export const FIND_ECHO_PICTURE_AND_BANK_BY_PURCHASE_LOAN_ID = '/pur/findEchoPictureAndBankByPurchaseLoanId'; // 根据采购借款编号得到回显图片和银行时需要的数据
export const FIND_BANK_BY_PURCHASE_LOAN_ID = 'pur/findBankByPurchaseLoanId'; // 根据采购借款编号得到所在借款银行
export const DELETE_FILE_LOAN_CONTRACT_BY_PURCHASE_LOAN_ID = '/pur/deleteFileLoanContractByPurchaseLoanId'; // 删除供应商附件
export const FIND_TABS_BY_ENTITY_TYPE = '/pur/findTabsByEntityType'; // 根据实体类型返回不同的 tabs
//--------采购结束
// 张博 结束


//肖亚男 开始
/*功能开始*/
export const FETCH_FUNC_URL = '/func/listByPage/';
export const DELETE_FUNC_URL = '/func/delete/';
export const FETCH_FUNC_TYPE_URL = '/func/getFuncTypeTree/';
export const FUNC_UPDATE_URL = '/func/update/';
export const FUNC_CREATE_URL = '/func/create/';
export const FUNC_GET_URL = '/func/get/';
//肖亚男 结束

//王强 开始
export const FETCH_STORE_URL = '/store/storeListByPage';//页面初始化分页查询门店信息
export const FETCH_ALLOTINT_STORE_URL = '/store/allotingStoreListByPage';//页面初始化分页查询待分配门店信息
export const FIND_OTHER_PAGE_STORE_URL = '/store/otherPageStore';//分页查询门店信息
export const DELETE_STORE_BY_STORE_ID = '/store/delete';//根据门店ID删除门店信息
export const STORE_UPDATE_URL = '/store/update';//编辑门店信息
export const STORE_CREATE_URL = '/store/createStore';//创建门店信息
export const FIND_BY_ID_OR_NAME = '/store/findByIdOrName';//搜索门店信息
export const DELETE_STORES_BY_STOREIDS = '/store/delStores';//批量删除门店信息
//库管员
export const FETCH_STORE_CLERK_URL = '/attrStoreClerk/attrStoreClerkListByPage';//页面初始化分页查询库管员信息
export const DELETE_STORE_CLERK_BY_CLERK_ID = '/attrStoreClerk/deleteAttrStoreClerk';//根据库管员ID删除库管员信息
export const STORE_CLERK_UPDATE_URL = '/attrStoreClerk/updateAttrStoreClerk';//编辑库管员信息
export const STORE_CLERK_CREATE_URL = '/attrStoreClerk/createAttrStoreClerk';//创建库管员信息
export const FIND_CLERK_BY_CLERKNAME_OR_CLERKID = '/attrStoreClerk/findAttrStoreClerkByIdOrName';//根据库管员id和姓名搜索库管员信息
export const DELETE_STORE_CLERKS_BY_CLERKIDS = '/attrStoreClerk/delAttrStoreClerks';//根据库管员id批量删除库管员信息
//品牌商
export const FETCH_ATTR_VENDOR_URL = '/attrVendor/attrVendorListByPage';//页面初始化分页查询品牌商信息
export const DELECT_ATTR_VENDOR_BY_VENDORIDS = '/attrVendor/deleteAttrVendors';//批量删除供应商信息
export const DELETE_ATTRVENDOR_BY_VENDORID = '/attrVendor/deleteAttrVendorById';//根据ID删除供应商信息
export const ATTR_VENDOR_UPDATE_URL = '/attrVendor/update';//编辑供应商信息
export const ATTR_VENDOR_CREATE_URL = '/attrVendor/createAttrVendor';//创建供应商基本信息
//银行
export const FETCH_ATTR_BANK_URL = '/attrBank/attrBankListByPage';//页面初始化分页查询银行基本信息
export const DELETE_ATTRBANK_BY_BANKID = '/attrBank/deleteBankById';
export const ATTR_BANK_UPDATE_URL = '/attrBank/update';//编辑银行信息
export const ATTR_BANK_CREATE_URL = '/attrBank/createAttrBank';//创建银行基本信息
export const DELETE_ATTRBANK_BY_ATTRBANKIDS = '/attrBank/delBanks';//批量删除银行信息
//借款人
export const FETCH_ATTR_BORROWER_URL = '/attrBorrower/attrBorrowerListByPage';//页面初始化分页查询借款人
export const DELETE_BORROWER_BY_BORROWERID = '/attrBorrower/deleteBorrowerById';//根据ID删除借款人
export const CREATE_ATTR_BORROWER = '/attrBorrower/createAttrBorrower';//创建借款人
export const DELETE_BORROWER_BY_BORROWERIDS = '/attrBorrower/delBorrowers';//批量删除借款人
export const EDIT_ATTR_BORROWER = '/attrBorrower/updateBorrower';//编辑借款人
//平台运营人员
export const FETCH_ATTR_OPERATOR_URL = '/attrOperator/attrOperatorByPage';//页面初始化分页加载平台运营人员信息
export const CREATE_ATTR_OPERATOR_URL = '/attrOperator/createAttrOperator';//创建平台运营人员信息
export const UPDATE_ATTR_OPERATOR_URL = '/attrOperator/updateOperator';//编辑平台运营人员信息
export const DEL_ATTR_OPERATOR_URL = '/attrOperator/deleteOperatorById';//单个删除平台运营人员
export const DEL_ATTR_OPERATORS_URL = '/attrOperator/delOperator';//批量删除平台运营人员
//分配库管员
export const STORE_ALLOT_CLERK_CREATE = '/storeAllotClerk/createStoreClerkAssignment';//门店分配库管员
export const FETCH_STORE_CLERK_ASSIGNMENT = '/storeAllotClerk/storeClerkAssignmentListByPage';//分页获取门店库管员对应关系
export const CANCLE_ALLOT_CLERK_CREATE = '/storeAllotClerk/cancelStoreClerkAssignment';//取消库管员分配
export const FETCH_STORE_CLERK_RELATION_URL = '/storeAllotClerk/attrStoreClerkRelationByPage';//页面初始化分页查询库管员信息
//基本信息维护
export const STORE_BASE_INFO_MAINTAIN = '/store/findByEntityValue';//门店基本信息维护
export const CLERK_BASE_INFO_MAINTAIN = '/attrStoreClerk/findClerkByEntityValue';//库管员基本信息维护
export const BANK_BASE_INFO_MAINTAIN = '/attrBank/findBankByEntityValue';//银行基本信息维护
export const VENDOR_BASE_INFO_MAINTAIN = '/attrVendor/findVendorByEntityValue';//供应商基本信息维护
export const BORROWER_BASE_INFO_MAINTAIN = '/attrBorrower/findBorrowerByEntityValue';//借款人基本信息维护
export const HOSPITSL_BASE_INFO_MAINTAIN = '/attrHospital/findHospitalByEntityValue';//医院基本信息维护
export const OPERATOR_BASE_INFO_MAINTAIN = '/attrOperator/findOperatorByEntityValue';//平台基本信息维护
export const OPERATOR_BASE_INFO_UPDATE_URL = '/info/updateOperator';//编辑平台基本信息
export const FETCH_STORE_BORROWER_RELATIONS_URL = '/store/storeBorrowerRelationsListByPage';//页面初始化加载门店
export const STORE_CLERK_INFO_UPDATE_URL = '/info/updateClerk';//编辑库管员信息
export const STORE_INFO_UPDATE_URL = '/info/updateStore';//编辑门店信息
export const BANK_INFO_UPDATE_URL = '/info/updateBank';//编辑银行信息
export const BORROWER_INFO_UPDATE_URL = '/info/updateBorrower';//编辑借款人信息
export const VENDOR_INFO_UPDATE_URL = '/info/updateVendor';//编辑供应商信息
export const HOSPITSL_INFO_UPDATE_URL = '/info/updateAttrHospital';//编辑供应商信息
//医院分配供应商
export const FETCH_ATTR_HOSPITAL_ALLOT = '/vendorHospital/findHospital';
export const FETCH_ATTR_VENDOR_ALLOT = '/vendorHospital/findVendor';
export const FETCH_HOSPITAL_SELECT_VENDOR = '/vendorHospital/findAllotedVendor';
export const HOSPITAL_ALLOT_VENDOR_URL = '/vendorHospital/vendorAllotHospital';
//借款人分配门店
export const BORROWER_ALLOT_STORE_SHAREHOLE_RATIO_URL = '/store/borrowerAllotStore';//借款人分配门店持股比例
export const BORROWER_ALLOT_STORE_URL = '/store/saveStoreBorrowerRelation';//下一步时保存借款人与门店关系
export const BORROWER_REMOVE_ALLOT_STORE = '/attrBorrower/removeAllot';//解除分配
export const FIND_SELECTED_STORE_BY_STOREIDS = '/store/findSelectedStores';//查询借款人要分配的门店信息
export const FIND_STORE_URL = '/attrBorrower/storeBorrowerListByPage';//查询借款人已分配门店信息
//销售出库
export const FETCH_STOCK_OUT_URL = '/stockSellOut/findStockSellOutByPage';//页面初始化分页查询销售出库信息
export const FETCH_FILE_SALES_DOC = '/stockSellOut/findFileSalesDoc';//页面初始化查询销售小票
export const CREATE_FILE_SALES_DOC = '/stockSellOut/createFileSalesDoc';//上传销售小票
export const UPDATE_SELL_OUTSTOCK = '/stockSellOut/updateStockSellOut';//修改销售出库单
export const WRITE_OFF_STOCK_SELL_OUT = '/stockSellOut/writeOffStockSellOut';//冲销销售出库单
export const SELECT_STORE_BY_CLERKID = '/store/findStoresByBorrowerId';//查询库管员所负责的门店
export const SELECT_STORE = '/store/selectStore';//查询所有的门店
export const STORE_FETCH_SELL_OUTSTOCK_URL = '/stockSellOut/ownStockSellOutByPage';//页面初始化查询门店自己的销售出库信息
export const FIND_SELL_OUT_STO_BY_BORROWERID = '/stockSellOut/findSellOutSto';//借款人查询多门店回款信息
export const FIND_SELL_OUT_STO_BY_STORE_ID = '/stockSellOut/findStoreSellOutSto';//借款人查询多门店回款信息
export const FIND_SELL_OUT_STO_BY_STOREID = '/stockSellOut/findSellOutStoByStoreId';//查询单个门店回款信息
export const FIND_ALL_STORE_SELL_OUT_STO = '/stockSellOut/findAllStoreSellOutSto';//平台查询所有门店回款信息
export const FIND_STOCK_OUT_MONITOR = '/stockSellOut/stockOutMonitor';//页面初始化加载销售出库监控
export const FIND_NO_STOCK_OUT_MONITOR = '/stockSellOut/findNotStockOut';//页面初始化加载未出库记录

export const RECEIVED_PAY_MONEY_SUCCESS = '/stockSellOut/receivedPayMoney';//回款

//初始库存
export const FETCH_STOCK_BALANCE_DATA = '/stockBalance/stockBalanceByPage';//初始化查询门店库存
export const UPDATE_STOCK_BALANCE_DATA = '/stockBalance/updateStockBalance';//编辑门店库存
//系统日志
export const FETCH_LOG_OPERATION_URL = '/logOperation/findLogOperationByPage';//初始化分页加载系统日志
//门店调货
export const FETCH_SELECT_STORE_LIST = '/stockBalance/findStoresByStoreId';//查询下拉选择门店集合
export const FETCH_SEARCH_SELECT_STORE_LIST = '/stockBalance/findSearchStoresByStoreId';//查询下拉选择门店集合
export const CLERK_OR_STORE_FETCH_STOCK_BALANCE = '/stockBalance/findStockBalance';//库管员或门店登录时查询门店库存
export const STORE_ADJUSTMENT = '/stockBalance/storeAdjustment';//调货
export const EDIT_SELECT_STORE_LIST = '/stockBalance/editStoreList';//库管员时门店下拉框集合变化
export const FETCH_STORE_ADJUSTMENT_DETAIL = '/stockBalance/adjustmentDetail';//查看调货详情
export const FETCH_IN_STORE_ADJUSTMENT_DETAIL = '/stockBalance/storeAdjustmentInDetail';//查看调货详情
export const FETCH_OUT_STORE_ADJUSTMENT_DETAIL = '/stockBalance/storeAdjustmentOutDetail';//查看调货详情

//风控
export const FETCH_RISK_MANAGEMENT = '/rm/findRiskManagementByPage';//页面初始化分页查询风控信息
export const FETCH_RISE_INFORMATION = '/rm/findBaseInformation/';//页面初始化加载风控详情抬头信息
export const FETCH_CREDIT_SITUATION = '/rm/findCreditSituation/';//页面初始化加载授信使用情况
export const FETCH_SALES_STATUS = '/rm/findSalesStatus/';//按时间段统计借款人名下所有门店的销售情况总计

//王强 结束

//徐东阳 开始
/*
 系统参数start
 */
export const FETCH_SYSPARAMETERS_URL = "/sysParam/listByPage";//查询系统参数列表
export const DELETE_SYSPARAMETERS_BY_PARA_ID = '/sysParam/deleteByParaId/'; //根据系统参数id删除系统参数表信息
export const GET_SYSPARAMETERS_URL = "/sysParam/get/";//点击编辑时
export const SYSPARAMETERS_UPDATE_URL = "/sysParam/update/";//更改
export const SYSPARAMETERS_CREATE_URL = "/sysParam/create/";//创建
/*
 系统参数end
 */

/*
 用户组start
 */
export const FIND_USERGROUPS_BY_USERGROUP_NAME = '/userGroup/findUserGroupsByUserGroupName'; //根据用户组名称查询用户组表信息
export const DELETE_USERGROUPS_BY_USERGROUP_ID = '/userGroup/deleteUserGroupByUserGroupId'; //根据用户组id删除用户组表信息
export const FIND_USERGROUP_BY_USERGROUP_ID = '/userGroup/findUserGroupByUserGroupId'; //根据用户组id，查询用户分页
export const FIND_USER_INFO_BY_USERGROUP_ID = '/userGroup/findUserInfoByUserGroupId'; //根据用户组id，查询用户分页
//export const FIND_ENTITY_BY_USERGROUP_ID = '/userGroup/findAttrStoreByUserGroupId'; //根据用户组id，查询门店分页
export const FIND_ENTITY_BY_USERGROUP_ID = '/userGroup/findAttrBorrowerByUserGroupId'; //根据用户组id，查询借款人分页
export const CREATE_USERGROUP = '/userGroup/createUserGroup'; //用户组保存并保存与功能和用户的对应关系的操作
export const UPDATE_USERGROUP = '/userGroup/updateUserGroupByUserGroupId'; //用户组更新并更新与功能和用户的对应关系的操作
/*
 用户组end
 */
/*
 用户start
 */
export const FIND_USERS_BY_PAGE = '/user/findUsersByPage'; //根据查询条件查询用户表信息
export const DELETE_USERS_BY_USER_ID = '/user/deleteUserByUserId'; //根据用户id删除用户表信息
export const EDIT_USER_PASSWORD_BY_USER_ID = '/user/editUserPassWordByUserId'; //根据用户id重置用户密码
export const FIND_USER_BY_USER_ID = '/user/findUserByUserId'; //根据用户id，查询用户
export const FIND_ENTITY_BY_ENTITY_VALUE = '/user/findEntityByEntityValue'; //根据用户id，查询门店分页
export const CREATE_USER = '/user/createUser'; //用户保存并保存与功能和用户的对应关系的操作
export const UPDATE_USER = '/user/updateUserByUserId'; //用户更新并更新与功能和用户的对应关系的操作
/*
 用户end
 */
//徐东阳 结束



//医院
export const FETCH_ATTR_HOSPITSL_URL = '/attrHospital/findAttrHospitalByPage';//页面初始化分页查询医院基本信息
// export const DELETE_ATTRHOSPITSL_BY_HOSPITSLID = '/attrHospital/delHospital';
export const ATTR_HOSPITSL_UPDATE_URL = '/attrHospital/updateAttrHospital';//编辑医院行信息
export const ATTR_HOSPITSL_CREATE_URL = '/attrHospital/createAttrHospital';//创建医院基本信息
export const DELETE_ATTRHOSPITSL_BY_ATTRATTRHOSPITSLIDSID = '/attrHospital/delAttrHospital';//删除医院信息
export const DELETE_ATTRHOSPITSL_BY_ATTRATTRHOSPITSLIDSIDS = '/attrHospital/delHospital';//批量删除医院信息


//银行分配供应商
export const FIND_SELECTED_BANK_BY_SUPPLIER_URL = '/vendorBank/findBank';//查询银行未分配供应商信息

export const FETCH_BANK_SELECT_VENDOR = '/vendorBank/findAllotedVendor';//页面初始化查询银行已分配的供应商

export const BANK_ALLOT_VENDOR_URL = '/vendorBank/bankAllotVendor';//银行分配供应商
