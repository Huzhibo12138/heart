<template>
    <div class="chat">
      <chatheader></chatheader>
      <chatsection></chatsection>
      <classfly-footer></classfly-footer>
    </div>
</template>

<script>
    import Chatheader from "../components/chat/chatheader";
    import Chatsection from "../components/chat/chatsection";
    import ClassflyFooter from "../components/chat/ClassflyFooter";
    export default {
        name: "chat",
      components: {ClassflyFooter, Chatsection, Chatheader}
    }
</script>

<style scoped>
.chat{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}
</style>
