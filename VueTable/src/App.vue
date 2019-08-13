<template>
  <div id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <search-field></search-field>
      <sort-field></sort-field>
      <show-table></show-table>
      <add-field></add-field>
    </div>
  </div>
</template>

<script>

import Add from './add'
import Show from './show'
import Sorts from './sorts'
import Search from  './Search'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Таблица товаров'
    }
  },
  components:{
      showTable: Show,
      addField: Add,
      sortField: Sorts,
      searchField: Search
  }
}
</script>

<style>

</style>
