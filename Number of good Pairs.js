var numIdenticalPairs = function(nums) {
    let mp=new Map();
    let count =0;
    for (let i=0;i<nums.length;i++) {
        if (mp.has(nums[i])) mp.set(nums[i],mp.get(nums[i])+1)
        else mp.set(nums[i],1);
    }
    for (let i=0;i<nums.length;i++) {
        let val=mp.get(nums[i])-1;
        mp.set(nums[i],val);
        count+=val;
    }
    return count;
};

n=[1,2,3,1,1,3];
console.log(numIdenticalPairs(n));
