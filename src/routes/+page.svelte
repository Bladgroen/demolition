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

export let defaultAge = 21;

let status = "";

let friendName = "";
let friendAge = defaultAge;

async function addFriend() {
  try {

    // Add the new friend!
    const id = await db.friends.add({
      name: friendName,
      age: friendAge
    });

    status = `Friend ${friendName} successfully added. Got id ${id}`;
    
    // Reset form:
    friendName = "";
    friendAge = defaultAge;
  } catch (error) {
    status = `Failed to add ${friendName}: ${error}`;
  }
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

	<div class="trapezes">
	<div class="trapezium"></div>
	<div class="trapezium"></div>
	<div class="trapezium"></div>
	</div>

	  
  <p>{status}</p>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input
          type="text"
          bind:value={friendName} />
    </label>
    <br/>
    <label>
      Age:
      <input
        type="number"
        bind:value={friendAge} />
    </label>
    <br />
    <button on:click={addFriend}>Add Friend</button>
  </fieldset>
	  
</section>


<style>
.image {
	display: flex;
	justify-content: center;
}

.trapezes {
	display: flex;
	
}
.trapezium {
      height: 0;
      width: 150px;
      border-bottom: 500px solid green;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
	  transform: rotate(180deg);
    }


</style>
