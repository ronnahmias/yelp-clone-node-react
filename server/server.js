require('dotenv').config();
const express = require('express');

const app = express()
const port = process.env.PORT || 3000

// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: ['mc', 'tt'],
        }
        
    })
});

// get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});