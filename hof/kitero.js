const fv1 = (a,b) =>{
    return a + b
}


const fv2 = (a,b,cb) =>{
    const afgan = cb(a,2)
    const iraq = cb(b,4)
    const iran = cb(afgan,iraq)

    return iran
}

const res1 = fv2(5,7,(a,b)=>{
    return a + b
})

console.log(res1)

const res2 = fv2(5,7,fv1)

const fv3 = (op) =>{
    if(op === '-'){
        return (a,b) =>{
            return a - b
        }
    }
    if(op === '*2'){
        const multi = 2
        return (a,b ) =>{
            return multi *(a+b)
        }
    }
}


const fv4 = fv3('-')
console.log(fv4(5,7))

const maskara = fv2(5,7,fv3('-'))
console.log(maskara)

const magyaro = fv2(5,7,fv3("*2"))
console.log(magyaro)

