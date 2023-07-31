import './css/base.css';
import './css/icon.css';

import { createApp } from 'vue'
import App from './App.vue'
import helpers from '@/js/helpers.js';

import VButton from '@/components/base/VButton.vue';
import VInput from '@/components/base/VInput.vue';
import VDialog from '@/components/base/VDialog.vue';
import VTable from '@/components/base/VTable.vue';
import VCombobox from '@/components/base/VCombobox.vue';

const app = createApp(App);
app.config.globalProperties.$helpers = helpers;
app.component('VButton', VButton);
app.component('VInput', VInput);
app.component('VDialog', VDialog);
app.component('VTable', VTable);
app.component('VCombobox', VCombobox);

app.mount('#app');
