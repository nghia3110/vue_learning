import './css/base.css';
import './css/icon.css';

import { createApp } from 'vue'
import App from './App.vue'

import VButton from '@/components/base/VButton.vue';
import VInput from '@/components/base/VInput.vue';
import VDialog from '@/components/base/VDialog.vue';
import VForm from '@/components/base/VForm.vue';

const app = createApp(App);
app.component('VButton', VButton);
app.component('VInput', VInput);
app.component('VDialog', VDialog);
app.component('VForm', VForm);

app.mount('#app');
