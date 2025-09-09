<template>
  <v-tooltip v-bind="$attrs">
    <template v-slot:activator="{ props }">
      <slot name="activator" :props="props" />
    </template>
  </v-tooltip>
</template>