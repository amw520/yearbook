    //加载学术发展趋势图
	var yearbook=yearbook||{"charType" : "bar"};
	
	//选择图表类型
	$(".list-staticthub li").click(function(){
		$(this).siblings().removeClass("on").end().addClass("on");
		yearbook.charType=$(this).attr("data-type");
		$("#chartype").val(yearbook.charType);
	});

	
	$(document).ready(function () {
			$(".btn-createbar").click(function(){
					var optoin={
					"type":yearbook.charType,
					"container":$("#divRightColumn"),
					"data": yearbook.d2bar
					//"data" : yearbook.tw
					//"data" : yearbook.twbar
					//"data" : d4
			}
			createChart(optoin);
			});

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
		"data": yearbook.columnData
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
	var swfPath="js/visual/FusionCharts/";
	var container=option["container"];
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
		case "column":
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
		dataFormat: "json",
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
var chartData={"chart": {
      "caption": "Monthly revenue for last year",
      "subCaption": "Harry's SuperMart",
      "xAxisName": "Month",
      "yAxisName": "Revenues (In USD)",
      "numberPrefix": "$",
      "theme": "fint"
   },"data":[]};
function createContion(orginData){
	//判断格式，不满足退出
	if(!orginData){
		return false;
	}
	var data=[];
	var schtp=["area","date","class","indicator"];
	var type=$("#js_char_type").val();
		schtp.splice(type,1);
	var str="";
	//横坐标
	for(var i=0,j=orginData[type];i<j.length;i++){
		str+='<option value="'+(i<10?("0"+i):i)+'">+'j[i].value'+</option>';
		chartData["data"][i]["label"]=j[i].value;
	}
	//chartData["data"]=data;
	$(".js_chart_orgin").html(str);
	//固定项
	for(var k=0;k<schtp.length;k++){
		for(var m=0,n=schtp[k];m<n.length;m++){
			str+='<p data-value="'+(m<10?("0"+m):m)+'">+'orginData[n][m].value'+</p>';
			//data[m]["label"]=n[m].value;
		}
		$("#js_opt"+k).html(str);
	}
}

//组成数据
function createData(orginData){
	var n1,n2,n3,n4,index="",value,k;
	var tempData=orginData["dataset"];
	n1=$(".chart-area").val();
	n2=$(".chart-index").val();
	n3=$(".chart-class").val();
	for(var i=0;i<j;i++){
		if(i<10){
			k="0"+i;
		}else {
			k=i;
		}
		index=""+n1+n2+n3+k;
		if(tempData[index].length>0){//数据存在
			value=tempData[index][0]["value"];
			
		} else {
			value=0;
		}
		chartData["data"][i]["value"]=value;
	}
}

//显示
$(".icon-statistics").click(function(){
	
	$(".mod-schbox").hide();
	$(".mod-static").show();
	//初始化
	createContion(searchresult)
});
function initStatistics(){
	
}