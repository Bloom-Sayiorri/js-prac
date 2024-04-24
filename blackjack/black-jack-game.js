const record = [
    {year: 2015,result: "W"},
    {year: 2014,result: "N/A"},
    {year: 2013,result: "L"}
]

function superBowlWin(array){
    return array.find(element => element.result === "W" ? element.year : 'undefined')
}

console.log(superBowlWin(record))