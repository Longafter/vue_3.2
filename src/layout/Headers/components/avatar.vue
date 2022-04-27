<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">{{
          $t('login.logoutBtnTitle')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const squareUrl = ref(
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.0cAzorerm57o_XvQni4-2wHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7'
)

const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss" scoped></style>
