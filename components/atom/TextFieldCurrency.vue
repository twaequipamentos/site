<template>
  <IonTextfield
    v-model="formattedValue"
    @input="formatCurrency"
    @keydown="onlyNumbers"
    variant="outlined"
    density="comfortable"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :rules="rules"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'R$ 0,00',
  },
  rules: {
    type: Array,
    required: () => ([]),
  },
});

const rawValue = defineModel(); // Valor sem formatação

onMounted(() => {
  rawValue.value = rawValue.value
})

const formattedValue = computed({
  get() {
    return formatToCurrency(rawValue.value);
  },
  set(value) {
    rawValue.value = value.replace(/\D/g, ''); // Armazena apenas dígitos
  },
});

const formatCurrency = () => {
  rawValue.value = rawValue.value.replace(/\D/g, ''); // Remove não dígitos
};

const formatToCurrency = (value: string) => {
  if (!value) return '';
  const numericValue = (parseInt(value, 10) / 100).toFixed(2);
  const formatted = numericValue.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return `R$${formatted}`;
};

const onlyNumbers = (event: KeyboardEvent) => {
  const key = event.key;
  // Permite: backspace, tab, enter, esc, e números
  if (!/^[0-9]$/.test(key) && !['Backspace', 'Tab', 'Enter', 'Escape'].includes(key)) {
    event.preventDefault(); // Previne a entrada de caracteres não permitidos
  }
};
</script>