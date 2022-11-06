var reorderLogFiles = function(logs) {
    for(let k of logs){
        k.sort()
    }
    return logs
};

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

console.log(reorderLogFiles(logs));