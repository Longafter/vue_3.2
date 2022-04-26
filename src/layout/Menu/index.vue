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
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menusList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="`/${ele.path}`"
        v-for="ele in item.children"
        :key="ele.id"
        @click="saveCurPath(ele.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ ele.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import menu from '@/mock/menu.js'
import variables from '@/styles/variables.scss'
import { ref } from 'vue'

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

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
