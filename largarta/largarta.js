async function largarta() {
    let largarta = "(),(),(),(0~0)"
    let largarta2 = "( ),( ),( ),(0~0)"
    let espaço = " "

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    for ( let i = 0; i < 30; i++ ) {
        largarta = espaço + largarta;
        largarta2 = espaço + largarta2;
        console.log(largarta);
        await sleep(300);
        console.clear();
        console.log(largarta2);
        await sleep(300);
        console.clear();
    }
}