function printName() {
    let name = `"Hello John"`;
    function helloName() {
        console.log(name);
    }
    helloName();
}

setTimeout(printName, 1000);
