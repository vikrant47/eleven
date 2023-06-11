<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <el-icon><elu-icon-s-fold /></el-icon>
  </div>
</template>

<script>
import { SFold as EluIconSFold } from '@element-plus/icons';
export default {
  name: 'Hamburger',
  components: {
    EluIconSFold,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick');
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
