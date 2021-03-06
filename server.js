const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();
connectDB();
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/data', require('./routes/api/data'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
