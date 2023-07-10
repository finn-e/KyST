<style>
    @import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';
</style>

<template>
    <HPopover class="relative">
        <HPopoverButton class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center bg-gray-50 dark:bg-gray-800">
                <span class="i-heroicons-swatch-20-solid w-5 h-5 text-primary-500 dark:text-primary-400"></span>
        </HPopoverButton>
        <HPopoverPanel>
            <ClientOnly>
                <ColorPicker v-bind="color" @input="onInput" :aria-valuetext="valuetext" />
            </ClientOnly>
        </HPopoverPanel>
    </HPopover>
</template>

<script>
    import ColorPicker from '@radial-color-picker/vue-color-picker';

    export default {
        components: { ColorPicker },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                color: {
                    hue: 50,
                    saturation: 100,
                    luminosity: 50,
                    alpha: 1,
                },
            };
        },
        methods: {
            onInput(hue) {
                this.hue = hue;
            },
        },
    };
</script>
