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

function removeLastcat(){

    // const obj =[...cats];
    // obj.pop();
    // return obj:

    // const obj =[cats.slice(0, -1)];
    // return obj;

    // return cats.slice(0, -1);

    // const obj = [...cats];
    // obj.splice[-1];
    // return obj;

    return cats.slice(0, cats.length -1);


}

function removeFirstCat(){
    return cats.slice(1);
}

