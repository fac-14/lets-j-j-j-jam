const tape = require("tape");
const supertest = require("supertest");
const app = require("./../app");

tape("tape is working", t => {
  t.equal(1 + 1, 2, "should return 2");
  t.end();
});

tape("Home route should return 200", t => {
  supertest(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.error(err, "no error");
      t.end();
    });
});

tape("Posting on add item should return expected results", t => {
  const addItem = {
    topic: "css",
    articleTitle: "learning css",
    description: "super useful resource"
  };
  supertest(app)
    .post(`/add-article/new`)
    .send(addItem)
    .set("Accept", "application/json")
    .expect(302)
    .end((err, res) => {
      t.error(err, "no error");
      t.equals(typeof res, "object", "res should be object");
      t.end();
    });
});

// When article form is submitted ie post
// then we should get
// 302 to redirect to home
// and we will get an object with the data
