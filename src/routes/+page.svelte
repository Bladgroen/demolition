<script>

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
