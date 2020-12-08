<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project was developed for the subject "Frameworks Front-End e Conexão
      com Back-End".
      <br />
      <a
        href="https://www.infnet.edu.br/esti/proposta-graduacao-em-analise-e-desenvolvimento-de-sistemas/"
        target="_blank"
        rel="noopener"
        >Course page here</a
      >.
    </p>
    <p>App by Yuri Galdino.</p>
    <h2>👨🏽‍💻</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
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
