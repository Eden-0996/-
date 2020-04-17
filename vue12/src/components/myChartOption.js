  // 指定图表的配置项和数据
export default{
	           title: {
	               text: '国内统计',
				   left:'15px'
	           },
	           tooltip: {},
	           legend: {
				   right:'15px',
	               data:['现有确诊','累计确诊'],
				
					 // legend.textStyle. color = #333
	           },
	           xAxis: {
	               data: []
				    
	           },
	           yAxis: {},
	           series: [
				   {
	               name: '现有确诊',
	               type: 'bar',
	               data: []
	           },
			   {
			       name: '累计确诊',
			       type: 'bar',
			       data: []
			   },
			  
			   ]
	       };