/*张博*/
export const YEAR_DAY = 360; //已登录
export const LOGGED_ON = '0'; //已登录
export const LOGGED_OUT = '1'; //已登出
export const ROLE_FIND_ALL_ROLES = -1; //查询全部角色
export const DECIMAL_DIGITS_WEIGHT_G = 3;//重量克保留一位
export const DECIMAL_DIGITS_MONEY = 2;//金额保留两位
export const DECIMAL_DIGITS_PERCENT = 2;//百分比保留两位
export const ONLY_LETTER_NUM = '[^\a-\z\A-\Z0-9]'; // 过滤特殊字符只能输入大小字符和数字
export const ONLY_NUM = /^[1-9]\d*$/; // 过滤特殊字符 只能输入1-9数字
export const ONLY_NUM1 = /^\+?[0-9]\d*$/; // 只能输入0-9数字
export const ONLY_NUM2 = /^[0-9]*\.?[0-9]+$/; // 只能输入0-9.0-9数字
export const DATE_FORMAT_TO_DATE = 'YYYY-MM-DD';
export const DATE_FORMAT_TO_MONTH = 'YYYY-MM';
export const DATE_FORMAT_TO_MONTH_TYPE1 = 'YYYYMM';
export const PUR_CREATED = '-c'; // 创建采购
export const VENDOR_SENT = '00'; // 供应商发货
export const HOSPITAL_CONFIRMS_RECEIPT = '10'; // 医院确认收货
export const VENDOR_LOAN = '20'; // 供应商借款
export const PLATFORM_REVIEW = '21'; // 平台审核
export const REVIEW_REFUSED = '22'; // 平台审核拒绝
export const BANK_APPROVAL = '30'; // 银行审批
export const APPROVAL_REFUSED = '31'; // 审批拒绝
export const TO_BE_PAID = '32'; // 待放款
export const ALREADY_PAID = '40'; // 已放款
export const HOSPITAL_PAYMENT = '50'; // 医院回款
export const REPAYMENT_OF_VENDOR = '70'; // 供应商还款
export const REPAYMENTS = '80'; // 已还款
export const CANCELLED = '90'; // 已取消
export const RESUME = '1'; // 法人配偶简历、法人资产清单
export const CREDIT_APPLICATION = '2'; // 授信申请书
export const COMPANY_POLICY = '3'; // 工商局调档的公司章程、验资报告、企业注册信息查询单
export const COMPANY_PROFILE = '4'; // 企业简介
export const PURCHASE_AND_SALES_CONTRACT = '5'; // 与授信业务有关的购销合同、土地房屋租赁协议、项目协议、有关批文、证明等
export const CORPORATE = '6'; // 企业法人、占比超过20%股东和财务人员简介
export const AUDIT_REPORT = '7'; // 申请期前三年的年度审计报告（或报表）、近期的月报表（资产负债表、利润表）。要有近期财务报表科目明细
export const CLIENT_NAME = '8'; // 上下游五家客户名称及所占业务量、企业及法人股东贷款明细
export const TAX = '9'; // 企业近一年纳税申报登记复印件、税收通用缴款书'
export const FAILED_APPROVE = 0; // 审批失败
export const SUCCESSFUL_APPROVAL = 1; // 审批成功
/*张博*/
/*肖亚男*/
/*当前登录用户身份*/
export const ENTRY_TYPE_BANK = "1";//银行
export const ENTRY_TYPE_HOSPITAL = "2";//医院
export const ENTRY_TYPE_VENDOR = "3";//供应商
export const ENTRY_TYPE_PLATFORM = "4";//平台


/*角色对应关系*/
export const ROLE_TYPE_BANK = 1;//银行
export const ROLE_TYPE_HOSPITAL = 2;//医院
export const ROLE_TYPE_VENDOR = 3;//供应商
export const ROLE_TYPE_PLATFORM = 4;//平台
export const ROLE_TYPE_ADMIN = 5;//系统管理员
/*功能类型*/
export const FUNC_TYPE_MENU = '0';//菜单
export const FUNC_TYPE_API = '1';//Api
export const FUNC_TYPE_ELEMENT = '2';//组件


/*采购相关*/
/*肖亚男*/
/*徐东阳*/
export const CHEAK_MOBILO = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;//手机号码校验
export const CHEAK_NUMBER = /^[0-9]*.?[0-9]*$/;//正浮点(只能输入数字和小数点)
export const CHEAK_EMAIL = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;//邮箱校验
/*用户实体类型1-银行,2-品牌商,3-门店,4-库管员,5-平台,6-借款人*/
export const USER_ENTITY_TYPE_BANK = '1';//1-银行
export const USER_ENTITY_TYPE_HOSPITAL = '2';//2-医院
export const USER_ENTITY_TYPE_VENDOR = '3';//3-品牌商
export const USER_ENTITY_TYPE_PLATFORM = '4';//4-平台
/*徐东阳*/
/*王强*/
export const CONPANY_TYPE_OWNER_COMPANY = "1";//个人独资企业
export const CONPANY_TYPE_JOIN_COMPANY = "2";//合伙企业
export const CONPANY_TYPE_CO_LTD = "3";//有限责任公司
export const SCALE_TYPE_BIG_MARKET = "1";//大型商场
export const SCALE_TYPE_MARKET = "2";//商超店
export const SCALE_TYPE_STREET_SHOP = "3";//街边店
export const PROPERTY_TYPE_OWNER = "1";//自有
export const PROPERTY_TYPE_LEASE = "2";//租赁
export const SEX_OF_MAN = "1";//男
export const SEX_OF_WOMAN = "2";//女
export const VENDOR_TYPE_DEALER = '1';//经销商
export const VENDOR_TYPE_BRAND_MAKER = "2";//品牌商
export const MARRIAGE_YES = "1";//已婚
export const MARRIAGE_NO = "2";//未婚
export const YES = "1";//是
export const NO = "2";//否
export const REALESTATE_TYPE_BUILD_SELF = "1";//自建
export const REALESTATE_TYPE_PURCHASE_MORTGAGE_NO = "2";//自购无按揭
export const REALESTATE_TYPE_MORTGAGE_YES = "3";//按揭
export const REALESTATE_TYPE_RENT = "4";//租用
export const REALESTATE_TYPE_RELATIVES_HOUSE = "5";//亲属住房
export const REALESTATE_TYPE_ORGANIZATION_HOUSE = "6";//单位住房

/*王强*/