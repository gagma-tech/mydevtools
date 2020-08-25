var request = require("supertest");
var app = require("../../app");

describe("GET /", () => {
  it("should return 200 http status", (done) => {
    request(app).get("/").expect(200, done);
  });
});

describe(" GET /youtdl/check", () => {
  it(" should return 200 http code status ", (done) => {
    request(app)
      .get("/api/v1/youtdl/check")
      .query({ video: "Op7Vk1sja7k" })
      .expect(200, done);
  });
});

describe(" GET /youtdl", () => {
  it(" should return 200 http code status ", (done) => {
    request(app)
      .get("/api/v1/youtdl")
      .query({
        video: "Op7Vk1sja7k",
        vd_format: "mp4",
        vd_quality: "lowest",
        vd_type: "stream",
      })
      .expect(200, done);
  },30000);
});
