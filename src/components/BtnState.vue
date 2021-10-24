<template>
    <button @click="state = !state">{{labelBtn}}</button>
</template>
<script>
import {eventBus} from '../main'
export default {
  data() {
      return {
          state: true
      }  
    },
    computed: {
        labelBtn() {
            eventBus.$on('activosAll', (data)=>{
                this.state = data
            })
            this.$emit('stateUser', this.state)
            return this.state ? 'Activo' : 'Inactivo'
        }
    }
}
</script>