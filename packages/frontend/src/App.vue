<template>
  <div>
    <Header />
    <!--Main Layout-->
    <main>
      <div class="container-fluid mt-5">
        <router-view></router-view>
      </div>
    </main>
    <!--Main Layout-->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  mounted() {},
};
</script>
