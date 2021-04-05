const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);


app.get("/", (req, res) => {
    res.json({message: "Hello sayo!"});
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and Resync DB");
    initial();
});

function initial() {

    const roleAvailable = ["buyer", "seller", "admin"];

    roleAvailable.map((role, key) => {
      Role.create({
        id: key,
        name: role
      });
    });
    
   
  }

console.log("Code Completed.")