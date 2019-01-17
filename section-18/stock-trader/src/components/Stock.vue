<template>
  <div>
    <h1>Stock</h1>

    <div class="row">
      <stock-card
        v-for="stock in $store.state.stocks"
        :key="stock.name"
        :stock="stock"
        action="buy"
      ></stock-card>
    </div>

  </div>
</template>

<script>
import StockCard from './StockCard.vue'

export default {
  components: {
    StockCard
  }
}
</script>
