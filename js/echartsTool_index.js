require.config({
    paths: {
        echarts: './js'
    }
});

function ShowBenYueLinTing(){//本月车场临停收入TOP10
    var Xdata = ['定福庄西街1号','停车场名称2','停车场名称2'];
	var len = Xdata.length;
	var size = 0;
	for (var i = 0; i < len; i++){
		if(i==0){
			size = Xdata[i].length;
		}else{
			if(size < Xdata[i].length){
				size = Xdata[i].length;
			}
		}
	}
	var RightAC = 10*size + 'px';
	if(Xdata.length>5){
		RightAC = 10*size + 'px';
	}
	if(Xdata.length<=5){
		RightAC = '30px';
	}
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
                    y:'30px',
                    x2:'10px',
                    y2:RightAC,
                    //backgroundColor:'#FCFDFF',
                    borderColor:'#1EADFF',//边框颜色
                    borderWidth:0
                },
                tooltip : {
                    trigger: 'axis'
					//formatter: "{b}<br />收入：{c}万元"
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
                        data :Xdata,
                        axisLabel:{
                            textStyle:{//X轴文字颜色
                                color:'#fff'
                            },
							show: true,
							interval:0,  
							rotate:0,//倾斜度 -90 至 90 默认为0
                            formatter : function(params) {
                                var newParamsName = "";
                                var paramsNameNumber = params.length;
                                var provideNumber = 2;								
								if(Xdata.length>5){
									provideNumber = "2";
								}
								if(Xdata.length<=5){
									provideNumber = "10";
								}
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                if (paramsNameNumber > provideNumber) {
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = "";
                                        var start = p * provideNumber;
                                        var end = start + provideNumber;
                                        if (p == rowNumber - 1) {
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;
                                    }

                                } else {
                                    newParamsName = params;
                                }
                                return newParamsName
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
                        name:'单元：万元',
                        type:'value',
                        splitNumber:5,
                        axisLabel:{
                            textStyle:{//Y轴文字颜色
                                color:'#fff'
                            }
                        },
                        splitLine:{//去掉竖的网络线
                            show:true,
                            lineStyle:{
                                color: '#1eadff',
                                type:'dashed',
                                width: 1
                            }
                        },
                        axisLine:{//Y轴的竖线
                            show:true,
                            lineStyle:{
                                color: '#1EADFF',
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
                        barWidth:30,
                        itemStyle: {//系列级个性化
                            normal: {
                                barBorderWidth: 0,
                                barBorderRadius:[2, 2, 0, 0],
                                color: function(params) {
                                    var colorList = [
                                        '#A754F6','#5E5BF1','#5281FA','#4CA7F9','#42D3F2'
                                       ,'#44CEF4','#36B6EA','#31AFE7','#33A8DF','#31A4DE'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            },
                            emphasis: {//柱图移上去效果
                                barBorderRadius:[2, 2, 0, 0]
                            }
                        },
                        data:[110,100,90,80,70,120,100,90,80,70]
                    }
                ]
            };
            myChart11.setOption(option11);
        }
    );
}
function ShowBenYueLiYong(){//本月平均泊位利用率TOP10
    var Xdata = ['天宁寺西里8-10号项目','停车场名称2','停车场名称3','停车场名称4','停车场名称5','停车场名称6','停车场名称7','停车场名称8','停车场名称9','停车场名称10'];
	var len = Xdata.length;
	var size = 0;
	for (var i = 0; i < len; i++){
		if(i==0){
			size = Xdata[i].length;
		}else{
			if(size < Xdata[i].length){
				size = Xdata[i].length;
			}
		}
	}
	var RightAC = 6*size + 'px';
	if(Xdata.length>5){
		RightAC = 6*size + 'px';
	}
	if(Xdata.length<=5){
		RightAC = '30px';
	}
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
                    y:'30px',
                    x2:'20px',
                    y2:RightAC,
                    //backgroundColor:'#FCFDFF',
                    borderColor:'#1EADFF',//边框颜色
                    borderWidth:0
                },
                tooltip : {
                    trigger: 'axis'
					//formatter: "{b}<br />利用率：{c}%"
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
                        data : Xdata,
                        boundaryGap : true,
                        axisLabel:{
							textStyle:{//X轴文字颜色
                                color:'#fff'
                            },
							formatter:function(params) {
								var newParamsName = "";
								var paramsNameNumber = params.length;
								var provideNumber = 3;  //一行显示几个字
								var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
								if (paramsNameNumber > provideNumber) {
									for (var p = 0; p < rowNumber; p++) {
										var tempStr = "";
										var start = p * provideNumber;
										var end = start + provideNumber;
										if (p == rowNumber - 1) {
											tempStr = params.substring(start, paramsNameNumber);
										} else {
											tempStr = params.substring(start, end) + "\n";
										}
										newParamsName += tempStr;
									}

								} else {
									newParamsName = params;
								}
								return newParamsName
							},
							show: true,
							interval:0,  
							rotate:0//倾斜度 -90 至 90 默认为0
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
                                color: '#1eadff',
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
                        name:'单位：%',
						type:'value',
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
                                color: '#1eadff',
                                type:'dashed',
                                width: 1
                            }
                        },
                        axisLine:{//Y轴的竖线
                            show:true,
                            lineStyle:{
                                color: '#1EADFF',
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
                        itemStyle: {normal: {areaStyle: {type: 'default'},color: '#E99CFF'}},
						smooth:true,
                        data:[14.5, 56.9, 17.5, 14.3, 12.8,14.5, 16.9, 17.5, 14.3, 12.8]
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
            'echarts/chart/bar'
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
                    borderColor:'#0073B7',//边框颜色
                    borderwidth:0
                },
                tooltip : {
                   trigger: 'axis'
				   // formatter: "{b}<br />{a}：{c}元"
                },
                legend: {
                    show:false,
                    data:['临停收入']
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
                        boundaryGap : true,
                        data : ['9月13日','9月14日','9月15日','9月16日','9月17日','9月18日','9月19日'],
                        axisLabel:{
                            textStyle:{//X轴文字颜色
                                color:'#fff',
                                fontSize:5
                            }
                        },
                        splitLine:{//去掉竖的网络线
                            show:true,
                            lineStyle:{
                                color: '#1eadff',
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
                        name:'临停收入',
                        type:'bar',
						barWidth:18,
						itemStyle: {//系列级个性化
							emphasis: {//柱图移上去效果
								barBorderRadius:[2, 2, 0, 0],
								barBorderColor:'#1EE2EE',
								color: '#1EE2EE'
							},
							normal: {
								barBorderRadius:[2, 2, 0, 0],
								barBorderColor:'#35e9f4',
								color: '#35e9f4'								
							},
							opacity :"0.5"
						},
                        data:[150, 162, 171, 184, 140, 170, 145]
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
                    borderColor:'#0073B7',//边框颜色
                    borderwidth:0
                },
                tooltip : {
                    trigger: 'axis'
					//formatter: "{b}<br />订单数：{c}"
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
                        data : ['9月13日','9月14日','9月15日','9月16日','9月17日','9月18日','9月19日'],
                        boundaryGap : false,
                        axisLabel:{
                            textStyle:{//X轴文字颜色
                                color:'#fff',
                                fontSize:5
                            }
                        },
                        splitLine:{//去掉竖的网络线
                            show:true,
                            lineStyle:{
                                color: '#1eadff',
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
                    borderColor:'#0073B7',//边框颜色
                    borderwidth:0
                },
                tooltip : {
                    trigger: 'axis'
					//formatter: "{b}<br />月卡收入：{c}"
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
                        data : ['9月13日','9月14日','9月15日','9月16日','9月17日','9月18日','9月19日'],
                        boundaryGap : true,
                        axisLabel:{
                            textStyle:{//X轴文字颜色
                                color:'#fff',
                                fontSize:5
                            }
                        },
                        splitLine:{//去掉竖的网络线
                            show:true,
                            lineStyle:{
                                color: '#1eadff',
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
                                color: '#1eadff',
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
                        name:'月卡收入',
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
					borderColor:'#0073B7',//边框颜色
					borderwidth:0
				},
				tooltip : {
					trigger: 'axis'
					//formatter: "{b}<br />{a}：{c}辆<br />{a0}：{c0}辆"
				},
				legend: {
					show:false,
					data:['进场车辆','离场车辆']
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
						data : ['9月14日','9月15日','9月16日','9月17日','9月18日','9月19日','9月20日'],
						axisLabel:{
							textStyle:{//X轴文字颜色
								color:'#fff'							
							}
						},
						splitLine:{//去掉竖的网络线
							show:true,
							lineStyle:{
								color: '#1eadff',
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
						name:'进场车辆',
						type:'line',
						symbol: 'Circle',/**拆线图图例**/
						itemStyle: {normal: {areaStyle: {type: 'default'},color: '#32ecba'}},
						smooth:true,
						data:[150, 162, 171, 184, 140, 170, 145]
					},
					{
						name:'离场车辆',
						type:'line',
						symbol: 'Circle',/**拆线图图例**/
						itemStyle: {normal: {areaStyle: {type: 'default'},color: '#fdc02d'}},
						smooth:true,
						data:[120, 132, 101, 134, 90, 230, 210]
					}
				]
			};
			myChart11.setOption(option11);          
		}
	);	
}
function ShowMainMap(){
    
}