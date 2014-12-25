//关闭弹出层
$(document).ready(function () {
    //拖动元素
    $(".js_mod_move").each(function (index, elm) {
        $(this).css({"position":"fixed","cursor":"pointer"});
        moveDiv($(this), $(this));
    });
    
    $(document).delegate(".btn-dt-close", "click", function () {
        $(this).parents(".tb-datadt").hide();
        $(".opacitybg").hide();
    });
    //展示指标事件
    $(document).delegate(".js_td_indicator", "mouseover", function (e) {

        dataIndex($(this));
    });
    //展示来源事件
    $(document).delegate(".js_data", "mouseover", function (orginData) {
        dataOrgin($(this));
    });
    //检索条件选择事件
    $(document).delegate(".item-schlist", "click", function (e) {
        $(".js_cdt").val($(this).html()).attr("data-sel", "true");
        $(".js_cdt").attr("data-id", $(this).attr("identifier"))
       // console.log($(this).attr("identifier"));
        //$(".js_cdt").removeClass("tip-highlight");
        $("#dotcon_searchtylist").hide();
    });
    $(".js_sch_ybook").blur(function () {
        if ($(this).attr("data-sel") != "true") {
            //$(this).addClass("tip-highlight");
            $(this).val("");
        } else {
            //$(this).removeClass("tip-highlight");
        }
    });


    $(document).click(function () {
        $("#dotcon_searchtylist").hide();
    });

    //填写地点事件
    $(document).delegate("#key_area", "keyup", function (e) {
        getSchListData("area", $(this).val());
        $(".txt-sch").removeClass("js_cdt");
        $(this).addClass("js_cdt")
        $("#dotcon_searchtylist").css({ "left": 116 }).show();        
    });
    //填写统计事件
    $(document).delegate("#key_static", "keyup", function (e) {
        getSchListData("class", $(this).val());
        $(".txt-sch").removeClass("js_cdt");
        $(this).addClass("js_cdt")

        $("#dotcon_searchtylist").css({ "left": 260 }).show();
    });
    //填写指标事件
    $(document).delegate("#key_index", "keyup", function (e) {
        getSchListData("indicator", $(this).val());
        $(".txt-sch").removeClass("js_cdt");
        $(this).addClass("js_cdt")

        $("#dotcon_searchtylist").css({ "left": 404 }).show();
       
    });
});
/*拖动窗口*/
var moveDiv0 = function (fdiv, title) {
    var posX;
    var posY;
    fdiv = $(fdiv).get(0);

    $(fdiv).each(function (index, fmov) {
        fmov.onmousedown = function (e) {
            if (!e) e = window.event; //IE
            posX = e.clientX - parseInt($(fdiv).offset().left);
            console.log(e.clientX+''+e.clientY);
            posY = e.clientY - parseInt($(fdiv).offset().top);
            document.onmousemove = mousemove;
        };
        document.onmouseup = function () {
            document.onmousemove = null;
        };
        function mousemove(ev) {
            if (ev == null) ev = window.event; //IE
            var newPosX = ev.clientX - posX;
            var newPosY = ev.clientY - posY;
            if (newPosY < 0) {
                newPosY = 0;
            }
            fdiv.style.left = newPosX + "px";
            fdiv.style.top = newPosY + "px";
            //$(fdiv).css({ "left": newPosX + "px", "top": newPosY + "px" });
        }
    });
};
var moveDiv = function(fdiv, title) {
    var posX;
    var posY;
    fdiv = $(fdiv).get(0);

    $(fdiv).each(function(index, fmov) {
        fmov.onmousedown = function(e) {
            if (!e) e = window.event; //IE
            posX = e.clientX - parseInt(fdiv.offsetLeft);
            posY = e.clientY - parseInt(fdiv.offsetTop);
            document.onmousemove = mousemove;
        };
        document.onmouseup = function() {
            document.onmousemove = null;
        };
        function mousemove(ev) {
            if (ev == null) ev = window.event; //IE
            var newPosX=ev.clientX - posX;
            var newPosY = ev.clientY - posY;
            if (newPosY < 0) {
                newPosY = 0;
            }
            fdiv.style.left = newPosX + "px";
            fdiv.style.top = newPosY + "px";
        }
    });
};

