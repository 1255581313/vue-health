<template>
  <div class="page"><mod0 /><mod1 /><mod2 /><mod3 /></div>
</template>
<script>

  import mod0 from './components/mod0';
import mod1 from './components/mod1';
import mod2 from './components/mod2';
import mod3 from './components/mod3';

    export default {
      components: {
        mod0,
mod1,
mod2,
mod3
      },
      data() {
        return {
          constants: {}
        }
      },
      methods: {

      },

    }
</script>

<style src="./App.css" />
;
