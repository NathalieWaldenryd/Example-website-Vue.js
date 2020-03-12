<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="sender-email">Email</label>
      <div class="control has-icons-left">
        <input
          id="sender-email"
          v-model="email"
          type="email"
          name="email"
          class="input"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="sender-message">Message</label>
      <textarea
        id="sender-message"
        v-model="message"
        rows="2"
        name="textarea"
        class="textarea"
        placeholder="Textarea"
      ></textarea>
    </div>
    <div class="field">
      <button
        :disabled="!isEmailValid || !message || message.length < 20"
        class="button is-link"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line
const isEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  computed: {
    isEmailValid() {
      return isEmailRegex.test(this.email)
    }
  },
  methods: {
    submitForm() {
      // validate form
      // submit form
      axios
        .post('/contact/', {
          email: this.email,
          message: this.message
        })
        .then(() => {
          alert(
            `Thanks for the message. We will reply to reply to ${this.email} as soon as possible.`
          )
        })
        .then(() => {
          this.email = ''
          this.message = ''
        })
        .catch(error => `There was a error ${error}`)
    }
  }
}
</script>
