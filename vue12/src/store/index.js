import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)
console.log('hi store')
export default new Vuex.Store({
  state: {
	  provinceList:[],//各省确诊数
	  provinceline:[],//全国的疫情趋势
	  daily:{},//统计数量
	  add_daily:{},//头部统计
	  
	  
	  otherlist:[],//全球疫情
	  
	  othertotal:{}//全球确诊数
	 
  },
  mutations: {
	  setProvinceList(state,provinceList){
		  // console.log('2、[mutations] 对状态进行赋值')
		  state.provinceList = provinceList;
	  },
	  //全国疫情趋势
	  setProvinceline(state,provinceline){
		  state.provinceline = provinceline;
	  },
	  
	  // 全球疫情
	  setOtherlist(state,otherlist){
		  state.otherlist = otherlist;
	  },
	  setOthertotal(state,othertotal){
		  state.othertotal = othertotal;
	  },
	  
	  
	  
	  
	  // 国内确诊数
	  setDaily(state,daily,add_daily){
		  state.daily = daily;
	  },
	  // 国内确诊据昨日
	  setAdd_daily(state,add_daily){
		  state.add_daily = add_daily;
	  }
  },
  actions: {
	  loadProvinceList({commit}){
		  return new Promise((resolve,reject)=>{
			  jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
						// console.log('1、[action]从服务器加载数据')
						console.log(responseData);
			  			// console.log(responseData.data.list);
			  		  // this.daily = responseData.data;//统计
			  		  // this.add_daily = responseData.data.add_daily;//较昨日
			  			//此时使用actions异步 ，不一样直接修改状态	  
			  		  // this.provinceList = responseData.data.list;//省份
			  			  // 应该修改成
			  			commit('setProvinceList',responseData.data.list);
						
						resolve();
			  	  });	  
		  }) 
	  },
	  
	  
	  
	  // 全球疫情
	  loadOtherlist({commit}){
		return new Promise((resolve,reject)=>{
					  jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
								console.log(responseData.data.otherlist);
					  			commit('setOtherlist',responseData.data.otherlist);
								resolve();
					  	  });	  
		})   
	  },
	  // 全球确诊数
	  loadOthertotal({commit}){
	  		return new Promise((resolve,reject)=>{
	  					  jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
	  								// console.log(responseData.data.othertotal);
	  					  			commit('setOthertotal',responseData.data.othertotal);
	  								resolve();
	  					  	  });	  
	  		})   
	  },
	  
	  
	  
	  
	  
	  
	  //趋势图
	  loadProvinceline({commit}){
	  		  return new Promise((resolve,reject)=>{
	  			  jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
	  						console.log('1、[action]从服务器加载数据')
	  			  			// console.log(responseData.data.historylist);
	  			  		  // this.daily = responseData.data;//统计
	  			  		  // this.add_daily = responseData.data.add_daily;//较昨日
	  			  			//此时使用actions异步 ，不一样直接修改状态	  
	  			  		  // this.provinceList = responseData.data.list;//省份
	  			  			  // 应该修改成
	  			  			commit('setProvinceline',responseData.data.historylist);
	  						
	  						resolve();
	  			  	  });	  
	  		  }) 
	  },
// 程序员不含糖，脱发就用小霸王
	 
	 loadDaily({commit}){
	 		jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
				// console.log(responseData);
	 				commit('setDaily',responseData.data);				  
	 		});
	},
	loadDaily({commit}){
		jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
			// console.log(responseData);
				commit('setDaily',responseData.data);
				commit('setAdd_daily',responseData.data.add_daily);
		});
	}
	
	
	
	
	
	
	
  },
  modules: {
  }
})
