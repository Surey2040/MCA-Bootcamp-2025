let p = Number(prompt("HOW MANY PRIMES"));

let prime = false;
for (i = 2; i <= p; i++);
{
  if (p % i == 0) {
    prime = true;
    console.log("its not a prime", prime);
  }
}

if (prime == true) {
  console.log("its a prime", i);
}
