<script>
	export let outcome;
	export let show = false;
	console.log(outcome);
</script>

{#if show}
	<div class="wrap">
		<div class="dialog">
			<button on:click={() => (show = false)} class="close">x</button>
			{#if outcome === 'won'}
				<h1>nice job!</h1>
			{:else if outcome === 'lost'}
				<h1>you'll get it next time.</h1>
			{/if}
			<button>Copy results</button>
		</div>
	</div>
{/if}

<style>
	.close {
		cursor: default;
		line-height: 0rem;
		/* display: table-cell; */
		/* vertical-align: middle; */
		text-align: center;
		width: 1.4rem;
		height: 1.4rem;
		/* padding: 0.1rem; */
		position: relative;
		bottom: 1rem;
		left: 12rem;
	}

	.wrap {
		position: absolute;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dialog {
		color: black;
		border-radius: 1rem;
		background-color: gray;
		width: 20rem;
		/* height: 10rem; */
		padding: 2rem 5rem;
	}
</style>
