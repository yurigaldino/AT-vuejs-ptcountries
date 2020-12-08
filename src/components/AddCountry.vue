<template>
  <!-- <b-form>
    <b-col>
      <b-row class="addcountry">
        <h2>Add new country ➕</h2>
      </b-row>
      <b-row class="addcountry">
        <label class="sr-only" for="inline-form-input-name">Nome</label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Yuri Galdino"
          v-model="name"
          required
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="Username"
            v-model="email"
            required
          ></b-form-input>
        </b-input-group>

        <b-button variant="success" @click="AddNewCountry()">Add</b-button>
      </b-row>
    </b-col>
  </b-form> -->
  <b-form>
    <h2>Add new country 🏳️</h2>
    <b-form-group
      id="input-group-1"
      label="Name of the country:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="name"
        type="text"
        required
        placeholder="Insert country name"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Capital:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="capital"
        required
        placeholder="Insert capital"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Region:" label-for="input-3">
      <b-form-select
        id="input-3"
        v-model="subregion"
        :options="subregions"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-4" label="Currency:" label-for="input-2">
      <b-form-input
        id="input-4"
        v-model="currency"
        required
        placeholder="Example: BRL (Brazilian Real), USD (United States Dolar)"
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
        v-model="iso"
        type="text"
        required
        placeholder="Example: BR (Brazil), US (United States)"
      ></b-form-input>
    </b-form-group>
    <b-button variant="success" @click="AddNewCountry()">Add ✔️</b-button>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddCountry",
  data() {
    return {
      name: "",
      capital: "",
      iso: "",
      subregion: "",
      population: "",
      area: "",
      currency: "",
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
    ...mapActions(["addCountry"]),
    AddNewCountry() {
      console.log(`${this.name} e ${this.capital} rolando`);
      let country = {
        name: this.name,
        topLevelDomain: [".br"],
        alpha2Code: this.subregion,
        alpha3Code: "C" + this.iso,
        callingCodes: ["55"],
        capital: this.capital,
        altSpellings: [
          this.iso,
          "Brasil",
          this.name,
          "República Federativa do Brasil"
        ],
        region: "Americas",
        subregion: this.subregion,
        population: Math.floor(Math.random() * 10000000) + 100000,
        latlng: [-10 - 55],
        demonym: "Brazilian",
        area: Math.floor(Math.random() * 1000000) + 10000,
        gini: 54.7,
        timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
        borders: [
          "ARG",
          "BOL",
          "COL",
          "GUF",
          "GUY",
          "PRY",
          "PER",
          "SUR",
          "URY",
          "VEN"
        ],
        nativeName: "Brasil",
        numericCode: "076",
        currencies: [this.currency],
        languages: ["pt"],
        translations: {
          de: "Brasilien",
          es: "Brasil",
          fr: "Brésil",
          ja: "ブラジル",
          it: "Brasile"
        },
        relevance: "2"
      };
      this.addCountry(country);
      alert("País adicionado com sucesso!");
    }
  }
};
</script>

<style>
.row.adduser1 {
  place-content: center;
}

form {
  margin: 0 auto;
  width: 50%;
  margin-bottom: 30px;
}

label#input-group-1__BV_label_,
label#input-group-2__BV_label_,
label#input-group-3__BV_label_,
label#input-group-4__BV_label_,
label#input-group-5__BV_label_,
label#input-group-6__BV_label_,
label#input-group-7__BV_label_,
small#input-group-5__BV_description_ {
  text-align: start;
}
</style>
