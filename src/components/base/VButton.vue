<template>
    <button class="btn" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
    name: 'VButton',
    props: {
        text: String,
    },

    methods: {
        onClick() {
            this.$emit('onclick');
        }
    },
}
</script>

<style scoped>
/* CSS use for all button */
.btn {
    height: 36px;
    border-radius: 4px;
    padding: 8px 16px;
    text-align: center;
    min-width: 80px;
    font-weight: 500;
}

/* Primary button */
.btn--primary {
    background-color: var(--primary);
    color: #fff;
}

.btn--primary:hover {
    background-color: var(--primary-hover);
}

.btn--primary:active {
    background-color: var(--primary-active);
}

.btn--primary:disabled {
    cursor: default;
    background-color: var(--primary-disabled);
}

/* Secondary button */
.btn--secondary {
    background-color: var(--white);
    border: 1px solid #E6E6E6;
    color: #1f1f1f;
    border-radius: 3px;
}

.btn--secondary:hover {
    color: var(--primary-hover);
    border-color: var(--primary-hover);
}

.btn--secondary:active {
    color: #1f1f1f;
    border-color: #E6E6E6;
    background-color: var(--secondary-active);
}

.btn--secondary:disabled {
    color: #1f1f1f;
    border-color: #E6E6E6;
    cursor: default;
    background-color: var(--secondary-disabled);
}

/* Link button */
.btn--link {
    border: none;
    color: var(--primary);
    background-color: transparent;
    min-width: auto;
}

.btn--link:hover {
    color: var(--primary-hover);
    background-color: transparent;
}

.btn--link:active {
    color: var(--primary-active);
}

.btn--link:disabled {
    color: var(--primary-disabled);
}

/* Button with icon */
.btn--icon {
    height: 36px;
    background-color: rgba(80, 184, 60, 0.1);
    border-radius: 4px;
    color: var(--primary);
    border: none;
    padding: 10px 8px;
}

.btn--icon-icon {
    width: 20px;
    height: 20px;
}

.btn--icon-icon i {
    font-size: 16px;
}

/* Combobutton */
.btn--combobutton {
    min-width: auto;
    padding: 10px 12px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 1px solid var(--white);
}

.btn--comboButton i {
    width: 16px;
    height: 16px;
}

.btn--btnIcon {
    padding-left: 12px;
}

.btn--btnIcon i {
    margin-right: 4px;
}
</style>