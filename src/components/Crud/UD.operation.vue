<template>
  <div>
    <el-button
      v-permission="permission.edit"
      :loading="crud.status.cu === 2"
      :disabled="disabledEdit"
      size="mini"
      type="primary"
      :icon="EluIconEdit"
      @click="crud.toEdit(data)"
    />
    <el-popover
      v-model="pop"
      v-permission="permission.del"
      placement="top"
      width="180"
      trigger="manual"
      @show="onPopoverShow"
      @hide="onPopoverHide"
    >
      <p>{{ msg }}</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="doCancel">取消</el-button>
        <el-button
          :loading="crud.dataStatus[crud.getDataId(data)].delete === 2"
          type="primary"
          size="mini"
          @click="crud.doDelete(data)"
        >确定</el-button>
      </div>
      <el-button
        slot="reference"
        :disabled="disabledDle"
        type="danger"
        :icon="EluIconDelete"
        size="mini"
        @click="toDelete"
      />
    </el-popover>
  </div>
</template>

<script>
import { Edit as EluIconEdit, Delete as EluIconDelete } from '@element-plus/icons';
import CRUD, { crud } from '@crud/crud';
export default {
  data() {
    return {
      pop: false,
      EluIconEdit,
      EluIconDelete,
    };
  },
  mixins: [crud()],
  props: {
    data: {
      type: Object,
      required: true,
    },
    permission: {
      type: Object,
      required: true,
    },
    disabledEdit: {
      type: Boolean,
      default: false,
    },
    disabledDle: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: '确定删除本条数据吗？',
    },
  },
  methods: {
    doCancel() {
      this.pop = false;
      this.crud.cancelDelete(this.data);
    },
    toDelete() {
      this.pop = true;
    },
    [CRUD.HOOK.afterDelete](crud, data) {
      if (data === this.data) {
        this.pop = false;
      }
    },
    onPopoverShow() {
      setTimeout(() => {
        document.addEventListener('click', this.handleDocumentClick);
      }, 0);
    },
    onPopoverHide() {
      document.removeEventListener('click', this.handleDocumentClick);
    },
    handleDocumentClick(event) {
      this.pop = false;
    },
  },
};
</script>
