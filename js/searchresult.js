//关闭弹出层
$(document).ready(function(){

$(document).delegate(".btn-dt-close", "click", function () {
    $(this).parents(".tb-datadt").hide();
});
//展示指标事件
$(document).delegate(".js_indicator", "mouseover", function (e) {
	
	dataIndex($(this));
});
//展示来源事件
$(document).delegate(".js_data", "mouseover", function (orginData) {
	dataOrgin($(this));
});
//检索条件选择事件
$(document).delegate(".item-schlist", "click", function (e) {
    $(".js_cdt").val($(this).html()).attr("data-sel","true");
    $(".js_cdt").removeClass("tip-highlight");
	$("#dotcon_searchtylist").hide();
});
$(".txt-sch").blur(function(){
	if($(this).attr("data-sel")!="true"){
		$(this).addClass("tip-highlight");
		$(this).val("");
	}else{
		$(this).removeClass("tip-highlight");
	}

});


$(document).click(function(){
	$("#dotcon_searchtylist").hide();
});

//展示地点事件
$(document).delegate("#key_area", "keyup", function (e) {
	getSchListData("area",$(this).val());
	$(".txt-sch").removeClass("js_cdt");
	$(this).addClass("js_cdt")
	$("#dotcon_searchtylist").css({"left":116}).show();
});
//展示统计事件
$(document).delegate("#key_static", "keyup", function (e) {
	getSchListData("class",$(this).val());
		$(".txt-sch").removeClass("js_cdt");
	$(this).addClass("js_cdt")

	$("#dotcon_searchtylist").css({"left":260}).show();
});
//展示指标事件
$(document).delegate("#key_index", "keyup", function (e) {
	getSchListData("indicator",$(this).val());
		$(".txt-sch").removeClass("js_cdt");
	$(this).addClass("js_cdt")

	$("#dotcon_searchtylist").css({"left":404}).show();
});
});
//获取下拉数据；
function getSchListData(type,q){

	var url=orgurl+"?pid=yearbook25.dictionarysearch&view=json&type="+type;
	if(!!q){
		//url+="&q="+encodeURIComponent(q);
		url+="&q="+(q);
	}
	$.ajax({
	type: "GET",
	url: url,
	//dataType: "json",
	success: function (data) {
		if (data != undefined) {
			dataSearchTypeList(data);
		}
	}
});
}
//展示下拉列表
function dataSearchTypeList(orginData) {
    var _data=orginData.PageModel.Content.value;
	var _jsonData=eval('('+_data+')');
	if(_jsonData.Code!=0){//服务器未返回正确检索数据
		$(".tip-sch").html("网络或服务器错误，请稍候重试");
		return;
	}
	var jsonData=eval('('+_jsonData.Data+')');
	if(jsonData.length>0){
		//for(var i in _data.Content.Data){
		$(".emt-schlist").hide();//隐藏提示
				//调用生成模板
				paintPage("#dottp_searchtylist","#dotcon_searchtylist",jsonData);
			//}
	} else {//未检索到数据
		var tempStr=$(".emt-schlist").html();
		//var str=""
		//$("#dotcon_searchtylist").html();
		var tip=[{"Name":"未匹配到..."}]
		paintPage("#dottp_searchtylist","#dotcon_searchtylist",tip);
		//$(".emt-schlist").html("无法匹配").show();
		$(".item-schlist").removeClass("item-schlist");
	}
}
//展示指标
function dataIndex(obj) {
	var _obj=obj;
    var _data=window.searchresult.indicatinfo;
    var indexName = _obj.html();
    var pos = obj.position();
    
    if (pos.left > 500) { pos.left -= 500; }
    pos.left += obj.outerWidth();
	if(_data.length>0){
		for(var i in _data){
			var tempName=_data[i]["name"];
			if(tempName==indexName){
				//调用生成模板
				paintPage("#dottp_dataexplain","#dotcon_dataexplain",_data[i]["datas"]);
				
				$("#dotcon_dataexplain").css({ "left": pos.left, "top": pos.top }).show();
				return;
			}
		}
	}
}
//展示来源
function dataOrgin(obj) {
	var index=obj.attr("data-index");
    var indexName=obj.html();
	var _data=window.searchresult.datas[index][4]["data"];
	var indexName="";
	var pos = obj.position();
	if (pos.left > 500) { pos.left -= 300; }
	if(_data.length>0){
		//for(var i in _data.datas){
		
			//var tempName=_data.datas[i]["type"];
			//var tempObj=_data.datas[i]["data"];
			//if(tempName=="data"&&tempObj!=null){
				//调用生成模板
				paintPage("#dottp_dataorgin","#dotcon_dataorgin",_data);
			//}
			$("#dotcon_dataorgin").css({"left":pos.left,"top":pos.top}).show();
			$("#dotcon_dataorgin").show();
		//}
	}
}
    /*
	 *模板生成
	 *return: html string
	 *para: json
	 *created by huangsh 20141118
	 */
    function paintPage(dottp,dotcon,str) {
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