//获取下拉数据；
function getSchListData(type, q) {

    var url = orgurl + "?pid=yearbook25.dictionarysearch&view=json&type=" + type+"&time="+new Date().valueOf();
    if (!!q) {
        //url+="&q="+encodeURIComponent(q);
        url += "&q=" + encodeURI(q);
    }
    $.ajax({
        type: "GET",
        url: url,
        //dataType: "json",
        success: function (data) {
            if (data != undefined) {
                dataSearchTypeList(data);
                setTimeout(function () {
                    if (dataMatchList(q)!=0) {
                        $(".js_cdt").attr("data-sel", "true");
                        $(".js_cdt").attr("data-id", dataMatchList(q));
                    }
                    else { $(".js_cdt").removeAttr("data-sel"); }
                },500)
            }
        }
    });
}
//展示下拉列表
function dataSearchTypeList(orginData) {
    var _jsonData = orginData.PageModel.Content.value;
    if (_jsonData.Code != 0) {//服务器未返回正确检索数据
        $(".tip-sch").html("网络或服务器错误，请稍候重试");
        return;
    }
    var jsonData = eval('(' + _jsonData.Data + ')');
    if (jsonData.length > 0) {
        //for(var i in _data.Content.Data){
        $(".emt-schlist").hide();//隐藏提示
        //调用生成模板
        paintPage("#dottp_searchtylist", "#dotcon_searchtylist", jsonData);
        //}
    } else {//未检索到数据
        var tempStr = $(".emt-schlist").html();
        //var str=""
        //$("#dotcon_searchtylist").html();
        var tip = [{ "Name": "未匹配到..." }]
        paintPage("#dottp_searchtylist", "#dotcon_searchtylist", tip);
        //$(".emt-schlist").html("无法匹配").show();
        $(".item-schlist").removeClass("item-schlist");
    }
}

//输入框中内容是否在下拉框中有匹配值
function dataMatchList(data) {
    var _list = $("#dotcon_searchtylist").find("p");
    for (var i = 0; i < _list.length; i++) {
        if (data == _list.eq(i).text()) {
            //console.log(_list.eq(i).find("a").attr("identifier"));
            //return true;
            return _list.eq(i).find("a").attr("identifier");
        }
    }
    return 0;
};

//展示指标
function dataIndex(obj) {
    var _obj = obj, _pos = {};
    var _data = window.searchresult.indicator;
    if (_data == undefined) { return; }
    var indexName = _obj.html();
    

    if (_data.length > 0) {
        for (var i in _data) {
            var tempName = _data[i]["value"];
            if (tempName == indexName) {
                //调用生成模板
                if (_data[i]["info"].length > 0) {
                    paintPage("#dottp_dataexplain", "#dotcon_dataexplain", _data[i]["info"]);
                    _pos = calcPos(_obj, $("#dotcon_dataexplain"), $(".mod-rsset"));
                    $("#dotcon_dataexplain").css({ "margin": "0px", "left": _pos.left, "top": _pos.top }).show();
                    //if (console) {
                        //console.log(_pos.left+" "+_pos.top);
                    //}
                    //$(".opacitybg").show();
                }                
                return;
            }
        }
    }

}
function calcPos(objSelf, objProp, objBox) {
        var pos = objSelf.position();//当前位置
        var SCROLL_SIZE = 20;
        pos.left += objSelf.outerWidth();
        if (pos.left + objProp.outerWidth() > (objBox.width() - SCROLL_SIZE)) {
            pos.left = pos.left - objSelf.width() - objProp.outerWidth();
        }
        if (pos.top + objProp.outerHeight() > (objBox.height() - SCROLL_SIZE)) {//20滚动条宽
            pos.top = pos.top - objProp.outerHeight() + objSelf.outerHeight();
        }

        if (pos.top < 0) {
            //pos.top = objBox.scrollTop();
            pos.top = 0;
        }
        if (pos.left < 0) {
            //pos.top = objBox.scrollTop();
            pos.left = 0;
        }
        pos.top += objBox.scrollTop();
        pos.left += objBox.scrollLeft();
        //console.log(objBox.scrollTop());

        return pos;
    }
//展示来源
function dataOrgin(obj) {
    var index = obj.attr("data-id"), _pos = {};
    var indexName = obj.html();
    var _data = {};
    _data.key = index;
    _data.data = window.searchresult.dataset[index];
    if (_data.data == undefined || _data.data[0]["source"]==undefined) { return; }
    var indexName = "";

    var pos = obj.position();
    if (pos.left > 500) { pos.left -= 300; }
    if (pos.top > 213) { pos.top = pos.top - 150 + obj.outerHeight(); }
    pos.top += $(".mod-rsset").scrollTop();
    pos.left += $(".mod-rsset").scrollLeft();

    if (_data.data.length > 0) {
        //for(var i in _data.datas){

        //var tempName=_data.datas[i]["type"];
        //var tempObj=_data.datas[i]["data"];
        //if(tempName=="data"&&tempObj!=null){
        //调用生成模板
        paintPage("#dottp_dataorgin", "#dotcon_dataorgin", _data);
        //}
        _pos = calcPos(obj, $("#dotcon_dataorgin"), $(".mod-rsset"));
        $("#dotcon_dataorgin").css({ "margin": "0px", "left": _pos.left, "top": _pos.top }).show();
        //$("#dotcon_dataorgin").show();
        //$(".opacitybg").show();
        //}
    }
}
/*
 *模板生成
 *return: html string
 *para: json
 *created by huangsh 20141118
 */
