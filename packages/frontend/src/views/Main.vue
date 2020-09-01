<template>
  <div>
    <h1 class="color-primary" style="text-align: center">
      welcome to MyDevtools
    </h1>
    <br />
    <div>
      <b-card-group columns>
        <template>
          <router-link
            v-for="(s, index) in services"
            :to="s.route"
            :key="index"
          >
            <b-card :title="s.title" :img-src="s.img" img-alt="Image" img-top>
              <b-card-text>
                {{ s.des }}
              </b-card-text>
            </b-card>
          </router-link>
        </template>
      </b-card-group>
    </div>
  </div>
</template>
<script>
var listServices = [
  {
    title: 'Youtube Downloader Videos',
    des: 'Download Videos from Youtube and convert it to any format',
    route: '/youtdl',
    img:
      'https://i1.wp.com/1.bp.blogspot.com/-JOHMaWwsVWU/XUlw_-hapDI/AAAAAAAADes/y1ryscBkhqMWOITxi9pOZZP4VGAqhcqPgCLcBGAs/s1600/youtube%2Bdownloader.png?ssl=1',
    icon: '',
  },
  {
    title: 'Convert word Document to pdf',
    des: ' Convert Your Document With esay way',
    route: '/doctopdf',
    img:
      'https://store-images.s-microsoft.com/image/apps.56030.13991479880942779.21c255ea-7e1f-45b8-9c2f-8aaf49d9606c.fd38001b-a791-4862-a5b3-3336abb122bb?mode=scale&q=90&h=300&w=300',
    icon: '',
  },
];
export default {
  name: 'Main',
  data() {
    return {
      services: listServices,
    };
  },
};
</script>
