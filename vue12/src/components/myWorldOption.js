
export default{
	        title: {
				top:'7px',
	            text: '世界疫情',
	            subtext: '数据来源于网络',
	            sublink: 'http://www.sina.com',
	            left: 'center'
	        },
			  visualMap: {
			            left: 'left',
			            min: 0,
			            max: 10000,
			            inRange: {
			                color: ['#FFFFFF','#FFAA85','#FF7B69','#CC2929','#8C0D0D']
			            },
			            text: ['高风险', '低风险'],           // 文本，默认为数值文本
			            calculable: true
			        },
			tooltip:{
				trigger:'item',
				formatter:'地区:{b}<br/>确诊:{c}人'
				
				
				
			},
			 series: [
			            {
							
			                name: '',
			                type: 'map',
			                map: 'world',
							label:{
								// show:true,
								 fontSize:'12px'
							},
			                data:[
			                   
							]
						}
			               
			   ]
		
}