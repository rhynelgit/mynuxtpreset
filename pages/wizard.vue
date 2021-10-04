<template>
    <div class="qm-page">
        <div class="container">
            <div class="center-box">
                <div class="qm-page__title">
                    Thank you! Tell us what you do?
                </div>
                <div class="qm-page__description">
                    You can select a few
                </div>

                <div class="form-row">
                    <div class="col-md-6 check-box-wrapper">
                        <input id="checkbox" type="checkbox"/>
                        <label for="checkbox">
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <input id="checkbox" type="checkbox"/>
                        <label for="checkbox">
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>

                    <div class="col-md-6 check-box-wrapper">
                        <label for="checkbox">
                            <input id="checkbox" type="checkbox"/>
                            <img height="20" width="20" src="~/static/icon/beauty.svg"/>
                            <span class="pl-2">Beauty services</span>
                        </label>
                    </div>
                </div>
           
                <wizard-button class="float-right mt-3"/>
            </div>
        </div>
    </div>
</template>

<script>
import WizardButton from '../components/commons/elements/WizardButton.vue'
export default {
    layout: 'default',
    components: {WizardButton}
}
</script>
