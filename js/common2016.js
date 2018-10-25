//控制PNG图片在低浏览器下兼容
function setPng(obj) {
	obj.width = obj.height = 1;
	obj.className = obj.className.replace(/\bpng\b/i, '');
	obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "',sizingMethod='image');"
	obj.src = '';
	return '';
}

//共用的拖动层
function MoveLayer(id)
{
	if($(document).find("#popInfo_"+id).size()==1){
		var oWin = document.getElementById("popInfo_"+id);
		var oH2 = oWin.getElementsByTagName("h2")[0];
		var bDrag = false;
		var disX = disY = 0;
		oH2.onmousedown = function (event)
		{		
			var event = event || window.event;
			bDrag = true;
			disX = event.clientX - oWin.offsetLeft;
			disY = event.clientY - oWin.offsetTop;		
			this.setCapture && this.setCapture();
			return false
		};
		document.onmousemove = function (event)
		{
			if (!bDrag) return;
			var event = event || window.event;
			var iL = event.clientX - disX;
			var iT = event.clientY - disY;
			var maxL = document.documentElement.clientWidth - oWin.offsetWidth;
			var maxT = document.documentElement.clientHeight - oWin.offsetHeight;		
			iL = iL < 0 ? 0 : iL;
			iL = iL > maxL ? maxL : iL; 		
			iT = iT < 0 ? 0 : iT;
			iT = iT > maxT ? maxT : iT;
			
			oWin.style.marginTop = oWin.style.marginLeft = 0;
			oWin.style.left = iL + "px";
			oWin.style.top = iT + "px";		
			return false;
		};
		document.onmouseup = window.onblur = oH2.onlosecapture = function ()
		{
			bDrag = false;				
			oH2.releaseCapture && oH2.releaseCapture();
		};
	}
};

$(function(){
	TotalMainBox();//计算页面的大小
	ChangeLeftMenu01();//左侧菜单效果
	InitNewSelect();//加载select下拉菜单
	$("a").bind("focus",function(){
		if(this.blur){
			this.blur();
		}
	});
	
	/**所有列表移去背景色切换**/
	$(".gytable tr").mouseover(function(){
	   $(this).addClass("over");
    }).mouseout(function(){
	   $(this).removeClass("over");
    });
	$(".gytable tr:odd").addClass("odd");
	$(".gytable tr:even").addClass("even");
		
});
//新下拉框初始化
function InitNewSelect(){
	$(".options_curr").click(function(){
        $("ul[class*=options]").hide();
		$(this).parent().find("ul[class*=options]").show();
		$(this).parent().css("position","relative");
		var _LengthLI = $(this).parent().find("li").length;
		if(_LengthLI > 5){
			$(this).parent().find("ul[class*=options]").addClass("h110");
		}
		if(_LengthLI > 10){
			$(this).parent().find("ul[class*=options]").addClass("h240");
		}
		$(this).parent().find("li:last").addClass("none");
    });
    // 为div元素绑定click事件    
    $('ul[class*=options]').bind("click",function(event){
        event.stopPropagation();    //  阻止事件冒泡
    });
    $('div.selectbg').bind("click",function(event){
        event.stopPropagation();    //  阻止事件冒泡
    });
    // 为body元素绑定click事件
    $("body").bind("click",function(){
      	$("ul[class*=options]").hide();
    });
	
	/*选择收费管理员*/
	$("input:checkbox").click(function(){
		var ides = [];
		var texts = [];
		$("input:checkbox:checked").each(function(){
			var id = $(this).val();
			ides.push(id);
			texts.push($("#"+id+"_name").val());
		});
		if(texts.length==0){
			$("#carParkIds_Slected").html("请选择");
			$("#ids").val();
		}else{
			var names = "";
			for(var i=0;i<texts.length;i++){
				names+=texts[i]+",";
			}
			var eids = "";
			for(var i=0;i<ides.length;i++){
				eids+=ides[i]+",";
			}
			$("#ids").val(eids);
			$("#carParkIds_Slected").html(names);
		}
	});
}

