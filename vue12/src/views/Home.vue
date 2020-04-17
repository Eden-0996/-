<template>
  <div class="home">	
	<!-- 背景图 -->
	<div class="baoti">
		<h4>新型冠状病毒</h4>
		<h1>疫情实时大数据报告</h1>
		<h6>{{dailys.times}}数据统计</h6>
	</div>
	
	
	
	
	<div class="context">
		<div id="nav">
		  <router-link to="/">国内疫情</router-link>
		  <router-link to="/weather">国外疫情</router-link>
		  <router-link to="/ss">实时播报</router-link>
		</div>
		
	</div>


	
	<div class="daily">
		<!-- 现有确诊：{{add_daily.econNum}} -->
		<div class="text">
			<ul>
				<li class="msg">现存确诊</li>
				<li class="num">{{dailys.econNum}}</li>
				<li class="zr">较昨日{{add_dailys.addecon_new}}</li>
			</ul>
		</div>
		<div class="text">
			<ul>
				<li class="msg">现存确诊重症</li>
				<li class="num2">{{dailys.heconNum}}</li>
				<li class="zr">较昨日{{add_dailys.addhecon_new}}</li>
			</ul>
		</div>
		<div class="text">
			<ul>
				<li class="msg">现存疑似</li>
				<li class="num3">{{dailys.sustotal}}</li>
				<li class="zr">较昨日{{add_dailys.wjw_addsus_new}}</li>
			</ul>
		</div>
		<div class="text">
			<ul>
				<li class="msg">累计确诊</li>
				<li class="num4">{{dailys.gntotal}}</li>
				<li class="zr">较昨日{{add_dailys.addcon_new}}</li>
			</ul>
		</div>
		<div class="text">
			<ul>
				<li class="msg">累计死亡</li>
				<li class="num5">{{dailys.deathtotal}}</li>
				<li class="zr">较昨日{{add_dailys.adddeath_new}}</li>
			</ul>
		</div>
		<div class="text">
			<ul>
				<li class="msg">累计治愈</li>
				<li class="num6">{{dailys.curetotal}}</li>
				<li class="zr">较昨日{{add_dailys.addcure_new}}</li>
			</ul>
		</div>		
		
			

		
		
	</div>
	
	<div id="map" >
		现有确诊疫情地图 
	</div>
	
	
	
	
	
	
	
	
	

	
	
	

<!-- 	国内
		<table  cellpadding='0' cellspacing='0' >
			<tr>
				<th>地区</th>
				<th>现有确诊</th>
				<th>累计确诊</th>
				<th>死亡</th>
				<th>治愈</th>
			</tr>
			<tr  v-for="(province,i) of provinceLists ">
				<td @click="getMoreInfo(i)">{{province.name}}</td>
				<td>{{province.econNum}}</td>
				<td>{{province.value}}</td>
				<td>{{province.deathNum}}</td>
				<td>{{province.cureNum}}</td>
			</tr>	
		</table>
		<table class="tables" cellpadding='0' cellspacing='0' >
			<tr v-for="abc of abc">
				<td >{{abc.name}}</td>
				<td>{{abc.econNum}}</td>
				<td>{{abc.conNum}}</td>
				<td>{{abc.deathNum}}</td>
				<td>{{abc.cureNum}}</td>
			</tr>
		</table> -->
		<!-- element -->
<!-- 		  <el-table :data="provinceList" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
		    <el-table-column prop="name" latb="地区" sortable width="180"></el-table-column>
		    <el-table-column prop="econNum" label="现有确诊" sortable width="180"></el-table-column>
			<el-table-column prop="value" label="累计确诊" sortable width="180"></el-table-column>
			<el-table-column prop="deathNum" label="死亡" sortable width="180"></el-table-column>
			<el-table-column prop="cureNum" label="治愈" sortable width="180"></el-table-column>
		  </el-table> -->
		  <div style="width:100%">  
			  <el-table :data="provinceLists" style="width: 100%" >
			    <el-table-column type="expand" >
			      <template slot-scope="abcd">
			       <table  cellpadding='0' cellspacing='0' >
			       	<tr v-for="abc of abc">
			       		<td >{{abc.name}}</td>
			       		<td>{{abc.econNum}}</td>
			       		<td>{{abc.conNum}}</td>
			       		<td>{{abc.deathNum}}</td>
			       		<td>{{abc.cureNum}}</td>
			       	</tr>
			       </table>
			       
			      </template>
			    </el-table-column>
			    
			    
			    <el-table-column @click="getMoreInfo(i)" label="地区" prop="name"></el-table-column>
			    <el-table-column label="现有确诊" prop="econNum"></el-table-column>
			    <el-table-column label="累计确诊"prop="value"></el-table-column>
			     <el-table-column label="死亡"prop="deathNum"></el-table-column>
			      <el-table-column label="治愈"prop="cureNum"></el-table-column>
			  </el-table>
			  
		  </div>
		  
	
		
		
		<!-- 国外
		<table  cellpadding='0' cellspacing='0' >
			
			<tr>
				<th>地区</th>
				<th>现有确诊</th>
				<th>累计确诊</th>
				<th>死亡</th>
				<th>治愈</th>
			</tr>
			<tr v-for="country of otherlist.filter(c=>c.name =='美国' || c.name =='英国') ">
				<td>{{country.name}}</td>
				<td>{{country.value-country.deathNum-country.cureNum}}</td>
				<td>{{country.value}}</td>
				<td>{{country.deathNum}}</td>
				<td>{{country.cureNum}}</td>
			</tr>
		</table>
	 -->
		

		
		<div id="main">
			
		</div>
		
		<!-- 折线图 -->
		<div id="line"></div>
		

		Author:XYM
		
  </div>
