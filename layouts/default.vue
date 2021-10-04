<template>
    <v-app>
      <hero />
      <v-main class="main">
          <div class="main__content">
              <wizard-steps />
              <nuxt></nuxt>
          </div>
      </v-main>
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
