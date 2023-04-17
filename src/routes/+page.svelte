<script lang="ts">
	  import { liveQuery } from "dexie";
	  import { onMount } from 'svelte';
	  import { addPoint, checkScore, initStart } from '../lib/logic';
  
  function handleKeyDown(event: KeyboardEvent) {
    // The event object contains information about the key that was pressed
    addPoint(event)
  }
  
  let place = '';
  onMount(() => {
    // Add the event listener to the document object when the component mounts
    document.addEventListener('keydown', handleKeyDown);
    initStart();
      let placeStore: any = []
    const interval = setInterval(() => {
        placeStore = checkScore();
        console.log("test");
        placeStore.subscribe(data => {
        place = data;
        console.log(place);
        
    })
    }, 15 * 60 * 1000)

    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  });


  
</script>

<svelte:head>
	<title>Demolition</title>
	<meta name="description" content="Demolition app" />
</svelte:head>

<section>
	<div class="image">
		<img src="/title.png" alt="demolition title" />
	</div>

	<div class="podium">
    <div class="subPodium">
          <div class="logoContainer">
      <img src="{place[2]}" alt="logo" class="logo" id="third">
      <img src="{place[0]}" alt="logo" class="logo" id="first">
      <img src="{place[1]}" alt="logo" class="logo" id="second">
    </div>

    <div class="podiumImage">
      <img src="/PodiumFoto.png" alt="podium">
    </div>
    </div>

	</div>  
</section>

<style>
.image {
	display: flex;
	justify-content: center;
}

.podium {
  text-align: center;
}

.logoContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.subPodium {
  width: 687px;
  margin: 0 auto;
}

.logo {
  max-width: 231px;
  min-width: 231px;
  height: auto;
}

#third {
    transform: translateY(200px);
}

#second {
  transform: translateY(100px);
}

</style>
