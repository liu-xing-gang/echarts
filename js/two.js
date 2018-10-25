$(function(){
	TotalTwoBox();//计算页面的大小
	$("select[class*='w100']").selectlist({zIndex: 10,width: 100,height: 40});
	$("select[class*='w120']").selectlist({zIndex: 10,width: 120,height: 40});
	$("select[class*='w150']").selectlist({zIndex: 10,width: 150,height: 40});
	$("select[class*='w160']").selectlist({zIndex: 10,width: 165,height: 40});
	$("select[class*='w180']").selectlist({zIndex: 10,width: 180,height: 40});
	$("select[class*='w185']").selectlist({zIndex: 10,width: 185,height: 40});
	$("select[class*='w200']").selectlist({zIndex: 10,width: 200,height: 40});
	$("select[class*='w205']").selectlist({zIndex: 10,width: 206,height: 40});
	$("select[class*='w245']").selectlist({zIndex: 10,width: 246,height: 40});
	$("select[class*='w285']").selectlist({zIndex: 10,width: 286,height: 40});
	$("select[class*='w400']").selectlist({zIndex: 10,width: 400,height: 40});
});

//计算容器的大小
function TotalTwoBox(){
	$("#dingdan li").each(function(i){
		$(this).click(function(){
			$(this).parent().find("li.curr").removeClass("curr");
			$(this).addClass("curr");
		});
	});
	
	$("#youhuiquan li").each(function(i){
		$(this).click(function(){
			$(this).parent().find("li.curr").removeClass("curr");
			$(this).addClass("curr");
			$("div[id*='yiyongA']").hide();
			$("#yiyongA"+i).show();
		});
	});
	
	$('#addRight').click(function(){
		if($('#DaiXuan').find("label.curr").length==0){
			ShowLayerTrip(1);
		}
		$('#DaiXuan label.curr').appendTo('#YiXuan');
		$('#YiXuan').find("em").text('0');
		$('#YiXuan').find("label.curr").removeClass('curr');
	});
	
	$('#removeLeft').click(function(){
		if($('#YiXuan').find("label.curr").length==0){
			ShowLayerTrip(1);
		}
		$('#YiXuan label.curr').appendTo('#DaiXuan');
		$('#DaiXuan').find("em").text('0');
		$('#DaiXuan').find("label.curr").removeClass('curr');
		
	});
	
	$(".zdyA label").click(function(){//市级车位伸缩事件
		if($(this).find("em").text()=="0"){
		  $(this).addClass("curr");
		  $(this).find("em").text('1');
		}else{
		  $(this).removeClass("curr");
		  $(this).find("em").text('0');
		}
	});
	
	$("#seachZDYA label").each(function(i){//市级车位伸缩事件
		$(this).click(function(){
			if($(this).find("em").text()=="0"){
				$("ul#pops"+i).show();
				$(this).addClass("curr");
				$(this).find("em").text('1');
			}else{
			    $("ul#pops"+i).hide();
				$(this).removeClass("curr");
				$(this).find("em").text('0');
			}
		})
	});
	
}
$(window).resize(function() {//页面大小随窗口大小自动缩放
	TotalTwoBox();
});
function ShowShiTu(){//显示视图定义
	$("#popMask").show();
	$("#popInfo_ShiTu").show();
}
function HideShiTu(){//隐藏视图定义
	$("#popMask").hide();
	$("#popInfo_ShiTu").hide();
}
function ShowLayerTrip(id){
	if(id=="1"){
		$(".popTrip").html("请选择字段");
	}
}
function ShowLayerTrip(id){
	$("#popInfo_Trip").show().css({"z-index":"1004"});
	$("#popMask").css({"z-index":"1003"});
	if(id=="1"){
		$(".popTrip").html("请选择字段");
	}
}
function HideLayerTrip(id){
	$("#popInfo_Trip").hide();
	$("#popMask").css({"z-index":"1001"});
	$(".popTrip").html("");
}













