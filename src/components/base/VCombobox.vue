<template>
    <div class="combobox-container">
        <div v-if="isShowResult" class="combobox-result--top">
            <div v-for="(result, index) in results" :key="index" 
                @click="onClickResult" 
                class="combobox-result-item">
                {{ result }}
            </div>
        </div>
        <input type="text" class="textfield combobox-input" readonly :value="result" />
        <button class="dropdown-lower-icon combobox-btn" @click="onClickShowResult"></button>
    </div>
</template>

<script>
export default {
    name: 'VCombobox',
    props: {
        results: Array
    },
    data() {
        return {
            isShowResult: false,
            result: this.results[0]
        }
    },
    methods: {
        onClickShowResult() {
            this.isShowResult = !this.isShowResult;
        },
        onClickResult(event) {
            this.result = parseInt(event.target.textContent);
            this.isShowResult = !this.isShowResult;
        }
    }
}
</script>

<style scoped>
.combobox-container {
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: 80px;
    position: relative;
}

.combobox-container:focus {
    border-color: var(--primary);
}

.combobox-input {
    width: calc(100% - 40px) !important;
    border-right: none !important;
    margin-top: 0 !important;
}

.combobox-input:focus {
    border-color: #e0e0e0 !important;
}

.combobox-btn {
    width: 40px;
    height: 36px;
    border: 1px solid #e0e0e0;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.combobox-btn:hover {
    background-color: #f6f6f6;
}

.combobox {
    width: fit-content;
    display: inline-block;
}

.combobox-loading {
    height: 100px;
    border-radius: 4px;
    box-shadow: 0 4px 16px rgba(23, 27, 42, 0.24);
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.combobox-result--top {
    display: block;
    background-color: var(--white);
    width: inherit;
    max-height: 308px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(23, 27, 42, 0.24);
    padding: 8px 4px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: -193px;
}

.combobox-result-item {
    text-align: left;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
}

.combobox-result-item:hover {
    background-color: rgba(80, 184, 60, 0.1);
}

#combobox-spinner.spinner {
    animation: loading-bar-spinner 400ms linear infinite;
}

#combobox-spinner.spinner .spinner-icon {
    width: 24px;
    height: 24px;
    border: solid 2px transparent;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    animation: colors 5s infinite;
}

@keyframes loading-bar-spinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes colors {
    0% {
        border-color: #50b83c;
    }

    100% {
        border-color: #50b83c;
    }
}
</style>