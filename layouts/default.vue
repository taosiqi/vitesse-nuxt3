<template>
  <main class="py-20 px-10 text-center">
    <slot />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm color">
      [Default Layout]
    </div>
  </main>
</template>

<style lang="scss">
main{
  .color{
    color: red;
  }
}
</style>
