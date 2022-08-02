let inputArr = process.argv.slice(2);
console.log(inputArr);

let command = inputArr[0];

switch(command){
    case "tree":
        break;
    
    case "organize":
        break;
    
    case "help":
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
    console.log("help command implemented");
}