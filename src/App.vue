<template>
  <v-app>
    <core-app-bar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
import CoreFooter from '@/components/core/Footer';
import CoreAppBar from '@/components/core/AppBar';
import CoreView from '@/components/core/View';

export default {
    components: {
      CoreFooter,
      CoreAppBar,
      CoreView,
    },
};
</script>
