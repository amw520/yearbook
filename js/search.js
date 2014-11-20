/*
*入口
*/
$(document).ready(function () {
    /*简单检索*/
    if ($.urlPara(curUrl, "q").length > 0) {
        $("#chooseDiv").hide();
        yearbook.loadSearchKey(yearbook.searchKey());
        //yearbook.css();
        yearbook.doSearch();
    }
    yearbook.css();

    /*高级检索框*/
    $(".mod-extend").delegate(".btn-extend", "click", function () {
        var seabtn = $(".mod-btns").hasClass("dn");
        if (!seabtn) {
            $(".mod-btns").addClass("dn");
            $(this).addClass("on");
            $("#chooseDiv").hide();
            $(this).html("展开");
        }
        else {
            $(".mod-btns").removeClass("dn");
            $("#chooseDiv").show();
            $(this).removeClass("on");
            $(this).html("收起");
        }
    });

    //隐藏指标事件
    $(document).delegate(".js_indicator", "mouseleave", function (e) {
        if ($(e.toElement).parents("#dotcon_dataexplain").size() <= 0) {
            $("#dotcon_dataexplain").hide();
        }
    });
    $(document).delegate("#dotcon_dataexplain", "mouseleave", function (e) {
        if ($(e.toElement).parents(".js_indicator").size() <= 0) {
            $("#dotcon_dataexplain").hide();
        }
    });
    //隐藏来源事件
    $(document).delegate(".js_data", "mouseleave", function (e) {
        if ($(e.toElement).parents("#dotcon_dataorgin").size() <= 0) {
            $("#dotcon_dataorgin").hide();
        }
    });
    $(document).delegate("#dotcon_dataorgin", "mouseleave", function (e) {
        if ($(e.toElement).parents(".js_data").size() <= 0) {
            $("#dotcon_dataorgin").hide();
        }
    });



    /*单击删除已选*/
    $(".choosed-tags").delegate(".tag-sch", "click", function () {
        $(this).remove();
    });
    /*高级检索*/
});

var yearbook = yearbook || {};
var curUrl = document.location + "";
var pid = $.urlPara(curUrl, "pid");

yearbook.searchKey = function () {
    var q = decodeURIComponent($.urlPara(curUrl, "q"));
    var qarr = q.split('/=/');
    var rs = {};
    rs.area = qarr[0];
    rs.indicator = qarr[2];
    rs.statisticclass = qarr[1];
    rs.date = qarr[3];
    return rs;
};

/*
请求数据
*/
yearbook.doSearch = function () {
    var url = Apabi.orgUrl + "?pid=yearbook25.search&view=json&type=search&st=adv";
    var param = yearbook.createSearchParam();
    //param = "&q=2001%2c2011%2f%3d%2f行政区划%2F%3D%2F广州&sf=date%20indicator%20area"
    //url = url + "&q=" + encodeURIComponent(param.q) + "&sf=" + encodeURIComponent(param.sf)+"&_="+new Date().getTime();
    var pdata = {};
    pdata.view = "json";
    pdata.type = "search";
    pdata.st = "adv";
    pdata.q = encodeURIComponent(param.q);
    pdata.sf = encodeURIComponent(param.sf);
    pdata._ = new Date().getTime();
    url = Apabi.orgUrl + "?pid=yearbook25.search";
    $.post(url, pdata, function (data) {
        var rs = eval('(' + data.PageModel.Content.value + ')');
        if (rs.Code == 0) {
            var ret = eval('(' + rs.Data + ')');
            yearbook.loadResult(ret);
        }
        else {
            //alert("检索出错");
        }
    }, "json");
}

/*
生成检索参数
*/
yearbook.createSearchParam = function () {
    var _area = ''; var _indicator = ''; var _statisticclass = ''; var _date = ''; var q = ''; var sf = '';
    var span_area = $(".js_area").find("span");
    for (var i = 0; i < span_area.length - 1; i++) { _area += span_area.eq(i).text() + "$=$"; } _area += span_area.eq(span_area.length - 1).text();
    var span_indi = $(".js_indicator").find("span");
    for (var i = 0; i < span_indi.length - 1; i++) { _indicator += span_indi.eq(i).text() + "$=$"; } _indicator += span_indi.eq(span_indi.length - 1).text();
    var span_stat = $(".js_statisticclass").find("span");
    for (var i = 0; i < span_stat.length - 1; i++) { _statisticclass += span_stat.eq(i).text() + "$=$"; } _statisticclass += span_stat.eq(span_stat.length - 1).text();
    var span_date = $(".js_date").find("span");
    for (var i = 0; i < span_date.length - 1; i++) { _date += span_date.eq(i).text() + "$=$"; } _date += span_date.eq(span_area.length - 1).text();
    if (_area != null && _area != '') {
        q += _area;
        sf += "area";
    }
    if (_indicator != null && _indicator != '') {
        q += "/=/" + _indicator;
        sf += "%20indicator"
    }
    if (_statisticclass != null && _statisticclass != '') {
        q += "/=/" + _statisticclass;
        sf += "%20class";
    }
    if (_date != null && _date != '') {
        q += "/=/" + _date;
        sf += "%20date";
    }
    return { "q": q, "sf": sf };
}

