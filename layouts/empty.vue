<template>
    <v-app>
        <nuxt></nuxt>
    </v-app>
</template>

<script>
import WizardSteps from '~/components/shared/wizard-steps/WizardSteps';
import Hero from '~/components/shared/hero/Hero';

export default {
    components: {
        WizardSteps,
        Hero
    }
}
</script>
