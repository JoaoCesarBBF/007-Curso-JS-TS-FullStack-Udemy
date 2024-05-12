function ePaisagem(x,y){
    if (x>y) {
        return true
    } else {
        return false
    }
}

const ePaisagemV2 = (x,y) => x>y?true:false
console.log(ePaisagem(20,30))
console.log(ePaisagemV2(20,30))