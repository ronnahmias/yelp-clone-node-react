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
    // console.log(rows);
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
            
        });
    }catch(err){
        console.log(err);
    }
});

// create a restaurant
app.post("/api/v1/restaurants/:id", async(req, res) => {
    console.log(req.body);
    try{
        const { rows } = await db.query('inset into restaurants (name,location,price_range) values ($1,$2,$3) returning *',[req.body.name,req.body.location, req.body.price_range]);
        res.status(201).json({
            status: 'success',
            data: {
                restaurant: rows[0],
            }
            
        });
    }catch(err){
        console.log(err);
    }
});

// update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const { rows } = await db.query('UPDATE restaurants SET name= $1,location = $2,price_range = $3 WHERE id = $4 returning *',[req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: 'success',
            data: {
                restaurant: rows[0],
            }
            
        });
    }catch(err){
        console.log(err);
    }
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", async(req, res) => {
    try{
        const { rows } = await db.query('DELETE FROM restaurants WHERE id = $1',[req.params.id]);
        res.status(204).json({
            status: 'success',
            data: {
                restaurant: rows[0],
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});