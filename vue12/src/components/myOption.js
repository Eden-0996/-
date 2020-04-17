import store from '../store'
export default{
	        title: {
				top:'7px',
	            text: '中国疫情',
	            subtext: '数据来源于网络',
	            sublink: 'http://www.sina.com',
	            left: 'center'
	        },
			  visualMap: {
			            left: 'left',
			            min: 0,
			            max: 100,
			            inRange: {
			                color: ['#FFFFFF','#FFAA85','#FF7B69','#CC2929','#8C0D0D']
			            },
			            text: ['高风险', '低风险'],           // 文本，默认为数值文本
			            calculable: true
			        },
			tooltip:{
				trigger:'item',
				// formatter:'地区:{b}<br/>确诊:{c}人'
				formatter:function(params){
					// console.log(params)
					// console.log(store);
					const p_name = store.state.provinceList[params.dataIndex].name;
					const p_value = store.state.provinceList[params.dataIndex].value;
					const p_econNum = store.state.provinceList[params.dataIndex].econNum;
					
					return '地区:'+p_name+'</br>现有确诊:'+p_econNum+"人</br>"+'累计确诊:'+p_value+'人'
				}
				
				
			},
			 series: [
			            {
							
			                name: '',
			                type: 'map',
			                map: 'china',
							label:{
								show:true,
								 fontSize:'12px'
							},
			                data:[
			                  
								
							]
						}
			               
			   ]
		
}