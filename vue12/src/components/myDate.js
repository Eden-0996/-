export default{
				title: {
					text: '国内/国外新增确诊 趋势',
					left:'15px'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['总新增确诊', '新增境外输入']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				// 下载
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				
				xAxis: {
					// type: 'category',
					boundaryGap: false,
					data: []
				},
				yAxis: {
					type: ''
				},
				series: [
					{
						name: '总新增确诊',
						type: 'line',
						 smooth: true,
						stack: '总量',
						data: []
					},
					{
						name: '新增境外输入',
						type: 'line',
						 smooth: true,//线是有弧度的
						stack: '总量',
						data: []
					}
				]
};