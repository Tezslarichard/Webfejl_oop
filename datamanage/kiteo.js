const sum =(a,b)=>{ 
    return a + b
}
console.log(sum(3,5))

const obj ={}
obj.calculate1 = sum
obj.calculate1(3,5)
console.log(obj.calculate1(3,5))

obj.calculate2=(magyarsag)=>{
    const a = 3
    const b = 5

    return magyarsag(a,b)
}
const rez1 = obj.calculate2((szam1,szam2)=>{return szam1 + szam2})
console.log(rez1)
const rez12 = obj.calculate2((szam1,szam2)=>{return szam1 - szam2})
console.log(rez12)

obj.claculate3=(szam1,szam2,cb) =>{
    const abdul = cb(szam1,szam2)
    return abdul;
}

const romantarsulat = obj.claculate3(7,8,(szam1,szam2)=> {return szam1 * szam2})
console.log(romantarsulat)

const aFunkcio =()=>{
    const szam = 10
    const rez112 = obj.calculate2((szam1,szam2)=>{return szam * szam1 - szam2})
    console.log(rez112)
}
aFunkcio()