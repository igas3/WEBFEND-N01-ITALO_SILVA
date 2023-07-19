let numero = 1
let animal 

switch (numero) {
    case 1:
        animal="O Elefante"
        curiosidade="Os elefantes vivem em grupos sociais chamados de manadas, lideradas por uma fêmea mais velha chamada de matriarca."
        break;
    case value:
        animal="O Golfinho"
        curiosidade="Os golfinhos têm uma pele lisa e são cobertos por uma camada de gordura chamada de blubber, que ajuda a mantê-los aquecidos na água fria"    
        break;
    case value:
        animal="O Pinguim"
        curiosidade="Eles vivem em colônias, onde se reproduzem, cuidam de seus filhotes e se protegem uns aos outros"    
        break;
    case value:
        animal="A Coruja"
        curiosidade="Elas possuem penas macias que ajudam a abafar o som de suas asas em voo, permitindo uma aproximação furtiva às suas presas"    
        break;
    case value:
        animal="O Leão"
        curiosidade="Os leões são os únicos felinos que vivem em grupos sociais chamados de coalizões."    
        break;
    default:
        console.log("Erro");
        break;
}
console.log(`Okay, aqui vai uma curiosidade sobre ${animal} \n${curiosidade} `);