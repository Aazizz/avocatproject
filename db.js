const Pool = require("pg").Pool;
require("dotenv").config();
const devConfig =
    "postgres://rsslluhbptbsrt:698f4f0972a558e0dd80beda6241d21a7ddb331e526da6e96bc9c06dd83478c3@ec2-35-168-122-84.compute-1.amazonaws.com:5432/d38scg95rqaku3";

//const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; // heroku addons

const pool = new Pool({
    connectionString: process.env.NODE_ENV === "production" ? proConfig : devConfig,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;

/*const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
};
const proConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } //jeya ml heroku addons

}
const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
pool.connect(function(err) {
    if (err) { throw (err) };
    console.log("Connected!");
});

module.exports = pool;*/