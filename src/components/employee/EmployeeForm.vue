<template>
    <div id="form-overlay">
      <div class="form-container">
        <div class="form-heading">
          <div class="form-heading-left">
            <div class="form-title">Thông tin nhân viên</div>
            <div class="form-roleChoice">
              <input type="checkbox" name="" id="" />Là khách hàng
              <input type="checkbox" name="" id="" />Là nhà cung cấp
            </div>
          </div>
          <div class="form-heading-right">
            <button class="icon help-icon"></button>
            <button class="icon exit-icon" @click="closeForm"></button>
          </div>
        </div>
        <div id="form-body">
          <div class="row gap-24">
            <div class="col-6">
              <div class="row gap-8">
                <div class="col-5">
                  <VInput
                    id="txtCustomerCode"
                    label="Mã"
                    :fullWidth="true"
                    :required="true"
                    v-model="customer.customerCode"
                    :error="errors.customerCode"
                    ref="firstInput"
                  />
                </div>
                <div class="col-7">
                  <VInput
                    id="txtFullName"
                    label="Tên"
                    :fullWidth="true"
                    :required="true"
                    v-model="customer.fullName"
                    :error="errors.fullName"
                  />
                </div>
              </div>
              <div>
                <VInput
                  id="txtCompanyName"
                  label="Đơn vị"
                  :fullWidth="true"
                  :required="true"
                  v-model="customer.companyName"
                  :error="errors.companyName"
                />
              </div>
              <div>
                <VInput
                  id="txtPosition"
                  label="Chức danh"
                  :fullWidth="true"
                  v-model="customer.position"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="row gap-16">
                <div class="col-6">
                  <VInput
                    type="date"
                    id="txtDateOfBirth"
                    label="Ngày sinh"
                    :fullWidth="true"
                    :required="true"
                    v-model="customer.dateOfBirth"
                    :error="errors.dateOfBirth"
                  />
                </div>
                <div class="col-6">
                  <label for="gender" class="m-label">Giới tính</label>
                  <div class="row gap-8" style="margin-top: 16px">
                    <div class="col-4 gap-8 row align-center">
                      <input type="radio" name="gender" checked value="1" />Nam
                    </div>
                    <div class="col-4 gap-8 row align-center">
                      <input type="radio" name="gender" value="0" />Nữ
                    </div>
                    <div class="col-4 gap-8 row align-center">
                      <input type="radio" name="gender" value="2" />Khác
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gap-8">
                <div class="col-6">
                  <VInput
                    id="txtIDNumber"
                    label="Số CMND"
                    :fullWidth="true"
                    v-model="customer.idNumber"
                  />
                </div>
                <div class="col-6">
                  <VInput
                    type="date"
                    id="txtIDNumberDate"
                    label="Ngày cấp"
                    :fullWidth="true"
                    v-model="customer.idNumberDate"
                  />
                </div>
              </div>
              <div>
                <VInput
                  id="txtIDNumberIssuers"
                  label="Nơi cấp"
                  :fullWidth="true"
                  v-model="customer.idNumberIssuers"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <VInput
                id="txtAddress"
                label="Địa chỉ"
                :fullWidth="true"
                v-model="customer.address"
              />
            </div>
            <div class="row gap-8">
              <div class="col-3">
                <VInput
                  id="txtPhoneNumber"
                  label="ĐT di động"
                  :fullWidth="true"
                  v-model="customer.phoneNumber"
                />
              </div>
              <div class="col-3">
                <VInput
                  id="txtTablePhoneNumber"
                  label="ĐT cố định"
                  :fullWidth="true"
                  v-model="customer.tablePhoneNumber"
                />
              </div>
              <div class="col-3">
                <VInput
                  type="email"
                  id="txtEmail"
                  label="Email"
                  :fullWidth="true"
                  v-model="customer.email"
                />
              </div>
            </div>
            <div class="row gap-8">
              <div class="col-3">
                <VInput
                  id="txtBankAccount"
                  label="Tài khoản ngân hàng"
                  :fullWidth="true"
                  v-model="customer.bankAccount"
                />
              </div>
              <div class="col-3">
                <VInput
                  id="txtBankName"
                  label="Tên ngân hàng"
                  :fullWidth="true"
                  v-model="customer.bankName"
                />
              </div>
              <div class="col-3">
                <VInput
                  id="txtBankBranch"
                  :fullWidth="true"
                  label="Chi nhánh"
                  v-model="customer.bankBranch"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form-action">
          <div>
            <VButton class="btn--secondary" id="cancel-form" text="Hủy" />
          </div>
          <div class="row gap-16">
            <VButton class="btn--secondary" text="Cất" />
            <VButton
              class="btn--primary"
              text="Cất và thêm"
              @onclick="onClickSaveBtn"
            />
          </div>
        </div>
      </div>
    </div>
    <VDialog
      v-if="showDialog"
      @close-dialog="hideDialog"
      :description="dialogMessage"
      :status="dialogStatus"
    />
</template>

