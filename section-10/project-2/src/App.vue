<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <quotes-counter :number="quotes.length"></quotes-counter>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6">
        <quotes-edit @add="add"></quotes-edit>
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
        { id: 4, text: 'Porta ac consectetur ac' },
        { id: 5, text: 'Porta ac consectetur ac' },
        { id: 6, text: 'Porta ac consectetur ac' },
        { id: 7, text: 'Porta ac consectetur ac' },
      ],
      lastId: 7
    }
  },

  methods: {
    remove(id) {
      this.quotes = this.quotes.filter(i => i.id !== id);
    },

    add(text) {
      if (this.quotes.length == 10) {
        alert('Only 10 quotes per user, sorry.');
        return;
      }

      this.quotes.push({ id: ++this.lastId, text });
    }
  }
};
</script>

<style>
</style>
