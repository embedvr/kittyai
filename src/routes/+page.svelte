<script lang="ts">
	import { goto } from '$app/navigation';

	let cgInput: HTMLInputElement;
	let pgInput: HTMLInputElement;
	let loading = false;

	const handlecg = () => {
		loading = true;
		goto(`/cat/${cgInput}`);
	};

	const handlepg = () => {
		loading = true;
		goto(`/pup/${pgInput}`);
	};
</script>

<div class={loading ? 'fullscreen' : 'hidden'}>
	<p>loading :3</p>
</div>

<h1>the worst ai ever done</h1>

<input type="text" bind:value={cgInput} />
<button on:click|preventDefault={handlecg}>prompt catgirl ai</button>
<br />
<input type="text" bind:value={pgInput} />
<button on:click|preventDefault={handlepg}>prompt puppygirl ai</button>

<style>
	.hidden {
		display: none;
	}

	.fullscreen {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.75);
		color: white;
	}
</style>
