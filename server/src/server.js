const app = require("./middleware");
const PORT = require("./constants");
const conn = require("./connection/conn");

const carControllers = require("./controllers/car");

app.get("/", carControllers.getAllCarStatuses);

app.get("/:id", carControllers.getASpecificCarStatus);

app.post("/", carControllers.createCarStatus);

conn
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(`Connecting to DB is failed: ${err}`));
