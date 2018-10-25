$(function(){
	TotalIndexBox();//计算页面的大小
	MainCheWeiZhanBi();//首页泊车空闲率
	ShowMainMap();//首页地图
	ShowZanYong();//首页车位占用率
	ShowWanHao();//首页设备完好率
	ShowMainTodaySR();//当日收入
	ShowMainTodayDD();//当日订单总量
	ShowMainTodayHY();//累计会员
	ShowMainDangQuan();//当前空闲车位数
});

//计算容器的大小
function TotalIndexBox(){
	var MainWidth = document.body.clientWidth - $(".left_box").width();
	$("#mainBox").width(MainWidth);
	
	$(".index_one").width($("#mainBox").width()-72);
	
	$(".index_one01").width($(".index_one").width());
	$(".index_one01 table").width($(".index_one").width());
	
	$("td.mainTU").width(parseInt(($(".index_one01").width() - 712)/3));
	
	$(".index_two_center").width($(".index_two").width() - $(".index_two_left").width() - $(".index_two_right").width());
	$("#MainMap").width($(".index_two_center").width());
	
	$(".gylist").width($(".index_two").width() - 35);
	
	ShowMainMap();//首页地图
	ShowMainTodaySR();//当日收入
	ShowMainTodayDD();//当日订单总量
	ShowMainTodayHY();//累计会员
}
$(window).resize(function() {//页面大小随窗口大小自动缩放
	TotalIndexBox();
});















