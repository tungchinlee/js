// function greeting(name) {
//   // say a friendly hi
//   console.log("Hello world! This is " + name)
//   return `name: ${name}`
// }

// let result = greeting("Mary")
// console.log(result)

// function add(x, y){
//   return x + y;
// }

// function multiply(x, y){
//   return x * y;
// }
// console.log(multiply(add(1, 2), 10))

// let array = [1, 2, 3, 4, 5]
// let res1 = array.slice(0,3)
// let res2 = [0, ...array,7]
// console.log(res2)
// console.log(res1)

// for(var i = 0; i < res2.length; i++){
//   let result = res2[i] + 1
//   console.log(result)
// }

// console.log(i)
// for(let x of res2)
// console.log(x)

// console.log(baz(1000))

// function baz(x){
//   var amount, total, qty;
//   amount = 100;
//   return amount + x
// }

// //高階函式
// function cook(i1, i2, f){
//   f(i1)
//   f(i2)
//   console.log(`i made dinner with #{i1}`)
// }

// let array = [1, 2, 3, 4]
//  array[9] = 6;
//  console.log(array[5])

 let all_songlists = []

let musicPlayList = {
  owner: {account: 'user1', nickname: 'lee', isVip: true},
  playlist_name: 'lovesong',
  playlist_duration: 3000, //sum of song lengths
  
  songs: [
      {name: '喔', genre: 'string', length: 60, artist: '板橋金城武', album: '', isFavorited: true, playedＣount: 3},
      {name: '人生海海', genre: 'string', length: 60, artist: '炯和 AKA 千億', album: '', isFavorited: false, playedCount: 2 }
  ]}

  all_songlists.push(musicPlayList)
console.log(all_songlists)
console.log(musicPlayList.songs[1])
