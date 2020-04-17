<template>
  <div id="app">
	
    
    <router-view/>
  </div>
</template>

<style>
	*{  margin: 0;
  padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url(assets/yq.png); /* no-repeat center; */ 
   background-color: #10aeb5;
  /* background-color: #10AEB5; */

}

#nav {
	height:40px;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	background: #fff;
	display: flex;
	justify-content: space-around;
	line-height: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  }

#nav a.router-link-exact-active {
  color: #10AEB5;
  border-bottom: 2px solid #10AEB5;
  
}

#textyiq{
	
}
</style>
