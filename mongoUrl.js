require('dotenv').config();

const {
    ATLAS_USER: user,
    ATLAS_PASSWORD: password,
    ATLAS_HOST: host,
    ATLAS_DATABASE: database
} = process.env;

const mongoUrl = 
    `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

module.exports = { mongoUrl };