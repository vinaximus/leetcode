var numSub = function(s) {
    var count=0;
    var sum=0;
    const r=1e9+7;
    for (let i=0;i<s.length;i++) {
        if (s[i]=="1") count++;
        else {
            sum+=(count+1)*(count*0.5);
            sum%=r;
            count=0;
        }
    }
    sum+=(count+1)*(count*0.5);
    return sum%r;
};

n="0110111";
console.log(numSub(n));
