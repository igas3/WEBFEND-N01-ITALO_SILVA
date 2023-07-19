let n = 1
let estado
let regiao
switch (n) {
    case 1:
    estado="Amazonas"
    regiao="Norte"
        break
    case 2:
    estado="Roraima"
    regiao="Norte"
        break
    case 3:
    estado="Amapá"
    regiao="Norte"
        break
    case 4:
    estado="Belém"
    regiao="Norte"
        break
    case 5:
    estado="Tocantins"
    regiao="Norte"
        break
    case 6:
     estado="Rondônia "
    regiao="Norte"
        break
    case 7:
    estado="Acre"
    regiao="Norte"
        break
    case 8:
    estado="Maranhão"
    regiao="Nordeste"
        break
    case 9:
    estado="Piauí"
    regiao="Nordeste"
        break
    case 10:
    estado="Ceará"
    regiao="Nordeste"
        break
    case 11:
    estado="Rio Grande do Norte"
    regiao="Nordeste"
        break
    case 12:
    estado="Pernambuco"
    regiao="Nordeste"
        break
    case 13:
    estado="Paraíba"
    regiao="Nordeste"
        break
    case 14:
    estado="Sergipe"
    regiao="Nordeste"
        break
    case 15:
    estado="Alagoas"
    regiao="Nordeste"
        break
    case 16:
    estado="Bahia"
    regiao="Nordeste"
        break
    case 17:
    estado="Mato Grosso"
    regiao="Centro-Oeste"
        break
    case 18:
    estado="Mato Grosso do Sul"
    regiao="Centro-Oeste"
        break
    case 19:
    estado="Goiás"
    regiao="Centro-Oeste"
        break
    case 20:
    estado="São Paulo "
    regiao="Sudeste"
        break
    case 21:
    estado="Rio de Janeiro"
    regiao="Sudeste"
        break
    case 22:
    estado="Espírito Santo"
    regiao="Sudeste"
        break
    case 23:
    estado="Minas Gerais"
    regiao="Sudeste"
        break
    case 24:
    estado="Paraná"
    regiao="Sul"
        break
    case 25:
    estado="Rio Grande do Sul"
    regiao="Sul"
        break
    case 26:
    estado="Santa Catarina"
    regiao="Sul"
        break
    case 27:
    estado="Distrito Federal"
    regiao="Centro-Oeste"
        break
    

    default:
        mensagem="Erro"
        break;
} 
console.log(`Seu estado é o ${estado} e sua região é a ${regiao}`);