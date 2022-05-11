<template>
<div class="container-fluid">
  <Header />
  <Hero />
</div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
export default {
  name: 'IndexPage',
  components: {
    Header,
    Hero
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manjari&display=swap');
</style>
