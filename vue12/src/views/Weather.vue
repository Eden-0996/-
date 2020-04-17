<template>
	<div id="weather">
		
		
		
		<!-- 背景图 -->
		<div class="baoti">
			<h4>新型冠状病毒</h4>
			<h1>疫情实时大数据报告</h1>
			<h6>{{daily.times}}数据统计</h6>
		</div>
		
		
		
		
		<div class="context">
			<div id="nav">
			  <router-link to="/">国内疫情</router-link>
			  <router-link to="/weather">国外疫情</router-link>
			  <router-link to="/ss">实时播报</router-link>
			</div>
			
		</div>
		
		<!-- <div class="time">
			{{daily.times}}数据统计
		</div>
		 -->
		
		<div class="daily">
			<!-- 现有确诊：{{add_daily.econNum}} -->
			<div class="text">
				<ul>
					<li class="msg">现存确诊</li>
					<li class="num">{{othertotal.certain}}</li>
					<li class="zr">较昨日{{othertotal.certain_inc}}</li>
				</ul>
			</div>
			<!-- 现有确诊：{{add_daily.econNum}} -->
			<div class="text">
				<ul>
					<li class="msg">现存确诊</li>
					<li class="num">{{othertotal.die}}</li>
					<li class="zr">较昨日{{othertotal.die_inc}}</li>
				</ul>
			</div>
			<!-- 现有确诊：{{add_daily.econNum}} -->
			<div class="text">
				<ul>
					<li class="msg">现存确诊</li>
					<li class="num">{{othertotal.recure}}</li>
					<li class="zr">较昨日{{othertotal.recure_inc}}</li>
				</ul>
			</div>
			
			
			
			
		</div>
		
		<div id="map" style="width: 1200px;height:600px;border:1px solid #ccc"></div>
		
		<div class="tab">
			<el-table :data="otherlist" stripe style="width: 100%">
			   <el-table-column prop="name" label="地区" width="180"></el-table-column>
			   <el-table-column prop="(value-deathNum-cureNum)" label="新增确诊" width="150"></el-table-column>
			      <el-table-column prop="value" label="累计确诊" width="150"></el-table-column>
			   <el-table-column prop="deathNum" label="死亡" width="150"></el-table-column>
			   <el-table-column prop="cureNum" label="治愈" width="150"></el-table-column>
			 </el-table>
					
			
		</div>
		
		
		
	<!-- 	<el-table :data="otherlist" style="width: 100%" >
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
		
		 -->

		
		
		
		<!-- <table  cellpadding='0' cellspacing='0' >
			
			<tr>
				<th>地区</th>
				<th>新增确诊</th>
				<th>累计确诊</th>
				<th>死亡</th>
				<th>治愈</th>
			</tr>
			<!-- //筛选想要的国家 -->
			<!--<tr v-for="country of otherlist.filter(c=>c.name =='美国' || c.name =='英国') ">
				<td>{{country.name}}</td>
				<td>{{country.value-country.deathNum-country.cureNum}}</td>
				<td>{{country.value}}</td>
				<td>{{country.deathNum}}</td>
				<td>{{country.cureNum}}</td>
			</tr> 
			<tr v-for="country of otherlist">
				<td>{{country.name}}</td>
				<td>{{country.value-country.deathNum-country.cureNum}}</td>
				<td>{{country.value}}</td>
				<td>{{country.deathNum}}</td>
				<td>{{country.cureNum}}</td>
			</tr> 
		</table>
			 -->
	</div>
</template>

<script>
	import jsonp from 'jsonp'
	import echarts from 'echarts'
	import 'echarts/map/js/world'//要引入世界地图
	import option1 from '../components/myWorldOption.js'
	export default{
		name:'Weather',
		data(){
			return{
				daily:{},
				// otherlist:[],//地图  及其他数据
				// othertotal:{}//   国外确诊数
			}
		},
		computed:{
			otherlist(){
				return this.$store.state.otherlist;
			},
			othertotal(){
				return this.$store.state.othertotal;
			}
			
		},
		mounted(){
			
			this.$store.dispatch('loadOthertotal')
			this.$store.dispatch('loadOtherlist')
			.then(()=>{
				option1.series[0].data = this.$store.state.otherlist.map(p=>{
				return {name:p.name,value:p.econNum} 		 			
				})
					echarts.init(document.getElementById('map')).setOption(option1);//刷新图片this.$store.dispatch('loadOtherlist')
			})
		
			
		
		}
		
		
		
		
		}
		
		
		
		
</script>

<style>
/* 	#map{
		top:0px;
		left:0px;
		right:0;
		bottom: 30px;
		margin:0 auto;
		height:280px;
		/* background: #42B983; 
		background-color: #F8F9FA;
		width:1200px;
		
	} */
	
	#weather{
		max-width: 768px;
		margin: 0 auto;
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
	

	
	
</style>
