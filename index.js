function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    const fn = () => console.log('returns a named function')
    return fn
}
function returnsAnAnonymousFunction(){
    return() => console.log('returns an anonymous function')
}