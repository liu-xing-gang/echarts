require.config({
	paths: {
		echarts: './js'
	}
});

var labelTop = {
	normal : {
		label : {
			show : true,
			position : 'center',
			formatter : '{b}',
			textStyle: {
				baseline : 'bottom',
				fontSize : 24
			}
		},
		labelLine : {
			show : false
		}
	}
};
var labelFromatter = {
	normal : {
		label : {
			formatter : function (params){
				return 100 - params.value + '%'//圆圈里的百分比
			},
			textStyle: {
				baseline : 'top',
				baseline : 'top',
				fontSize : 30,
				color:'#666'
			}
		}
	},
}
var labelBottom = {
	normal : {
		color: '#ccc',
		label : {
			show : true,
			position : 'center'
		},
		labelLine : {
			show : false
		}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
var radius = [60, 80];//充值渠道比例


function MainTwoZhuTu(){//消费/充值统计柱图
require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/map'
	],
	function (ec) {
		//--- 折柱 ---
		var myChart = ec.init(document.getElementById('MainZT01'));
		myChart.setOption({
			grid:{
				x:'55px',
				y:'45px',
				x2:'45px',
				y2:'35px'
			},
			title : {
				text: '2015年消费/充值统计',
				x: 'center'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['消费金额','充值金额'],
				x: 50
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
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'消费金额',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				{
					name:'充值金额',
					type:'bar',
					data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
					markPoint : {
						data : [
							{name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
							{name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
						]
					},
					markLine : {
						data : [
							{type : 'average', name : '平均值'}
						]
					}
				}
			]
		});
	}
);
}

function MainChongZhi(){//充值渠道比例
require(
	[
		 'echarts',
		 'echarts/chart/tree',
		 'echarts/chart/pie'
	],
	function (ec) {
		var myChart31 = ec.init(document.getElementById('main3001'));
		var option31 = {
			legend: {
				x : '-30%',
				y : '-30%',
				data:['支付宝','银联','微信']
			},
			calculable : true,//圆圈外圈和内圈线条
			series : [
				{
					type : 'pie',
					center : ['20%', '50%'],
					radius : radius,
					x: '0%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:25, itemStyle : labelBottom},
						{name:'支付宝', value:75, itemStyle : labelTop}
					]
				},
				{
					type : 'pie',
					center : ['50%', '50%'],
					radius : radius,
					x:'20%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:80, itemStyle : labelBottom},
						{name:'银联', value:20,itemStyle : labelTop}
					]
				},
				{
					type : 'pie',
					center : ['80%', '50%'],
					radius : radius,
					x:'40%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:95, itemStyle : labelBottom},
						{name:'微信', value:5,itemStyle : labelTop}
					]
				}
			]
		};
		
		var myChart32 = ec.init(document.getElementById('main3002'));
		var option32 = {
			legend: {
				x : '-30%',
				y : '-30%',
				data:['西安','上海','广州']
			},
			calculable : true,//圆圈外圈和内圈线条
			series : [
				{
					type : 'pie',
					center : ['20%', '50%'],
					radius : radius,
					x: '0%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:25, itemStyle : labelBottom},
						{name:'西安', value:75, itemStyle : labelTop}
					]
				},
				{
					type : 'pie',
					center : ['50%', '50%'],
					radius : radius,
					x:'20%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:80, itemStyle : labelBottom},
						{name:'上海', value:20, itemStyle : labelTop}
					]
				},
				{
					type : 'pie',
					center : ['80%', '50%'],
					radius : radius,
					x:'40%', // for funnel
					itemStyle : labelFromatter,
					data : [
						{name:'other', value:95, itemStyle : labelBottom},
						{name:'广州', value:5, itemStyle : labelTop}
					]
				}
			]
		};	
		myChart31.setOption(option31);
		myChart32.setOption(option32);          
	}
);	
}

