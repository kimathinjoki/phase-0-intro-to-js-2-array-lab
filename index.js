// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);

}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const obj = [...cats, name];
    return obj

}

function prependCat(name){
    const obj = [name, ...cats];
    return obj



}

function removeLastCat(){



    const newCat = cats.slice();
    newCat.pop();
    return newCat;
}

function removeFirstCat(){
    return cats.slice(1);
}