/*
加载检索结果
*/
yearbook.loadResult = function (data) {
    data = yearbook.formatSearchResult(data);
    window.searchresult = data;
    console.log(data);
    var htmlstr = doT.template(document.getElementById('dottp_searchlist').value)(data);
    document.getElementById('dotcon_searchlist').innerHTML += htmlstr;
};

/*
加载已选检索条件
*/
yearbook.loadSearchKey = function (data) {
    //var htmlstr = doT.template(document.getElementById('dottp_choosedkey').value)(data);
    //document.getElementById('dotcon_choosedkey').innerHTML += htmlstr;
    $("div.js_area").append("<span class=\"tag-sch\">" + data.area + "</span>");
    $("div.js_indicator").append("<span class=\"tag-sch\">" + data.indicator + "</span>");
    $("div.js_statisticclass").append("<span class=\"tag-sch\">" + data.statisticclass + "</span>");
    $("div.js_date").append("<span class=\"tag-sch\">" + data.date + "</span>");
};

/*
已选检索条件区域对齐
*/
yearbook.css = function () {
    var _h = [$(".mod-area").height(), $(".mod-indextt").height(), $(".mod-statictt").height(), $(".mod-timett").height()];
    var h = Math.max.apply(Math, _h);
    if (h < 75) h = 75;
    $(".mod-area").height(h); $(".mod-indextt").height(h); $(".mod-statictt").height(h); $(".mod-timett").height(h);
};

/*
格式化检索结果
*/
yearbook.formatSearchResult = function (data) {
    var result = new Array();//整理后的表格数据
    var th = new Array();//存储表头
    var repeat = new Array();
    var indicatinfo = new Array();//存储指标解释
    var rs = {};
    th[0] = "area";
    th[1] = "indicator";
    th[2] = "unit";
    th[3] = "statisticclass";
    var _num = data.results.bindings.length;
    for (var i = 0; i < _num; i++) {
        var row = new Array();//存储一行
        var _area = data.results.bindings[i].area.value.trim() || '';
        var _indicator = data.results.bindings[i].indicator.value.trim() || '';
        var _statisticclass = data.results.bindings[i].class.value.trim() || '';
        var _date = data.results.bindings[i].date.value.trim() || '';
        var _unit = data.results.bindings[i].unit.value.trim() || '';
        var _value = data.results.bindings[i].value.value.trim() || '';
        var _indicatinfo = data.results.bindings[i].indicatinfo.value.trim() || '';
        var _source = data.results.bindings[i].source.value.trim() || '';

        if (i == 0) {
            th[4] = _date;
            row[0] = { "key": th[0], "value": _area, "type": th[0] };
            row[1] = { "key": th[1], "value": _indicator, "type": th[1] };
            row[2] = { "key": th[2], "value": _unit, "type": th[2] };
            row[3] = { "key": th[3], "value": _statisticclass, "type": th[3] };
            row[4] = { "key": th[4], "type": "data", "data": [{ "value": _value, "source": _source }] };
            result.push(row);
            indicatinfo[i] = { "name": _indicator, "datas": _indicatinfo };
            repeat[i] = { "value": _area + '_' + _indicator + '_' + _statisticclass + '_' + _date, "col": row.length - 1, "row": result.length - 1 };
        }
        else {
            if (formatData.checkTh(th, _date) == 0) {
                th.push(_date);
                result = formatData.addCol(th, result);
            }
            if (formatData.checkIndicatinfo(indicatinfo, _indicator) == 0) {
                indicatinfo.push({ "name": _indicator, "datas": _indicatinfo });
            }
            var reprow = formatData.checkRepeatData(_area, _indicator, _statisticclass, _date, repeat);
            if (reprow == 0) {//no repeat               
                var rc = formatData.checkRowOrCol(_area, _indicator, _statisticclass, result);
                if (rc == 0) {//增加一行，补齐时间列
                    row = formatData.addDateCol(th);
                    row[0] = { "key": th[0], "value": _area, "type": th[0] };
                    row[1] = { "key": th[1], "value": _indicator, "type": th[1] };
                    row[2] = { "key": th[2], "value": _unit, "type": th[2] };
                    row[3] = { "key": th[3], "value": _statisticclass, "type": th[3] };
                    row[row.length - 1] = { "key": th[th.length - 1], "type": "data", "data": [{ "value": _value, "source": _source }] };
                    result.push(row);
                    repeat[repeat.length] = { "value": _area + '_' + _indicator + '_' + _statisticclass + '_' + _date, "col": row.length - 1, "row": result.length - 1 };
                }
                else {//在指定行追加一列
                    row = result[rc - 1];
                    row[row.length - 1] = { "key": _date, "type": "data", "data": [{ "value": _value, "source": _source }] };
                    result[rc - 1] = row;
                    repeat[repeat.length] = { "value": _area + '_' + _indicator + '_' + _statisticclass + '_' + _date, "col": row.length - 1, "row": result.length - 1 };
                }
            }
            else {//is repeat
                row = result[reprow.row];
                row[reprow.col].data.push({ "value": _value, "source": _source });
                result[reprow.row] = row;
            }
        }
    }
    rs.head = th;
    rs.datas = result;
    rs.indicatinfo = indicatinfo;
    return rs;
};