</template>

<script>
import jsonp from 'jsonp'
import echarts from 'echarts'
import option from '../components/myChartOption.js'//这个是柱形图
import 'echarts/map/js/china'//要引入中国地图
import option2 from '../components/myOption.js'//这个是地图的
import option3 from '../components/myDate.js'//疫情情况折线图


export default {
  name: 'Home',
  data(){
	  return{
		  daily:{},//统计数量
		  add_daily:{},//头部统计
		  provinceList:[],//各省确诊数
		  // otherlist:[],//国外确诊数
		  abc:[]
	  }
  },
  computed:{
	  provinceLists(){
		  return this.$store.state.provinceList;
	  },
	  dailys(){
		    return this.$store.state.daily;
	  },
	  add_dailys(){
	  	return this.$store.state.add_daily;
	  }  
  },
  //挂载
  mounted(){
	  // jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',(error,responseData)=>{
	  // 		  console.log(responseData);
	  // 		  this.daily = responseData.data;//统计
	  // 		  this.add_daily = responseData.data.add_daily;//较昨日
			  
	  // 		  this.provinceList = responseData.data.list;//省份
			//   // console.log(this.provinceList[i].city);
	  // 		  // this.otherlist = responseData.data.otherlist;//国外
			  
			
			//   const CaretProvinceList = this.provinceList.filter(p=>p.econNum>0&&p.econNum<200)
			//   .sort((p1,p2)=>p2.econNum-p1.econNum);
			  
			  
			//   // 方法一:利用循环
			//  //  for(let province of CaretProvinceList){
			// 	// option.xAxis.data.push(province.name);
			//  //  option.series[0].data.push(province.econNum);
			//  //    option.series[1].data.push(province.value);
			//  //  }
			 
			 
			 
			 
			 //国内疫情数据显示
			 this.$store.dispatch('loadDaily');
			 
			 
			 //国内疫情地图显示
			 this.$store.dispatch('loadProvinceList')
			 .then(()=>{
					// console.log('3、[组件中]打印状态'+ this.$store.state.provinceList);
					
					const CaretProvinceList = this.$store.state.provinceList.filter(p=>p.econNum>0&&p.econNum<200)
					  .sort((p1,p2)=>p2.econNum-p1.econNum);
					  
					option.xAxis.data = CaretProvinceList.map(p=>p.name);
					option.series[0].data = CaretProvinceList.map(p=>p.econNum);
					 option.series[1].data = CaretProvinceList.map(p=>p.value);
					
					option2.series[0].data = this.$store.state.provinceList.map(p=>{
					return {name:p.name,value:p.econNum} 		  
			  });
				  echarts.init(document.getElementById('map')).setOption(option2);//刷新图片
				  echarts.init(document.getElementById('main')).setOption(option);//刷新图片
			 })
			 
			 
			 this.$store.dispatch('loadProvinceline')
			 .then(()=>{
				 const Provinceline = this.$store.state.provinceline;
				// console.log(this.$store.state.provinceline.cn_addjwsrNum);
				 option3.xAxis.data = Provinceline.map(e=>e.date);
				 option3.series[0].data = Provinceline.map(e=>e.cn_conadd);
				 option3.series[1].data = Provinceline.map(e=>e.cn_addjwsrNum);
			 })
			  echarts.init(document.getElementById('line')).setOption(option3);//刷新图片
			
			
			
			  
			//   方法二:
			//   option.xAxis.data = CaretProvinceList.map(p=>p.name);
			//   option.series[0].data = CaretProvinceList.map(p=>p.econNum);
			//     option.series[1].data = CaretProvinceList.map(p=>p.value);
			  
			  
			
			  
			//   //https://www.echartsjs.com/zh/index.html
			//   // 基于准备好的dom，初始化echarts实例
			//   				// var myChart = echarts.init(document.getElementById('main'));
			//   echarts.init(document.getElementById('main')).setOption(option);//刷新图片
					
					
			//   // 使用刚指定的配置项和数据显示图表。
			//   // myChart.setOption(option);
	  		
	  // 	  });
	},
	methods:{		
		getMoreInfo(i){
			this.abc = this.provinceList[i].city;
			// console.log(this.provinceList[i].city);
		}
	}
	  
	  

}
</script>


