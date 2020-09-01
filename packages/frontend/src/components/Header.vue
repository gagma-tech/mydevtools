<template>
  <div>
    <b-navbar toggleable="lg"  style="background:#263d90!important">
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
      <b-navbar-nav class="ml-auto">
        <b-nav-item aria-label="GitHub" href="https://github.com/gagma-tech/mydevtools" rel="noopener" target="_blank">
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" focusable="false" role="img" class="navbar-nav-svg"><title data-v-3d51269b="">GitHub</title> <g data-v-3d51269b="" fill="currentColor"><path data-v-3d51269b="" fill-rule="evenodd" clip-rule="evenodd" d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"></path></g></svg>
        </b-nav-item>
        <b-nav-item href="http://gagma.tech">
           <b-img
            src="https://www.gagma.tech/assets/img/favicon.png"
            width="50px"
            height="30px"
            class="d-inline-block align-top"
            rounded="circle"
            alt="gagma"
          />
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
