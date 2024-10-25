export function calculateWaterVolume(areas) {
    return areas.reduce((totalVolume, area) => {
       const runoffVolume = area.size * area.runoffValue;
       const storageCapacity = area.size * area.soilDepth;
       return totalVolume + Math.max(runoffVolume - storageCapacity, 0);
    }, 0);
 }
 