
var sumSubarrayMins = function(arr) {
    var left, right;
    var sum=0;
    for (let i=0;i<arr.length;i++){
        left=i;
        right=i;
        while (left>0 && arr[left-1]>arr[i]) left--;
        while (right<arr.length-1 && arr[right+1]>=arr[i]) right++;
        let val=arr[i]*(i-left+1)*(right-left+1-(i-left));
        sum+=val;
    }
    return sum;
};


m=[3,1,2,4];
m=[6,4,6,8,4,3,5,4];
console.log(sumSubarrayMins(m));