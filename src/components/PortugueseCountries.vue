<template>
  <div class="listadeusuarios">
    <b-row class="list">
      <h1>List of countries that speaks portuguese 🗣</h1>
      <b-col>
        <b-badge v-if="getCountries.length > 5" href="#" variant="success"
          >This list has <strong>{{ getCountries.length }}</strong> country(ies)
          that speak(s) portuguese</b-badge
        >
        <b-badge
          v-if="getCountries.length > 3 && getCountries.length <= 5"
          href="#"
          variant="warning"
          >This list has <strong>{{ getCountries.length }}</strong> country(ies)
          that speak(s) portuguese</b-badge
        >

        <b-badge
          v-if="getCountries.length > 0 && getCountries.length <= 3"
          href="#"
          variant="danger"
          >This list has <strong>{{ getCountries.length }}</strong> country(ies)
          that speak(s) portuguese</b-badge
        >

        <b-badge v-if="getCountries.length == 0" href="#" variant="dark"
          >This list is <strong>empty</strong></b-badge
        >
      </b-col>
      <br />
      <b-row>
        <b-card-group deck>
          <b-card
            v-for="country in getCountries"
            :key="country.alpha2Code"
            style="min-width: 16rem; max-width: 16rem; font-weight=800"
            border-variant="secondary"
            :header="country.name.toUpperCase()"
            header-bg-variant="secondary"
            header-text-variant="white"
            align="center"
          >
            <!-- <b-card-text
              ><em>{{ country.alpha3Code }}</em></b-card-text
            > -->
            <b-card-text>
              <img
                v-bind:src="
                  'https://www.countryflags.io/' +
                    country.altSpellings[0].toLowerCase() +
                    '/flat/64.png'
                "
                class="img-radius"
                alt="Country-Profile-Image"
              />
            </b-card-text>
            <router-link
              :to="{
                name: 'DetailCountry',
                params: { id: country.alpha2Code, ptcountry: country }
              }"
            >
              <b-card-text>More details</b-card-text>
              <br />
            </router-link>
            <b-card-text>
              <b-button-group>
                <b-button
                  variant="danger"
                  @click="deleteCountry(country.alpha2Code)"
                  style="opacity:0.8"
                >
                  <b-icon icon="trash-fill"></b-icon>
                </b-button>
                <router-link
                  :to="{
                    name: 'EditCountry',
                    params: { id: country.alpha2Code, ptcountry: country }
                  }"
                >
                  <b-button variant="outline-primary">
                    <b-icon icon="pencil-fill"></b-icon> Edit
                  </b-button>
                  <br />
                </router-link> </b-button-group
            ></b-card-text>
          </b-card>
        </b-card-group>
      </b-row>
    </b-row>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Country",
  computed: mapGetters(["getCountries"]),
  methods: {
    ...mapActions(["getPortugueseCountries", "deleteCountry"])
  },
  created() {
    this.getPortugueseCountries();
  }
};
</script>

<style>
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
  color: #36976c;
}

.row {
  margin: 0 auto;
  justify-content: center;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
}

.card.text-center.border-secondary {
  margin: 1%;
}

.row.list {
  display: block;
}

.card-header.bg-secondary.text-white {
  font-weight: 700;
}
</style>
