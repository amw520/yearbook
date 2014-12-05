     function createEChart(option){
	 
	 
	 
	                 // var _option = {
                    // tooltip: {
                        // show: true
                    // },
                    // legend: {
                        // data:['销量']
                    // },
                    // xAxis : [
                        // {
                            // type : 'category',
                            // data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                        // }
                    // ],
                    // yAxis : [
                        // {
                            // type : 'value'
                        // }
                    // ],
                    // series : [
                        // {
                            // "name":"销量",
                            // "type":"bar",
                            // "data":[5, 20, 40, 10, 10, 20]
                        // }
                    // ]
                // };
				// option.series&&(_option.series=option.series);
				// option.legend&&(_option.legend=option.legend);
				// option.xAxis&&(_option.xAxis=[{"type":"value"}]);
				// option.yAxis&&(_option.yAxis=option.xAxis);
				

	 // 路径配置
        require.config({
            paths: {
                echarts: '../js/Visual/Echarts/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/'+option.type // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('divRightColumn')); 
                
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
				myChart.setTheme("blue");
            }
        );
	
	}
	var chartData={"chart": {
      // "caption": "Split of Sales by Product Category",
      // "paletteColors": "#0075c2,#1aaf5d",
      // "bgColor": "#ffffff",
      // "showBorder": "0",
      // "showHoverEffect": "1",
      // "showCanvasBorder": "0",
      // "usePlotGradientColor": "1",
      // "plotBorderAlpha": "10",
      // "legendShadow": "1",
      // "placevaluesInside": "1",
      // "valueFontColor": "#ffffff",
      // "showXAxisLine": "0",
      // "xAxisLineColor": "#999999",
      // "divlineColor": "#999999",
      // "divLineDashed": "1",
      // "showAlternateVGridColor": "1",
      // "subcaptionFontBold": "0",
      // "subcaptionFontSize": "18"
	  "theme": "fint"
   },
      "categories": [
      {
         "category": [{}
         ]
      }
   ],
   "dataset": [
      {
         "seriesname": "Food Products",
		 "color" : '8BBA00',
         "data": [{}
         ]
      }

   ]

   };

var yearbook=yearbook||{};
	yearbook.charType="bar";
	$(document).ready(function () {
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

	});
	 
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
		"width": 610,
		"height": 480,
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
	//var swfPath="js/visual/FusionCharts/";
	var container=option["container"];
	var formatTp=option.dataFormat||"json";
	switch (option["type"]){
		case "bar": 
		typePath="MSBar3D";
		break;
		case "column":
		typePath="MSColumn3D";
		break;
		case "pie":
		typePath="Doughnut3D";
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
	
	 // var revenueChart = new FusionCharts({
        // type: 'mscolumn2d',
        // renderAt: 'divRightColumn',
        // width: w,
        // height: h,
        // dataFormat: formatTp,
        // dataSource: str    
		// });

    // revenueChart.render();
}
/*
** 生成条件
**根据提供数据生成页面分类条件
**@para {string}orginData 检索源数据
**@para {string}container 生成图的容器
*/
chartData["categories"][0]["category"]=chartData["categories"][0]["category"]||[];

	var schtp=["area","indicator","statclass","date"];//单条件
	var tptw={	//多条件
				"tp1":{"id":"statclass","val":"indicator"},
				"tp2":{"id":"date","val":"indicator"},
				"tp3":{"id":"area","val":"indicator"},
				"tp4":{"id":"date","val":"statclass"},
				"tp5":{"id":"area","val":"statclass"},
				"tp6":{"id":"area","val":"date"}
			}
	var chartColor=["8BBA00","8BBA00","8BBA00","8BBA00"];
	var mutiSign=true;
function createContion(orginData){
	//判断格式，不满足退出
	if(!orginData){
		return false;
	}
	var data=[];
	//图表种类
	
	if(!mutiSign){//单图表
		var type=$("#js_char_type").val();
		schtp.splice(schtp.indexOf(type),1);
		createChartList(type1,false);
	} else {//多图表
		var tpi=$("#js_type_index").val();
		type1=tptw[tpi]["id"];
		type2=tptw[tpi]["val"];
		var stable=arrCopy(schtp);
		stable.splice(schtp.indexOf(type1),1);
		stable.splice(schtp.indexOf(type2),1);
		function arrCopy(arrOrg,arrObj){
			var arr=[];
			for(var v=0;v<arrOrg.length;v++){
				arr[v]=schtp[v];
			}
			if(!arrObj){
				return arr;
			} else {
				arrObj=arr;
			}
		}

		
		createChartList(type1,false);
		createChartList(type2,true);
	}
	
	
	

	//分类或坐标项选取
	function createChartList(listType,muti,paintSign){
		var str="",strobj="";
		for(var i=0,j=orginData[listType];i<j.length;i++){
		
			if(i<4){//默认选中
				if(!muti){//坐标
					chartData["categories"][0]["category"][i]={};
					chartData["categories"][0]["category"][i]["label"]=j[i].value;//取值
				} else {//分类
					chartData["dataset"][i]={};
					chartData["dataset"][i]["seriesname"]=j[i].value;//取值
					chartData["dataset"][i]["color"]=chartColor[i];
				}
				
				strobj+="<p data-id="+(i<10?("0"+i):i)+">"+j[i].value+"</p>";
			} else {
				if(!str){
					str+="<p data-id="+(i<10?("0"+i):i)+">"+j[i].value+"</p>";
				}
			}
			
		}
		if(!paintSign){
			if(!muti){
				$(".js_chart_tp_tar").html(strobj);
				$(".js_chart_tp_orgin").html(str);

			} else {
				$(".js_chart_tar").html(strobj);
				$(".js_chart_orgin").html(str);

			}
		}

	}
	//固定项,生成下拉列表
	for(var k=0;k<stable.length;k++){
		str="";
		for(var m=0,n=stable[k];m<orginData[n].length;m++){//数据与坐标对应
			str+="<option value='"+(m<10?("0"+m):m)+"'>"+orginData[n][m].value+"</option>";
			//chartData["data"][m]["value"]=n[m].value;
		}
		$("#js_opt"+k).html(str).removeClass().attr("data-tp",stable[k]);
	}
	
}

//生成数据,从页面上获取？
function getChartData(orginData){
	var formatData={};
	var xRay=[],xRayID=[],yRay=[],yRayID=[],index1={},index2={};
	var charType=$("#chartype").val()||"bar";/* todo */
	charType=="column"&&(charType="bar");
	//取坐标值(label)
	$(".js_chart_tp_tar p").each(function(index,element){
		
		xRay[index]=$(this).html();
		xRayID[index]=$(this).attr("data-id");
	});
	//取分类值(label)
	$(".js_chart_tar p").each(function(index,element){
		
		yRay[index]=$(this).html();
		yRayID[index]=$(this).attr("data-id");

	});
	//取固定项
	index1["value"]=$("#js_opt0").val();//id
	index1["type"]=$("#js_opt0").attr("data-tp");//tp
	
	index2["value"]=$("#js_opt1").val();//id
	index2["type"]=$("#js_opt1").attr("data-tp");//tp
	
	var tpi=$("#js_type_index").val();
	//对应关系
		var tptw={	//多条件
				"tp1":{"id":"statclass","val":"indicator"},
				"tp2":{"id":"date","val":"indicator"},
				"tp3":{"id":"area","val":"indicator"},
				"tp4":{"id":"date","val":"statclass"},
				"tp5":{"id":"area","val":"statclass"},
				"tp6":{"id":"area","val":"date"}
			}
	var schtp=["area","indicator","statclass","date"];//单条件

	var tempSchtp={"area":"","indicator":"","statclass":"","date":""};
	tempSchtp[index1["type"]]=index1;
	tempSchtp[index2["type"]]=index2;
	
	tempSchtp[tpi["id"]]=xRay;
	tempSchtp[tpi["val"]]=yRay;
	//获取数据
	var series=[];
	for(var i=0;i<yRayID.length;i++){
	//for(var i=0;i<tempSchtp[tpi["val"]].length;i++){//外，坐标
		series[i]={};
		series[i]["name"]=yRay[i];
		series[i]["itemStyle"]={ normal: {label : {show: true, position: 'insideTop'}}}
		series[i]["type"]=charType;
		series[i]["data"]=[];
		for(var j=0;j<xRayID.length;j++){//内,分类
		//for(var j=0;j<tempSchtp[tpi["val"]].length;j++){//内,分类
			//series[i]=xRayID[i]+index1+index2+yRayID[j];
			var strKey=[];
			for(var k=0;k<schtp.length;k++){
				if(schtp[k]==tptw[tpi]["id"]){
					strKey[k]=xRayID[j];
				} else if(schtp[k]==tptw[tpi]["val"]) {
					strKey[k]=yRayID[i];
				} else if(schtp[k]==index1["type"]) {
					strKey[k]=index1["value"];
				} else {
					strKey[k]=index2["value"];
				}
			}

			//series[i]["data"][j]=strKey.join("");
			series[i]["data"][j]=searchresult["dataset"][strKey.join("")][0]["value"]
			//series[i]=tempSchtp["area"][i]+tempSchtp["indicator"]+tempSchtp["statclass"]+tempSchtp["date"];
		}
	}
	formatData["x"]=[{
		"type":"category",
		"data": xRay
	}];
	formatData["y"]=[{
		"type":"value"
	}];
	formatData["data"]=series;
	formatData["legend"]={
		 "data": yRay
	};
	
	return formatData;
}
//生成数据
function createData(orginData){
	var n1,n2,n3,n4,index=[] ,value,k=[],t=[],dataObj={},strValue=[];
	var schtp=["area","indicator","statclass","date"];
	
	var tempData=orginData["dataset"];
	//坐标
	var type=$("#js_char_type").val();
	
			
	//获取标题
	chartData.chart.caption=$("#js_charttt").val()||"图表名称";
	
	chartData.chart.xAxisName=$("#js_char_type").find("option:selected").text();
	chartData.chart.yAxisName="index";
	($(".hidechart:checked").size())>0?(chartData.dataset[0].seriesname=""):"";
	chartData.chart.showValues=($(".datatag:checked").size())>0?0:1;
	
	//固定项值
	for(var h=0;h<schtp.length;h++){
		var tp=$("#js_opt"+h).attr("data-tp");
		dataObj[tp]=[];
		dataObj[tp][0]=$("#js_opt"+h).val();
	}
	// n1=$("#js_opt0").val();
	// n2=$("#js_opt1").val();
	// n2=$("#js_opt2").val();
	
	//取坐标值(label)
	$(".js_chart_tar p").each(function(index,element){
		
		chartData["categories"][0]["category"][index]={};
		chartData["categories"][0]["category"][index]["label"]=$(this).html();
		k[index]=$(this).attr("data-id");
	});
	//取分类值(label)
	$(".js_chart_tp_tar p").each(function(index,element){
		
		chartData["dataset"][index]={};
		chartData["dataset"][index]["seriesname"]=$(this).html();
		t[index]=$(this).attr("data-id");
	});
	//坐标值
	dataObj[type1]=k;
	//分类值
	dataObj[type2]=t;
	//生成匹配串("ff00ff")
	for(var l=0;l<dataObj[type1].length;l++){
		strValue[l]="";
		for(var u=0;u<dataObj[type2].length;u++){
			for(var i=0;i<schtp.length;i++){
			var tempD=dataObj[schtp[i]][l]||dataObj[schtp[i]][0];
			strValue[l]+=tempD;
			}
		}

	}
	//取数据
	for(var q=0;q<chartData["categories"][0]["category"].length;q++){
		chartData["dataset"][0]["data"][q]={};
		if(tempData[strValue[q]]&&tempData[strValue[q]].length>0){//数据存在
			chartData["dataset"][0]["data"][q]["value"]=tempData[strValue[q]][0]["value"];
		
		} else {
			chartData["dataset"][0]["data"][q]["value"]=0;
		}

	}
	
}

function getChartOption(chartType,chartData,showLegend,showValue){
		var xySwitch,datas,temp,charType,pieData=[];
		//类别
		charType=$("#chartype").val();
		if(charType=="column"){charType="bar";xySwitch=true;}
		datas=getChartData(searchresult)
		if(!!xySwitch){
			temp=datas["x"];
			datas["x"]=datas["y"];
			datas["y"]=temp;
		}
		yearbook.data=datas;//for test
		var option={
			// "series":datas["data"],
			// "xAxis": datas["x"],
			// "yAxis": datas["y"],
			"tooltip" : {trigger: 'axis'},
			"legend": datas["legend"],
			"type": charType
		}
		//饼图
		
		if(charType=="pie"){
			pieData[0]={};
			pieData[0]["data"]=[];
			pieData[0]["type"]="pie";
			for(var i=0,j=datas["x"][0]["data"],m=datas["data"]["0"]["data"],k=j.length;i<k;i++){
				
				pieData[0]["data"][i]={};
				pieData[0]["data"][i]["value"]=m[i];
				pieData[0]["data"][i]["name"]=j[i];
			}
			option["series"]=pieData;
		} else {
			option["xAxis"]=datas["x"];
			option["yAxis"]=datas["y"];
			option["series"]=datas["data"];
		}
		if(($(".hidechart:checked").size())>0){
			option.legend["show"]=false;
		}
	return option;
}
/* 初始化 */
$(document).ready(function () {
	$(".icon-statistics").click(function(){
		
		$(".mod-schbox").hide();
		$(".mod-static").show();
		//表单初始化
		$("#divRightColumn").css({"width" :"610",	"height" : "480"});
		createContion(searchresult);

		createEChart(getChartOption(yearbook.chartType));
	});
		//生成图表
	$(".btn-createbar").click(function(){
		createEChart(getChartOption(yearbook.chartType));

	});

	/* 返回 */
	$(".btn-goback").click(function(){
		
		$(".mod-schbox").show();
		$(".mod-static").hide();
		//表单初始化
		//createContion(searchresult);
	});
	
		//选择图表类型
	$(".list-staticthub li").click(function(){
		var chartType;
		$(this).siblings().removeClass("on").end().addClass("on");
		chartType=$(this).attr("data-type");
		$("#chartype").val(chartType);
		//饼图处理
		// if(chartType=="pie"){
			// $(".js_sigleChart").show();
			// $(".js_mutiChart").hide();
			// $(".js_mutiType").hide();
			
		// }
	});
	//选择分类坐标
	$(".index-box").delegate("p","click",function(){
		if($(this).hasClass("chose")){
			$(this).css({"background": "#fff","color":"#333"}).removeClass("chose");
		}else {
			$(this).css({"background": "#4f81bd","color":"#fff"}).addClass("chose");
			
		}
	});
	//添加坐标
	$(".btn-pushindex").click(function(){
		var $obj=$(this).parents(".mod-selindex");
		$obj.find(".index-box").eq(0).find(".chose").appendTo($obj.find(".index-box").eq(1));
		$obj.find(".index-box").eq(0).find(".chose").remove();
	});
	//删除坐标
	$(".btn-pullindex").click(function(){
		var $obj=$(this).parents(".mod-selindex");
		$obj.find(".index-box").eq(1).find(".chose").appendTo($obj.find(".index-box").eq(0));
		$obj.find(".index-box").eq(1).find(".chose").remove();
	});
	//选择类型
	$(document).delegate("#js_char_type","change",function(){
		createContion(searchresult);
		//$(".js_chart_tar").html("");
	});
	//选择表格项
	$(document).delegate("#js_type_index","change",function(){
		createContion(searchresult);
		//$(".js_chart_tar").html("");
	});
	//刷新
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
