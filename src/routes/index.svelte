<script>
	import Wordle from '$lib/wordle.svelte';
</script>

<div class="wrap">
	<h1>wordle clone</h1>
	<Wordle />
</div>

<style>
	h1 {
		/* margin-left: auto; */
	}

	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
