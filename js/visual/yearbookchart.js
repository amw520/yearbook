    //加载学术发展趋势图
	var yearbook=yearbook||{"charType" : "bar"};
	//首页推荐数据
	yearbook.lineChartXml = "<chart unescapeLinks='0'anchorBgColor='ed821a'caption=''subCaption='学术发展趋势(期刊文章)1915-2013'showPlotBorder='1'plotBorderThickness='2'plotBorderColor='ed790c'plotBorderAlpha='80'plotFillColor='fdf8e5'plotFillAlpha='50'canvasBorderColor='645e60'canvasBorderThickness='0'anchorAlpha='100'anchorBorderColor='ed821a'anchorRadius='2.5'bgcolor='ffffff'showborder='100'centerYaxisName='1'xAxisName='(单位：个)'numDivLines='11'yAxisValuesStep='3'labelStep='13'alternateHGridColor='ffffff'showValues='0'formatNumberScale='0'formatNumber='0'baseFontSize='14'><set link=''value='1'label='1915年'hoverText='1915年 : 1'></set><set link=''value='1'label='1917年'hoverText='1917年 : 1'></set><set link=''value='1'label='1925年'hoverText='1925年 : 1'></set><set link=''value='1'label='1929年'hoverText='1929年 : 1'></set><set link=''value='1'label='1946年'hoverText='1946年 : 1'></set><set link=''value='1'label='1950年'hoverText='1950年 : 1'></set><set link=''value='2'label='1951年'hoverText='1951年 : 2'></set><set link=''value='2'label='1952年'hoverText='1952年 : 2'></set><set link=''value='8'label='1953年'hoverText='1953年 : 8'></set><set link=''value='13'label='1954年'hoverText='1954年 : 13'></set><set link=''value='14'label='1955年'hoverText='1955年 : 14'></set><set link=''value='21'label='1956年'hoverText='1956年 : 21'></set><set link=''value='26'label='1957年'hoverText='1957年 : 26'></set><set link=''value='19'label='1958年'hoverText='1958年 : 19'></set><set link=''value='30'label='1959年'hoverText='1959年 : 30'></set><set link=''value='32'label='1960年'hoverText='1960年 : 32'></set><set link=''value='17'label='1961年'hoverText='1961年 : 17'></set><set link=''value='16'label='1962年'hoverText='1962年 : 16'></set><set link=''value='24'label='1963年'hoverText='1963年 : 24'></set><set link=''value='20'label='1964年'hoverText='1964年 : 20'></set><set link=''value='20'label='1965年'hoverText='1965年 : 20'></set><set link=''value='6'label='1966年'hoverText='1966年 : 6'></set><set link=''value='2'label='1970年'hoverText='1970年 : 2'></set><set link=''value='5'label='1972年'hoverText='1972年 : 5'></set><set link=''value='13'label='1973年'hoverText='1973年 : 13'></set><set link=''value='13'label='1974年'hoverText='1974年 : 13'></set><set link=''value='18'label='1975年'hoverText='1975年 : 18'></set><set link=''value='13'label='1976年'hoverText='1976年 : 13'></set><set link=''value='19'label='1977年'hoverText='1977年 : 19'></set><set link=''value='40'label='1978年'hoverText='1978年 : 40'></set><set link=''value='78'label='1979年'hoverText='1979年 : 78'></set><set link=''value='124'label='1980年'hoverText='1980年 : 124'></set><set link=''value='168'label='1981年'hoverText='1981年 : 168'></set><set link=''value='218'label='1982年'hoverText='1982年 : 218'></set><set link=''value='226'label='1983年'hoverText='1983年 : 226'></set><set link=''value='268'label='1984年'hoverText='1984年 : 268'></set><set link=''value='302'label='1985年'hoverText='1985年 : 302'></set><set link=''value='320'label='1986年'hoverText='1986年 : 320'></set><set link=''value='355'label='1987年'hoverText='1987年 : 355'></set><set link=''value='339'label='1988年'hoverText='1988年 : 339'></set><set link=''value='343'label='1989年'hoverText='1989年 : 343'></set><set link=''value='353'label='1990年'hoverText='1990年 : 353'></set><set link=''value='413'label='1991年'hoverText='1991年 : 413'></set><set link=''value='428'label='1992年'hoverText='1992年 : 428'></set><set link=''value='370'label='1993年'hoverText='1993年 : 370'></set><set link=''value='718'label='1994年'hoverText='1994年 : 718'></set><set link=''value='754'label='1995年'hoverText='1995年 : 754'></set><set link=''value='783'label='1996年'hoverText='1996年 : 783'></set><set link=''value='857'label='1997年'hoverText='1997年 : 857'></set><set link=''value='960'label='1998年'hoverText='1998年 : 960'></set><set link=''value='1147'label='1999年'hoverText='1999年 : 1147'></set><set link=''value='1552'label='2000年'hoverText='2000年 : 1552'></set><set link=''value='1911'label='2001年'hoverText='2001年 : 1911'></set><set link=''value='2556'label='2002年'hoverText='2002年 : 2556'></set><set link=''value='3510'label='2003年'hoverText='2003年 : 3510'></set><set link=''value='3853'label='2004年'hoverText='2004年 : 3853'></set><set link=''value='3620'label='2005年'hoverText='2005年 : 3620'></set><set link=''value='4247'label='2006年'hoverText='2006年 : 4247'></set><set link=''value='5282'label='2007年'hoverText='2007年 : 5282'></set><set link=''value='5781'label='2008年'hoverText='2008年 : 5781'></set><set link=''value='6423'label='2009年'hoverText='2009年 : 6423'></set><set link=''value='6742'label='2010年'hoverText='2010年 : 6742'></set><set link=''value='7530'label='2011年'hoverText='2011年 : 7530'></set><set link=''value='4680'label='2012年'hoverText='2012年 : 4680'></set><set link=''value='2013'label='2013年'hoverText='2013年 : 2013'></set><set></set><set></set></chart>";

	var chartData={"chart": {
      "caption": "Monthly revenue for last year",
      //"subCaption": "Harry's SuperMart",
      "xAxisName": "Month",
      "yAxisName": "Revenues",
      "numberPrefix": "",
      "theme": "fint"
   },"data":[]};


	
	$(document).ready(function () {
			$(".btn-createbar").click(function(){
				var optoin={
					"type":yearbook.charType,
					"container":$("#divRightColumn"),
					"data": chartData
					//"data" : yearbook.tw
					//"data" : yearbook.twbar
					//"data" : d4
					}
				createData(searchresult);
				createChart(optoin);
			
			});
			//首页生成图表
			if($("#js_recom_chart").size()>0){
				var optoin={
					"type": "line",
					"container":$("#js_recom_chart"),
					"data": yearbook.lineChartXml,
					"dataFormat" : "xml",
					"width" :"480",
					"height" : "260"
					//"data" : yearbook.tw
					//"data" : yearbook.twbar
					//"data" : d4
					}
				createChart(optoin);
				$("#js_recom_chart").show();
			}

	})
	 
