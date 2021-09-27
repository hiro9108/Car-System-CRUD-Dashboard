const app = require("./middleware");
const PORT = require("./constants");
const conn = require("./connection/conn");

conn
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(`Connecting to DB is failed: ${err}`));
