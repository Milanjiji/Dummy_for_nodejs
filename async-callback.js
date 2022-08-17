const {
    readFile,
    writeFile 
} = require('fs')

console.log("starting the process");
readFile('./text.txt','utf8', (err,result)=>{
    if(err){
        console.log('error')
        return;
    }
    const first = result;
    readFile('./text_2.txt','utf8', (err,result)=>{
        if(err){
            console.log('error')
            return;
        }
        const second = result;
        writeFile('./callback.txt',
        `here is the result: ${first} ${second}`,(err,result)=>{
            if(err){
                console.log('error in writing')
                return;
            }
            console.log(result)
            console.log('done processing');
        })
    })
})
console.log('finished');
// writeFileSync('./write.txt',`hllo there is the text.txt file data : ${text}`)
// const writed = readFileSync('./write.txt','utf8')
// console.log(writed)

