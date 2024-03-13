import express from 'express';
import mongoose from 'mongoose';

const app = express();
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://Ecommerce-Project:Ecommerce-Project@ecommerce-project.q9zgfcj.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-Project');
    console.log("db CONNECTED");
  }

app.listen(4000,()=>{
    console.log("Server Started");
})


// negsanshuman14
// JFPD7JpgDxIT7bVn

// Ecommerce-Project
// Ecommerce
// mongodb+srv://Ecommerce-Project:<password>@ecommerce-project.q9zgfcj.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-Project
// mongodb+srv://Ecommerce-Project:<password>@ecommerce-project.q9zgfcj.mongodb.net/