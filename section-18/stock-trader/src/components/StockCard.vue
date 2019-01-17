<template>
  <div class="col-sm-4">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{stock.company}}</h6>

        <h6 class="mt-4">${{stock.price}} <span v-if="stock.quantity"> - quantity: {{stock.quantity}}</span></h6>

        <hr>
        <form>
          <div class="form-row">
            <div class="col-auto">
              <input type="number" class="form-control mb-2" v-model.number="quantity">
            </div>

            <div class="col-auto">
              <button
                type="submit"
                class="btn btn-primary mb-2"
                @click.prevent="order"
              >{{ action }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock', 'action'],

  data() {
    return {
      quantity: 1
    }
  },

  methods: {
    ...mapActions(['buy', 'sell']),

    order() {
      const { stock, quantity } = this;
      const method = this[this.action];

      method({ stock, quantity });
    }
  }
}
</script>
