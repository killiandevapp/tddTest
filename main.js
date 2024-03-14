export function add(str) {
    if(str.length === 0){
        return 0
    }
    if(str === "1"){
        return 1;
    }
    const nums = str.split(",");

    if (nums.length === 2) {
        return parseInt(nums[0]) + parseInt(nums[1]);
    }

  }