<script lang="ts">
  import { resolve } from "$app/paths";

  let { data } = $props();

  function attributeDisplay(icon: string, value: number): string {
    return icon.repeat(value);
  }
</script>

<svelte:head>
  <title>{data.collection.title} | Intimacy Menu Generator</title>
</svelte:head>

<main class="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-14">
  <a
    href={resolve("/")}
    class="text-sm font-medium text-primary-700 hover:underline dark:text-primary-300"
  >
    All menus
  </a>

  <header class="mt-8 border-y border-surface-300 py-10 text-center dark:border-surface-700">
    <p class="text-sm font-semibold uppercase tracking-widest text-surface-600 dark:text-surface-400">
      Tonight's menu
    </p>
    <h1 class="mt-3 text-4xl font-semibold text-surface-950 dark:text-white sm:text-5xl">
      {data.collection.title}
    </h1>
  </header>

  <div class="mt-10 grid gap-x-16 gap-y-12 lg:grid-cols-2">
    {#each data.collection.sections as section (section.title)}
      <section aria-labelledby={section.title}>
        <h2
          id={section.title}
          class="border-b border-surface-300 pb-3 text-2xl font-semibold text-surface-950 dark:border-surface-700 dark:text-white"
        >
          {section.title}
        </h2>
        <ul class="divide-y divide-surface-200 dark:divide-surface-800">
          {#each section.activities as activity (activity.title)}
            <li class="py-5">
              <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 class="text-lg font-medium text-surface-950 dark:text-white">{activity.title}</h3>
                {#if activity.attributes}
                  <div class="flex gap-3 text-base" aria-label="Activity effort and time">
                    {#each activity.attributes as attribute (attribute.icon)}
                      <span title={`${attribute.value} ${attribute.icon}`}>{attributeDisplay(attribute.icon, attribute.value)}</span>
                    {/each}
                  </div>
                {/if}
              </div>
              {#if activity.tags}
                <ul class="mt-3 flex flex-wrap gap-2" aria-label="Tags">
                  {#each activity.tags as tag (tag)}
                    <li class="badge variant-soft-surface">{tag}</li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</main>