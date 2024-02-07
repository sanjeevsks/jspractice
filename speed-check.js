/**
 * 
 * @author: Sanjeev Shukla
 * @Program: Calculate safe speed limit and define the penality if speed exceeds the defined speed limit.
 * 
 */

function speedcheck(speed) {
    let speedlimit = 70;
    if (speed <= speedlimit) {
        console.log("good safe driving");
    }
    else if (speed > speedlimit) {
        let penaltypoint;
        penaltypoint = Math.floor((speed - speedlimit) / 5);
        console.log("speed limit crossed by penalty point:" + penaltypoint);

        if (penaltypoint >= 10) {
            console.log("license suspended");
        }
    }
}

let speed = 130;
speedcheck(speed);