var formatData = {};

/*
检查thead是否重复，0 没有重复
*/
formatData.checkTh = function (head, date) {
    var _k = head.length;
    for (var i = 0; i < _k; i++) {
        if (head[i] == date) {
            return -1;
        }
    }
    return 0;
};

/*
检查指标解释是否重复
*/
formatData.checkIndicatinfo = function (arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === key) {
            return -1;
        }
    }
    return 0;
}
/*
检查当前数据是否是某一行的重复数据，是，返回重复数据所在行，否，返回0
*/
formatData.checkRepeatData = function (area, indicator, statisticclass, date, arr) {
    var _k = area + '_' + indicator + '_' + statisticclass + '_' + date;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].value == _k) {
            return { "col": arr[i].col, "row": arr[i].row };
        }
    }
    return 0;
};

/*
检查当前数据是增加行还是增加列
@return 0 增加一行 !0 增加列，返回要增加列的行号
*/
formatData.checkRowOrCol = function (area, indicator, statisticclass, arr) {
    var _k = arr.length;
    for (var i = 0; i < _k; i++) {
        var col = arr[i];
        if (col[0].value == area && col[1].value == indicator && col[3].value == statisticclass) {
            return (i + 1);
        }
    }
    return 0;
};

/*
给新增的行补齐时间列
*/
formatData.addDateCol = function (head) {
    var arr = new Array();
    var _k = head.length;
    for (var i = 0; i < _k; i++) {
        if (i <= 3) {
            arr[i] = { "key": head[i], "type": head[i], "data": null };
        }
        else {
            arr[i] = { "key": head[i], "type": "data", "data": null };
        }
    }
    return arr;
};

/*
根据表头head补齐数据arr中的列
*/
formatData.addCol = function (head, arr) {
    var _n = head.length;
    var _m = arr.length;
    for (var i = 0; i < _n; i++) {
        var _h = head[i];
        for (var j = 0; j < _m; j++) {
            var col = new Array();
            col = arr[j];
            var key = 0;
            for (var k = 0; k < col.length; k++) {
                if (col[k].key == undefined) {
                    key = 1;
                    break;
                }
                else if (col[k].key == _h) {
                    key = 0;
                    break;
                }
                else {
                    key = 1;
                }
            }
            if (key == 1) {
                col.push({ "key": _h, "type": "data", "data": null });
                arr[j] = col;
            }
        }
    }
    return arr;
};

var testdata =
{
    "head": {
        "vars": ["area", "indicator", "class", "date", "value", "unit"]
    },
    "results": {
        "bindings": [
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "市辖区 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2011" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "34" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "市辖区 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2012" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "10" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "街道 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2013" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "132" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "县级市 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2011" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "2" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "地级市 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2011" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "1" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "市辖区 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2011" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "34" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          },
          {
              "area": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "广州" },
              "indicator": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "行政区划 (2011年)" },
              "class": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "街道 " },
              "date": { "datatype": "http://www.w3.org/2001/XMLSchema#integer", "type": "typed-literal", "value": "2013" },
              "value": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "132" },
              "unit": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "indicatinfo": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" },
              "source": { "datatype": "http://www.w3.org/2001/XMLSchema#string", "type": "typed-literal", "value": "个" }
          }
        ]
    }
};