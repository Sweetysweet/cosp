<template>
<div class="container-fluid">
  <Header />
  <Hero />
  <Description />
</div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
export default {
  name: 'IndexPage',
  components: {
    Header,
    Hero,
    Description
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manjari&display=swap');
</style>
