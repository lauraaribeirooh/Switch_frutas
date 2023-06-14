var fruta = "";

   fruta = prompt('Digite o nome de uma fruta');

switch (fruta.toLowerCase ()){
  case "maçã":
    alert("Não vendemos esta fruta aqui");
    break;
  case "kiwi":
    alert("Estamos com escassez de kiwis");
    break;
  case "melancia":
    alert("Aqui está, são 3 reais o quilo");
    break;
    

    default:
        alert("Fruta Invalida")
    
}