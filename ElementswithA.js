var arr = ["New York","Chicago","Boston","Houston","Seattle"];
var store= [];
var i=0;
var j=0;
var character;
for(i=0;i<=arr.length-1;i++){
    character = arr[i];
    if(character.includes("a") == true){
        store[j] = character;
        j++;

    }
}
console.log(arr);
console.log(store);