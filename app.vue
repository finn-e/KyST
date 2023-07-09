<template>
  <div>
    <SeoKit />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  script: [
    {
      src: "/assets/vendor/preline/dist/preline.js",
      type: "text/javascript",
      body: true,
      defer: true,
    },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KyST` : 'Kentucky Stream Team ';
  },
});
useSeoMeta({
  twitterCard: 'summary_large_image'
})
</script>