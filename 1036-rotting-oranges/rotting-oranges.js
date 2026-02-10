/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // Indentify rotten tamatos and push it's location into queue
    //queue element [x,y,min];
    let queue=[]
    let m = grid.length;
    let n = grid[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===2){
                queue.push([i,j,0])
            }
        }
    }
    let maxMinute=0;
    while(queue.length){
        let [x,y,min]=queue.shift();
        if(x>0 && grid[x-1][y]===1){
            grid[x-1][y]=2
            queue.push([x-1,y,min+1]);
        }
        if(y>0 && grid[x][y-1]===1 ){
            grid[x][y-1]=2
            queue.push([x,y-1,min+ 1]);
        }
        if(x+1<m && grid[x+1][y]===1){
            grid[x+1][y]=2
            queue.push([x+1,y,min+ 1]);
        }
        if(y+1<n && grid[x][y+1]===1 ){
            grid[x][y+1]=2
            queue.push([x,y+1,min+ 1]);
        }
        maxMinute= Math.max(min,maxMinute)
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                return -1;
            }
        }
    }

    return maxMinute
    
};