// const isDog = true;
// let imie = "ala ma kota"
// imie = "ala ma psa"
// console.log("imie",imie)

// const liczba = 28
// const liczba = 29
// const imieJeden = "Alicja"
// const imieDwa = "Artur"
// const wynik = liczba + jeden
// console.log(wynik)
// console.log((liczba+liczbaJeden)*liczbaDwa)
// console.log(imieJeden, imieDwa)

console.log(45+50)

const imie = "Jan"
const nazwisko = "ź"
const wynik = imie.toLowerCase() + ' ' + nazwisko.toLowerCase()

console.log(wynik)

// const tablica = [12 , "Roman" , wynik]
// console.log(tablica [1])

const tablicaJeden = ["Maria" , "Monika" , "Marzena" , "Mariola" , "Magdalena" , "Hinata" , "Kenma" , "Kuroo" , "Katsuki" , "Tsuki" , "Hania" , "Barbara" , "Marlena" , "Alicja" , "Artur" , "Dawid" , "Kuba" , "Oskar" , "Ola" , "Róża" , "Łukasz" , "Kacper" , "Karolina" , "Wiktoria" , "Cecylia" , "Jan"]
// console.log("Imię numer 1", tablicaJeden [0])
// console.log("Imię numer 2", tablicaJeden [1])
// console.log("Imię numer 3", tablicaJeden [2])
// console.log("Imię numer 4", tablicaJeden [3])
// console.log("Imię numer 5", tablicaJeden [4])
// console.log("Imię numer 6", tablicaJeden [5])
// console.log("Imię numer 7", tablicaJeden [6])
// console.log("Imię numer 8", tablicaJeden [7])
// console.log("Imię numer 9", tablicaJeden [8])
// console.log("Imię numer 10", tablicaJeden [9])
// console.log("Imię numer 11", tablicaJeden [10])
// console.log("Imię numer 12", tablicaJeden [11])
// console.log("Imię numer 13", tablicaJeden [12])
// console.log("Imię numer 14", tablicaJeden [13])
// console.log("Imię numer 15", tablicaJeden [14])
// console.log("Imię numer 16", tablicaJeden [15])
// console.log("Imię numer 17", tablicaJeden [16])
// console.log("Imię numer 18", tablicaJeden [17])
// console.log("Imię numer 19", tablicaJeden [18])
// console.log("Imię numer 20", tablicaJeden [19])
// console.log("Imię numer 21", tablicaJeden [20])
// console.log("Imię numer 22", tablicaJeden [21])
// console.log("Imię numer 23", tablicaJeden [22])
// console.log("Imię numer 24", tablicaJeden [23])
// console.log("Imię numer 25", tablicaJeden [24])
// console.log("Imię numer 26", tablicaJeden [25])

tablicaJeden.forEach(item => {
console.log("stare" , item)
console.log("nowe" , "Bakuś")
}) 

const nowaTablicaJeden = tablicaJeden.map((item, index) => item = "Bakuś")
console.log(nowaTablicaJeden)



const Oskar = tablicaJeden.find(item => {
    if(item === "Oskar"){
        return item 
    }
})
console.log(Oskar)

const tablicaliczb = new Array(1, 2, 3, 4)
console.log(tablicaliczb)


const większeOdJedenSome =
tablicaliczb.some(item => item > 1)
console.log(większeOdJedenSome)

const większeOdJedenEver = tablicaliczb.every(item => item )
console.log(większeOdJedenEver)

tablicaliczb.push(666)
console.log(tablicaliczb)

const liczbyDo100 = new Array() 
for(let i = 1;i < 101; i++) {
    liczbyDo100.push(i)
}
console.log(liczbyDo100)




const imiona = new Array()
for(let i = 0; i < 50; i++){
    imiona.push("Tsuki" + i)
}
console.log(imiona)



const parzyste = new Array()
for(let i = 1; i < 1001; i++){
    if(i % 2 !== 0)
    parzyste.push(i)
}
console.log(parzyste)

