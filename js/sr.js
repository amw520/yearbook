/* 时间验证
  1.时间限制10年，
  2.时间年和年月不能混合检索
  3.时间年月不超过12个 .
  4.时间交叉的处理，不能交叉（年和年月都不能交叉）
 *huangsh 20150113
*/
var validateDate = function () {
	if(typeof _validateDate==="undefined"){
		return _validateDate=new function(){
			    var _this=this;
				//this.MAX_YEAR = 10;
				//this.MAX_MONTH = 12;
				// this.choosedDate = {
					// "type": "",
					// "len": "0",
					// "data": []
					// };
					var _type="", _num = 0,MAX_YEAR = 10,MAX_MONTH = 12,_tmpYear="",_tmpLen=0;
					var rtnValue = true;
					function init(type) {
						if (typeof _type === undefined) {
							_type = type;
						}
					}
					function setNum(num) {
						_num = num;
					}
					function getNum() {
						return _num;
					}
					this.getN=function(){
						return _num;
					}
					this.getT=function(){
						return _type;
					}
					this.setMAX_MONTH=function(num){
						this.MAX_MONTH=num;
					}
					function getType(){
						return _type;
					}
					function setType(type){
						_type=type;
					}
					function isMixDate(type) {
						if(getType()==""){
							return false;
						}
						return getType() != type;
					}
					//验证年
					function isYearOverflow(year1, year2) {
						var len,i;
						for(i=arguments.length;i>0;i--){
							arguments[i]=parseInt(arguments[i],10);
						}
						if (arguments.length > 1) {
							len = year1 > year2 ? year1 - year2 : year2 - year1;
						} else {
							len = 1;
						}
						//init("year");
						_tmpLen=len;
						return len + _num > MAX_YEAR;

					}
					//验证月
					function isMonthOverflow(year1, month1, year2, month2) {//小时间在前
						var len,i;
						for(i=arguments.length;i>0;i--){
							arguments[i]=parseInt(arguments[i],10);
						}

						if (arguments.length > 3) {
							len = ((year1 - year2) * 12) - month1 + month2;
						} else {
							len = 1;
						}
						//init("month");
						_tmpLen=len;
						return len + _num > MAX_MONTH;
					}
					function doValidate() {
						//init();
						switch (arguments.length) {
							case 1://单一年
								//init("year");
								rtnValue = (isMixDate("year") || isYearOverflow(arguments[0]));
								_tmpYear="year";
								break;
							case 2://两个年
								rtnValue = (isMixDate("year") || isYearOverflow(arguments[0], arguments[1]));
								_tmpYear="year";
								break;
							case 3://年，月，type
								rtnValue = (isMixDate("month") || isMonthOverflow(arguments[0], arguments[1], arguments[2]));
								_tmpYear="month";
								break;
							case 4://两个年月
								rtnValue = (isMixDate("month") || isMonthOverflow(arguments[0], arguments[1], arguments[2], arguments[3]));
								_tmpYear="month";
								break;
						}
					}
					//格式化
					this.formatDate=function (datestr) {
						datestr+="";
						switch (datestr.length) {
							case 4:
								doValidate(datestr);
								break;
							case 6:
								doValidate(datestr.slice(0, 4), datestr.slice(4), "month");
								break;
							case 9:
								doValidate(datestr.slice(0, 4), datestr.slice(5));
								break;
							case 13:
								doValidate(datestr.slice(0, 4), datestr.slice(4, 6), datestr.slice(7, 11), datestr.slice(11, 13));
								break;
						}
						if(!rtnValue){//通过的值要进行存储
							setType(_tmpYear);//种类
							setNum(_tmpLen+getNum());
						}
						if(console){
							console.log(getNum());
							console.log(getType());
						}
						return rtnValue;
					}
			//end
		};
	} else {
		return _validateDate;
	}

}

    //验证交叉日期
// validateDate.prototype.isMixDate=function (type) {
        // if (this.getType() == "") {
            // return false;
        // }
        // return this.getType() == type ? false : true;
    // }
	// validateDate.prototype.year=10;
	// validateDate.myear=15;


var foo=new validateDate();
var bar=new validateDate();