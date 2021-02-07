<template>
  <b-container>
    <b-row>
      <b-col>
        <header class="mt-2">
          <h2>Mu2WIL Portal</h2>
        </header>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-form @submit="onSubmit">
            <b-form-group
                id="login-email-label"
                label="Email address:"
                label-for="login-email"
                description="For staff and students, please enter your Murdoch email. For companies, please enter the email used during registration.">
              <b-form-input
                  id="login-email"
                  v-model="form.email"
                  type="email"
                  placeholder="C00000000@murdoch.edu.au"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="login-password-label" label="Password:" label-for="login-password">
              <b-form-input
                  id="login-password"
                  v-model="form.password"
                  placeholder="Password"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox
                id="remember-me"
                v-model="form.remember"
                name="remember-me"
                value="true"
                unchecked-value="false">
              Remember me
            </b-form-checkbox>

            <b-button type="submit" variant="danger">Log In</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: null,
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
}
</script>
