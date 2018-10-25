require.config({
	paths: {
		echarts: './js'
	}
});

function ShowXSCZ(){
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('XSCZ'));
			var option12 = {
				grid:{
					x:'45px',
					y:'35px',
					x2:'15px',
					y2:'40px'
				},
				tooltip : {
					trigger: 'axis'
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : false,
				legend: {
					x:'right',
					data:['线上收入']
				},
				xAxis : [
					{
						type : 'category',
						data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日']
					}
				],
				yAxis : [
					{
						type : 'value',
						name : '（万元）',
						axisLabel : {
							formatter: '{value}'
						}
					},
					{
						type : 'value',
						name : '（万单）',
						axisLabel : {
							formatter: '{value}'
						}
					}
				],
				series : [
			
					{
						name:'线上收入',
						type:'bar',
						barWidth:10,
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#009dd9',
								color: '#009dd9'
							}
						},
						data:[20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76]
					}
				]
				
			};
            myChart12.setOption(option12);
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
					fontSize : 0,
					color:'#333'
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
					fontSize : 24,
					color:'#333'
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
var radiuscar = [55, 75];

function TongjiFenxiCarOne(){//全国线上充值
	require(
        [
             'echarts',
			 'echarts/chart/tree',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart13 = ec.init(document.getElementById('TJCheWeiOne'));
			var option13 = {
				legend: {
					x : '-30%',
					y : '-30%',
					data:['支付宝','微信','银联','钱包']
				},
				calculable : false,//圆圈外圈和内圈线条
				series : [
					{
						type : 'pie',
						center : ['10%', '50%'],
						radius : radiuscar,
						x: '0%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:25, itemStyle : labelBottom01},
							{name:'支付宝', value:75, itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['30%', '50%'],
						radius : radiuscar,
						x:'20%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:80, itemStyle : labelBottom01},
							{name:'微信', value:20,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['50%', '50%'],
						radius : radiuscar,
						x:'40%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:95, itemStyle : labelBottom01},
							{name:'银联', value:5,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['70%', '50%'],
						radius : radiuscar,
						x:'40%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:95, itemStyle : labelBottom01},
							{name:'钱包', value:5,itemStyle : labelTop01}
						]
					}
				]
		    };
            myChart13.setOption(option13);
        }
    );		
}

function TongjiFenxiCarTwo(){//城市线上充值
	require(
        [
             'echarts',
			 'echarts/chart/tree',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart13 = ec.init(document.getElementById('TJCheWeiTwo'));
			var option13 = {
				legend: {
					x : '-30%',
					y : '-30%',
					data:['支付宝','微信','银联','钱包']
				},
				calculable : false,//圆圈外圈和内圈线条
				series : [
					{
						type : 'pie',
						center : ['10%', '50%'],
						radius : radiuscar,
						x: '0%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:25, itemStyle : labelBottom01},
							{name:'支付宝', value:75, itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['30%', '50%'],
						radius : radiuscar,
						x:'20%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:80, itemStyle : labelBottom01},
							{name:'微信', value:20,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['50%', '50%'],
						radius : radiuscar,
						x:'40%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:95, itemStyle : labelBottom01},
							{name:'银联', value:5,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['70%', '50%'],
						radius : radiuscar,
						x:'40%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:95, itemStyle : labelBottom01},
							{name:'钱包', value:5,itemStyle : labelTop01}
						]
					}
				]
		    };
            myChart13.setOption(option13);
        }
    );		
}
