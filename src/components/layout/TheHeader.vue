<template>
    <div class="header">
      <div class="header-left">
        <div class="logo-container">
          <button class="icon toggle-icon"></button>
          <div class="header-logo"></div>
        </div>
        <div class="flex-container">
          <button class="icon menu-icon"></button>
          <div class="header-companyName">
            CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC
          </div>
          <button class="icon dropdown-icon"></button>
        </div>
      </div>
      <div class="flex-container">
        <button class="icon notify-icon"></button>
        <div class="header-profile">
          <div class="header-avatar"></div>
          <div class="header-username">
            <div id="username">Hà Trọng Nghĩa</div>
            <button class="icon dropdown-left-icon"></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheHeader",
  };
  </script>
  
  <style scoped>
  .header {
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .header-left {
    display: flex;
    flex-direction: row;
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
  }
  
  .logo-container {
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    background-color: #041434;
  }
  
  .header-logo {
    margin-left: 16px;
    width: 108px;
    height: 36px;
    background-image: url("@/assets/img/Logo_Module_TiengViet_White.66947422.svg");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  .header-companyName {
    margin-left: 16px;
    font-weight: 500;
  }
  
  .header-profile {
    margin-left: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  
  .header-avatar {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-image: url("@/assets/img/avatar-default.png");
    background-size: 32px 32px;
    background-position: center;
    background-size: contain;
  }
  
  .header-username {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .header-username #username {
    font-weight: 500;
  }
  </style>