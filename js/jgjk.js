$(function(){
	TotalNewJGDD();//页面大小随窗口大小自动缩放
});
$(window).resize(function() {//页面大小随窗口大小自动缩放
	TotalNewJGDD();
});
function TotalNewJGDD(){//页面大小随窗口大小自动缩放
	$("#NewJGDD").css({"height":document.body.clientHeight - $(".NewHeader").height() - $(".NewDaohang").height()});
	$(".NewJGDD_left").height($("#NewJGDD").height());
	
	$("#NewJGDD_Map").height($("#NewJGDD").height());
	
	$(".NewJGDD_box").height($("#NewJGDD").height() - 132);
	
	$('#paneALLP').height($(".NewJGDD_box").height());
	$('#paneALLP').width(198);
	$('#paneALLP').jScrollPane({showArrows:true, scrollbarWidth: 8, arrowSize: 9});
	
	$(".NewJGDD_list dl:last").addClass("none");
	
	$("#shijiArrow span").click(function(){//市级车位伸缩事件
		if($(this).text()=="0"){
		  $("#shijichewei").animate({"left":"-240px"});
		  $("#shijiArrow").animate({"left":0});
		  $(this).addClass("curr");
		  $(this).text('1');
		}else{
		  $("#shijichewei").animate({"left":"0px"});
		  $("#shijiArrow").animate({"left":"236px"});
		  $(this).removeClass("curr");
		  $(this).text('0');
		}
	});
	
	$("#dangeArrow span").click(function(){//单个停车场伸缩事件
		if($(this).text()=="0"){
		  $("#dangetingchang").animate({"left":"-240px"});
		  $("#dangeArrow").animate({"left":0});
		  $(this).addClass("curr");
		  $(this).text('1');
		}else{
		  $("#dangetingchang").animate({"left":"0px"});
		  $("#dangeArrow").animate({"left":"236px"});
		  $(this).removeClass("curr");
		  $(this).text('0');
		}
	});
	
	$("#renyuanArrow span").click(function(){//人员伸缩事件
		if($(this).text()=="0"){
		  $("#renyuanLeft").animate({"left":"-240px"});
		  $("#renyuanArrow").animate({"left":0});
		  $(this).addClass("curr");
		  $(this).text('1');
		}else{
		  $("#renyuanLeft").animate({"left":"0px"});
		  $("#renyuanArrow").animate({"left":"236px"});
		  $(this).removeClass("curr");
		  $(this).text('0');
		}
	});
	
	$("#SheBeiArrow span").click(function(){//设备停车场伸缩事件
		if($(this).text()=="0"){
		  $("#SheBeiLeft").animate({"left":"-240px"});
		  $("#SheBeiArrow").animate({"left":0});
		  $(this).addClass("curr");
		  $(this).text('1');
		}else{
		  $("#SheBeiLeft").animate({"left":"0px"});
		  $("#SheBeiArrow").animate({"left":"236px"});
		  $(this).removeClass("curr");
		  $(this).text('0');
		}
	});
	
	$(".NewJGDD_right_tag li").each(function(i){//监管调度右侧切换
		$(this).click(function(){
			$(".cwfb_map_info").hide();//车位分布隐藏
			$(".ssfb_map_info").hide();//车位分布隐藏
			$(".ryfb_map_info").hide();//车位分布隐藏
			$(this).parent().find("li.curr").removeClass("curr");
			$(this).addClass("curr");
			$(".NewJGDD_right_list").hide();
			if(i==0){
				$(".NewJGDD_right_list").eq(1).hide();
				$(".NewJGDD_right_list").eq(2).hide();
				$(".NewJGDD_right_list").eq(0).show();
			}
			if(i==1){				
				$(".NewJGDD_right_list").eq(2).hide();
				$(".NewJGDD_right_list").eq(0).hide();
				$(".NewJGDD_right_list").eq(1).show();
			}
			if(i==2){
				$(".NewJGDD_right_list").eq(0).hide();
				$(".NewJGDD_right_list").eq(1).hide();
				$(".NewJGDD_right_list").eq(2).show();
			}			
		});
	});
	
	$(".NewJGDD_right_list li em").each(function(i){
		$(this).click(function(){
			if($(this).text()=="0"){
			  $(this).addClass("curr");
			  $(this).text('1');
			}else{;
			  $(this).removeClass("curr");
			  $(this).text('0');
			}
		})											 
	});
}
function ShowTingCheChang(){//显示单个停车位
	$("#shijichewei").hide();
	$("#shijiArrow").hide();
	$("#mapShiJi").hide();
	
	ShowDanGe();//显示单个停车场

	$(".NewJGDD_right_tag li:eq(0)").addClass("MRTA");
	$(".NewJGDD_right_list").hide();
	$(".NewJGDD_right_list:first").show();
	$(".NewJGDD_right_tag").find("li.curr").removeClass("curr");
	$(".NewJGDD_right_tag li:eq(0)").addClass("curr");
	$(".NewJGDD_right_tag li:eq(1)").addClass("MRTB");
	$(".NewJGDD_right_tag li:eq(2)").addClass("MRTC");
	
	$("li.MRTA").click(function(){//停车场
		ShowDanGe();//隐藏单个停车场
		HideRenYuan();//显示人员
		HideSheBei();//显示设备
	});
	$("li.MRTB").click(function(){//人员
		HideDanGe();//隐藏单个停车场
		ShowRenYuan();//显示人员
		HideSheBei();//显示设备
	});
	$("li.MRTC").click(function(){//设备
		HideDanGe();//隐藏单个停车场
		HideRenYuan();//隐藏人员
		ShowSheBei();//显示设备
	});
}
function ShowDanGe(){//显示单个停车场
	$("#dangeArrow").show();
	$("#dangetingchang").show();
	$("img[id*='cwfbIcon']").show();
	
	$('#paneDANGE').height($(".NewJGDD_box").height());
	$('#paneDANGE').width(198);
	$('#paneDANGE').jScrollPane({showArrows:true, scrollbarWidth: 8, arrowSize: 9});
	
	$(".cwfb_total dl:last").addClass("none");
}
function HideDanGe(){//隐藏单个停车场
	$("#dangeArrow").hide();
	$("#dangetingchang").hide();
	$("img[id*='cwfbIcon']").hide();
}
function ShowDangeTingA(){
	$(".cwfb_map_info").hide();
	if($("#cwfbInfo1").is(":hidden")){
		$("#cwfbInfo1").show();
	}else{
		$("#cwfbInfo1").hide();
	}
}
function ShowDangeTingB(){
	$(".cwfb_map_info").hide();
	if($("#cwfbInfo2").is(":hidden")){
		$("#cwfbInfo2").show();
	}else{
		$("#cwfbInfo2").hide();
	}
}
function ShowTingCheDetail(){//显示泊车位信息
	$("#popInfo_TingCheDetail").width(document.body.clientWidth - 80);
	$("#popInfo_TingCheDetail .dd_detail_info").width($("#popInfo_TingCheDetail").width() - 15);
	$("#popInfo_TingCheDetail .dd_detail_info").height(document.body.clientHeight - 80 - $("#popInfo_TingCheDetail h2").height());
	$("#popMask").show();
	$("#popInfo_TingCheDetail").show();
	ShowTCBingTu1();
	ShowTCBingTu2();
	ShowTCBingTu3();
	ShowTCZheXianTu1();
}

