<template>
    <header>
        <div class="logo">IC</div>
        <nav class="nav-links">
            <ul class="nav-links__items">
                <li class="nav-links__item"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">About</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">For Users</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">For Influence</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">Marketplace</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">Crypto</NuxtLink></li>
                <li class="nav-links__item"><NuxtLink to="/">Contact</NuxtLink></li>
            </ul>
        </nav>
        <div class="login">
            <div class="button__container">
                <button class="btn btn-login">Login\SignUp</button>
            </div>
        </div>
    </header>
</template>
<script>
import './Header.scss'
export default {
    name: 'Header'
}
</script>