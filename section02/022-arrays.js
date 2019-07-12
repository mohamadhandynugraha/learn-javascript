let names = ['John', 'mark', true, false, 0.19, -13213, 1919, undefined, NaN]
names.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`)
})

// kayak biasa, akses array pake index
console.log(names[1])

// ganti value di array
names[1] = 'po'
console.log(names)

// nambah array menggunakan index 
names[names.length] = 'test ets'
console.log(names)

// nambah array menggunakan index yang lebih dari panjang array tsb, contoh:
names[20] = 'index ke berapa ya ini'
console.log(names)

// kalau di print pake foreach dia gak bakalan muncul undefinednya
names.forEach(element => {
    console.log(element)
})

// kalau pake for dia muncul
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

// jadi kesimpulannya, untuk array lebih cepat menggunakan foreach

// push element
// tambah element di belakang
names.push(90)
console.log(names)

// unshift element
// tambah element di depan
names.unshift(12)
console.log(names) 

// hapus element pop
// hapus element di belakang
names.pop()
console.log(names)

// hapus element di shift
// hapus element di depan
names.shift()
console.log(names)

// hapus element atau nambah element di pertengahan
// menggunakan splice
// kita mau menambahkan object di index ke 2, 0 digunakan agar supaya tidak menghapus element
names.splice(2, 0, {
    nama: 'handy',
    umur: 23
})

console.log(names)

// index of untuk ngecek element di array
