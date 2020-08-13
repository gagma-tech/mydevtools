import VueRouter from "vue-router";
import Main from "../views/Main";
import Youtdl from "../views/Youtdl";
import DocToPdf from "../views/DocToPdf";
import Base64 from "../views/Base64";

export default new VueRouter({
  routes: [
    { name: "index", path: "/", component: Main },
    { name: "youtdl", path: "/youtdl", component: Youtdl },
    { name: "doc2pdf", path: "/doctopdf", component: DocToPdf },
    { name: "base64", path: "/base64", component: Base64 },
  ],
});
