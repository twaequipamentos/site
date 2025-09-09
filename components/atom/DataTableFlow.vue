<template>
  <IonDataTable :headers="headers" :items="items">
    <template v-slot:column-name="{ column }">
      <span class="custom-header">{{ column.text }}</span>
    </template>
    
    <template v-slot:item="{ item }">
      <tr class="text-grey300">
        <td>{{ item.description }}</td>
        <td>
          <div v-if="originIsBankAccount(item)">
            {{ $t(item.bank_account.name) }}
          </div>
          <div v-else>
            {{  item.card?.name }}
          </div>
        </td>
        <td>
          <div class="d-flex align-center">
            <div class="mr-2" :style="`background-color: ${item.category?.color}; border-radius: 100%; width: 10px; height: 10px;`">
            </div>
            <div>
              {{ item.category?.name }}
            </div>
          </div>
        </td>
        <td>
          {{ $t(item.origin) }}
        </td>
        <td>
          <div class="d-flex align-center">
           <div class="mr-2">{{ formatDateDefault(item.due_date) }}</div>
            <AtomTooltip v-if="item.delayed" :text="$t('delayed')" location="top">
              <template v-slot:activator="{ props }">
                <AtomIcon name="Warning" v-bind="props" class="!w-4 !h-4 text-red-500 mt-[2px]"></AtomIcon>
              </template>
            </AtomTooltip>
          </div>
        </td>
        <td>{{ formatCurrency(item.amount) }}</td>
        <td v-if="!noAction" class="text-end">
          <AtomTooltip v-if="!item.concluded" :text="$t('markAsPaid')" location="top">
            <template v-slot:activator="{ props }">
              <AtomButton icon variant="text" v-bind="props" density="compact" @click="showModalConfirmPayment(item)"> 
                <AtomIcon name="Like" class="text-red-500"></AtomIcon>
              </AtomButton>
            </template>
          </AtomTooltip>
          <AtomTooltip v-else :text="$t('markAsUnpaid')" location="top">
            <template v-slot:activator="{ props }">
              <AtomButton icon variant="text" v-bind="props" density="compact" @click="showModalConfirmPayment(item)"> 
                <AtomIcon name="LikeFilled" class="text-green-500"></AtomIcon>
              </AtomButton>
            </template>
          </AtomTooltip>
          <AtomTooltip :text="$t('edit')" location="top">
            <template v-slot:activator="{ props }">
              <AtomButton icon variant="text" v-bind="props" density="compact" @click="showModalEdit(item)"> 
                <AtomIcon name="Edit" class="text-grey300" />
              </AtomButton>
            </template>
          </AtomTooltip>
          <AtomTooltip :text="$t('delete')" location="top">
            <template v-slot:activator="{ props }">
              <AtomButton icon variant="text" v-bind="props" density="compact" @click="showModalDelete(item)"> 
                <AtomIcon name="Trash" class="text-grey300" />
              </AtomButton>
            </template>
          </AtomTooltip>
        </td>
      </tr>
    </template>
  </IonDataTable>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { formatDateDefault } from '~/composables/date';
	const props = defineProps({
		items: {
			type: Array,
			required: false,
			default: () => ([])
		},
		headers: {
			type: Array,
			required: false,
			default: () => ([])
		},
		noAction: {
			type: Boolean,
			required: false,
			default: false
		},
		loading: {
			type: Boolean,
			required: false,
			default: false
		},
	})

  const emit = defineEmits(["showModalEdit", "showModalDelete", "showModalConfirmPayment"]);
  
  const originIsBankAccount = (item: any) => {
		return item.bank_account
	}

  const showModalConfirmPayment = (item: any) => {
    emit('showModalConfirmPayment', item)
  }

  const showModalEdit = (item: any) => {
    emit('showModalEdit', item)
  }

  const showModalDelete = (item: any) => {
    emit('showModalDelete', item)
  }
  // const headers =  [
  //       { title: 'Name', key: 'name' },
  //       { title: 'Email', key: 'email' },
  //       // Outros headers
  //     ]
  // const items =  [
  //       { name: 'John Doe', email: 'john.doe@example.com' },
  //       { name: 'Jane Smith', email: 'jane.smith@example.com' },
  //       // Outros items
  //     ]
</script>