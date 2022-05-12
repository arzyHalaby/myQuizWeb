const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql')
//=================================================================

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//==================================================================

app.use('/teachers', require('./routes/teacherRoutes'));

app.use('/memoryGame', require('./routes/memoryRoutes'));

app.use('/theQuestion', require('./routes/theQuestionRoutes'));

// app.use('/theQuestion', require('./routes/theQuestionRoutes'));

//==================================================================

const port = process.env.PORT || 2006;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

