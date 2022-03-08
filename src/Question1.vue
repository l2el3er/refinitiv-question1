<template>
  <div class="container">
    <div class="column-1">
      <input type="number" v-model="number" />
    </div>
    <div class="column-2">
      <select v-model="calculation">
        <option v-for="item in calculationOptions" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="column-3">{{ answer }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      calculation: "isPrime",
      calculationOptions: ["isPrime", "isFibonacci"],
    };
  },
  watch: {
    number(next) {
      if (next !== "") {
        this.number = Math.abs(parseInt(next));
      }
    },
  },
  computed: {
    answer() {
      switch (this.calculation) {
        case "isPrime":
          return this.isPrime();
        case "isFibonacci":
          return this.isFibonacci();
        default:
          return "";
      }
    },
  },
  methods: {
    isPrime() {
      if (this.number <= 1) return false;
      for (let runner = 2; runner <= this.number - 1; runner++) {
        if (this.number % runner == 0) {
          return false;
        }
      }
      return true;
    },
    isFibonacci() {
      if (this.number === 0 || this.number === 1) return true;
      let n1 = 0;
      let n2 = 1;
      let next = n1 + n2;

      while (next <= this.number) {
        if (next == this.number) {
          return true;
        }

        n1 = n2;
        n2 = next;
        next = n1 + n2;
      }
      return false;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.container {
  display: flex;
}
.column-1 {
  flex: 0 0 200px;
}
.column-2 {
  flex: auto;
  min-width: 100px;
}
.column-3 {
  flex: 0 0 300px;
}
</style>
