let inputArr = process.argv.slice(2);
console.log(inputArr);

let command = inputArr[0];

switch(command){
    case "tree":
        break;
    
    case "organize":
        break;
    
    case "help":
        helpFn();
        break;
    
    default:
        console.log("please input corerct command");
        break;
}

function treeFn(dirPath)
{
    console.log("tree command implemented");
}
function organizeFn(dirPath)
{
    console.log("organize command implemented");
}
function helpFn(dirPath)
{
    console.log(`List of all the commands:
                    1. node main.js tree "directorypath"
                    2. node main.js organize "directorypath"
                    3. node main.js help`);
}