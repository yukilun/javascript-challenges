<template>
    <div>
        <NuxtLayout>
                <Header />
                <h1 class="my-32 text-center text-5xl md:text-6xl lg:text-7xl">Page Not Found!</h1>
        </NuxtLayout>
    </div>
</template>
  
<script setup>
function handleClearError() {
    clearError({ redirect: '/' });
}
</script>