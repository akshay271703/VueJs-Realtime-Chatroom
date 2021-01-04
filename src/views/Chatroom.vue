<template>
  <div>
    <div class="container">
      <Navbar/>
      <ChatWindow/>
      <NewChatroom/>
    </div>    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NewChatroom from '../components/NewChatroom'
import ChatWindow from '../components/ChatWindow'
export default {
  components : { Navbar , NewChatroom , ChatWindow},
  setup(){

  }
}
</script>

<style>

</style>