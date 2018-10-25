require.config({
	paths: {
		echarts: './js'
	}
});

function ShowDDFX(){
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('DDFX'));
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
					data:['总订单','包次单','包月单','临时单','欠费单','其他异常订单']
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
						name : '（单）',
						axisLabel : {
							formatter: '{value}'
						}
					}
				],
				series : [
					{
						name:'包次单',
						type:'bar',
						barWidth:10,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#04e330',
								color: '#04e330'
							}
						},
						data:[20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76]
					},
					{
						name:'包月单',
						type:'bar',
						barWidth:10,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#00cc66',
								color: '#00cc66'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					},
					{
						name:'临时单',
						type:'bar',
						barWidth:10,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#009933',
								color: '#009933'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					},
					{
						name:'欠费单',
						type:'bar',
						barWidth:10,
						stack: '费用状态',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#ff9900',
								color: '#ff9900'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					},
					{
						name:'其他异常订单',
						type:'bar',
						barWidth:10,
						stack: '费用状态',
						itemStyle: {//系列级个性化
							normal: {
								barBorderColor:'#eb0101',
								color: '#eb0101'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					},
					{
						name:'总订单',
						type:'line',
						stack: '费用',
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					}
				]
				
			};
            myChart12.setOption(option12);
        }
    );		
}
