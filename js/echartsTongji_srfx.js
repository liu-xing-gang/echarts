require.config({
	paths: {
		echarts: './js'
	}
});

function ShowSRFX12(){//车位占比TOP5
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('SRFX12'));
			var option12 = {
				grid:{
					x:'45px',
					y:'35px',
					x2:'15px',
					y2:'40px'
				},
				title :{
					text : '',
					subtext : ''
				},
				tooltip : {
					trigger: 'axis',
					formatter: function (params){
						return params[0].name + ' : '
							   + (params[2].value - params[1].value > 0 ? '+' : '-') 
							   + params[0].value + '<br/>'
							   + params[2].seriesName + ' : ' + params[2].value + '<br/>'
							   + params[3].seriesName + ' : ' + params[3].value + '<br/>'
					}
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
				legend: {
					x:'center',
					data:['应收', '实收'],
					selectedMode:false
				},
				xAxis : [
					{
						type : 'category',
						data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日']
					}
				],
				yAxis : [
					{
						name:'(次)',
						type : 'value',
						min : 200,
						max : 450
					}
				],
				series : [
					{
						name:'应收',
						type:'line',
						data:[400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,300,300]
					},
					{
						name:'实收',
						type:'line',
						symbol:'none',
						itemStyle:{
							normal:{
							  lineStyle: {
								width:1,
								type:'dashed'
							  }
							}
						},
						data:[320, 332, 301, 334, 360, 330, 350,320, 332, 301, 334, 360, 330, 350,320, 332, 301, 334, 360, 330, 350,320, 332, 301, 334, 360, 330, 350,300,240]
					},
					{
						name:'上周2',
						type:'bar',
						stack: '1',
						barWidth: 6,
						itemStyle:{
							normal:{
								color:'rgba(0,0,0,0)'
							},
							emphasis:{
								color:'rgba(0,0,0,0)'
							}
						},
						data:[320, 332, 251, 300, 360, 330, 350,320, 332, 251, 300, 360, 330, 350,320, 332, 251, 300, 360, 330, 350,320, 332, 251, 300, 360, 330, 350,160,190]
					},
					{
						name:'变化',
						type:'bar',
						stack: '1',
						data:[
						  80, 42, 
						  {value : 50, itemStyle:{ normal:{color:'red'}}},
						  {value : 34, itemStyle:{ normal:{color:'red'}}}, 
						  60, 70, 90,
						  80, 42, 
						  {value : 50, itemStyle:{ normal:{color:'red'}}},
						  {value : 34, itemStyle:{ normal:{color:'red'}}}, 
						  60, 70, 90,
						  80, 42, 
						  {value : 50, itemStyle:{ normal:{color:'red'}}},
						  {value : 34, itemStyle:{ normal:{color:'red'}}}, 
						  60, 70, 90,
						  80, 42, 
						  {value : 50, itemStyle:{ normal:{color:'red'}}},
						  {value : 34, itemStyle:{ normal:{color:'red'}}}, 
						  60, 70, 90,60,50
						]
					}
				]
				
			};
            myChart12.setOption(option12);
        }
    );		
}

function ShowSRFX(){
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('SRFX'));
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
					data:['欠费金额','优惠金额','其他异常金额']
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
						name : '（元）',
						axisLabel : {
							formatter: '{value}'
						}
					}
				],
				series : [
					{
						name:'欠费金额',
						type:'bar',
						barWidth:25,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#ff0000',
								color: '#ff0000'
							}
						},
						data:[20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76, 135, 162, 32, 20, 64, 33,20, 49, 70, 23, 25, 76]
					},
					{
						name:'优惠金额',
						type:'bar',
						barWidth:25,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#008000',
								color: '#008000'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					},
					{
						name:'其他异常金额',
						type:'bar',
						barWidth:25,
						stack: '订单类型',
						itemStyle: {//系列级个性化
							normal: {
								label : {show: true, position: 'inside'},
								barBorderColor:'#e6b903',
								color: '#e6b903'
							}
						},
						data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70, 175, 182, 48, 18, 60, 23,26, 59, 90, 26, 28, 70]
					}
				]
				
			};
            myChart12.setOption(option12);
        }
    );		
}
