<template>
    <header class="w-full flex justify-between items-center gap-10" ref="header">
        <div class="flex-1">
            <NuxtLink to="/" class="link block w-full max-w-[200px] relative">
                    <Logo class="w-full"/>
                    <div class="scan absolute top-0 -left-[2.5%] w-[105%] h-1 bg-cyan-400 rounded-full shadow-scan opacity-0">
                    </div>
            </NuxtLink>
        </div>
        <div>
            <ThemeToggle />
        </div>
    </header>
</template>

<style scoped>
@keyframes scan {
    0% {opacity: 0; top: 0;}
    10% {opacity: 1; top: 0;}
    80% {opacity: 1; top: 100%;}
    100% {opacity: 0; top: 100%;}
}
.link:hover > .scan {
    animation: scan 1.5s ease-in-out infinite 0.5s;
}
</style>