<!-- eslint-disable unused-imports/no-unused-imports -->
<!-- Use this component to play with the main components -->
<script setup lang="ts">
import pdf14 from '@samples/issue126.pdf';
import { VuePDF, usePDF } from '@tato30/vue-pdf';

const { pdf } = usePDF(pdf14)
</script>

<template>
  <div>
    <VuePDF :pdf="pdf" annotation-layer />
  </div>
</template>
