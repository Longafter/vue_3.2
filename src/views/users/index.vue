<template>
  <el-card>
    <!-- 搜索栏 -->
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUserList">{{
        $t('table.search')
      }}</el-button>
      <el-button type="primary" :icon="Plus" @click="handleDialogValue()">{{
        $t('table.adduser')
      }}</el-button>
    </el-row>
    <!-- users数据 -->
    <el-table
      ref="tableRef"
      :data="tableData"
      stripe
      :height="tableHeight"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in options"
        :key="item.id"
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        :width="item.width"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="changeState(row)" />
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          {{ $filters.filterTimes(row.create_time) }}
        </template>
        <template #default="{ row }" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleDialogValue(row)"
          ></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button type="danger" size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      v-model:currentPage="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      background
      samll
      :page-sizes="[2, 5, 10, 15]"
      layout="prev, pager, next"
      :total="total"
      :hide-on-single-page="paginationHide"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <!-- 弹窗 -->
    <Dialog
      v-if="dialogVisible"
      v-model="dialogVisible"
      :dialogTitle="dialogTitle"
      :dialogTableValue="dialogTableValue"
      @initUserList="initGetUserList"
    />
  </el-card>
</template>

<script setup>
import { Search, Plus, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'
import { getUser, changeUserState } from '@/api/users'
import { options } from './options'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/dialog.vue'
import { isNull } from '@/utils/filters'

const i18n = useI18n()

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
const tableData = ref([])
const total = ref(0)
const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTableValue = ref({})
const tableHeight = ref(500)
const paginationHide = computed(() => {
  return total.value - queryForm.value.pagenum * queryForm.value.pagesize < 0
})

// 初始化用户列表
const initGetUserList = async () => {
  const res = await getUser(queryForm.value)
  tableData.value = res.users
  total.value = res.total
}
initGetUserList()

// 状态改变
const changeState = async (info) => {
  await changeUserState(info.id, info.mg_state)
  ElMessage.success(i18n.t('message.updateSuccess'))
}

// 弹窗显示隐藏
const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加用户'
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = '编辑用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagenum = pageSize
}
const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initGetUserList()
}
</script>

<style lang="scss" scoped>
.el-card {
  height: 100%;
  position: relative;
  .el-card__body {
    // height: 100%;
    .header {
      padding-bottom: 16px;
      box-sizing: border-box;
    }
    .el-pagination {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 10px;
    }
  }
}
</style>
