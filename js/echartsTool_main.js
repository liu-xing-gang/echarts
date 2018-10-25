require.config({
	paths: {
		echarts: './js'
	}
});

function ShowBenYueLinTing(){//本月车场临停收入TOP10
	require(
		[
			 'echarts',
			 'echarts/chart/bar'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('BenYueLinTing'));
			var option11 = {
				grid:{
					x:'40px',
					y:'20px',
					x2:'10px',
					y2:'30px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：收入{c}万元"
				},
				legend: {
					data:[]
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : false,
				xAxis : [
					{
						type : 'category',
						data : ['NO1','NO2','NO3','NO4','NO5','NO6','NO7','NO8','NO9','NO10'],
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#504F4F',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:true,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						name:'数量(万吨)',
						type : 'value',
						splitNumber:5,
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的竖线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'本月车场临停收入',
						type:'bar',
						barWidth:20,
						itemStyle: {//系列级个性化
							normal: {
								barBorderWidth: 0,
								barBorderRadius:[2, 2, 0, 0],
								color: function(params) {
									var colorList = [
									  '#A754F6','#5E5BF1','#5281FA','#4CA7F9','#42D3F2',
									   '#44CEF4','#36B6EA','#31AFE7','#33A8DF','#31A4DE'
									];
									return colorList[params.dataIndex]
								}
							},
							emphasis: {//柱图移上去效果
								barBorderRadius:[2, 2, 0, 0]
							}
						},
						data:[110,100,90,80,70,60,50,40,30,20]						
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}
function ShowBenYueLiYong(){//本月平均泊位利用率TOP10
	require(
		[
			 'echarts',
			 'echarts/chart/line'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('BenYueLiYong'));
			var option11 = {
				grid:{
					x:'40px',
					y:'20px',
					x2:'25px',
					y2:'30px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：利用率{c}%"
				},
				legend: {
					data:[]
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable:false,
				xAxis:[
					{
						type : 'category',
						data : ['NO1','NO2','NO3','NO4','NO5','NO6','NO7','NO8','NO9','NO10'],
						boundaryGap : false,
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#504F4F',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:true,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						min:0,
						max:100,
						axisLabel:{
							formatter: '{value} %',
							textStyle:{
								color:'#ccc'							
							}
						},
						splitNumber:5,
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的竖线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'本月平均泊位利用率',
						type:'line',
						smooth:true,
            			itemStyle: {normal: {areaStyle: {type: 'default'}}},
						data:[14.5, 16.9, 17.5, 14.3, 12.8, 55.6, 34.8, 40.5, 30.2, 20.9]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}

function ShowLinTing(){//临停收入
	require(
		[
			 'echarts',
			 'echarts/chart/line'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('LinTing'));
			var option11 = {
				grid:{
					x:'3px',
					y:'0px',
					x2:'3px',
					y2:'0px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：{a} {c}元"
				},
				legend: {
					show:false,
					data:['应收','实收']
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : false,
				xAxis : [
					{
						type : 'category',
						boundaryGap : false,
						data : ['周一','周二','周三','周四','周五','周六','周日'],
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的横线
							show:false,
							lineStyle:{
								color: '#990000',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'应收',
						type:'line',
						data:[150, 162, 171, 184, 140, 170, 145]
					},
					{
						name:'实收',
						type:'line',
						data:[120, 132, 101, 134, 90, 230, 210]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}

function ShowDangRiDingDan(){//当日订单数量
	require(
		[
			 'echarts',
			 'echarts/chart/line'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('DangRiDingDan'));
			var option11 = {
				grid:{
					x:'3px',
					y:'0px',
					x2:'3px',
					y2:'0px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：订单数{c}"
				},
				legend: {
					data:[]
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable:false,
				xAxis:[
					{
						type : 'category',
						data : ['周一','周二','周三','周四','周五','周六','周日'],
						boundaryGap : false,
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:true,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的竖线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'近一周订单数量',
						type:'line',
						smooth:true,
            			itemStyle: {normal: {areaStyle: {type: 'default',color: '#24A6A8'},color: '#A4FFE9'}},
						data:[145, 169, 170, 143, 128, 556, 125]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}

function ShowDangRiShouRu(){//当日线上收入
	require(
		[
			 'echarts',
			 'echarts/chart/bar'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('DangRiShouRu'));
			var option11 = {
				grid:{
					x:'3px',
					y:'0px',
					x2:'3px',
					y2:'0px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：线上收入{c}"
				},
				legend: {
					data:[]
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable:false,
				xAxis:[
					{
						type : 'category',
						data : ['周一','周二','周三','周四','周五','周六','周日'],
						boundaryGap : true,
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#504F4F',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:true,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的竖线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'当日线上收入',
						type:'bar',
						barWidth:18,
						itemStyle: {//系列级个性化
							emphasis: {//柱图移上去效果
								barBorderRadius:[2, 2, 0, 0],
								barBorderColor:'#FF9C00',
								color: '#FF9C00'
							},
							normal: {
								barBorderRadius:[2, 2, 0, 0],
								barBorderColor:'#FFAF08',
								color: '#FFAF08'								
							},
							opacity :"0.5"
						},
						data:[145, 169, 170, 143, 128, 556, 125]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}

function ShowRenYuanZaiGang(){//人员在岗率及设备完好率
	require(
		[
			 'echarts',
			 'echarts/chart/line'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('RenYuanZaiGang'));
			var option11 = {
				grid:{
					x:'3px',
					y:'0px',
					x2:'3px',
					y2:'0px',
					//backgroundColor:'#FCFDFF',
					borderColor:'#005DA2',//边框颜色
					borderwidth:0
				},
				tooltip : {
					formatter: "{b}：{a} {c}元"
				},
				legend: {
					show:false,
					data:['入口流量','出口流量']
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : false,
				xAxis : [
					{
						type : 'category',
						boundaryGap : false,
						data : ['周一','周二','周三','周四','周五','周六','周日'],
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//X轴的横线
							show:false,
							lineStyle:{
								color: '#1A81CC',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						axisLabel:{
							textStyle:{//Y轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:false,
							lineStyle:{
								color: '#2877B0',
								type:'dashed',
								width: 1
							}
						},
						axisLine:{//Y轴的横线
							show:false,
							lineStyle:{
								color: '#990000',
								width: 1
							}
						},
						axisTick:{//各列之间的间隔样式控制
							show:false,
							length:6,
							lineStyle:{
								color: '#4488BB',
								width: 1
							}
						}
					}
				],
				series : [
					{
						name:'入口流量',
						type:'line',
						itemStyle: {normal: {areaStyle: {type: 'default',color: '#32ecba'},color: '#990'}},
						data:[150, 162, 171, 184, 140, 170, 145]
					},
					{
						name:'出口流量',
						type:'line',
						itemStyle: {normal: {areaStyle: {type: 'default',color: '#fdc02d'},color: '#ff6600'}},
						data:[120, 132, 101, 134, 90, 230, 210]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}

function ShowMainMap(){
	require(
		[
			 'echarts',
			 'echarts/chart/map',
			 'echarts/util/mapData/params'
		],
		function (ec) {
			var myChart11 = ec.init(document.getElementById('MainMap'));
			var option11 = {
				title : {
					show: false,
					text: '',
					subtext: '',
					x:'center'
				},
				tooltip : {
					trigger: 'item'
				},
				legend: {
					show: true,
					orient: 'vertical',
					x:'150%',
					data:['停车场信息']
				},
				dataRange: {
					show: true,
					min: 0,
					max: 300,
					x: '3%',
					y: 'bottom',
					orient:'horizontal',
					color: ['#003297','#B7DEFF'],
					textStyle:{
						color:'#fff'
					},
					text:['高','低'],// 文本，默认为数值文本
					calculable : true
				},
				series : [
					{
						name: '停车场信息',
						type: 'map',
						mapType: 'china',
						roam: false,
						showLegendSymbol : false,//去掉地图的小点
						itemStyle:{
							normal:{
								label:{
	    		                	show:true,
									textStyle:{//地图区域文字颜色
										color:'#fff'
									},
									formatter:function(aname,value){//地图区域显示文字
										//return "  "+aname+" \n "+value+"%";
										return aname;
	    		                	}
								},
								borderColor:'rgba(255,255,255,1)',//地图边框颜色
								borderWidth:1
							}
						},
						geoCoord: {
							'北京': [116.4551,40.2539],
							'上海': [121.4648,31.2891],
							'天津': [117.4219,39.4189],
							'黑龙江': [128.9688,46.668],
							'吉林': [126.8154,43.1584],
							'辽宁': [123.1238,41.5216],
							'内蒙古': [111.9924,42.1901],
							'新疆': [84.9236,40.5883],
							'西藏': [90.1865,30.1465],
							'宁夏': [106.3586,37.1775],
							'河北': [114.4995,38.1006],
							'河南': [113.4668,34.1234],
							'山西': [112.3352,36.4413],
							'山东': [119.5582,35.8701],
							'青海': [96.4038,35.8207],
							'甘肃': [103.6901,34.8043],
							'陕西': [108.8162,33.8004],
							'安徽': [117.29,32.0581],
							'江苏': [119.5062,32.9208],
							'湖北': [113.1896,30.6628],
							'湖南': [111.3823,28.1068],
							'四川': [103.4526,30.3617],
							'贵州': [106.6992,26.7682],
							'重庆': [107.7539,30.1904],
							'江西': [116.0046,28.6633],
							'福建': [118.0543,25.9222],
							'广西': [108.679,23.5152],
							'广东': [113.5107,23.2196],
							'云南': [102.0199,24.1663],
							'浙江': [120.3313,29.2773],
							'海南': [110.3893,19.8516]
						},
						data:[
							{name: '北京',value: Math.round(Math.random()*1000)},
							{name: '天津',value: Math.round(Math.random()*1000)},
							{name: '上海',value: Math.round(Math.random()*1000)},
							{name: '重庆',value: Math.round(Math.random()*1000)},
							{name: '河北',value: Math.round(Math.random()*1000)},
							{name: '河南',value: Math.round(Math.random()*1000)},
							{name: '云南',value: Math.round(Math.random()*1000)},
							{name: '辽宁',value: Math.round(Math.random()*1000)},
							{name: '黑龙江',value: Math.round(Math.random()*1000)},
							{name: '湖南',value: Math.round(Math.random()*1000)},
							{name: '安徽',value: Math.round(Math.random()*1000)},
							{name: '山东',value: Math.round(Math.random()*1000)},
							{name: '新疆',value: Math.round(Math.random()*1000)},
							{name: '江苏',value: Math.round(Math.random()*1000)},
							{name: '浙江',value: Math.round(Math.random()*1000)},
							{name: '江西',value: Math.round(Math.random()*1000)},
							{name: '湖北',value: Math.round(Math.random()*1000)},
							{name: '广西',value: Math.round(Math.random()*1000)},
							{name: '甘肃',value: Math.round(Math.random()*1000)},
							{name: '山西',value: Math.round(Math.random()*1000)},
							{name: '内蒙古',value: Math.round(Math.random()*1000)},
							{name: '陕西',value: Math.round(Math.random()*1000)},
							{name: '吉林',value: Math.round(Math.random()*1000)},
							{name: '福建',value: Math.round(Math.random()*1000)},
							{name: '贵州',value: Math.round(Math.random()*1000)},
							{name: '广东',value: Math.round(Math.random()*1000)},
							{name: '青海',value: Math.round(Math.random()*1000)},
							{name: '西藏',value: Math.round(Math.random()*1000)},
							{name: '四川',value: Math.round(Math.random()*1000)},
							{name: '宁夏',value: Math.round(Math.random()*1000)},
							{name: '海南',value: Math.round(Math.random()*1000)},
							{name: '台湾',value: Math.round(Math.random()*1000)},
							{name: '香港',value: Math.round(Math.random()*1000)},
							{name: '澳门',value: Math.round(Math.random()*1000)}
						]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	)
}