<template>
  <v-menu v-bind="$attrs">
    <template v-slot:activator="{ props }">
      <slot name="activator" :props="props">
        <!-- <AtomButton
          color="primary"
          v-bind="props"
          icon
          variant="text"
          density="compact"
          class="ml-2"
        >
          <SvgoArrowDown filled v-bind="props" class="dropdown-account" />
        </AtomButton> -->
      </slot>
    </template>
    <slot name="content">
      <!-- <v-list>
        <v-list-item
          v-for="(item, index) in itemsMenu"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </slot>
  </v-menu>
</template>