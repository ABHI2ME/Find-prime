import isPrime from "../controllers/checkPrime.js";
const router = express.Router() ;


router.post("/checkPrime/:id" , isPrime) ;

