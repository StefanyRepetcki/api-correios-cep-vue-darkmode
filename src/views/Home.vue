<template>
  <div id="home">
    <about />
  </div>
</template>

<script>
  export default {
    components: {
      About: () => import('@/components/home/About'),
    },
  }
</script>