/*
** 生成图表
**@para {string}type 生成图的各类
**@para {string}container 生成图的容器
**@para {json}data 生成图的数据
**@para {number int}width 生成图的宽
**@para {number int}height 生成图的高
*/
function createChart(option) {
	var defOption={
		"container":$("#divRightColumn"),
		"type":"column",
		"width": 600,
		"height": 360,
		"data": yearbook.columnData,
		"dataFormat" : "json"
	}
	for(var i in defOption){
		if(!option[i]){
			option[i]=defOption[i];
		}
	}
	
	var w=option["width"];
	var h=option["height"];
	var str=option["data"];
	var typePath="";
	var swfPath="/js/visual/FusionCharts/";
	var container=option["container"];
	var formatTp=option.dataFormat||"json";
	switch (option["type"]){
		case "bar": 
		typePath="Bar2D";
		break;
		case "column":
		typePath="Column2D";
		break;
		case "pie":
		typePath="Doughnut2D";
		break;
		case "line":
		typePath="Line";
		break;

		//3d
		case "bar": 
		typePath="MSBar3D";
		break;
		case "3dcolumn":
		typePath="MSColumn3D";
		break;
		case "pie":
		typePath="Pie3D";
		break;
		case "line":
		typePath="MSLine";
		break;

	}
	swfPath=swfPath+typePath+".swf";
	container.insertFusionCharts({
		swfUrl: swfPath,
		dataSource: str,
		dataFormat: formatTp,
		width: w,
		height: h
	});
}
/*
** 生成条件
**根据提供数据生成页面分类条件
**@para {string}orginData 生成图的各类
**@para {string}container 生成图的容器
*/

function createContion(orginData){
	//判断格式，不满足退出
	if(!orginData){
		return false;
	}
	var data=[];
	var schtp=["area","indicator","class","date"];
	var type=$("#js_char_type").val();
		schtp.splice(schtp.indexOf(type),1);
	var str="",strobj="";
	//横坐标
	for(var i=0,j=orginData[type];i<j.length;i++){
		
		if(i<4){
			chartData["data"][i]={};
			chartData["data"][i]["label"]=j[i].value;
			strobj+="<p data-id="+(i<10?("0"+i):i)+">"+j[i].value+"</p>";//前几年备选
		}else{
			str+="<p data-id="+(i<10?("0"+i):i)+">"+j[i].value+"</p>";//后几个不先
		}
		
	}
	//chartData["data"]=data;
	$(".js_chart_tar").html(strobj);
	$(".js_chart_orgin").html(str);
	//固定项
	for(var k=0;k<schtp.length;k++){
		str="";
		for(var m=0,n=schtp[k];m<orginData[n].length;m++){
			str+="<option value='"+(m<10?("0"+m):m)+"'>"+orginData[n][m].value+"</option>";
			//chartData["data"][m]["value"]=n[m].value;
		}
		$("#js_opt"+k).html(str).removeClass().attr("data-tp",schtp[k]);
	}
	//createData(orginData);
}

