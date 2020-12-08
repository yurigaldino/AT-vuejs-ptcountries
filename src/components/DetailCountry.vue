<template>
  <div class="detailcountry">
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <h2>
          More details about <strong>{{ country.name }}</strong>
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
  </div>
</template>

<script>
export default {
  name: "DetailCountry",
  props: {},
  data() {
    return {
      linksrc: "https://www.countryflags.io/br/flat/64.png",
      country: this.$route.params.ptcountry
    };
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
  background: linear-gradient(to right, #34495e, #41b883);
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
