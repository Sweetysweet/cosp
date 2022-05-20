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
              <input
                type="text"
                class="contact__form-input-text contact__form-input-text--name"
                v-model="name"
                placeholder="name"
              />
              <span v-if="nameError" class="contact__form-error">{{ nameError }}</span>
            </div>
            <div class="contact__form-input">
              <input
                type="email"
                class="contact__form-input-text contact__form-input-text--email"
                placeholder="email"
                v-model="email"
              />
              <span v-if="emailError" class="contact__form-error"> {{ emailError }} </span>
            </div>
            <textarea
              cols="30"
              rows="10"
              class="contact__form-input-text contact__form-input-text--comment"
              v-model="message"
            ></textarea>
            <div class="contact__form-button">
              <button class="btn btn-send" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div class="contact__right contact_col">
        <div class="contact-image-handler">
          <img class="contact-image" src="/images/anime.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Contact",
  data: () => ({
    name: "",
    email: "",
    message: "",
    nameValid: false,
    emailValid: false,
    nameError: '',
    emailError: '',
  }),

  watch: {
    name() {
        if (this.name.length === 0) {
            this.nameValid = false
        } else {
            if (this.name.length > 0 && this.name.length < 20) {
                this.nameValid = true
                this.nameError = ''
            } else {
                this.nameValid = false
                this.nameError = 'Write your name'
            }
        }
    },
    email() {
      const regEmail =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (this.email.length === 0) {
        this.emailValid = false;
      } else {
        if (regEmail.test(this.email)) {
          if (this.email.length < 41) {
            this.emailError = "";
            this.emailValid = true;
          } else if (this.email.length > 40) {
            this.emailError = 'E-mail can be no longer than 40 characters'
            this.emailValid = false;
          }
        } else {
          this.emailError = 'Invalid email'
          this.emailValid = false;
        }
      }
    },
  },
  methods: {
    ...mapActions({
      sendtoEmail: "requestSendMessage",
    }),
    submitHandler() {
      if (this.emailValid && this.nameValid) {
        const contactData = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            this.sendtoEmail(contactData)
            this.name = ''
            this.email = ''
            this.message = ''
      } else {
        if (this.emailValid === false) {
            this.emailError = 'email enother error'
        }
        if (this.nameValid === false) {
            this.nameError = 'Write your name'
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "./Contact.scss";
</style>