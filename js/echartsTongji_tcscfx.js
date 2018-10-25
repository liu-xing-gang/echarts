require.config({
	paths: {
		echarts: './js'
	}
});

function ShowTCSCFX(){
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('TCSCFX'));
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
					x:'center',
					data:['2小时以上','1-2小时','30分钟-60分钟','小于30分钟','收入']
				},
				xAxis : [
					{
						type : 'category',
						data : ['00:00-01:59','02:00-03:59','04:00-05:59','06:00-07:59','08:00-09:59','10:00-11:59','12:00-13:59','14:00-15:59','16:00-17:59','18:00-19:59','20:00-21:59','22:00-23:59']
					}
				],
				yAxis : [
					{
						type : 'value',
						name : '（元）',
						axisLabel : {
							formatter: '{value}'
						}
					}
				],
				series : [
					{
						name:'2小时以上',
						type:'bar',
						barWidth:40,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#ff0000',
								color: '#ff0000'
							}
						},
						data:[20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33]
					},
					{
						name:'1-2小时',
						type:'bar',
						barWidth:40,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#ff9933',
								color: '#ff9933'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23]
					},
					{
						name:'30分钟-60分钟',
						type:'bar',
						barWidth:40,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#008000',
								color: '#008000'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23]
					},
					{
						name:'小于30分钟',
						type:'bar',
						barWidth:40,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#0000ff',
								color: '#0000ff'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23]
					},
					{
						name:'收入',
						type:'line',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#0066cc',
								color: '#0066cc'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23]
					}
				]
				
			};
            myChart12.setOption(option12);
        }
    );		
}
