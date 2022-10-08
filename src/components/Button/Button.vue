<template>
    <component :is="componentType"
        class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {{ text}}
    </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

const props = defineProps({
    // UI variants
    text: {
        type: String,
        default: 'Button'
    },
    nativeType: {
        type: String,
        default: 'button',
        validator: (prop) => ['button', 'submit', 'reset'].includes(prop)

    }
});

const componentType = computed(() => {
    if (attrs.disabled !== undefined && attrs.disabled !== false) {
        return 'button';
    }
    if (attrs.href !== undefined) return "a";
    if (attrs.to !== undefined) return "router-link";
    return props.nativeType;
});

const classes = computed(() => [
    {
        // Text button
        'mdc-button': true,
        // Outlined button
        'mdc-button--outlined': isOutlined.value,
        // Contained button
        'mdc-button--raised': isRaised.value,
        'mdc-button--unelevated': isUnelevated.value,
        // Accessibility
        'mdc-button--touch': isAccessible.value
    },
    cardActionClasses.value
]);
</script>