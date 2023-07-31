<template>
    <EmployeeForm :changeCustomer="changeCustomer" v-if="isShowForm" @close-form="closeForm" />
    <div class="content">
        <div class="content-header">
            <div class="content-title">Nhân viên</div>
            <VButton class="btn--primary" text="Thêm mới nhân viên" @onclick="onClickAddCustomer" />
        </div>
        <div class="content-table">
            <div class="search-container">
                <div class="search-bar">
                    <VInput placeholder="Tìm kiếm nhân viên" />
                    <div class="textfield-search-icon search-icon"></div>
                </div>
                <button class="icon reload-icon" @click="reloadList"></button>
            </div>
            <VTable :records="records">
                <template v-slot:table-body>
                    <EmployeeList @showChangeForm="showChangeForm" @numberOfRecords="getNumberOfRecord" :key="key"/>
                </template>
            </VTable>
        </div>
    </div>
</template>
  
<script>
import EmployeeList from "@/components/employee/EmployeeList.vue";
import EmployeeForm from "@/components/employee/EmployeeForm.vue";
export default {
    name: "EmployeePage",
    components: {
        EmployeeList,
        EmployeeForm
    },
    data() {
        return {
            isShowForm: false,
            key: 0,
            records: 10,
            changeCustomer: {}
        }
    },
    methods: {
        onClickAddCustomer() {
            this.isShowForm = true;
        },
        closeForm() {
            this.isShowForm = false;
        },
        reloadList() {
            this.key++;
        },
        getNumberOfRecord(records) {
            this.records = records;
        },
        showChangeForm(customer) {
            this.changeCustomer = customer;
            this.isShowForm = true;
        }
    }

};
</script>
  
<style scoped>
.content {
    background-color: #EEEFF1;
    padding: 20px 24px;
    width: calc(100% - 200px);
}

.content-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.content-title {
    font-weight: 700;
    font-size: 24px;
}

.content-table {
    background-color: var(--white);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.039);
    height: calc(100vh - 192px);
}

.search-container {
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
}

.search-bar {
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
}

.textfield-search-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 8px;
}

.search-bar input {
    margin: 0 !important;
}
</style>