<template>
  <div class="hello">
    <h1>Contact information</h1>
    <form v-on:submit.prevent="Submit">
      <label>First name</label>
      <input type="text" v-model="form.first_name">
      <span v-if="errors.first_name != undefined">{{errors.first_name.join(', ')}}</span>
      <br>
      <label>Last name</label>
      <input type="text" v-model="form.last_name">
      <span v-if="errors.last_name != undefined">{{errors.last_name.join(', ')}}</span>
      <br>
      <label>Phone number</label>
      <select v-model="form.dial_code">
        <option v-for="code in country_codes" :key="code">{{code}}</option>
        <span v-if="errors.dial_code != undefined">{{errors.dial_code.join(', ')}}</span>
      </select>
      <input type="text" v-model="form.phone_number">
      <span v-if="errors.phone_number != undefined">{{errors.phone_number.join(', ')}}</span>
      <br>
      <label>BoB</label>
      <input type="text" v-model="form.dob">
      <span v-if="errors.dob != undefined">{{errors.dob.join(', ')}}</span>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>

import axios from "axios";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        dial_code: '+1',
        phone_number: '',
        dob: ''
      },
      errors: {},
      country_codes: ["+ 345", "+1", "+1 242", "+1 246", "+1 264", "+1 284", "+1 340", "+1 441", "+1 473", "+1 649", "+1 670", "+1 671", "+1 684", "+1 758", "+1 767", "+1 784", "+1 849", "+1 868", "+1 869", "+1 876", "+1 939", "+1268", "+1664", "+20", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+27", "+290", "+291", "+297", "+298", "+299", "+30", "+31", "+32", "+33", "+34", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+36", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+379", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+39", "+40", "+41", "+420", "+421", "+423", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+590", "+591", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+7", "+7 7", "+81", "+82", "+84", "+850", "+852", "+853", "+855", "+856", "+86", "+872", "+880", "+886", "+90", "+91", "+92", "+93", "+94", "+95", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+98", "+992", "+993", "+994", "+995", "+996", "+998"]
    }
  },
  beforeMount() {
    this.$store.dispatch('updateCurrentUser')
  },
  computed: mapState(['user']),
  methods: {
    Submit() {
      axios.post('http://localhost:3000/api/v1/contact_informations.json',
          this.form,
          { headers: {'X-User-Token': localStorage.getItem('authentication_token'),
                            'X-User-Email': localStorage.getItem('email'),
                            'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push({name: 'PhoneConfirmation'})
          }).catch(error => (
              console.log('hhhhhhhhhhhhhhh'),
              console.log(error.response.data),
            this.errors = error.response.data
          ))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
