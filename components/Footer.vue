<template>
    <footer class="footer" id="contact">
        <div class="footer__social">
            <div class="footer__social-media">
                <a class="footer__social-media-links" href="https://twitter.com/incosplay_inc">Twitter</a>
                <a class="footer__social-media-links" href="https://www.linkedin.com/company/78873033">LinkedIn</a>
                <a class="footer__social-media-links" href="https://angel.co/company/incosplay_inc">AngelList</a>
            </div>
            <div class="footer__policy">
                <NuxtLink to='/privacy' class="footer__policy-policy">Privacy Policy</NuxtLink>
                <NuxtLink to='/agreement' class="footer__policy-agreement">User Agreement</NuxtLink>
            </div>
            <div class="footer__copyright">
                <span class="footer__copyright-text">COPYRIGHT © 2022. INCOSPLAY INC ALL RIGHTS RESERVED</span>
                <span class="footer__copyright-address mobile-hidden">Incosplay Inc, 8 The Green, STE A, Dover, DE, USA 19901</span>
            </div>
        </div>
        <div class="fooer__copyright mobile">
            <span class="footer__copyright-text">COPYRIGHT © 2022. INCOSPLAY INC ALL RIGHTS RESERVED</span>
        </div>
        
       
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" >
@import './Footer.scss';
</style>