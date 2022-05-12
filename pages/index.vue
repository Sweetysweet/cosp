<template>
<div class="container-fluid">
  <Header />
  <Hero />
  <Description />
  <Details />
  <Promote />
</div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Details from '@/components/Details'
import Promote from '@/components/Promote'
export default {
  name: 'IndexPage',
  components: {
    Header,
    Hero,
    Description,
    Details,
    Promote
  }
}
</script>
