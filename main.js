let inputArr = process.argv.slice(2);
let fs = require('fs');
let path =  require('path');
// console.log(inputArr);

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
    let destpath;
    // console.log("organize command implemented");
    // 1.input -> directory path given 
    if(dirPath== undefined){
        console.log("Kindly enter the path");
        return ;
    }
    else {
        let doesexist = fs.existsSync(dirPath);
        if(doesexist)
        {
            // 2.create -> organized_file -> directory
            destpath = path.join(dirPath ,"organized_path");
            if(fs.existsSync(destpath)==false)
            {
                fs.mkdirSync(destpath);
            }
        }
        else {
            console.log("Kindly enter the correct path ");
            return;
        }
    }
    organizeHealper(dirPath,destpath);
}

function organizeHealper(dirPath,destpath)
{
        // 3.identify categories of all the files present  in that  input directory ->
        let childName = fs.readdirSync(src);
        for(let i=0;i<childName.length;i++)
        {
            let childAddress = path.join(src,childName[i])
            let isFile =  fs.lstatSync(childAddress).isFile();
            if(isFile)
            {
                // console.log(childName[i]);
                // 4.copy/cut files to that organized directory.
                let category = getCategory(childName[i]);
                console.log(childName[i],"belongs to -->",category );

            }
        }


}
function getCategory(name)
{
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in types)
    {
        let cTypeArray = types[type];
        for(let i=0;i<cTypeArray;i++)
        {
            if(ext == cTypeArray[i]){
                return type;
            }
            
        }
        return "others";
    }
}

function helpFn(dirPath)
{
    console.log(`List of all the commands:
                    1. node main.js tree "directorypath"
                    2. node main.js organize "directorypath"
                    3. node main.js help`);
}