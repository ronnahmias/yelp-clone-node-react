require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db');


const app = express()
const port = process.env.PORT || 3000

// middleware with logger 
// app.use(morgan('dev'));
// middleware for post requests into json data
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async(req, res) => {
    const { rows } = await db.query("select * from restaurants");
    console.log(rows);
    res.status(200).json({
        status: 'success',
        results: rows.length,
        data: {
            restaurant: rows,
        }
        
    });
});

// get a restaurant
app.get("/api/v1/restaurants/:id", async(req, res) => {
    // console.log(req.params.id);
    try{
        const { rows } = await db.query('select * from restaurants where id = $1',[req.params.id]);
        // console.log(rows);
        res.status(200).json({
            status: 'success',
            data: {
                restaurant: rows[0],
            }
            
        })
    }catch(err){
        console.log(err);
    }
});

// create a restaurant
app.post("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body);
});

// update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});