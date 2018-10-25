$(function(){
	$(".b_tag li").click(function(){
		$(this).parent().find("li.curr").removeClass("curr");
		$(this).addClass("curr");
	});
	
	$(".monthAA li").click(function(){
		$(this).parent().find("li.curr").removeClass("curr");
		$(this).addClass("curr");
	});
	ShowMainMap();//地图
	ShowBenYueLinTing();//本月车场临停收入TOP10
	ShowBenYueLiYong();//本月平均泊位利用率TOP10
	ShowLinTing();//临停收入
	ShowDangRiDingDan();//当日订单数量
	ShowDangRiShouRu();//当日线上收入
	ShowRenYuanZaiGang();//人员在岗率及设备完好率
	
	$(".index_E table tr").mouseover(function(){
		$(this).addClass("over");
	}).mouseout(function(){
		$(this).removeClass("over");
	});
	$(".index_E table tr:odd").addClass("odd");
	$(".index_E table tr:even").addClass("even");
});

















