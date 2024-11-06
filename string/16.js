function getShortestPath(path){
    let x = 0, y = 0;
    for(let i = 0; i<path.length; i++){
        let dir = path.charAt(i);
        if(dir == 'S'){
            y--;
        }
        else if(dir == 'N'){
            y++;
        }
        else if(dir == 'E'){
            x++;
        }
        else if(dir == 'W'){
            x--;
        }
    }

    let x2 = x*x;
    let y2 = y*y;
    let dist = Math.sqrt(x2 + y2);
    return dist;
}

const path = "WNEENESENNN";
console.log(getShortestPath(path))