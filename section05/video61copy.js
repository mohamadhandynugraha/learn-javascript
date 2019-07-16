let Rumah = function(luasTanah, luasBangunan, harga){
    this.luasTanah = luasTanah // dalam m2
    this.luasBangunan = luasBangunan // dalam m2
    this.harga = harga // rupiah
}

Rumah.prototype.hitungPajakIMB = function(){
    // rumus / formula menghitung pajak IMB
    return (this.luasTanah + this.luasBangunan) * 1500 
}

let mansion = new Rumah(500, 380, 300000000)
mansion.hitungPajakIMB()
console.log(mansion)

let x = [1, 3, 4]
console.info(x)

let personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth)
    }
}

let mark = Object.create(personProto)
mark.name = 'Mark Hughes'
mark.yearOfBirth = 1990
mark.job = 'Coach'