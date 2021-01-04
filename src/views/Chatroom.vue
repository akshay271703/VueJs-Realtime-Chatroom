<template>
  <div>
    <div class="container">
      <Navbar/>
      <NewChatroom/>
    </div>    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NewChatroom from '../components/NewChatroom'
export default {
  components : { Navbar , NewChatroom },
  setup(){

  }
}
</script>

<style>

</style>