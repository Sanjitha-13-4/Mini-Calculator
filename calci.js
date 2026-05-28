function calci() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let op = document.getElementById("op").value;
  let total;
  if(op == "+") {
	total = a + b;
  }
  else if(op == "-") {
	total = a - b;
  }
  else if(op == "*") {
	total = a * b;
  }
  else if(op == "/") {
	total = a / b;
  }
  else {
	document.writeln("Operator not found");
  }
  alert("Answer = " + total);
}