<template>
      <div v-if="label" style="margin-bottom: 8px;">
        <label for="" class="m-label">{{ label }}</label>
      </div>
      <div class="textfield-container">
        <input
          v-model="value"
          :type="type"
          :id="id"
          class="textfield"
          :class="classObject"
          :placeholder="placeholder"
          @input="onInput"
          :required="required"
          ref="textField"
        />
        <div v-if="error" class="textfield-errorMessage">
          {{ label + " không được để trống" }}
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "VInput",
    props: {
      modelValue: {},
      type: {
        type: String,
        default: "text",
      },
      id: {
        type: String,
      },
      class: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },    
      required: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      },
      fullWidth: {
        type: Boolean,
        default: false,
      },
      combobox: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue"],
    created() {},
    methods: {
      onInput() {
        this.$emit("update:modelValue", this.value);
      },
    },
    watch: {
      error: {
        handler(newVal) {
          this.classObject["textfield--error"] = newVal;
        },
      },
      modelValue: {
        handler(newVal) {
          this.value = newVal;
        },
      },
    },
    data() {
      return {
        value: this.modelValue,
        classObject: {
          "textfield--error": this.error,
          "textfield--fullWidth mb-24": this.fullWidth,
          "combobox-input": this.combobox
        },
      };
    },
  };
  </script>
  
  <style>
  .m-label {
    font-weight: 500;
  }
  
  .textfield {
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    outline: none;
    width: 260px;
    padding-left: 12px;
  }
  
  .textfield--fullWidth {
    width: 100% !important;
  }
  
  .textfield::placeholder {
    color: #9e9e9e;
  }
  
  .textfield:hover {
    background-color: #f6f6f6;
    border-color: #ebebeb;
  }
  
  .textfield:focus {
    border-color: var(--primary);
  }
  
  .textfield--error {
    border-color: var(--error);
  }
  
  .textfield--error:hover {
    border-color: var(--error);
  }
  
  .textfield--error:focus {
    border-color: var(--error);
  }
  
  .textfield-container {
    position: relative;
  }
  
  .textfield-errorMessage {
    color: var(--error);
    font-size: 12px;
    position: absolute;
    bottom: 3px;
    left: 0;
  }

  .combobox-input {
    width: calc(100% - 40px) !important;
    border-right: none !important;
    margin-top: 0 !important;
}

.combobox-input:focus {
    border-color: #e0e0e0 !important;
}
  </style>