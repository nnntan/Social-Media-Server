const mongoose = require('mongoose');

require('dotenv').config();

const { MONGO_URI } = process.env;

class Database {
    constructor() {
        if (!Database.instance) {
            this.connect();
            Database.instance = this;
        }

        return Database.instance;
    }

    async connect() {
        try {
            await mongoose.connect(MONGO_URI)
            console.log(`Database connected successfully: ${MONGO_URI}`);
        } catch (error) {
            console.log(`Error connecting to database ${error}`);
        }
    }
}

const instance = new Database();
module.exports = instance;

