<template>
  <b-container>
    <b-row>
      <b-col>
        <h5>Search WIL Opportunities</h5>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div>
          <b-form>
            <b-form-group id="search-term-label" label="Search terms" label-for="search-term">
              <b-form-input
                  id="search-term"
                  v-model="form.searchTerm"
                  placeholder="E.g audit, internship etc">
              </b-form-input>
            </b-form-group>

            <b-form-group id="relevant-majors-label" label="Relevant degree majors" label-for="relevant-majors">
              <b-form-select
                  id="relevant-majors"
                  v-model="form.relevantMajors"
                  :options="relevantMajors"
                  multiple :select-size="4">
              </b-form-select>
            </b-form-group>

            <b-form-group
                label="Listing Types"
                v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                  v-model="form.type"
                  :options="listingTypes"
                  :aria-describedby="ariaDescribedby"
                  name="listing-type"
                  stacked>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="danger">Apply Filters</b-button>
          </b-form>
        </div>
      </b-col>

      <b-col>
        <b-table striped hover :items="listings"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'StudentSearch',
  components: {},
  data() {
    return {
      form: {
        searchTerm: '',
        relevantMajors: [],
        listingTypes: [],
      },
      relevantMajors: [{
        text: 'Select One or more',
        value: null
      }, 'Accounting', 'Business', 'Computer Science', 'Psychology'],
      listingTypes: ['Projects', 'Internships', 'Work Experiences'],
      listings: [
        {
          description: 'Lorem ipsum dolor sit amet.',
          start_date: '01 Jan 2021',
          end_date: '01 Jan 2021',
          company: 'Test Company'
        }, {
          description: 'Lorem ipsum dolor sit amet.',
          start_date: '01 Jan 2021',
          end_date: '01 Jan 2021',
          company: 'Test Company'
        }, {
          description: 'Lorem ipsum dolor sit amet.',
          start_date: '01 Jan 2021',
          end_date: '01 Jan 2021',
          company: 'Test Company'
        }, {
          description: 'Lorem ipsum dolor sit amet.',
          start_date: '01 Jan 2021',
          end_date: '01 Jan 2021',
          company: 'Test Company'
        }, {
          description: 'Lorem ipsum dolor sit amet.',
          start_date: '01 Jan 2021',
          end_date: '01 Jan 2021',
          company: 'Test Company'
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>