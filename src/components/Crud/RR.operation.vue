<template>
  <span>
    <el-button
      class="filter-item"
      size="mini"
      type="success"
      :icon="EluIconSearch"
      @click="crud.toQuery"
    >搜索</el-button>
    <el-button
      v-if="crud.optShow.reset"
      class="filter-item"
      size="mini"
      type="warning"
      :icon="EluIconRefreshLeft"
      @click="crud.resetQuery()"
    >重置</el-button>
  </span>
</template>

<script>
import {
  Search as EluIconSearch,
  RefreshLeft as EluIconRefreshLeft,
} from '@element-plus/icons';
import { crud } from '@crud/crud';
export default {
  data() {
    return {
      EluIconSearch,
      EluIconRefreshLeft,
    };
  },
  mixins: [crud()],
  props: {
    itemClass: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
