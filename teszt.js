import { fuggvenyem } from "./main.js"

/* hozz letre teszteseteket */
export function teszteseteket_fuggvenyekhez(){
    let szam = 1234
    let vart = 4321
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=0
    vart=0
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)}, eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=43,2
    vart=2,34
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam="1234"
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=-1234
    vart=-4321
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=Number.MAX_VALUE
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=Number.MIN_VALUE
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=Number.MAX_SAFE_INTEGER
    vart=1990474529917009
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=Math.PI
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=1/3
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=null
    vart="hibaüzenet"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    szam=100
    vart="001"
    console.log(
        `szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)},  eredmény: ${vart===fuggvenyem(szam)}`
    )
    
}