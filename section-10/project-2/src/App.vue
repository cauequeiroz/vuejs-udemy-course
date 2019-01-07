<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <quotes-counter></quotes-counter>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6">
        <quotes-edit></quotes-edit>
      </div>
      <div class="col-sm-12 col-md-6">
        <quotes-list
          :quotes="quotes"
          @remove="remove"></quotes-list>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesCounterVue from "./components/QuotesCounter.vue";
import QuotesEditVue from './components/QuotesEdit.vue';
import QuotesListVue from './components/QuotesList.vue';

export default {
  components: {
    "quotes-counter": QuotesCounterVue,
    "quotes-edit": QuotesEditVue,
    "quotes-list": QuotesListVue
  },

  data() {
    return {
      quotes: [
        { id: 1, text: 'Cras justo odio' },
        { id: 2, text: 'Dapibus ac facilisis in' },
        { id: 3, text: 'Morbi leo risus' },
        { id: 4, text: 'Porta ac consectetur ac' }
      ]
    }
  },

  methods: {
    remove(id) {
      this.quotes = this.quotes.filter(i => i.id !== id);
    }
  }
};
</script>

<style>
</style>
