require.config({
	paths: {
		echarts: './js'
	}
});

function ShowZZL(){//车位占比TOP5
	require(
        [
             'echarts',
			 'echarts/chart/line',
			 'echarts/chart/bar'
        ],
        function (ec) {
            var myChart12 = ec.init(document.getElementById('ZZL'));
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
					data:['本月', '上月'],
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
						name:'本月',
						type:'line',
						data:[400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,400, 374, 251, 300, 420, 400, 440,300,300]
					},
					{
						name:'上月',
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













