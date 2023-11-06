const require("dotenv");

module.exports = {
    MongoURI: process.env.MONGO_URI,
    SECRET: process.env.APP_SECRET,
    port: process.env.PORT
}