<script lang="ts">
	import { resolve } from "$app/paths";
	import { activityCount, collections } from "$lib/collections";
</script>

<svelte:head>
	<title>Intimacy Menu Generator</title>
	<meta
		name="description"
		content="Shared menus of agreed activities for an evening together."
	/>
</svelte:head>

<main class="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
	<header class="max-w-2xl border-b border-surface-300 pb-8 dark:border-surface-700">
		<p class="text-sm font-semibold uppercase tracking-widest text-surface-600 dark:text-surface-400">
			Intimacy Menu Generator
		</p>
		<h1 class="mt-3 text-4xl font-semibold text-surface-950 dark:text-white sm:text-5xl">
			Tonight's menus
		</h1>
		<p class="mt-4 text-lg leading-8 text-surface-700 dark:text-surface-300">
			Choose a shared menu for an evening together.
		</p>
	</header>

	<section class="mt-10" aria-labelledby="collection-heading">
		<h2 id="collection-heading" class="text-xl font-semibold text-surface-950 dark:text-white">
			Available menus
		</h2>
		<ul class="mt-5 grid gap-5 sm:grid-cols-2">
			{#each collections as { id, collection } (id)}
				<li>
					<a
						href={resolve(`/collections/${id}`)}
						class="card block h-full border border-surface-300 bg-surface-50 p-6 transition hover:border-primary-500 hover:bg-primary-50 dark:border-surface-700 dark:bg-surface-900 dark:hover:bg-primary-950"
					>
						<p class="text-sm font-medium uppercase tracking-widest text-primary-700 dark:text-primary-300">
							Menu
						</p>
						<h3 class="mt-2 text-2xl font-semibold text-surface-950 dark:text-white">
							{collection.title}
						</h3>
						<p class="mt-5 text-sm text-surface-700 dark:text-surface-300">
							{collection.sections.length} sections · {activityCount(collection)} choices
						</p>
						<span class="mt-6 inline-block font-medium text-primary-700 dark:text-primary-300">
							View menu
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
