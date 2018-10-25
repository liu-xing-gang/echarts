require.config({
	paths: {
		echarts: './js'
	}
});

function ShowTCBingTu1(){//车位占用情况
	require(
        [
             'echarts',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart11 = ec.init(document.getElementById('TCBingTu1'));
			var option11 = {
				title : {
					text: '车位占用情况',
					subtext: '',
					y:'20',
					textStyle:{
						fontSize:16,
						fontFamily:'microsoft YaHei'
					},
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					show:false,
					orient : 'vertical',
					x : 'left',
					data:['有车','无车']
				},
				toolbox: {
					show : false,
					feature : {
						mark : {show: true},
						dataView : {show: true, readOnly: false},
						magicType : {
							show: true, 
							type: ['pie', 'funnel'],
							option: {
								funnel: {
									x: '25%',
									width: '50%',
									funnelAlign: 'left',
									max: 1548
								}
							}
						},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : true,
				series : [
					{
						name:'访问来源',
						type:'pie',
						radius : '70%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'有车'},
							{value:310, name:'无车'}
						],
						itemStyle: {//系列级个性化
							normal: {
								color: function(params) {
									var colorList = [
									  '#F38A94','#F3D999'
									];
									return colorList[params.dataIndex]
								}
							}							
						}
					}
				]
		    };
            myChart11.setOption(option11);
        }
    );		
}

function ShowTCBingTu2(){//在场车辆的停车类型分布
	require(
        [
             'echarts',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('TCBingTu2'));
			var option12 = {
				title : {
					text: '在场车辆的停车类型分布',
					subtext: '',
					y:'20',
					textStyle:{
						fontSize:16,
						fontFamily:'microsoft YaHei'
					},
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					show:false,
					orient : 'vertical',
					x : 'left',
					data:['包月停车','临时停车']
				},
				toolbox: {
					show : false
				},
				calculable : true,
				series : [
					{
						name:'停车类型',
						type:'pie',
						radius : '70%',
						center: ['50%', '60%'],
						data:[
							{value:335, name:'包月停车'},
							{value:310, name:'临时停车'}
						],
						itemStyle: {//系列级个性化
							normal: {
								color: function(params) {
									var colorList = [
									  '#F7C240','#62C299'
									];
									return colorList[params.dataIndex]
								}
							}							
						}
					}
				]
		    };
            myChart12.setOption(option12);
        }
    );		
}

function ShowTCBingTu3(){//在场车辆的停车时长分布
	require(
        [
             'echarts',
			 'echarts/chart/pie'
        ],
        function (ec) {
            var myChart13 = ec.init(document.getElementById('TCBingTu3'));
			var option13 = {
				title : {
					text: '在场车辆的停车时长分布',
					subtext: '',
					y:'20',
					textStyle:{
						fontSize:16,
						fontFamily:'microsoft YaHei'
					},
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					show:false,
					orient : 'vertical',
					x : 'left',
					data:['2小时以上','1-2小时','小于30分钟','30分钟-60分钟']
				},
				toolbox: {
					show : false
				},
				calculable : true,
				series : [
					{
						name:'停车时长',
						type:'pie',
						radius : '70%',
						center: ['50%', '60%'],
						data:[
							{value:100, name:'2小时以上'},
							{value:200, name:'1-2小时'},
							{value:300, name:'小于30分钟'},
							{value:360, name:'30分钟-60分钟'}
						],
						itemStyle: {//系列级个性化
							normal: {
								color: function(params) {
									var colorList = [
									  '#C73D34','#87BB10','#4E78DE','#C6B307'
									];
									return colorList[params.dataIndex]
								}
							}							
						}
					}
				]
		    };
            myChart13.setOption(option13);
        }
    );		
}

function ShowTCZheXianTu1(){//在场车辆的停车时长分布
	require(
        [
             'echarts',
			 'echarts/chart/line'
        ],
        function (ec) {
            var myChart14 = ec.init(document.getElementById('TCZheXianTu1'));
			var option14 = {
				grid:{
				 	x:'50px',
					y:'55px',
					x2:'60px',
					y2:'30px',
					backgroundColor:'#efefef'
				},
				title : {
					text: '出入口车流量趋势图',
					subtext: '',
					x:'center'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					y:30,
					data:['入口流量','出口流量']
				},
				toolbox: {
					show : false
				},
				calculable : false,
				xAxis : [
					{
						type : 'category',
						boundaryGap : false,
						data : ['2016-06-01','2016-06-02','2016-06-03','2016-06-04','2016-06-05','2016-06-06','2016-06-07']
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				series : [
					{
						name:'入口流量',
						type:'line',
						data:[120, 132, 101, 134, 90, 230, 210]
					},
					{
						name:'出口流量',
						type:'line',
						data:[220, 182, 191, 234, 290, 330, 310]
					}
				]
		    };
            myChart14.setOption(option14);
        }
    );		
}

