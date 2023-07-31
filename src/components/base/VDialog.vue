<template>
    <div id="dialog-overlay">
      <div class="dialog-container">
        <div class="dialog-header">
          <div class="dialog-title">Thông báo</div>
          <button class="icon small-exit-icon" @click="closeDialog"></button>
        </div>
        <div class="dialog-content row align-center gap-16">
          <div class="icon" :class="statusIcon"></div>
          <div>{{ description }}</div>
        </div>
        <div class="dialog-footer">
          <VButton class="btn--primary" text="Đồng ý" @onclick="closeDialog" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "VDialog",
    props: ["description", "status"],
    emits: ["close-dialog"],
    created() {
      this.statusIcon = this.status + "-icon";
    },
  
    data() {
      return {
        statusIcon: "",
      };
    },
    methods: {
      closeDialog() {
        this.$emit("close-dialog");
      },
    },
  };
  </script>
  
  <style scoped>
  #dialog-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  
  .dialog-container {
    width: 400px;
    background-color: var(--white);
    padding: 24px;
    z-index: 10;
    height: fit-content;
  }
  
  .dialog-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  
  .dialog-title {
    font-weight: 700;
    font-size: 20px;
    text-align: left;
  }
  
  .dialog-content {
    color: #1f1f1f;
    margin-bottom: 24px;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }
  </style>