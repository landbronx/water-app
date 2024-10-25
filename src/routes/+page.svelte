<script>
	import { calculateWaterVolume } from '$lib/utils/calculateVolume';
	import { RangeSlider } from '@skeletonlabs/skeleton';
import AreaForm from '$lib/components/AreaForm.svelte';
 
	// Define three fixed areas
	let area1 = { size: 0, runoffValue: 0, soilDepth: 0 };
	let area2 = { size: 0, runoffValue: 0, soilDepth: 0 };
	let area3 = { size: 0, runoffValue: 0, soilDepth: 0 };
 
	let totalWaterVolume = 0;
 
	// Calculate total water volume whenever inputs change
	const calculateTotalVolume = () => {
	   totalWaterVolume = calculateWaterVolume([area1, area2, area3]);
	};

	let value = 15;
let max = 25;

 </script>
 



 <a href="/projects">My projects</a>
 <h1 class="text-center text-2xl mt-4">Water Storage Volume Calculator</h1>


 <div class="flex justify-center">
 <RangeSlider name="range-slider" bind:value={value} max={25} step={1} ticked>
	<div class="flex justify-between items-center">
		<div class="font-bold">Label</div>
		<div class="text-xs">{value} / {max}</div>
	</div>
</RangeSlider>
</div>

 
 <div class="flex justify-center items-center">
	<div class="flex space-x-4">
	   <!-- Area 1 -->
	   <div class="bg-primary text-white p-4 rounded w-64">
		  <h2 class="text-center">Area 1</h2>

		  <label for="size1">Size (m²)</label>
		  <input id="size1" bind:value={area1.size} placeholder="Size (m²)" class="bg-primary-500 text-white p-2 rounded w-full" on:input={calculateTotalVolume} type="number" />
		  
		  <label for="runoff1" class="mt-2 block">Runoff Value</label>
		  <input id="runoff1" bind:value={area1.runoffValue} placeholder="Runoff Value" class="bg-primary-500 text-white p-2 rounded w-full" on:input={calculateTotalVolume} type="number" />
		  
		  <label for="soil1" class="mt-2 block">Soil Depth (m)</label>
		  <input id="soil1" bind:value={area1.soilDepth} placeholder="Soil Depth (m)" class="bg-primary-500 text-white p-2 rounded w-full" on:input={calculateTotalVolume} type="number" />
	   </div>
 
	   
	</div>
 </div>

<AreaForm></AreaForm>


<!-- Main container to center and position higher up -->
<div class="flex flex-col items-center w-full max-w-3xl mx-auto pt-8">
  
	<!-- Subtle Divider Line -->
	<div class="border-t border-gray-300 w-full"></div>
	
	<!-- Centered display for total volume below the line -->
	<h2 class="text-center mt-2 py-5">Total Water Storage Volume Needed: {totalWaterVolume.toFixed(2)} m³</h2>
  </div>
  
  

