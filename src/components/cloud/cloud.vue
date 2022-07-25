<template>
  <div>
    <by-header class="header"></by-header>
    <h1>本源物联云</h1>
  </div>
</template>

<script>
import ByHeader from '../../view/ByHeader.vue'
export default {
    name:'cloud',
    components:{ByHeader},
}
</script>

<style scoped>
h1 {
    margin-top: 100px;
}
</style>