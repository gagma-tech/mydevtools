<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand>
        <router-link to="/" style="color:#fff">
          <img
            src="https://image.flaticon.com/icons/svg/2620/2620885.svg"
            width="50px"
            height="30px"
            class="d-inline-block align-top"
            alt="tools"
          />
          MydevTools
        </router-link></b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav right>
          <b-nav-item>
            <b-icon icon="square"></b-icon>
            <router-link to="/youtdl" style="color:#fff">
              Youtube Downloader</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <b-icon icon="file-check"></b-icon
            ><router-link to="/doctopdf" style="color:#fff">
              Docx to pdf</router-link
            ></b-nav-item
          >
          <b-nav-item variant="light">
            <b-icon icon="card-text"></b-icon>
            <router-link to="/base64" style="color:#fff">
              Decode/Encode Base64</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
