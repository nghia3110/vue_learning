<template>
    <div class="container">
      <TheSidebar />
      <EmployeePage />
    </div>
  </template>
  
  <script>
  import TheSidebar from "./TheSidebar.vue";
  import EmployeePage from '@/views/employee/EmployeePage.vue';
  export default {
    name: "TheMain",
    components: {
      TheSidebar,
      EmployeePage,
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 56px);
  }
  </style>