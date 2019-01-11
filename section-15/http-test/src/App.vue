<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <h1>http test</h1>
        <hr>

        <div class="form-group">
          <label>name</label>
          <input class="form-control" type="text" v-model="user.name">
        </div>
        <div class="form-group">
          <label>email</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <div class="btn btn-secondary" @click="sendData">send</div>

        <br><br>
        <hr>
        <br><br>

        <div class="btn btn-secondary" @click="fetchData">get data</div>
        <br><br>
        <div class="list-group" v-if="users.length">
          <div class="list-group-item" v-for="user in users" :key="user">{{user.name}} ({{user.email}})</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: {
        name: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    sendData() {
      this.$http.post('', this.user)
        .then(result => console.log(result))
    },
    fetchData() {
      this.$http.get('')
        .then(result => result.json())
        .then(data => {
          const arr = [];
          for (let user in data) {
            arr.push(data[user])
          }
          this.users = arr;
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