var labelTop01 = {
	normal : {
		label : {
			show : true,
			position : 'center',
			formatter : '{b}',
			textStyle: {
				baseline : 'bottom',
				fontSize : 18,
				color:'#22a5e0'
			}
		},
		labelLine : {
			show : false
		}
	}
};
var labelFromatter01 = {
	normal : {
		label : {
			formatter : function (params){
				return 100 - params.value + '%'//圆圈里的百分比
			},
			textStyle: {
				baseline : 'top',
				fontSize : 14,
				color:'#ff9100'
			}
		}
	},
}
var labelBottom01 = {
	normal : {
		color: '#ccc',
		label : {
			show : true,
			position : 'center'
		},
		labelLine : {
			show : false
		}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
var radiuscar = [27, 42];//车位占比TOP5
function MainCheWeiZhanBi(){//车位占比TOP5
require(
	[
		 'echarts',
		 'echarts/chart/tree',
		 'echarts/chart/pie'
	],
	function (ec) {
		var myChart12 = ec.init(document.getElementById('MainCheWei'));
		var option12 = {
			legend: {
				x : '-30%',
				y : '-30%',
				data:['西安','上海','广州','深圳','杭州']
			},
			calculable : false,//圆圈外圈和内圈线条
			series : [
				{
					type : 'pie',
					center : ['50%', '10%'],
					radius : radiuscar,
					x: '0%', // for funnel
					itemStyle : labelFromatter01,
					data : [
						{name:'other', value:15, itemStyle : labelBottom01},
						{name:'西安', value:85, itemStyle : labelTop01}
					]
				},
				{
					type : 'pie',
					center : ['50%', '30%'],
					radius : radiuscar,
					x:'20%', // for funnel
					itemStyle : labelFromatter01,
					data : [
						{name:'other', value:35, itemStyle : labelBottom01},
						{name:'上海', value:65,itemStyle : labelTop01}
					]
				},
				{
					type : 'pie',
					center : ['50%', '50%'],
					radius : radiuscar,
					x:'40%', // for funnel
					itemStyle : labelFromatter01,
					data : [
						{name:'other', value:43, itemStyle : labelBottom01},
						{name:'广州', value:57,itemStyle : labelTop01}
					]
				},
				{
					type : 'pie',
					center : ['50%', '70%'],
					radius : radiuscar,
					x:'60%', // for funnel
					itemStyle : labelFromatter01,
					data : [
						{name:'other', value:30, itemStyle : labelBottom01},
						{name:'深圳', value:70,itemStyle : labelTop01}
					]
				},
				{
					type : 'pie',
					center : ['50%', '90%'],
					radius : radiuscar,
					x:'80%', // for funnel
					itemStyle : labelFromatter01,
					data : [
						{name:'other', value:75, itemStyle : labelBottom01},
						{name:'杭州', value:25,itemStyle : labelTop01}
					]
				}
			]
		};
		myChart12.setOption(option12);          
	}
);	
}

function MainLuNieWai(){//路内路外
require(
	[
		 'echarts',
		 'echarts/chart/tree',
		 'echarts/chart/pie'
	],
	function (ec) {
		var myChart11 = ec.init(document.getElementById('MainLuNW'));
		var option11 = {
			tooltip : {
				trigger: 'item',
				formatter: "{b}车位比例:<br/>({d}%)"
			},
			legend: {
				//orient : 'vertical',
				x : '-100%',
				y : '-100%',
				data:['路内','路外']
			},
			toolbox: {
				show : false,
				feature : {
					mark : {show: true},
					dataView : {show: true, readOnly: true},
					magicType : {
						show: true, 
						type: ['pie', 'funnel'],
						option: {
							funnel: {
								x: '25%',
								width: '50%',
								funnelAlign: 'center',
								max: 1548
							}
						}
					},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : false,
			series : [
				{
					name:'',
					type:'pie',
					radius : ['55%', '90%'],
					itemStyle : {
						normal : {
							label : {
								show : false
							},
							labelLine : {
								show : false
							}
						},
						emphasis : {
							label : {
								show : true,
								position : 'center',
								textStyle : {
									fontSize : '30',
									fontWeight : 'bold'
								}
							}
						}
					},
					data:[
						{value:53336875, name:'路内'},
						{value:50126789, name:'路外'}
					]
				}
			]
		}
		myChart11.setOption(option11);         
	}
);	
}

function MainRegisterTotal(){//注册人数统计
require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/map'
	],
	function (ec) {
		//--- 折柱 ---
		var myChart41 = ec.init(document.getElementById('MainZTRegister'));
		myChart41.setOption({
			grid:{
				x:'55px',
				y:'45px',
				x2:'45px',
				y2:'35px'
			},
			title : {
				text: '2015年注册人数统计',
				x: 'center'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['注册人数'],
				x: 50
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
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'注册人数',
					type:'bar',
					data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				}
			]
		});
	}
);
}

function MainBuyTotal5001(){//消费人数统计
require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/map'
	],
	function (ec) {
		//--- 折柱 ---
		var myChart51 = ec.init(document.getElementById('MainBuy5001'));
		myChart51.setOption({
			grid:{
				x:'55px',
				y:'45px',
				x2:'45px',
				y2:'35px'
			},
			title : {
				text: '',
				x: 'center'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:[''],
				x: 50
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
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'',
					type:'bar',
					data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				}
			]
		});
	}
);
}
function MainBuyTotal5002(){//消费人数统计
require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/map'
	],
	function (ec) {
		//--- 折柱 ---
		var myChart52 = ec.init(document.getElementById('MainBuy5002'));
		myChart52.setOption({
			grid:{
				x:'55px',
				y:'45px',
				x2:'45px',
				y2:'35px'
			},
			title : {
				text: '',
				x: 'center'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:[''],
				x: 50
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
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'',
					type:'bar',
					data:[20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33],
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				}
			]
		});
	}
);
}