<style>
	*{
		list-style: none;
	}
	.home{
		min-height: 31.25rem;
		    max-width: 768px;
		    margin: 0 auto;
		    background-color: #10aeb5;
		    overflow: hidden;
		    box-sizing: border-box;
		    line-height: normal;
		
	}
	.baoti{
		height:187px;
		background-image: url(../assets/yq.png);
		background-size: 695px 189px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		/* border: 1px solid red; */
		line-height: 52px;
		
	}
	.baoti h4{
		
		color:#fff;
		font-weight: 500;
	}
	.baoti h1{
		font-weight: 700;
		color:#fff;
	}
	.baoti h6{
		bottom: 0;
		color:#fff;
		font-weight: 500;
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	.daily{
		max-width: 768px;
		height:180px;
		/* border:1px solid red; */
		/* position: absolute; */
		background: #fff;
		top:200px;
		left:0;
		right:0;
		left:0;
		margin: auto;
		display: flex;
		flex-wrap:wrap;	
		}
	.daily .text{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height:70px;
		    width: 33.3%;
		padding: 5px 0;
		/* background-color: darkgray;	 */
		
	}
	.daily .text ul{
		margin:0;
		padding:0;
		
	}
	.daily .text ul li{
		margin-top:2px;
		display: block;
	}
	.daily .text .msg{
		font-size: 11px;
	}
	.daily .text .num{
		font-size: 20px;
		color:#FF3434;
		font-weight: 600;
	}
	.daily .text .num2{
		font-size: 20px;
		color:#87131C;
		font-weight: 600;
	}
	.daily .text .num3{
		font-size: 20px;
		color:#9D6FEE;
		font-weight: 600;
	}
	.daily .text .num4{
		font-size: 20px;
		color:#B10002;
		font-weight: 600;
	}
	.daily .text .num5{
		font-size: 20px;
		color:#4B4B4B;
		font-weight: 600;
	}
	.daily .text .num6{
		font-size: 20px;
		color:#13B593;
		font-weight: 600;
	}
	.daily .text .zr{
		font-size: 11px;
	}
	
	
	
	
	
	
	
	
	
	table{
		width:1200px;
		top:0;
		left:0;
		right:0;
		left:0;
		margin:0 auto;
		margin-top:10px;
	}
	table th{
		height:30px;
		line-height: 30px;
		width:65px;
		background: #13B593;
		color:#fff;
		font-size: 14px;
	}
	
	table td{
		width:65px;
		font-size: 14px;
	}
	table td{
		height:35px;
	}
	tr:nth-child(odd) {
	    background-color: #FFFFFF;
	}
	tr:nth-child(even) {
	     background-color: #FAFAFA;
	}
	table tr:hover{
		 cursor: pointer;
		background-color: #ccc;
	}
	
	
	
	#main{
		top:0px;
		left:0px;
		right:0;
		left:0;
		margin:0 auto;
		width:1200px;
		height:250px;
		/* background: #42B983; */
		
	}
	#map{
		top:0px;
		left:0px;
		right:0;
		bottom: 30px;
		margin:0 auto;
		height:700px;
		/* background: #42B983; */
		background-color: #F8F9FA;
		max-width: 768px;
		
	}
	#main{
		max-width: 768px;
		height:500px;
		background-color: #fff;
		padding: 20px 0;
		border-buttom-left-radius: 8px;
		border-buttom-right-radius: 8px;
		
	}
	#line{
		max-width: 768px;
		height:500px;
		background-color: #fff;
		padding: 20px 0;
		border-buttom-left-radius: 8px;
		border-buttom-right-radius: 8px;
	}
	
	
	
	 .demo-table-expand {
	    font-size: 0;
		border:1px soli
	  }
	  .demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
		/* border:1px solid red; */
	  }
	  .demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	  }
	 
</style>
