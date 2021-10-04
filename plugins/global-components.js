import Vue from 'vue';
import WizardButton from '~/components/commons/elements/WizardButton';

const components = { WizardButton }
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})