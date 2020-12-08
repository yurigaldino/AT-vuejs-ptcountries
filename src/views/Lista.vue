<template>
  <div class="lista">
    <PortugueseCountries />
    <AddCountry />
    <!-- {{ allUsers }} -->
  </div>
</template>

<script>
// @ is an alias to /src
import PortugueseCountries from "@/components/PortugueseCountries.vue";
import AddCountry from "@/components/AddCountry.vue";

export default {
  name: "Lista",
  components: {
    AddCountry,
    PortugueseCountries
  }
};
</script>
