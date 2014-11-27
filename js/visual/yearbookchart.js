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
					//"data": yearbook.d2bar
					//"data" : yearbook.tw
					"data" : yearbook.twbar
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
