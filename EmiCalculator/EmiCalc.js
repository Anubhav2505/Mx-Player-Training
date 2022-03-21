document.getElementById("EmiForm").addEventListener("submit", validate);
function validate(e){
const Amount = document.getElementById("Amount").value;
const Interest = document.getElementById("Interest").value;
const Time = document.getElementById("Years").value;
  const principal = parseFloat(Amount);
  const CalculateInterest = parseFloat(Interest) / 100 / 12;
  const calculatedPayments = parseFloat(Time) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);
  //show result
  document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment
e.preventDefault();
}
