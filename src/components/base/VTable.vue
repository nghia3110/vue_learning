<template>
    <div class="table-container">
        <slot name="table-body" ></slot>
    </div>
    <div class="table-pagination">
        <div class="table-totalRecord">
            Tổng: <strong>{{ this.records }}</strong> bản ghi
        </div>
        <div class="row gap-16 align-center">
            <div class="row align-center gap-32">
                Số bản ghi/trang:
                <VCombobox :results="paging"/>
                <div>1 - <strong>10</strong> bản ghi</div>
                <div class="row gap-16 align-center">
                    <button class="icon previous-icon"></button>
                    <button class="icon next-icon"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VTable',
    props: ['records'],
    data() {
        return {
            paging: [10,20,30,50,100],
        }
    },
}
</script>

<style>
tr {
    height: 48px;
    position: relative;
}

tbody tr:hover {
    background-color: #F2F2F2;
}

td,
th {
    text-align: left;
    padding: 0px 16px;
    border: 1px solid #e0e0e0;
    border-left: none;
    border-right: none;
}

th {
    font-weight: 700;
    position: sticky;
    top: -1px;
    z-index: 999;
    background-color: #f5f5f5;
    border: none;
}

.table-container {
    background-color: #FFFFFF;
    overflow: auto;
    max-height: calc(100% - 108px);
}

.table-container table {
    border-collapse: collapse;
    width: 100%;
}

.table-checkbox {
    width: 16px;
    height: 16px;
    vertical-align: middle;
}

.table-pagination {
    background-color: var(--white);
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 0px 16px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.table-pagination select {
    border: none;
    outline: none;
    margin-left: 4px;
    width: 40px;
    cursor: pointer;
}

</style>