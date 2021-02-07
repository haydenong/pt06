<template>
  <b-container>
    <b-row>
      <b-col>
        <h4 class="mt-4">Create a new listing</h4>
        <b-form>
          <b-form-group id="title-label" label="Title" label-for="title">
            <b-form-input
                id="title"
                v-model="form.title"
                placeholder="E.g. Audit Internship"
                required></b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <label for="start-date">Position Start Date</label>
              <b-form-datepicker id="start-date" placeholder="Choose a date" locale="en" today-button
                                 reset-button
                                 close-button
                                 v-model="form.startDate"></b-form-datepicker>
            </b-col>
            <b-col>
              <label for="end-date">Position End Date</label>
              <b-form-datepicker id="end-date" placeholder="Choose a date" locale="en" today-button
                                 reset-button
                                 close-button
                                 v-model="form.endDate"></b-form-datepicker>
            </b-col>
          </b-row>
          <b-form-group label="Listing Type" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
                id="listing-type"
                v-model="form.type"
                :options="listingOptions"
                :aria-describedby="ariaDescribedby"
                name="listing-type"></b-form-radio-group>
          </b-form-group>
          <b-form-group
              label="Description"
              label-for="description"
          >
            <b-form-textarea
                id="description"
                v-model="form.description"
                placeholder="Enter something..."
                rows="10"></b-form-textarea>
          </b-form-group>

          <b-form-file
              v-model="form.file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3 mb-3">Selected file: {{ form.file ? form.file.name : '' }}</div>

          <b-button type="submit" variant="danger">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CreateListing',
  component: {},
  data() {
    return {
      form: {
        title: '',
        type: '',
        startDate: null,
        endDate: null,
        description: '',
        file: null,
      },
      listingOptions: ['Project', 'Internship', 'Work Experience'],
    }
  }
}

</script>

<style>

</style>