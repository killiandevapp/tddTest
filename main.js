export function add(str) {
    if(str.length === 0){
        return 0
    }
    if(str < 0){
        return `Negatves not allowed for ${str}`
    }
    let delimiter = /[,\n]/;
    if (str.startsWith("//")) {
        const customDelimite = str[2]; 
        delimiter = new RegExp(customDelimite.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); 
        str = str.substring(4); 
    }
    const nums = str.split(delimiter);
    if (nums.includes("")) {
        return null; 
    }

    let sum = 0;
    for (let num of nums) {
        sum += parseInt(num);
    }
    return sum;
  }