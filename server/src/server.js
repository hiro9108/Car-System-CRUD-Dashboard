const app = require("./middleware");
// const PORT = require("./constants");
const conn = require("./connection/conn");

const carControllers = require("./controllers/car");

const PORT = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  res.send("Test Message");
});

app.get("/", carControllers.getAllCarStatuses);

app.get("/:id", carControllers.getSpecificCarStatus);

app.post("/", carControllers.createCarStatus);

app.put("/:id", carControllers.updateSpecificCarStatus);

conn
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(`Connecting to DB is failed: ${err}`));
