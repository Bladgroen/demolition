<script lang="ts">
	  import { onMount } from 'svelte';
  
  function handleKeyDown(event: KeyboardEvent) {
    // The event object contains information about the key that was pressed
    console.log('Key pressed: ' + event.key);
  }
  
  onMount(() => {
    // Add the event listener to the document object when the component mounts
    document.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });


import { db } from "../db";
//TODO cleanup 
export let okapiStart = 0;
export let chiroStart = 0;
export let ksaStart = 0;

async function addTotal() {

    const okapiField = await db.Okapi.add({
      total: okapiStart
    });

    const chiroField = await db.Chiro.add({
      total: chiroStart
    });

    const ksaField = await db.Ksa.add({
      total: ksaStart
    });

}

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
      <img src="/Chirologo.png" alt="logo" class="logo" id="third" >
      <img src=/Ksalogo.png alt="logo" class="logo" id="first">
      <img src="witzonderachtergrond.png" alt="logo" class="logo" id="second">
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
  height: auto;
}

#third {
    transform: translateY(200px);
}

#second {
  transform: translateY(100px);
}

</style>
