function fun(param){

    console.log(param.nev)
}

const dzsipo = fun
const kripli = function(param)
{
    console.log(param.nev)
}

fun({nev:"Frodo"})
dzsipo({nev:"Albadosz Imre"})
kripli({nev:"Kripli Eszter"})


const kripli2 = function()
{
    console.log(this.nev)
}

const tojgu = kripli2.bind({nev:"Kriplák Béla"})
tojgu()

const kriplik = (param)=>
{
    console.log(param.nev)
}

const oppok = {
    fity : (param)=>{
        console.log(param.nev)
    },
    mam : (param)=>{
        console.log(param.kor)
    }
    

        
}
const pers1 = {
    kor : 11,
    nev : "Feke Flutyi Füttyös"
}

oppok.fity(pers1)
oppok.mam(pers1)

