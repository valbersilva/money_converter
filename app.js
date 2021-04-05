var brldolar = 0.1751313485113835
var dolarbrl = 5.76

var pegarValorEmReal = prompt("Digite quantos reais você tem e te daremos o valor em dolar:")
var pegarValorEmRealDecimal = parseFloat(pegarValorEmReal);
 
 var valorEmDolar = (brldolar*pegarValorEmRealDecimal).toFixed(2);
 alert("O valor em dolar é: $"+valorEmDolar);