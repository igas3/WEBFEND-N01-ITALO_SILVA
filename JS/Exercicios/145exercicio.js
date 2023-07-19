
const produto = {
    nome:"ps5",
    preco:3500.00,
    desconto:0.25,
   desc: function () { 
    const valor= this.preco * (1-this.desconto)
        return valor
    }
    
  
};
console.log( produto.desc());