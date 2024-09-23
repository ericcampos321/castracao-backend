const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const conn = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.s2mzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("CONNECTOU AO BANCO!!!");
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
