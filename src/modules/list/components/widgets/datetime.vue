<template>
  <div class="cell-wrapper">
    <el-icon><elu-icon-time /></el-icon>
    <span style="margin-left: 10px">{{ value | formatDate }}</span>
  </div>
</template>

<script>
import { Time as EluIconTime } from '@element-plus/icons';
import BaseWidget from '@/modules/list/components/widgets/base-widget';

export default {
  name: 'DateTime',
  components: {
    EluIconTime,
  },
  extends: BaseWidget,
};
</script>

<style scoped></style>
