export function add(str) {
    if(str.length === 0){
        return 0
    }
    if(str === "1"){
        return 1;
    }
    const nums = str.split(/,|\n/);
    if (nums.includes("")) {
        return null; 
    }

    if (nums.length === 2) {
        return parseInt(nums[0]) + parseInt(nums[1]);
    }

    let sum = 0;
    for (let num of nums) {
        sum += parseInt(num);
    }
    return sum;

  }