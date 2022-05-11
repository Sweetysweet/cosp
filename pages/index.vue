<template>
<div class="container-fluid">
  <Header />
  <Hero />
  <Description />
  <Details />
</div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Details from '@/components/Details'
export default {
  name: 'IndexPage',
  components: {
    Header,
    Hero,
    Description,
    Details
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manjari&display=swap');
</style>
