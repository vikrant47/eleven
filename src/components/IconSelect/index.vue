<template>
  <div class="icon-body">
    <el-input
      v-model="name"
      style="position: relative"
      clearable
      placeholder="请输入图标名称"
      @clear="filterIcons"
      @input="filterIcons"
    >
      <el-icon class="el-input__icon"><elu-icon-search /></el-icon>
    </el-input>
    <div class="icon-list">
      <div
        v-for="(item, index) in iconList"
        :key="index"
        @click="selectedIcon(item)"
      >
        <svg-icon :icon-class="item" style="height: 30px; width: 16px" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Search as EluIconSearch } from '@element-plus/icons';
import icons from './requireIcons';
export default {
  name: 'IconSelect',
  components: {
    EluIconSearch,
  },
  data() {
    return {
      name: '',
      iconList: icons,
    };
  },
  methods: {
    filterIcons() {
      this.iconList = icons;
      if (this.name) {
        this.iconList = this.iconList.filter((item) => item.includes(this.name));
      }
    },
    selectedIcon(name) {
      this.$emit('selected', name);
      document.body.click();
    },
    reset() {
      this.name = '';
      this.iconList = icons;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.icon-body {
  width: 100%;
  padding: 10px;
  .icon-list {
    height: 200px;
    overflow-y: scroll;
    div {
      height: 30px;
      line-height: 30px;
      margin-bottom: -5px;
      cursor: pointer;
      width: 33%;
      float: left;
    }
    span {
      display: inline-block;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
}
</style>
