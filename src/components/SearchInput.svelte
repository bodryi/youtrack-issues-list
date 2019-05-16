<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let query = '';
	const searchHandler = () => dispatch('search', query);
</script>


<div>
	<input bind:value={query}/>
	<button on:click={searchHandler}>Search</button>
</div>
