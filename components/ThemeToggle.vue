<template>
    <button type="button" aria-label="theme toggle button" @click="handleThemeToggle"
        class="h-10 w-10 transition-300 text-neutral-800 dark:text-neutral-50 hover:!text-yellow-500" >
        <Icon v-if="theme == 'light'" name="ic:round-dark-mode" class="h-full w-full"/>
        <Icon v-else name="ic:round-light-mode" class="h-full w-full"/>
    </button>
</template>

<script setup>
const theme = ref('light');

onMounted(() => {
    const preferTheme = localStorage.getItem('prefer-theme');
    if((preferTheme && preferTheme == 'dark') || (!preferTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        theme.value = 'dark';
    }
})

function handleThemeToggle() {
    const newTheme = theme.value == 'dark' ? 'light': 'dark';
    localStorage.setItem('prefer-theme', newTheme);
    theme.value = newTheme;
    if(newTheme == 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

</script>