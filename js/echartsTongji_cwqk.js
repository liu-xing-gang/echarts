require.config({
	paths: {
		echarts: './js'
	}
});

var labelTop01 = {
		normal : {
			label : {
				show : true,
				position : 'center',
				formatter : '{b}',
				textStyle: {
					baseline : 'bottom',
					fontSize : 18,
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
var radiuscar = [45, 60];//车位占比TOP5
function TongjiFenxiCar(){//车位占比TOP5
	require(
        [
             'echarts',
			 'echarts/chart/tree',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('TJCheWei'));
			var option12 = {
				legend: {
					x : '-30%',
					y : '-30%',
					data:['海淀','朝阳','通州','东城','西城']
				},
				calculable : true,//圆圈外圈和内圈线条
				series : [
					{
						type : 'pie',
						center : ['10%', '50%'],
						radius : radiuscar,
						x: '0%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:15, itemStyle : labelBottom01},
							{name:'海淀', value:85, itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['30%', '50%'],
						radius : radiuscar,
						x:'20%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:35, itemStyle : labelBottom01},
							{name:'朝阳', value:65,itemStyle : labelTop01}
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
							{name:'通州', value:57,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['70%', '50%'],
						radius : radiuscar,
						x:'60%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:30, itemStyle : labelBottom01},
							{name:'东城', value:70,itemStyle : labelTop01}
						]
					},
					{
						type : 'pie',
						center : ['90%', '50%'],
						radius : radiuscar,
						x:'80%', // for funnel
						itemStyle : labelFromatter01,
						data : [
							{name:'other', value:75, itemStyle : labelBottom01},
							{name:'西城', value:25,itemStyle : labelTop01}
						]
					}
				]
		    };
            myChart12.setOption(option12);
        }
    );		
}

function CarZhuTu01(){//车位分布统计柱图
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart41 = ec.init(document.getElementById('CarZT01'));
            myChart41.setOption({
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
					data:['新增车位','累计车位'],
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
						name:'新增车位',
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
						name:'累计车位',
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


function CarZhuTu02(){//车位分布统计柱图
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart = ec.init(document.getElementById('CarZT02'));
            myChart.setOption({
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
					data:['新增停车域','累计停车域'],
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
						name:'新增停车域',
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
						name:'累计停车域',
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








