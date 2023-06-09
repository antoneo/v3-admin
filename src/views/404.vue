<script setup lang="ts">

</script>

<template>
  <div class="bg-gradient-to-r  flex min-h-screen  from-purple-300 to-blue-200  items-center justify-center">
    <div class="bg-white rounded-md flex flex-col py-12 w-[500px] items-center">
      <div class="font-bold text-9xl text-purple-400">
        404
      </div>
      <div class="font-medium py-8 text-6xl">
        未找到页面
      </div>
      <div class="font-medium pb-8 text-2xl">
        您正在访问的页面不存在
      </div>
      <div>
        <button class=" back-btn ">
          首页
        </button>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
.back-btn{
  @apply bg-gradient-to-r rounded-md font-semibold from-purple-400 to-blue-500 py-3 px-6 hover:from-pink-500 hover:to-orange-500
}
</style>
