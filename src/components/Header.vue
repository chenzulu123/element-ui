<template>
    <div class="header">
        <ul>
            <li>
                <router-link to="/index"><span class="iconfont icon-home"></span>{{$t("header.home")}}</router-link>
            </li>
            <li>
                <router-link to="/login"><span class="iconfont icon-denglu"></span>{{ $t("header.login") }}</router-link>
            </li>
            <li><a @click="setLanguage"><span class="iconfont icon-world"></span>{{$t("header.language")}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["language"],
  methods: {
    setLanguage() {
      if (this.language === "cn") {
        this.$emit("getLanguage", "en");
      } else {
        this.$emit("getLanguage", "cn");
      }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background: rgb(39, 43, 51);
}

.header ul {
  width: 300px;
  float: right;
  margin-right: 30px;
  list-style: none;
  height: 100%;
}

.header ul li {
  width: 100px;
  /* padding: 15px; */
  box-sizing: border-box;
  height: 100%;
  list-style: none;
  float: left;
  cursor: pointer;
}

.header ul li:hover {
  background: rgb(144, 147, 153);
}

.header ul li a {
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50px;
}
/* 去除a标签的选中高亮 * */
a {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.iconfont {
  margin-right: 5px;
  line-height: 50px;
}
.icon-denglu{
    font-size: 18px;
}
</style>