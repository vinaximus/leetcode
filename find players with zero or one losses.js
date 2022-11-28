var findWinners = function(matches) {
    var mp=new Map();
    var answer=[[],[]];
    matches.sort((a,b)=>a[0]-b[0]);
    for (let i=0;i<matches.length;i++) 
        {mp.set(matches[i][1],mp.has(matches[i][1])?mp.get(matches[i][1])+1:1)}
    for (let i=0;i<matches.length;i++) if (mp.has(matches[i][1])==false) answer[0].push(matches[i][0]);
    for (let i=0;i<matches.length;i++) if (mp.get(matches[i][1])==1) answer[1].push(matches[i][0]);
    return answer;    
};

mat=[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.table(findWinners(mat));
