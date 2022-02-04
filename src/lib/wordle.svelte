<script>
	import Dialog from '$lib/dialog.svelte';
	import grid from '$lib/grid';
	import store from '$lib/localStore';
	export let word = 'arise';
	console.log(grid);
	console.log($grid);

	let cols = 5;
	let rows = 6;
	let row = store('row', 0);
	let col = store('col', 0);

	let outcome = undefined;
	let show = false;
	function winGame() {
		show = true;
		outcome = 'won';
	}

	function loseGame() {
		show = true;
		outcome = 'lost';
	}

	function guess(g) {
		let result = [];
		if (g.length !== word.length) {
			throw new Error('Word and guess are not the same length.');
		}
		for (let i = 0; i < g.length; i++) {
			const char = g[i];
			const idx = word.indexOf(char);
			if (idx === i) {
				result.push('correct');
			} else if (idx === -1) {
				result.push('wrong');
			} else {
				result.push('partial');
			}
		}
		return result;
	}
</script>

<Dialog bind:show {outcome} />

<svelte:window
	on:keydown={({ key }) => {
		if (/^[A-Za-z]$/.exec(key)) {
			if ($col < cols && $row < rows) {
				$grid[$row][$col].key = key;
				$col += 1;
			}
		}
		if (key === 'Backspace') {
			if ($col > 0 && $row < rows) {
				$col -= 1;
				$grid[$row][$col].key = undefined;
			}
		}
		if (key === 'Enter') {
			if ($col === cols && $row < rows) {
				let result = guess($grid[$row].map((a) => a.key));
				for (let i = 0; i < cols; i++) {
					$grid[$row][i].type = result[i];
				}
				$col = 0;
				$row += 1;
				if (result.every((x) => x === 'correct')) {
					winGame();
					return;
				}
				if ($row === rows) {
					loseGame();
				}
			}
		}
	}}
/>

<div class="grid">
	{#each $grid.flat() as { key, type }}
		<div class={'letter ' + type}>{key ? key : ''}</div>
	{/each}
</div>

<style>
	.grid {
		width: fit-content;
		height: auto;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		background-color: black;
	}

	.correct {
		background-color: #538d4e !important;
	}

	.wrong {
		background-color: #3a3a3c !important;
	}

	.partial {
		background-color: #b69a3f !important;
	}

	.letter {
		margin: 1rem;
		background-color: black;
		width: 3rem;
		height: 3rem;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid gray;
	}
</style>
