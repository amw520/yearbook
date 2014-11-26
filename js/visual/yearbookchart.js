    //加载学术发展趋势图
	var yearbook=yearbook||{};
	yearbook.lineChartXml = "<chart unescapeLinks='0'anchorBgColor='ed821a'caption=''subCaption='学术发展趋势(期刊文章)1915-2013'showPlotBorder='1'plotBorderThickness='2'plotBorderColor='ed790c'plotBorderAlpha='80'plotFillColor='fdf8e5'plotFillAlpha='50'canvasBorderColor='645e60'canvasBorderThickness='0'anchorAlpha='100'anchorBorderColor='ed821a'anchorRadius='2.5'bgcolor='ffffff'showborder='100'centerYaxisName='1'xAxisName='(单位：个)'numDivLines='11'yAxisValuesStep='3'labelStep='13'alternateHGridColor='ffffff'showValues='0'formatNumberScale='0'formatNumber='0'baseFontSize='14'><set link=''value='1'label='1915年'hoverText='1915年 : 1'></set><set link=''value='1'label='1917年'hoverText='1917年 : 1'></set><set link=''value='1'label='1925年'hoverText='1925年 : 1'></set><set link=''value='1'label='1929年'hoverText='1929年 : 1'></set><set link=''value='1'label='1946年'hoverText='1946年 : 1'></set><set link=''value='1'label='1950年'hoverText='1950年 : 1'></set><set link=''value='2'label='1951年'hoverText='1951年 : 2'></set><set link=''value='2'label='1952年'hoverText='1952年 : 2'></set><set link=''value='8'label='1953年'hoverText='1953年 : 8'></set><set link=''value='13'label='1954年'hoverText='1954年 : 13'></set><set link=''value='14'label='1955年'hoverText='1955年 : 14'></set><set link=''value='21'label='1956年'hoverText='1956年 : 21'></set><set link=''value='26'label='1957年'hoverText='1957年 : 26'></set><set link=''value='19'label='1958年'hoverText='1958年 : 19'></set><set link=''value='30'label='1959年'hoverText='1959年 : 30'></set><set link=''value='32'label='1960年'hoverText='1960年 : 32'></set><set link=''value='17'label='1961年'hoverText='1961年 : 17'></set><set link=''value='16'label='1962年'hoverText='1962年 : 16'></set><set link=''value='24'label='1963年'hoverText='1963年 : 24'></set><set link=''value='20'label='1964年'hoverText='1964年 : 20'></set><set link=''value='20'label='1965年'hoverText='1965年 : 20'></set><set link=''value='6'label='1966年'hoverText='1966年 : 6'></set><set link=''value='2'label='1970年'hoverText='1970年 : 2'></set><set link=''value='5'label='1972年'hoverText='1972年 : 5'></set><set link=''value='13'label='1973年'hoverText='1973年 : 13'></set><set link=''value='13'label='1974年'hoverText='1974年 : 13'></set><set link=''value='18'label='1975年'hoverText='1975年 : 18'></set><set link=''value='13'label='1976年'hoverText='1976年 : 13'></set><set link=''value='19'label='1977年'hoverText='1977年 : 19'></set><set link=''value='40'label='1978年'hoverText='1978年 : 40'></set><set link=''value='78'label='1979年'hoverText='1979年 : 78'></set><set link=''value='124'label='1980年'hoverText='1980年 : 124'></set><set link=''value='168'label='1981年'hoverText='1981年 : 168'></set><set link=''value='218'label='1982年'hoverText='1982年 : 218'></set><set link=''value='226'label='1983年'hoverText='1983年 : 226'></set><set link=''value='268'label='1984年'hoverText='1984年 : 268'></set><set link=''value='302'label='1985年'hoverText='1985年 : 302'></set><set link=''value='320'label='1986年'hoverText='1986年 : 320'></set><set link=''value='355'label='1987年'hoverText='1987年 : 355'></set><set link=''value='339'label='1988年'hoverText='1988年 : 339'></set><set link=''value='343'label='1989年'hoverText='1989年 : 343'></set><set link=''value='353'label='1990年'hoverText='1990年 : 353'></set><set link=''value='413'label='1991年'hoverText='1991年 : 413'></set><set link=''value='428'label='1992年'hoverText='1992年 : 428'></set><set link=''value='370'label='1993年'hoverText='1993年 : 370'></set><set link=''value='718'label='1994年'hoverText='1994年 : 718'></set><set link=''value='754'label='1995年'hoverText='1995年 : 754'></set><set link=''value='783'label='1996年'hoverText='1996年 : 783'></set><set link=''value='857'label='1997年'hoverText='1997年 : 857'></set><set link=''value='960'label='1998年'hoverText='1998年 : 960'></set><set link=''value='1147'label='1999年'hoverText='1999年 : 1147'></set><set link=''value='1552'label='2000年'hoverText='2000年 : 1552'></set><set link=''value='1911'label='2001年'hoverText='2001年 : 1911'></set><set link=''value='2556'label='2002年'hoverText='2002年 : 2556'></set><set link=''value='3510'label='2003年'hoverText='2003年 : 3510'></set><set link=''value='3853'label='2004年'hoverText='2004年 : 3853'></set><set link=''value='3620'label='2005年'hoverText='2005年 : 3620'></set><set link=''value='4247'label='2006年'hoverText='2006年 : 4247'></set><set link=''value='5282'label='2007年'hoverText='2007年 : 5282'></set><set link=''value='5781'label='2008年'hoverText='2008年 : 5781'></set><set link=''value='6423'label='2009年'hoverText='2009年 : 6423'></set><set link=''value='6742'label='2010年'hoverText='2010年 : 6742'></set><set link=''value='7530'label='2011年'hoverText='2011年 : 7530'></set><set link=''value='4680'label='2012年'hoverText='2012年 : 4680'></set><set link=''value='2013'label='2013年'hoverText='2013年 : 2013'></set><set></set><set></set></chart>";
	yearbook.pieChartXml = "<chart unescapeLinks='0' caption='资源分布情况' showBorder='0' showNames='1' bgAlpha='100' bgColor='ffffff' decimalPrecision='0' baseFontSize='14' outCnvBaseFontSze='14' formatNumberScale = '0' paletteColors='E1898D,F9DAB6,FFD867,F0E787,BFDD8B,9CDBD1,7CB5E2,3581BD,7A8BC1,B38CB8,FBC6AA,7CCBE2'><set value='1234' name='期刊文章' toolText='期刊文章,78.11%' displayValue='期刊文章,78.11%'></set><set value='2345' name='图书' toolText='图书,14.26%' displayValue='图书,14.26%'></set><set value='1231' name='学位论文' toolText='学位论文,7.54%' displayValue='学位论文,7.54%'></set><set value='1777' name='期刊' toolText='期刊,0.09%' displayValue='期刊,0.09%'></set></chart> ";
	yearbook.mslinechartxml = "<chart caption='测试图'><categories ><category label='1' /><category label='2' /><category label='3' /><category label='4' /><category label='5' /></categories><dataset seriesName='办公室' ><set value='0' toolText='办公室' /><set value='3' toolText='办公室' /><set value='0' toolText='办公室' /><set value='2' toolText='办公室' /><set value='0' toolText='办公室' /></dataset><dataset seriesName='儿童世界管理部' ><set value='5' toolText='儿童世界管理部' /><set value='0' toolText='儿童世界管理部' /><set value='0' toolText='儿童世界管理部' /><set value='3' toolText='儿童世界管理部' /><set value='0' toolText='儿童世界管理部' /></dataset></chart>";
	
	var lineJson={"chart":{"caption":"Number of visitors last week","subCaption":"Bakersfield Central vs Los Angeles Topanga","captionFontSize":"14","subcaptionFontSize":"14","subcaptionFontBold":"0","paletteColors":"#0075c2,#1aaf5d","bgcolor":"#ffffff","showBorder":"0","showShadow":"0","showCanvasBorder":"0","usePlotGradientColor":"0","legendBorderAlpha":"0","legendShadow":"0","showAxisLines":"0","showAlternateHGridColor":"0","divlineThickness":"1","divLineIsDashed":"1","divLineDashLen":"1","divLineGapLen":"1","xAxisName":"Day","showValues":"0"},"categories":[{"category":[{"label":"Mon"},{"label":"Tue"},{"label":"Wed"},{"vline":"true","lineposition":"0","color":"#6baa01","labelHAlign":"center","labelPosition":"0","label":"National holiday","dashed":"1"},{"label":"Thu"},{"label":"Fri"},{"label":"Sat"},{"label":"Sun"}]}],"dataset":[{"seriesname":"Bakersfield Central","data":[{"value":"15123"},{"value":"14233"},{"value":"25507"},{"value":"9110"},{"value":"15529"},{"value":"20803"},{"value":"19202"}]},{"seriesname":"Los Angeles Topanga","data":[{"value":"13400"},{"value":"12800"},{"value":"22800"},{"value":"12400"},{"value":"15800"},{"value":"19800"},{"value":"21800"}]}],"trendlines":[{"line":[{"startvalue":"17022","color":"#6baa01","valueOnRight":"1","displayvalue":"Average"}]}]};
	$(document).ready(function () {
			$(".btn-createbar").click(function(){
					var optoin={
					"type":"line",
					"container":$("#divRightColumn"),
					"data": yearbook.col
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
		"type":"line",
		"width": 600,
		"height": 360,
		"data": yearbook.columnData
	}
	for(var i in defOption){
		if(!option[i]){
			option[i]=defOption[i];
		}
	}
	switch (option["type"]){
		case "bar": 
		addLineChart(option["container"], option["data"], option["width"], option["height"]);
		break;
		case "column":
		addLineChart(option["container"], option["data"], option["width"], option["height"]);
		break;
		case "pie":
		addPieChart(option["container"], option["data"], option["width"], option["height"]);
		break;
		case "line":
		addLineChart(option["container"], option["data"], option["width"], option["height"]);
		break;
	}
	var w=option["width"];
	var h=option["height"];
	var str=option["data"];
	var typePath="";
	div.insertFusionCharts({
		swfUrl: "js/visual/FusionCharts/MSLine.swf",
		dataSource: str,
		dataFormat: "json",
		width: w,
		height: h
	});
}
/*
** 生成饼图
**@para {string}container 生成图的容器
**@para {json}data 生成图的数据
**@para {number int}width 生成图的宽
**@para {number int}height 生成图的高
*/
function addLineChart(container, data,  width, height) {
    var w = width;
    var h = height;
    var title = "<h3 class=\"diaboxtt f18b\">" + title + "</h3>";
    var str = data;
        var div = $("<div></div>");
        container.append(div);
        div.insertFusionCharts({
            swfUrl: "js/visual/FusionCharts/MSLine.swf",
            dataSource: str,
            dataFormat: "json",
            width: w,
            height: h
        });
};
/*
** 生成饼图
**@para {string}container 生成图的容器
**@para {json}data 生成图的数据
**@para {number int}width 生成图的宽
**@para {number int}height 生成图的高
*/
function addPieChart(container, data,  width, height) {
    var w = width;
    var h = height;
	var str=data;
    if (str != "") {
        var div = $("<div></div>");
        container.append(div);
        div.insertFusionCharts({
            swfUrl: "js/visual/FusionCharts/Doughnut2D.swf",
            dataSource: str,
            dataFormat: "json",
            width: w,
            height: h
        });
    }
}
/*
** 生成多拆线图
**@para {string}container 生成图的容器
**@para {json}data 生成图的数据
**@para {number int}width 生成图的宽
**@para {number int}height 生成图的高
*/

function addMslineChart(container, data, width, height) {
    var w = width;
    var h = height;
    //var str = formatPieXML("", data, needredirect, width, height);
    var str = yearbook.mslinechartxml;
    if (str != "") {
        var div = $("<div></div>");
        container.append(div);
        div.insertFusionCharts({
            swfUrl: "js/visual/FusionCharts/MSLine.swf",
            dataSource: str,
            dataFormat: "json",
            width: w,
            height: h
        });
    }
}
