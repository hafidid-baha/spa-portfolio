<template>
    <div class="container">
        <Header title="Interests" />
        
        <div class="row mt-3">
			<div class="col-md-12 pt-2 pb-2 text-center">
				<transition name="scale">
					<router-link v-if="show" to="/Dashboard/AddInterest" class="btn btn-login">Add New Tnterest</router-link>
				</transition>
			</div>
		</div>

        <div class="row mt-3">
			<div class="col-md-12">
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Interests Name</th>
							<th scope="col">Options</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Try To Create A New Android App</td>
							<td class="text-center">
								<a href="" class="ml-2 mr-2"><img src="@/assets/edit.png" class="img-fluid" /></a>
								<a href="" class="ml-2 mr-2"><img src="@/assets/delete.png" class="img-fluid" /></a>
								<!-- <a href="" class="ml-2 mr-2"><img src="@/assets/task.png" class="img-fluid" /></a> -->
							</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		</div>
    </div>
</template>
<script>
import Header from '../Header.vue';
export default {
    name:'Interests',
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