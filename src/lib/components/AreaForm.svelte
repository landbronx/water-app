<script>
    export let addArea;
    let areaName = '';
    let areaSize = 0;
    let runoffValue = 0;
    let soilDepth = 0;
 
    const submitArea = () => {
       addArea({ name: areaName, size: areaSize, runoffValue, soilDepth });
       areaName = '';
       areaSize = 0;
       runoffValue = 0;
       soilDepth = 0;
    };
 </script>
 
 <input bind:value={areaName} placeholder="Area Name" />
 <input bind:value={areaSize} placeholder="Size (m²)" type="number" />
 <input bind:value={runoffValue} placeholder="Runoff Value" type="number" />
 <input bind:value={soilDepth} placeholder="Soil Depth (m)" type="number" />
 <button on:click={submitArea}>Add Area</button>

 
 