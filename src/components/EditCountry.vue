<template>
  <div class="editcountry">
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <h2>
          Edit details about <strong>{{ country.name }}</strong>
        </h2>
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card country-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green country-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img
                        width="90px"
                        height="90px"
                        v-bind:src="
                          'https://www.countryflags.io/' +
                            country.altSpellings[0].toLowerCase() +
                            '/flat/64.png'
                        "
                        class="img-radius"
                        alt="Country-Profile-Image"
                      />
                    </div>
                    <h6 class="f-w-600">{{ country.altSpellings[2] }}</h6>
                    <p>
                      <em>{{ country.subregion }}</em>
                    </p>
                    <i
                      class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                    ></i>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Main information
                    </h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Capital</p>
                        <h6 class="text-muted f-w-400">
                          {{ country.capital }}
                        </h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Currency</p>
                        <h6 class="text-muted f-w-400">
                          {{ country.currencies[0] }}
                        </h6>
                      </div>
                    </div>
                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Numbers
                    </h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Area</p>
                        <h6 class="text-muted f-w-400">
                          {{ country.area }} km²
                        </h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Population</p>
                        <h6 class="text-muted f-w-400">
                          {{ country.population }}
                        </h6>
                      </div>
                    </div>
                    <ul class="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="facebook"
                          data-abc="true"
                          ><i
                            class="mdi mdi-facebook feather icon-facebook facebook"
                            aria-hidden="true"
                          ></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="twitter"
                          data-abc="true"
                          ><i
                            class="mdi mdi-twitter feather icon-twitter twitter"
                            aria-hidden="true"
                          ></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="instagram"
                          data-abc="true"
                          ><i
                            class="mdi mdi-instagram feather icon-instagram instagram"
                            aria-hidden="true"
                          ></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-form>
      <h2>Edit country ✎</h2>
      <b-form-group
        id="input-group-1"
        label="Name of the country:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="country.name"
          type="text"
          required
          placeholder="Insert country name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Capital:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="country.capital"
          required
          placeholder="Insert capital"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Region:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="country.subregion"
          :options="subregions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Currency:" label-for="input-2">
        <b-form-input
          id="input-4"
          v-model="country.currencies[0]"
          type="text"
          required
          placeholder="Example: BRL (Brazilian Real), USD (United States Dolar)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Area:" label-for="input-2">
        <b-form-input
          id="input-6"
          v-model="country.area"
          type="number"
          required
          placeholder="Insert country Area(km²)"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Population:" label-for="input-2">
        <b-form-input
          id="input-7"
          v-model="country.population"
          type="number"
          required
          placeholder="Insert country number population"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="ISO 3166 Country Code:"
        label-for="input-1"
        description="💡 The ISO 3166 Country Code is the standard code for the representation of names of countries and their subdivisions. We use this information to know which flag to use in the country card."
      >
        <b-form-input
          id="input-5"
          v-model="country.altSpellings[0]"
          type="text"
          required
          placeholder="Example: BR (Brazil), US (United States)"
        ></b-form-input>
      </b-form-group>
      <router-link
        :to="{
          name: 'PortugueseCountries'
        }"
      >
        <b-button variant="success" @click="FakeSubmit()"
          >Fake update ✎</b-button
        >
        <br />
      </router-link>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "EditCountry",
  props: {},
  data() {
    return {
      linksrc: "https://www.countryflags.io/br/flat/64.png",
      country: this.$route.params.ptcountry,
      subregions: [
        { text: "Select One", value: null },
        "South America",
        "North America",
        "Oceania",
        "Europe",
        "Asia",
        "Africa"
      ]
    };
  },
  methods: {
    FakeSubmit() {
      window.alert(
        `Save changes and back to list page? 
        Name of the country: ${this.country.name}
        Capital: ${this.country.capital}
        Region: ${this.country.subregion}
        Currency: ${this.country.currencies[0]}
        Area: ${this.country.area}
        Population: ${this.country.population}
        ISO 3166 Country Code: ${this.country.altSpellings[0]}`
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  background-color: #f9f9fa;
}

/* .padding {
  padding: 3rem !important;
} */

.country-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.country-card-full .country-profile {
  border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f29263),
    to(#ee5a6f)
  );
  background: linear-gradient(to right, #535353, #bdbdbd);
}

.country-profile {
  padding: 20px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 0%;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #919aa3 !important;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 600;
}

.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

.country-card-full .social-link li {
  display: inline-block;
}

.country-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.row.container.d-flex.justify-content-center {
  margin: auto;
}
</style>
