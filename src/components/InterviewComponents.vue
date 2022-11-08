<template>
    <div>
        <vs-card>
            <template #title>
              <h3>{{name}}</h3>
            </template>
            <template #img>
              <img :src="image" alt="">
            </template>
            <template #text>
              <p>
               {{description}}
              </p>
            </template>
            
          </vs-card>
        
    </div>
</template>

<script>
    export default {
        name:'InterviewComponents',
        props : {
            name : null,
            image :null,
            description :null
        }
    }
</script>

<style >

</style>