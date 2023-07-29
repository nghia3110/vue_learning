<template>
    <div>
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
                        <button class="icon exit-icon" id="exit-form"></button>
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
                                        v-model="employee.customerCode"
                                        :error="errors.customerCode"
                                    />
                                </div>
                                <div class="col-7">
                                    <VInput 
                                        id="txtFullName" 
                                        label="Tên" 
                                        :fullWidth="true" 
                                        :required="true"
                                        v-model="employee.fullName"
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
                                    v-model="employee.companyName"
                                    :error="errors.companyName"
                                />
                            </div>
                            <div>
                                <VInput 
                                    id="txtPosition" 
                                    label="Chức danh"
                                    :fullWidth="true"
                                    v-model="employee.position"
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
                                        v-model="employee.dateOfBirth"
                                        :error="errors.dateOfBirth"
                                    />
                                </div>
                                <div class="col-6">
                                    <label for="gender" class="m-label">Giới tính</label>
                                    <div class="row gap-8" style="margin-top: 16px;">
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
                                        v-model="employee.idNumber"
                                    />
                                </div>
                                <div class="col-6">
                                    <VInput 
                                        type="date"
                                        id="txtIDNumberDate"
                                        label="Ngày cấp"
                                        :fullWidth="true"
                                        v-model="employee.idNumberDate"
                                    />
                                </div>
                            </div>
                            <div>
                                <VInput 
                                    id="txtIDNumberIssuers" 
                                    label="Nơi cấp"
                                    :fullWidth="true"
                                    v-model="employee.idNumberIssuers"
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
                                v-model="employee.address"
                            />
                        </div>
                        <div class="row gap-8">
                            <div class="col-3">
                                <VInput 
                                    id="txtPhoneNumber" 
                                    label="ĐT di động"
                                    :fullWidth="true"
                                    v-model="employee.phoneNumber"
                                />
                            </div>
                            <div class="col-3">
                                <VInput 
                                    id="txtTablePhoneNumber" 
                                    label="ĐT cố định"
                                    :fullWidth="true"
                                    v-model="employee.tablePhoneNumber"
                                />
                            </div>
                            <div class="col-3">
                                <VInput 
                                    type="email" 
                                    id="txtEmail" 
                                    label="Email"
                                    :fullWidth="true"
                                    v-model="employee.email"
                                />
                            </div>
                        </div>
                        <div class="row gap-8">
                            <div class="col-3">
                                <VInput 
                                    id="txtBankAccount" 
                                    label="Tài khoản ngân hàng"
                                    :fullWidth="true"
                                    v-model="employee.bankAccount"
                                />
                            </div>
                            <div class="col-3">
                                <VInput 
                                    id="txtBankName" 
                                    label="Tên ngân hàng"
                                    :fullWidth="true"
                                    v-model="employee.bankName"
                                />
                            </div>
                            <div class="col-3">
                                <VInput 
                                    id="txtBankBranch" 
                                    :fullWidth="true"
                                    label="Chi nhánh"
                                    v-model="employee.bankBranch"
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
                        <VButton class="btn--primary" text="Cất và thêm" @onclick="onClickSaveBtn"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VForm',
    data() {
        return {
            employee: {
                customerCode: '',
                fullName: '',
                companyName: '',
                position: '',
                dateOfBirth: '',
                gender: '',
                idNumber: '',
                idNumberDate: '',
                idNumberIssuers: '',
                address: '',
                phoneNumber: '',
                tablePhoneNumber: '',
                email: '',
                bankAccount: '',
                bankName: '',
                bankBranch: ''
            },
            errors: {}
        }
    },
    methods: {
        onClickSaveBtn() {
            this.errors = {};
            if(this.employee.customerCode == '' || this.employee.customerCode == null) {
                this.errors.customerCode = true;
            }
            if(this.employee.fullName == '' || this.employee.fullName == null) {
                this.errors.fullName = true;
            }
            if(this.employee.companyName == '' || this.employee.companyName == null) {
                this.errors.companyName = true;
            }
            if(this.employee.dateOfBirth == '' || this.employee.dateOfBirth == null) {
                this.errors.dateOfBirth = true;
            }
        }
    }
}
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