function ShowRenYuan(){//显示人员
	$("img.MapRyIcon").show();
	$("#renyuanLeft").show();
	$("#renyuanArrow").show();
	
	$('#paneRenYuan').height($(".NewJGDD_box").height());
	$('#paneRenYuan').width(198);
	$('#paneRenYuan').jScrollPane({showArrows:true, scrollbarWidth: 8, arrowSize: 9});
	
	$(".cwfb_total dl:last").addClass("none");
	
	$("img.MapRyIcon").each(function(){
		$(this).click(function(){
			$(".ryfb_map_info").hide();
			if($(this).prev(".ryfb_map_info").is(":hidden")){
				$(this).prev(".ryfb_map_info").show();
			}else{
				$(this).prev(".ryfb_map_info").hide();
			}
		})							 
	});
	
}
function HideRenYuan(){//隐藏人员
	$("img.MapRyIcon").hide();
	$("#renyuanLeft").hide();
	$("#renyuanArrow").hide();
	$(".ryfb_map_info").hide();
}
function ShowRenYuanDetail(){//显示人员详细信息
	$("#popInfo_RenRuanDetail").show();
	$("#popInfo_RenRuanDetail").width(document.body.clientWidth - 80);
	$("#popInfo_RenRuanDetail").height(document.body.clientHeight - 80);
	$("#popInfo_RenRuanDetail .ryfb_detail_right").width(parseInt($("#popInfo_RenRuanDetail").width() - $(".ryfb_detail_left").width())-2);
	$("#popInfo_RenRuanDetail .ryfb_detail_right").height($("#popInfo_RenRuanDetail").height()-72);
	$("#popMask").show();
}
function ShowSheBei(){//显示设备
	$("img.MapSbIcon").show();
	$("#SheBeiLeft").show();
	$("#SheBeiArrow").show();
	
	$('#paneSheBei').height($(".NewJGDD_box").height());
	$('#paneSheBei').width(198);
	$('#paneSheBei').jScrollPane({showArrows:true, scrollbarWidth: 8, arrowSize: 9});
	
	$(".cwfb_total dl:last").addClass("none");
	
	$("img.MapSbIcon").each(function(){
		$(this).click(function(){
			$(".ssfb_map_info").hide();
			if($(this).prev(".ssfb_map_info").is(":hidden")){
				$(this).prev(".ssfb_map_info").show();
			}else{
				$(this).prev(".ssfb_map_info").hide();
			}
		})							 
	});
}
function HideSheBei(){//隐藏设备
	$("img.MapSbIcon").hide();
	$("#SheBeiLeft").hide();
	$("#SheBeiArrow").hide();
}

function ShowSheBeiDetail(){//显示设备详细信息
	$("#popInfo_SheBeiDetail").show();
	$("#popInfo_SheBeiDetail").width(document.body.clientWidth - 80);
	$("#popInfo_SheBeiDetail").height(document.body.clientHeight - 80);
	$("#popInfo_SheBeiDetail .SBBox").width($("#popInfo_SheBeiDetail").width());
	$("#popInfo_SheBeiDetail .SBBox").height($("#popInfo_SheBeiDetail").height() - 40);
	$("#popInfo_SheBeiDetail .gylist").height($("#popInfo_SheBeiDetail").height() - 205);
	$("#popMask").show();
}



