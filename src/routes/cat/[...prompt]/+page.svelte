<script lang="ts">
	export let data;
</script>

<svelte:head>
	<meta content="KittyAI" property="og:title" />
	<meta content={data.response} property="og:description" />
	<meta content="https://helium.ws/" property="og:site_name" />
</svelte:head>

{data.response}
