<template>
  <div class="pagination-wrapper">
    <div class="pagination">
      <el-pagination
        background
        :page-size.sync="paginationModel.limit"
        :total="paginationModel.total"
        :current-page.sync="paginationModel.page"
        :page-sizes="paginationModel.pageSizes"
        style="margin-top: 8px"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="paginationModel.currentChange()"
        @current-change="paginationModel.sizeChange()"
      />
      <el-button
        class="pagination-refresh"
        size="large"
        :icon="EluIconRefresh"
        type="text"
        @click="$emit('refresh-click')"
      />
    </div>
  </div>
</template>

<script>
import { Refresh as EluIconRefresh } from '@element-plus/icons'; /*
import lang from 'element-plus/lib/locale/lang/en';
import locale from 'element-plus/lib/locale';*/
import { Pagination } from '@/modules/list/models/pagination';

export default {
  name: 'EnPagination',
  props: {
    paginationModel: {
      type: Pagination,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      EluIconRefresh,
    };
  },
};
</script>

<style>
.pagination-wrapper .pagination .pagination-refresh {
  padding-top: 15px;
}
.pagination-wrapper .pagination {
  float: right;
  display: flex;
}
</style>
