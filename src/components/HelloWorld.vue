<template>
  <div class="hello">
    <img src="@/assets/Title.jpg" width="500">
    <br>
    <br>
    <br>
    <ul>
      <li>
        <router-link to="/info">
            Let us find you the perfect fit
        </router-link>
      </li>
      <br>
      <li>
        <p>Or</p>
      </li>
      <br>
      <li>
        <router-link to="/selection">
            Find my own
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Pick an option below! '
    }
  }
}
</script>


<style scoped>
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
p {
  color: #FF0000;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  font-size: 40px;
}
a {
  color: #42b983;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  font-size: 40px;
}
</style>
