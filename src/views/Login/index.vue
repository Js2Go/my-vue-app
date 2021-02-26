<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <van-button type="primary" @click="count++">count is: {{ count }}</van-button>
  <van-button type="primary" @click="goHome">goHome</van-button>
</template>

<script lang="ts" setup="props">
import { useRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { defineProps, reactive, ref } from 'vue'

const state = reactive({
  color: 'red'
})

const count = ref(0)

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
button {
  color: v-bind('state.color');
}
</style>