function paintPage(dottp, dotcon, str) {
    //调用模板
    var htmlstr = doT.template($(dottp).text())(str);
    //插入页面
    $(dotcon)[0].innerHTML = htmlstr;
}
// 获取元素在页面中位置
function getPos(elem) {
    var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement;
    var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top = box.top + (self.pageYOffset || docElem.scrollTop) - clientTop, left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;
    return {
        left: left,
        top: top,
        right: left + box.width,
        bottom: top + box.height
    };
}

/****导出EXCEL,将页面表格Html原样导*********/
function ieInnerHTML(obj) { var zz = $(obj).html(), z = zz.match(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g); if (z) { for (var i = 0; i < z.length; i++) { var y, zSaved = z[i]; z[i] = z[i].replace(/(<?\w+)|(<\/?\w+)\s/, function (a) { return a.toLowerCase(); }); y = z[i].match(/\=\w+[?\s+|?>]/g); if (y) { for (var j = 0; j < y.length; j++) { z[i] = z[i].replace(y[j], y[j].replace(/\=(\w+)([?\s+|?>])/g, '="$1"$2')); } } zz = zz.replace(zSaved, z[i]); } } return zz.replace(/&nbsp;/g, " "); }
//导出excel
$(document).ready(function () {
    $(".icon-excel  ").click(function () {
        var postUrl = Apabi.orgUrl + "pub.mvc?pid=ideabank.outexcel";
        var searchResult = $("#dotcon_searchlist");
        var tbData = ieInnerHTML(searchResult);
        tbData = tbData.replace("<table ", "<table border=1 ");
        var curDate = new Date();
        var exportname = "Data_Excel_" + curDate.getFullYear() + "-" + (curDate.getMonth()+1) + "-" + curDate.getDate();

        if (document.getElementById("formexcel") != null) {
            document.getElementById("formexcel").remove();//首先删除
        }
        var form = "<form action='" + postUrl + "' method='post' id='formexcel'>" +
                "<input type='hidden' name='data' id='data' value='" + tbData + "'/> " +
                "<input type='hidden' name='exportname' id='exportname' value='" + exportname + "'/> " +
                "</form> ";
        $("body").append(form);//载入form 
        $("#formexcel").submit();

    });
    //检索定位
    $(document).delegate(".btn-locate", "click", function () {
        var $wrap = $(this).parents(".choose-opt");
        var $sch = $wrap.find(".txt-sch");
        if (!($sch.val() == "" || $sch.val() == "输入地区")) {
            getElmPos($sch.val(), $wrap);
        } else {
            alert("请先输入检索词");
            $sch.focus();
        }

    });
});
//定位功能
function getElmPos(schValue, wrapObj) {
    var topBase, _top=[], $arrTag, sign = false,i=0;
    $arrTag = wrapObj.find(".list-condition").find(".tag-sch");
    if (!($arrTag.size() > 0)) {//说明是二级分类，检索二级分类
        $arrTag = wrapObj.find(".list-condition").find(".js_sch_tag");
    }
    $arrTag.removeClass("loc-tag");
    var reg = new RegExp(schValue,"i");
    $arrTag.each(function (index, el) {
        if (index == 0) {
            topBase = $(this).position().top;
        }
        if (reg.test($(this).attr("title"))) {
            
			$(this).addClass("loc-tag");
            _top[i] = $(this).position().top;
            sign = true;
			i++;
        } else {
            //alert("未检索到数据");
        }
    });
    if (!sign) {
        alert("未检索到数据");
    } else {
		distance = parseInt(_top[0]) - parseInt(topBase);
        wrapObj.scrollTop(distance);
	}
}
// (function keySearch() {//双表单问题
    // document.onkeydown = function (e) {
        // var theEvent = window.event || e;
        // var code = theEvent.keyCode || theEvent.which;
        // if (code == 13) {
            // $(".btn-locate").click();
        // }
    // };
// })();