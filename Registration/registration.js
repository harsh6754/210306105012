const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Register with the test server
const register = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', {
      companyName: 'paruluniversity',
      ownerName: 'harsh',
      rollNo: '210306105012',
      ownerEmail: '210306105012',
      accessCode: 'QeYQhl' // Replace with actual access code from your email
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error registering:', error);
  }
};

register();

// Routes and Logic here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});