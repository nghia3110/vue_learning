<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <VButton class="btn--primary" text="abc" @onclick="showMessage" />
    <VButton class="btn--secondary" text="abc" @onclick="showMessage" />
    <VInput type="text" id="code" label="Ma nhan vien" v-model="count"/>
    <p>{{ count }}</p>
    <VDialog :show="show" @close-dialog="hideDialog" :description="message" status="success"/>
    <VForm />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 1,
      message: 'abc',
      show: false,
      testArr: [
        {
          name: 'abc',
          age: 18
        },
        {
          name: 'abdsds',
          age: 21
        }
      ],
      course: 'English'
    }
  },
  methods: {
    showMessage() {
      this.show = true;
    },
    hideDialog() {
      this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
