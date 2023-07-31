<template>
    <table class="table">
        <thead>
            <tr>
                <th class="w-auto">
                    <input type="checkbox" class="table-checkbox" />
                </th>
                <th class="w-auto">MÃ NHÂN VIÊN</th>
                <th class="w-auto">TÊN NHÂN VIÊN</th>
                <th class="w-auto">GIỚI TÍNH</th>
                <th class="w-auto text-center">NGÀY SINH</th>
                <th class="w-auto">TÊN ĐƠN VỊ</th>
                <th class="w-auto text-right">SỐ DƯ</th>
                <th style="width: 1px; padding: 0 !important"></th>
            </tr>
        </thead>
        <tbody class="table-body">
            <tr v-for="(customer, index) in customers" :key="index" style="position: relative;">
                <td>
                    <input type="checkbox" name="" class="table-checkbox" @click="showChangeForm(customer)"/>
                </td>
                <td>{{ customer.CustomerCode }}</td>
                <td>{{ customer.FullName }}</td>
                <td>{{ customer.Gender === 0 ? 'Nữ' : "Nam" }}</td>
                <td class="text-center">
                    {{ $helpers.formatDateToTable(customer.DateOfBirth) }}
                </td>
                <td>
                    {{ $helpers.formatCompanyName(customer.CompanyName) }}
                </td>
                <td class="text-right">
                    {{ $helpers.formatMoney(customer.DebitAmount) }}
                </td>
                <div class="row-action">
                    <div class="action">
                        <div class="icon edit-icon"></div>
                    </div>
                    <div class="action">
                        <div class="icon action-icon"></div>
                    </div>
                </div>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'EmployeeList',
    created() {
        this.getEmployeeData();
    },
    data() {
        return {
            customers: [],
        }
    },
    methods: {
        getEmployeeData() {
            try {
                fetch('https://cukcuk.manhnv.net/api/v1/Customers')
                    .then(res => res.json())
                    .then(data => {
                        this.customers = data;
                        this.$emit('numberOfRecords', data.length);
                    });
            } catch (e) {
                console.log(e);
            }
        },
        showChangeForm(customer) {
            this.$emit('showChangeForm', customer);
        }
    }
}
</script>

<style scoped>
.row-action {
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 48px;
    position: absolute; 
    right: 16px;
    top: 8px; 
    z-index: 100; 
}

.action {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.16);
    background-color: var(--white);
}

</style>