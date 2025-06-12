export default async function isPrime(req,  res){
  const n = parseInt(req.query.id);

    if (isNaN(n)) {
     return res.status(400).json({ error: "Invalid number" });
   }

  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  res.JSON({"value" : "true"}) ;
}