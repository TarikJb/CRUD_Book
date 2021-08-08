<template>
  <div class="hello">
    <h1>{{ mesg }}</h1>
    <button type="button" @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data() {
    return {
      mesg: this.msg,
    }
  },
  methods: {
    changeTitle() {
      this.mesg = 'Hello Everyone'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 40px 0;
}
</style>
