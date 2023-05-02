<script lang="ts">
	  import { onMount } from 'svelte';
	  import Counter from '../components/Counter.svelte';
	  import DenBokser from '../components/DenBokser.svelte';
	  import Fallstaf from '../components/Fallstaf.svelte';
	  import Jari from '../components/Jari.svelte';
	  import Ljke from '../components/Ljke.svelte';
    import Carrefour from '../components/carrefour.svelte';
	  import { addPoint, checkScore, initStart } from '../lib/logic';

  
  function handleKeyDown(event: KeyboardEvent) {
    // The event object contains information about the key that was pressed
    addPoint(event)
  }
  
  const components = [Counter, DenBokser, Fallstaf, Jari, Ljke, Carrefour]

  let currentComponentIndex = 0;

  onMount(() => {
    // Add the event listener to the document object when the component mounts
    document.addEventListener('keydown', handleKeyDown);
    initStart();
      let placeStore: any = []
      let interval = setInterval(() => {
      currentComponentIndex = (currentComponentIndex + 1) % components.length;
    }, 15 * 1000);

    
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


<svelte:component this={components[currentComponentIndex]} />

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

.nav {
  padding: 1rem;
}

</style>
