let obj1 = { cor : "branco",
ano:1999
}
let obj2 = {
    roda: "aro17"

}

let merged = {
    ...obj1,
    ...obj2
}

console.log(merged);