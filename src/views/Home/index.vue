<template>
  <ul>
    <li v-for="i in listData" :key="i.name">
      name: {{ i.name }} <br>
      sex: {{ i.sex }}
    </li>
  </ul>
  <van-button type="primary" @click="addNum">num is: {{ num }}</van-button>
  <van-button type="warning" @click="goLogin">goLogin</van-button>
</template>

<script lang="ts" setup="props">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getProfile } from '@/api/user'
import handleError from '@/util/catcher'

const state = reactive({
  color: '#ccc'
})

const router = useRouter()
const store = useStore()

const num = computed(() => store.state.num)
const listData = computed(() => store.state.listData)

const goLogin = () => {
  router.push('/login')
}

const addNum = () => {
  store.commit('addNum')
}

handleError(getProfile, { a: 1, b: 2 })
  .then(res => {
    store.dispatch('setData', res)
  })
</script>

<style scoped>
.button {
  color: v-bind('state.color');
}
</style>
