<template>
<div class="container-fluid">
  <Header />
  <Hero />
  <Description />
  <Details />
  <Promote />
  <Synchron />
  <Contact />
  <Footer />
</div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Details from '@/components/Details'
import Promote from '@/components/Promote'
import Synchron from '@/components/Synchron'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  name: 'IndexPage',
  components: {
    Header,
    Hero,
    Description,
    Details,
    Promote,
    Synchron,
    Contact,
    Footer
  }
}
</script>
