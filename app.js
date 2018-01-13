
outputLine(2, 15, 17, 19, 'Карл у Клары украл кораллы');


function outputLine(...args) {
    let line = args.pop(),
        arr = line.split(' ');
    for (let i = 0; i < arr.length; i++) {


        switch (i) {
        case i=0 :
            setTimeout(consoleArr, 2000);
            break;
        case i=1 :
            setTimeout(consoleArr, 4000);
            break;
        case i=2 :
            setTimeout(consoleArr, 5000);
            break;
        case i=3 :
            setTimeout(consoleArr, 7000);
            break;
        case i=4 :
            setTimeout(consoleArr, 8000);
            break;
        case i=5 :
            setTimeout(consoleArr, 10000);
            break;
        default :
            setTimeout(consoleArr, 2000);
        }


            function consoleArr() {
                console.log(arr[i]);
            }
            clearTimeout(consoleArr);


    }
}
