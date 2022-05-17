<template>
    <section class="contact__container">
        <div class="contact__title">
            <span class="contact__title-text">incosplay</span>
        </div>
        <div class="contact__row contact__row-block">
            <div class="contact__left contact_col">
                <div class="contact__form-group">
                    <span class="contact__form-title">Write Us:</span>
                    <form class="contact__form" @submit.prevent="submitHandler()">
                        <div class="contact__form-input">
                            <input type="text" class="contact__form-input-text contact__form-input-text--name" v-model="contact.name">
                        </div>
                        <div class="contact__form-input">

                            <input type="text" class="contact__form-input-text contact__form-input-text--email" v-model="contact.email">
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="contact__form-input-text contact__form-input-text--comment" v-model="contact.message"></textarea>
                        <div class="contact__form-button">
                            <button class="btn btn-send" type="submit">Send</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="contact__right contact_col">
                <div class="contact-image-handler">
                    <img class="contact-image" src="/images/anime.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'Contact',
    data: () => ({
        contact: {
            name: '',
            email: '',
            message: ''
        }
    }),
    methods: {
       ...mapActions({
            sendtoEmail: 'requestSendMessage'
        }),
        submitHandler() {
            const contactData = {
                name: this.contact.name,
                email: this.contact.email,
                message: this.contact.message
            }
            this.sendtoEmail(contactData)
            for (let key in this.contact) {
                this.contact[key] = ''
            }
        }
    }
}
</script>
<style lang="scss">
@import "./Contact.scss";
</style>