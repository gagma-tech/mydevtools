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
      'https://www.projecttopics.org/wp-content/uploads/2019/01/convert-word-to-pdf.jpg',
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
