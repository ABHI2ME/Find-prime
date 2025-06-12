import  express from 'express';
import dotenv from 'dotenv';
import chechPrime from './src/controllers/checkPrime.js'
const app = express();

const PORT = process.env.PORT || 3001 ;


dotenv.config() ;

app.use(express.json());

app.use('/' , (req , res)=>{
     res.send("hello")
} )
app.use('/check-prine' , chechPrime) ;


app.post('/is-prime', (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number' || isNaN(number)) {
    return res.status(400).json({ error: 'Invalid input. Send a number.' });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