//下拉选项
function search_show(pos,searchType,href){
	$("#"+pos).val(searchType);//把选择的值保存到id=pos标签的value中
	$("#"+pos+"_Sel").hide();
    $("#"+pos+"_Slected").html($("#"+searchType+"_name").val());
    $("#"+pos).focus();
    $("#"+pos).blur();  
}
//计算容器的大小
function TotalMainBox(){
	
	if (screen.height <= 800){
		$(".NewHeader").addClass("NewHeader768");
		$(".left_menu_new").addClass("H768");
	}
	if (screen.height > 1000){
		$(".NewDaohang").addClass("DH1000");
		$(".left_menu_new").addClass("H1000");
	}
	
	var MainHeight = document.body.clientHeight - $(".NewHeader").height();
	var MainWidth = document.body.clientWidth - $(".left_box").width() - 10;
	$("#main").height(MainHeight);
	$("#main").width(MainWidth);
	if($(document).find("#dingdan").size()==1){
		$(".gy_box01").height($("#main").height()-32);
	}else{
		$(".gy_box01").height($("#main").height());	
	}
	
	if (window.navigator.userAgent.indexOf("MSIE")>=1) {
		$("#main").width(MainWidth-21);
	}else{
		$("#main").width(MainWidth);
	}
	
	$(".TongjiBox01").height($(".gy_box01").height() - 10);
	
	$(".left_box").height($("#main").height()+10);
	
	$(".left_arrow").click(function(){//新的左右伸缩
		if($(this).text()=="0"){
		  $(".left_menu_new").hide();
		  $("#main").width($("#main").width() + $(".left_menu_new").width());
		  $(this).find("span").addClass("curr");
		  $(this).find("span").text('1');
		}else{
		  $(".left_menu_new").show();
		  $("#main").width($("#main").width() - $(".left_menu_new").width());
		  $(this).find("span").removeClass("curr");
		  $(this).find("span").text('0');
		}						
	});
	
	$(".left_menu_new dt").each(function(){
		$(this).click(function(){
			$(this).parent().parent().find("dt.curr").removeClass("curr");
			$(this).addClass("curr");
			$(".left_menu_new").find(".lmBox").hide();
			$(this).parent().find(".lmBox").show();
		})
	});
	
	//如果没有三级菜单
	$(".lmBox dd").each(function(){
		if($(this).find(".subMenu").length!="1"){
			$(this).addClass("none");
		}
	});
	
	
	
}
$(window).resize(function() {//页面大小随窗口大小自动缩放
	TotalMainBox();
});

/**共用弹出层带背景**/
function ShowLayerYes(id){
	$("div[id*=popInfo_]").hide();
	var layer=document.getElementById("popInfo_"+id);
	var mask=document.getElementById("popMask");
	$("#popInfo_"+id).show();
	$("#popMask").show();
	MoveLayer(id);//移动层
	mask.style.width=document.body.clientWidth+"px";
	layer.style.left=(document.body.clientWidth-$("#popInfo_"+id).width())/2 +"px";
	// 判断当前是什么浏览器
	if (window.navigator.userAgent.indexOf("MSIE")>=1) {		
		if (window.navigator.userAgent.indexOf("MSIE").version == 9 || window.navigator.userAgent.indexOf("MSIE").version == 8){
			mask.style.height = $(document).height() + "px";
			layer.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-$("#popInfo_"+id).height())/2)+"px";
		}else{
			mask.style.height = $("body").height() + "px";			
			layer.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-$("#popInfo_"+id).height())/2)+"px";
		}
	}else
	{
		mask.style.height = $(document).height() + "px";
		layer.style.top = (document.documentElement.scrollTop+document.body.scrollTop+(document.documentElement.clientHeight-$("#popInfo_"+id).height())/2)+"px";
	}
}
function HideLayerYes(id){
	$("div[id*=popInfo_]").hide();
	$("#popInfo_"+id).hide();
	$("#popMask").hide();
}

function ChangeLeftMenu01(){//左侧菜单效果
	$(".left_menu dt").click(function(){
		$(this).parent().parent().find("dt.curr").removeClass("curr");
		if($(this).parent().find(".lmbox").is(":hidden")){
			$(this).parent().parent().find(".lmbox").slideUp();
			$(this).parent().find(".lmbox").slideDown();
			$(this).addClass("curr");
		}else{
			$(this).parent().find(".lmbox").slideUp();
			$(this).removeClass("curr");
		}
	});
	$(".left_menu dd").each(function(i){
		$(this).click(function(){
			$(this).parent().parent().parent().find("dd.curr").removeClass("curr");
			$(this).addClass("curr");
		});
	});
}
















