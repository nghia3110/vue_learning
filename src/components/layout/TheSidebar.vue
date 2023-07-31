<template>
    <div class="sidebar">
      <div class="sidebar-container">
        <div class="sidebar-item">
          <div class="icon overall-icon"></div>
          <div class="item-title">Tổng quan</div>
        </div>
        <div class="sidebar-item">
          <div class="icon money-icon"></div>
          <div class="item-title">Tiền mặt</div>
        </div>
        <div class="sidebar-item">
          <div class="icon sendMoney-icon"></div>
          <div class="item-title">Tiền gửi</div>
        </div>
        <div class="sidebar-item">
          <div class="icon buy-icon"></div>
          <div class="item-title">Mua hàng</div>
        </div>
        <div class="sidebar-item">
          <div class="icon sell-icon"></div>
          <div class="item-title">Bán hàng</div>
        </div>
        <div class="sidebar-item">
          <div class="icon receiptManager-icon"></div>
          <div class="item-title">Quản lý hóa đơn</div>
        </div>
        <div class="sidebar-item">
          <div class="icon warehouse-icon"></div>
          <div class="item-title">Kho</div>
        </div>
        <div class="sidebar-item">
          <div class="icon toolbox-icon"></div>
          <div class="item-title">Công cụ dụng cụ</div>
        </div>
        <div class="sidebar-item">
          <div class="icon property-icon"></div>
          <div class="item-title">Tài sản cố định</div>
        </div>
        <div class="sidebar-item">
          <div class="icon tax-icon"></div>
          <div class="item-title">Thuế</div>
        </div>
        <div class="sidebar-item">
          <div class="icon cost-icon"></div>
          <div class="item-title">Giá thành</div>
        </div>
        <div class="sidebar-item">
          <div class="icon synthetic-icon"></div>
          <div class="item-title">Tổng hợp</div>
        </div>
        <div class="sidebar-item">
          <div class="icon budget-icon"></div>
          <div class="item-title">Ngân sách</div>
        </div>
        <div class="sidebar-item">
          <div class="icon report-icon"></div>
          <div class="item-title">Báo cáo</div>
        </div>
        <div class="sidebar-item">
          <div class="icon finance-icon"></div>
          <div class="item-title">Phân tích tài chính</div>
        </div>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-item">
          <div class="icon back-icon"></div>
          <div class="item-title">Thu gọn</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheSidebar",
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #041434;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  
  .sidebar::-webkit-scrollbar {
    width: 0px;
  }
  
  .sidebar-container {
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    gap: 4px;
  }
  
  .sidebar-item {
    height: 44px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    cursor: pointer;
    border-radius: 6px;
    padding: 12px;
  }
  
  .sidebar-item:hover {
    background-color: #27395E;
  }
  
  .sidebar-item:hover .item-title {
    color: var(--white);
  }
  
  .sidebar-item:active {
    background-color: #A7C4FF;
    border-radius: 4px;
    opacity: 16%;
  }
  
  .sidebar-item:active .item-title {
    color: var(--white);
  }
  
  .item-title {
    font-weight: 500;
    color: #869AB8;
  }
  
  .sidebar-footer {
    padding: 12px;
  }
  </style>