const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./Mongodb/Connect")

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