//组成数据
function createData(orginData){
	var n1,n2,n3,n4,index=[] ,value,k=[],dataObj={},strValue=[];
	var schtp=["area","indicator","class","date"];
	var tempData=orginData["dataset"];
	var type=$("#js_char_type").val();
	
			
	//获取标题
	chartData.chart.caption=$("#js_charttt").val()||"我的图表";
	chartData.chart.xAxisName=$("#js_char_type").find("option:selected").text();
	chartData.chart.yAxisName="index";
	for(var h=0;h<3;h++){
		var tp=$("#js_opt"+h).attr("data-tp");
		dataObj[tp]=[];
		dataObj[tp][0]=$("#js_opt"+h).val();
	}
	// n1=$("#js_opt0").val();
	// n2=$("#js_opt1").val();
	// n2=$("#js_opt2").val();
	
	$(".js_chart_tar p").each(function(index,element){
		//横坐标
		chartData["data"][index]={};
		chartData["data"][index]["label"]=$(this).html();
		k[index]=$(this).attr("data-id");
	});
	dataObj[type]=k;
	// n2=$(".chart-index").val();
	// n3=$(".chart-class").val();
	// n4=$(".chart-date").val();
	//生成串("ff00ff")
	
	//for(var l=0;l<chartData["data"].length;l++){
	for(var l=0;l<dataObj[type].length;l++){
		strValue[l]="";
		for(var i=0;i<schtp.length;i++){
				var tempD=dataObj[schtp[i]][l]||dataObj[schtp[i]][0];
				strValue[l]+=tempD;
		}
	}
	//取数据
	for(var q=0;q<chartData["data"].length;q++){
		if(tempData[strValue[q]]&&tempData[strValue[q]].length>0){//数据存在
			chartData["data"][q]["value"]=tempData[strValue[q]][0]["value"];
		
		} else {
			chartData["data"][q]["value"]=0;
		}

	}
	//附值
	// for(var p=0;p<chartData["data"].length;p++){
		// chartData["data"][p]["value"]=value[p];
	// }
	
}


/* 初始化 */
$(document).ready(function () {
	$(".icon-statistics").click(function(){
		
		$(".mod-schbox").hide();
		$(".mod-static").show();
		//表单初始化
		createContion(searchresult);
	});
	
		//选择图表类型
	$(".list-staticthub li").click(function(){
		$(this).siblings().removeClass("on").end().addClass("on");
		yearbook.charType=$(this).attr("data-type");
		$("#chartype").val(yearbook.charType);
	});
	$(".index-box").delegate("p","click",function(){
		if($(this).hasClass("chose")){
			$(this).css({"background": "#fff","color":"#333"}).removeClass("chose");
		}else {
			$(this).css({"background": "#4f81bd","color":"#fff"}).addClass("chose");
			
		}
	});

	$(".btn-pushindex").click(function(){
		$(".js_chart_orgin .chose").appendTo($(".js_chart_tar"));
		$(".js_chart_orgin .chose").remove();
	});
	$(".btn-pullindex").click(function(){
		$(".js_chart_tar .chose").appendTo($(".js_chart_orgin"));
		$(".js_chart_tar .chose").remove();
	});
	$(document).delegate("#js_char_type","change",function(){
		createContion(searchresult);
		//$(".js_chart_tar").html("");
	});
	$(".btn-f5").click(function(){
		$(".js_chart_tar").html("");
	});
	
	//检索定位
	$(document).delegate(".btn-locate","click",function(){
		var $wrap=$(this).parents(".choose-opt");
		var $sch=$wrap.find(".txt-sch");
		if(!($sch.val()==""||$sch.val()=="输入地区")){
			getElmPos($sch.val(),$wrap);
		} else{
			alert("请先输入检索词");
			$sch.focus();
		}
		
	});
});
//定位功能
function getElmPos(schValue,wrapObj){
	var topBase,top,$arrTag,sign=false;
	$arrTag=wrapObj.find(".list-condition").find(".tag-sch");
	$arrTag.each(function(index,el){
		if(index==0){
			topBase=$(this).position().top;
		}
		if($(this).attr("title")==schValue){
			$(this).siblings().removeClass("loc-tag").end().addClass("loc-tag");
			top=$(this).position().top;
			distance=parseInt(top)-parseInt(topBase);
			wrapObj.scrollTop(distance);
			sign=true;
		}else{
			//alert("未检索到数据");
		}
	});
	if(!sign){
		alert("未检索到数据");
	}
}
