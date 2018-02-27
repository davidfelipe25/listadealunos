<template>
<div>
  <h1>Lista</h1>
  	<header>
	  	<ul>
	     	<li v-for="aluno in alunos">
	     		{{aluno.name}}
	    	</li>
	  	</ul>
	</header>
</div>	
</template>
<script>
export default {
  name: 'davidfelipe',
  data () {
    return {
		configs:{
		   orderBy: 'age',
		   order: 'asc',
		   filter:''
		},			
		alunos: [
			{
				name:'Neymar Jr',
				age:'22'
			},
			{
				name:'Cristiano Ronaldo',
				age:'30'
			},
			{
				name:'Ronaldo Brabo',
				age:'49'
			}
		],	
    }

  }
}
</script>
<style scoped>
	
</style>