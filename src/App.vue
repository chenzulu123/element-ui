<template>
  <div id="app">
    <top-header :language="language" @getLanguage="getLanguage"></top-header>
    <router-view/>
    <bootm-footer></bootm-footer>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  export default {
    data() {
      return {
        language: 'cn'
      }
    },
    components: {
      topHeader: Header,
      bootmFooter:Footer
    },
    methods: {
      getLanguage(value) {
        if (value === 'cn') {
          this.$i18n.locale = 'zh';
          localStorage.setItem('locale','zh');
        } else {
          this.$i18n.locale = 'en';
          localStorage.setItem('locale','en');
        }
        this.language = value;
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
  }
</style>