<script>
export default {
  name: "EmployeeForm",
  props: ['changeCustomer'],
  created() {
    if(this.changeCustomer) {
      this.customer = {
        customerCode: this.changeCustomer.CustomerCode,
        fullName: this.changeCustomer.FullName,
        companyName: this.changeCustomer.CompanyName,
        position: "",
        dateOfBirth: this.formatDate(this.changeCustomer.DateOfBirth),
        gender: "",
        idNumber: "",
        idNumberDate: "",
        idNumberIssuers: "",
        address: "",
        phoneNumber: "",
        tablePhoneNumber: "",
        email: "",
        bankAccount: "",
        bankName: "",
        bankBranch: "",
      };
    }
  },
  data() {
    return {
      isUpdate: false,
      customer: {
        customerCode: "",
        fullName: "",
        companyName: "",
        position: "",
        dateOfBirth: "",
        gender: "",
        idNumber: "",
        idNumberDate: "",
        idNumberIssuers: "",
        address: "",
        phoneNumber: "",
        tablePhoneNumber: "",
        email: "",
        bankAccount: "",
        bankName: "",
        bankBranch: "",
      },
      errors: {},
      showDialog: false,
      isError: false,
      dialogMessage: "",
    };
  },
  mounted() {
      this.$refs.firstInput.$refs.textField.focus();
  },
  computed: {
    dialogStatus() {
      return this.isError !== false ? "warning" : "success";
    },
  },
  methods: {
    closeForm() {
      this.$emit('close-form');
    },
    hideDialog() {
      this.showDialog = false;
    },
    resetForm() {
      this.customer = {
        customerCode: "",
        fullName: "",
        companyName: "",
        position: "",
        dateOfBirth: "",
        gender: "",
        idNumber: "",
        idNumberDate: "",
        idNumberIssuers: "",
        address: "",
        phoneNumber: "",
        tablePhoneNumber: "",
        email: "",
        bankAccount: "",
        bankName: "",
        bankBranch: "",
      }
    },
    onClickSaveBtn() {
      this.errors = {};
      if (!this.customer.customerCode) {
        this.errors.customerCode = {
          message: "Mã nhân viên không được để trống!",
        };
      }
      if (!this.customer.fullName) {
        this.errors.fullName = {
          message: "Tên không được để trống!",
        };
      }
      if (!this.customer.companyName) {
        this.errors.companyName = {
          message: "Đơn vị không được để trống!",
        };
      }
      if (!this.customer.dateOfBirth) {
        this.errors.dateOfBirth = {
          message: "Ngày sinh không được để trống!",
        };
      }

      if (Object.keys(this.errors).length === 0) {
          try{
              const Customer = {
                  "customerCode": this.customer.customerCode,
                  "fullName": this.customer.fullName,
                  "gender": this.customer.gender,
                  "address": "string",
                  "dateOfBirth": this.customer.dateOfBirth,
                  "email": "string",
                  "phoneNumber": "string",
                  "debitAmount": 12000000,
                  "memberCardCode": "string",
                  "companyName": this.customer.companyName,
                  "companyTaxCode": "string",
                  "isStopFollow": true
              }
  
              const config = {
                  method: this.changeCustomer ? 'PUT' : 'POST',
                  headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*"
                  },
                  body: JSON.stringify(Customer)
              }

          var isErrorAPI = false;
          
          const fetchURL = this.changeCustomer 
          ? `https://cukcuk.manhnv.net/api/v1/Customers/${this.changeCustomer.CustomerCode}`
          : 'https://cukcuk.manhnv.net/api/v1/Customers';
          fetch(fetchURL, config)
              .then(res => {
                  if (res.status == 400 || res.status == 500) {
                      isErrorAPI = true;
                  }
                  return res.json();
              })
              .then(res => {
                  if (isErrorAPI) { 
                      this.isError = true;
                      this.dialogMessage = res.data.CustomerCode[0];
                      this.showDialog = true;
                  } else {
                      this.isError = false;
                      this.dialogMessage = "Thêm nhân viên thành công!";
                      this.showDialog = true;
                      this.resetForm();
                  }
              });
          } catch(e) {
              console.log(e);
          }

      } else {
        const firstAtt = Object.keys(this.errors)[0];
        this.isError = true;
        this.dialogMessage = this.errors[firstAtt].message;
        this.showDialog = true;
      }
    },
    formatDate(date) {
      try {
            const newDate = new Date(date);
            var d = newDate.getDate();
            var m = newDate.getMonth() + 1;
            var y = newDate.getFullYear();
            if (d < 10) d = '0' + d;
            if (m < 10) m = '0' + m;
            return y + '-' + m + '-' + d;
        } catch (e) {
            console.log(e);
            return "";
        }
    }
  },
};
</script>

<style scoped>
#form-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.form-container {
  background-color: #ffffff;
  padding: 24px 32px;
  border-radius: 4px;
}

.form-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 8px;
}

.form-heading-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.form-title {
  font-weight: 700;
  font-size: 24px;
  color: #1f1f1f;
}

.form-roleChoice {
  display: flex;
  align-items: center;
  gap: 12px;
}

.form-roleChoice input[type="checkbox"] {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.form-heading-right {
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
}

.form-action {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}
</style>