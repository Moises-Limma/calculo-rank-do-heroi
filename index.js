
function calcRank(vitorias, derrotas) {
    let calculo = vitorias - derrotas
    return calculo
    
}

function setNivel() {   
    let rank;
    
    if(saldoVitorias <= 10) {
        rank = "Ferro"
    } else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        rank = "Bronze"        
    } else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        rank = "Prata"       
    } else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        rank = "Ouro"      
    } else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        rank = "Diamante"        
    } else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        rank = "Lendário"        
    } else if(saldoVitorias >= 101) {
        rank = "Imortal"
    }    
    return rank
}
let saldoVitorias = calcRank(90, 5);
let nivel = setNivel();


console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)