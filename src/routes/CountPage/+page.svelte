<script>
    import {writable} from 'svelte/store'
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
  import { addPointOnCountPage, returnScore } from '$lib/logic';
    function back() {
        goto('/')
    }
    function reload() {
        location.reload();
    }
    let data = []
    onMount(async () => {
        const score = await returnScore();
        data = score
  });

    const store = writable({
        okapi: 0,
        chiro: 0,
        ksa: 0
    });

    function updateOkapi() {
        store.update(state => ({
            ...state, okapi: state.okapi + 1
        }));
        addPointOnCountPage("o");
    }

    function updateChiro() {
        store.update(state => ({
            ...state, chiro: state.chiro + 1
        }));
        addPointOnCountPage("c")
    }

    function updateKsa() {
        store.update(state => ({
            ...state, ksa: state.ksa + 1
        }))
        addPointOnCountPage("k")
    }

</script>


<section>
    <button on:click={back}>Back</button>
    <div class="okapibuttons">
        <div class="score">
            <p>{$store.okapi}</p>
            <p>{$store.chiro}</p>
            <p>{$store.ksa}</p>
        </div>
        <div class="buttons">
            <button class="okapiButton" on:click={updateOkapi}>Okapi</button>
            <button class="chiroButton" on:click={updateChiro}>Chiro</button>
            <button class="ksaButton" on:click={updateKsa}>KSA</button>
        </div>
        <div class="database">
            <p>database info</p>
            <button on:click={reload}>Reload</button>
            <p>Okapi: {data.okapi} </p>
            <p>Ksa: {data.ksa} </p>
            <p>Chiro: {data.chiro} </p>
        </div>


    </div>
</section>

<style>
    .okapibuttons {
        height: 100vh;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .score {
        color: white;
        display: flex;
        justify-content: space-around;
        font-size: 25px;
    }
    button {
        padding: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: white;
        background-color: rgba(176, 4, 102, 1);
        border: none;
        border-radius: 1rem;
    }

    button:hover {
        cursor: pointer;
        background-color: rgb(114, 18, 72);
    }
    .database {
        color: white;
        text-align: center;
        padding-top: 2rem;

    }
</style>