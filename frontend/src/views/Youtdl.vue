<template>
  <b-container fluid>
    <div>
      <h1 class="color-primary" style="text-align: center">
        Youtube Downloder/Converter
      </h1>
      <div v-if="!passToDownload">
        <b-form-input
          v-model="video.link"
          placeholder="Enter your Youtube Link"
        ></b-form-input>
        <br />
        <div>
          <b-button v-on:click="check()" block variant="primary">
            <template v-if="isLoading">
              <b-spinner
                variant="primary"
                type="grow"
                label="Spinning"
              ></b-spinner>
            </template>
            Check</b-button
          >
        </div>
        <br />
      </div>
      <div v-else>
        <b-card
          :img-src="res.thumbnail.thumbnails[3].url"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>
            <h3>{{ res.title }}</h3>
            <ValidationObserver ref="observer">
              <ValidationProvider
                name="quality"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-select v-model="video.vd_quality" class="mb-3">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled
                      >Quality</b-form-select-option
                    >
                  </template>

                  <b-form-select-option value="highest"
                    >Highest</b-form-select-option
                  >
                  <b-form-select-option value="lowest"
                    >Lowest</b-form-select-option
                  >
                  <b-form-select-option value="lowestaudio"
                    >Lowest audio</b-form-select-option
                  >
                  <b-form-select-option value="highestaudio"
                    >Highest audio</b-form-select-option
                  >
                  <b-form-select-option value="highestvideo"
                    >Highest video</b-form-select-option
                  >
                  <b-form-select-option value="lowestvideo"
                    >Lowest video</b-form-select-option
                  >
                </b-form-select>
                <p style="color:red">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="format"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-select v-model="video.vd_format" class="mb-3">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled
                      >Format</b-form-select-option
                    >
                  </template>
                  <b-form-select-option value="mp4">Mp4</b-form-select-option>
                  <b-form-select-option value="webm">Webm</b-form-select-option>
                </b-form-select>
                <p style="color:red">{{ errors[0] }}</p>
              </ValidationProvider>
              <div>
                <b-button variant="primary" @click="download('attach')">
                  Download
                </b-button>
                <b-button
                  variant="success"
                  @click="download('stream')"
                  style="margin:5px"
                >
                  Watch
                </b-button>
              </div>
            </ValidationObserver>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </b-container>
</template>
<script>
import { youtdlCheck, ytldDownload } from "../api/api";
export default {
  name: "Youtdl",
  data() {
    return {
      video: {
        link: "",
        vd_format: null,
        vd_quality: null,
        errors: {
          vd_format: null,
          vd_quality: null,
        },
      },
      isLoading: false,
      passToDownload: false,
      res: {},
    };
  },
  methods: {
    check() {
      this.isLoading = true;
      youtdlCheck(this.video.link).then(
        (res) => {
          this.res = res.data;
          this.isLoading = false;
          this.passToDownload = true;
        },
        () => {
          alert("invalid youtube Video");
        }
      );
    },
    download(vd_type) {
      this.$refs.observer.validate().then((bool) => {
        if (bool) {
          window.open(
            ytldDownload(
              this.video.link,
              this.video.vd_format,
              this.video.vd_quality,
              vd_type
            ),
            "_blank"
          );
        }
      });
    },
  },
};
</script>
