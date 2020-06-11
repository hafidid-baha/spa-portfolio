<template>
	<div class="container">
		<Header title="Projects" /> 
		<div class="row mt-3">
			<div class="col-md-12 pt-2 pb-2 text-center">
				<transition name="scale">
					<router-link v-if="show" to="/Dashboard/AddProject" class="btn btn-login">Create Project</router-link>
				</transition>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-md-12">
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Project Name</th>
							<th scope="col">Options</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Manza Application</td>
							<td class="text-center">
								<a href="" class="ml-2 mr-2"><img src="@/assets/edit.png" class="img-fluid" /></a>
								<a href="" class="ml-2 mr-2"><img src="@/assets/delete.png" class="img-fluid" /></a>
								<a href="" class="ml-2 mr-2"><img src="@/assets/task.png" class="img-fluid" /></a>
							</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
import Header from "../Header.vue"
export default {
	name:"Projects",
	components:{
		Header
	},
	data(){
        return{
            show:false
        }
    },
    mounted(){
        this.show = true
    }
}
</script>
<style>
.btn-option,.btn-option:hover{
	border-radius: 0px;
	background: #EE9D24;
	border: none;
	color: white;
}
.btn-option:hover{
	background: #EE9D24;
}
.table{
	font-family: 'Changa', sans-serif !important;
}
.table th,.table td{
	border: none;
}
</style>