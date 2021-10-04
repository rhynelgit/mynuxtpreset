<template>
  <div>
    <button v-if="submitting" disabled="true" class="qm-bt btn-pill qm-btn-primary btn-disabled" :class="width">{{label_action}}</button>
    <button v-else type="submit" class="qm-btn btn-pill qm-btn-primary" :class="width">{{label}}</button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "WizardButton",
  props: {
    submitting: {
      default: false
    },
    label: {
      type: String,
      default: 'Next'
    },
    label_action: {
      type: String,
      default: 'Submitting...'
    },
    width: {
      this: String,
      default: ''
    }
  }
};
</script>