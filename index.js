const express = require('express');
const validateRegistrationData = require('./validationMiddleware');
const errorHandler = require('./errorHandler');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/register',validateRegistrationData,(req,res)=>{
    res.status(201).json({
        message:"User registered successfully"
    })
})

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})