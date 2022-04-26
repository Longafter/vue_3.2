<template>
  <el-menu
    :active-text-color="variables.menuActiveText"
    :background-color="variables.menuBg"
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    text-color="#fff"
    router
    unique-opened
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="`/${ele.path}`"
        v-for="ele in item.children"
        :key="ele.id"
        @click="saveCurPath(ele.path)"
        >{{ ele.authName }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import menu from '@/mock/menu.js'
import variables from '@/styles/variables.scss'
import { ref } from 'vue'

const menusList = ref([])
const initMenusList = () => {
  menusList.value = menu
}
initMenusList()

const defaultActive = ref(sessionStorage.getItem('curPath') || '/users')
const saveCurPath = (path) => {
  sessionStorage.setItem('curPath', `/${path}`)
}
</script>

<style lang='scss' scoped></style>
