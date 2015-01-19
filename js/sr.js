/* 时间验证
  1.时间限制10年，
  2.时间年和年月不能混合检索
  3.时间年月不超过12个 .
  4.时间交叉的处理，不能交叉（年和年月都不能交叉）
 *huangsh 20150113
*/
var validateDate = function () {
    if (typeof _validateDate === "undefined") {
        return _validateDate = new function () {
            var _this = this;
            //this.MAX_YEAR = 10;
            //this.MAX_MONTH = 12;
            // this.choosedDate = {
            // "type": "",
            // "len": "0",
            // "data": []
            // };
            var _type = "", _num = 0, MAX_YEAR = 5, MAX_MONTH = 5, _tmpYear = "", _tmpLen = 0, _tmpArr = [], _arr = [];
            window.vdarr = _arr;
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
            this.getN = function () {
                return _num;
            }
            this.getT = function () {
                return _type;
            }
            this.getArr = function () {
                return _arr;
            }
            this.setMAX_MONTH = function (num) {
                this.MAX_MONTH = num;
            }
            function getType() {
                return _type;
            }
            function setType(type) {
                _type = type;
            }
            function isMixDate(type) {
                if (getType() == "") {
                    return false;
                }
                return getType() != type;
            }

            //遍历年月
            function getArrDate(year1, month1, year2, month2) {//小年在前
                var len, i, j = 0, k = 1, arr = [], str = "";
                for (j = 0; j < year2 - year1 + 1; j++) {
                    for (k = 1; k < 13; k++) {
                        if ((j == 0 && k < month1) || (j == (year2 - year1) && k > month2)) { continue; }
                        str = (year1 + j) + "" + (k > 9 ? k : ("0" + k));
                        arr.push(parseInt(str,10));
                    }
                }
                //console.log(arr);
                return arr;
            }
            //遍历年
            function getArrYear(year1, year2) {
                var arr = [], j;
                for (j = year2 - year1; j > -1; j--) {
                    arr.push(year2 - j);
                }
                return arr;
            }
            //验证年
            function isYearOverflow(year1, year2) {//小时间在前
                var len, i, k, arr = [], dateArr;
                for (i = 0; i < arguments.length; i++) {
                    arguments[i] = parseInt(arguments[i], 10);
                }
                if (arguments.length > 1) {

                    dateArr = getArrYear(year1, year2);

                    for (k = 0; k < dateArr.length; k++) {
                        if (_arr.indexOf(dateArr[k]) != -1) {
                            //console.log("copy detected");
                            return true;
                        }
                    }
                    len = year2 - year1+1;
                    arr = arr.concat(dateArr);

                } else {


                    if (_arr.indexOf(arguments[0]) != -1) {
                        //console.log("copy detected");
                        return true;
                    }
                    len = 1;
                    arr.push(arguments[0]);
                }
                //init("year");
                _tmpLen = len;
                _tmpArr = _tmpArr.concat(arr);
                return len + _num > MAX_YEAR;

            }
            //验证月
            function isMonthOverflow(year1, month1, year2, month2) {//小时间在前
                var len, i, j, k = 1,l, arr = [], str = "", dateArr;
                for (i = 0; i < arguments.length; i++) {
                    arguments[i] = parseInt(arguments[i], 10);
                }

                if (arguments.length > 3) {

                    dateArr = getArrDate(year1, month1, year2, month2);
                    for (l = 0; l < dateArr.length; l++) {
                        if (_arr.indexOf(dateArr[l]) != -1) {
                            //console.log("copy detected");
                            return true;
                        }
                    }
                    len = ((year2 - year1) * 12) - month1 + month2+1;
                    arr = arr.concat(dateArr);
                } else if (arguments.length==3) {//201001
                    var singleYearMonth = parseInt(arguments[0] + "" + ((parseInt(arguments[1]) > 9) ? arguments[1] : ("0"+arguments[1])));
                    if (_arr.indexOf(singleYearMonth) != -1) {
                        //console.log("copy detected");
                        return true;
                    }
                    len = 1;
                    arr.push(singleYearMonth);

                } else {
                    if (_arr.indexOf(arguments[0]) != -1) {
                        //console.log("copy detected");
                        return true;
                    }
                    len = 1;
                    arr.push(arguments[0]);
                }
                //init("month");
                _tmpLen = len;
                _tmpArr = _tmpArr.concat(arr);
                return len + _num > MAX_MONTH;
            }
            function doValidate() {
                //init();
                switch (arguments.length) {
                    case 1://单一年
                        //init("year");
                        rtnValue = (isMixDate("year") || isYearOverflow(arguments[0]));
                        _tmpYear = "year";
                        break;
                    case 2://两个年
                        rtnValue = (isMixDate("year") || isYearOverflow(arguments[0], arguments[1]));
                        _tmpYear = "year";
                        break;
                    case 3://年，月，type
                        rtnValue = (isMixDate("month") || isMonthOverflow(arguments[0], arguments[1], arguments[2]));
                        _tmpYear = "month";
                        break;
                    case 4://两个年月
                        rtnValue = (isMixDate("month") || isMonthOverflow(arguments[0], arguments[1], arguments[2], arguments[3]));
                        _tmpYear = "month";
                        break;
                }
            }
            //格式化
            this.formatDate = function (datestr) {
                datestr += "";
                switch (datestr.length) {
                    case 4://单一年
                        doValidate(datestr);

                        break;
                    case 6://单一年月
                        doValidate(datestr.slice(0, 4), datestr.slice(4), "month");
                        break;
                    case 9://多年
                        doValidate(datestr.slice(0, 4), datestr.slice(5));
                        break;
                    case 13://多个年月
                        doValidate(datestr.slice(0, 4), datestr.slice(4, 6), datestr.slice(7, 11), datestr.slice(11, 13));
                        break;
                }
                if (!rtnValue) {//通过的值要进行存储
                    setType(_tmpYear);//种类
                    setNum((getNum() + _tmpArr.length));
                    _arr = _arr.concat(_tmpArr);
                }
                _tmpArr.length = 0;

                return rtnValue;
            }
            //删除
            this.removeDate = function (datestr) {
                var tmpDate = [],m;
                datestr += "";

                switch (datestr.length) {
                    case 4://单一年
                        //doValidate(datestr);
                        _arr.splice(_arr.indexOf(parseInt(datestr,10)),1);
                        break;
                    case 6:
                        //doValidate(datestr.slice(0, 4), datestr.slice(4), "month");
                        _arr.splice(_arr.indexOf(parseInt(datestr, 10)), 1);
                        break;
                    case 9://多年
                        //doValidate(datestr.slice(0, 4), datestr.slice(5));
                        tmpDate = getArrYear(datestr.slice(0, 4), datestr.slice(5));
                        for (m = 0; m < tmpDate.length; m++) {
                            _arr.splice(_arr.indexOf(tmpDate[m]), 1);
                        }
                        
                        break;
                    case 13:
                        //doValidate(datestr.slice(0, 4), datestr.slice(4, 6), datestr.slice(7, 11), datestr.slice(11, 13));
                        tmpDate = getArrDate(datestr.slice(0, 4), datestr.slice(4, 6), datestr.slice(7, 11), datestr.slice(11, 13));
                        
                        for (m = 0; m < tmpDate.length;m++){
                            _arr.splice(_arr.indexOf(tmpDate[m]),1);
                        }
                        break;
                }

                if (1) {//进行存储
                    if (_arr.length < 1) {
                        setType("");//种类
                    }
                    setNum(_arr.length);
                    //if (console) {
                    //    // console.log(getNum());
                    //    // console.log(getType());
                    //    console.log(_arr);
                    //}
                }
                // if(console){
                // console.log(getNum());
                // console.log(getType());
                // }
                return rtnValue;
            }
            //end
        };
    } else {
        return _validateDate;
    }

}
