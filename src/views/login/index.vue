<script setup lang="ts">

</script>

<template>
  <section class="flex min-h-screen text-white items-stretch">
    <div class="bg-no-repeat bg-cover w-1/2 login-bg hidden items-center lg:flex">
      <div class="opacity-60 inset-0 z-0 gb-black absolute" />
      <div class="w-full px-24 z-10">
        <div class="font-bold text-left tracking-wide text-5xl">
          欢迎您
        </div>
        <div class="my-4 text-3xl">
          这是一款美观，使用，易用的管理后台
        </div>
      </div>
    </div>
    <div class="flex bg-[#161616] text-center w-full px-0 z-0 relative items-center justify-center md:px-16 lg:w-1/2">
      <div class="bg-no-repeat bg-cover inset-0 z-10 login-bg absolute lg:hidden">
        <div class="opacity-60 inset-0 z-0 gb-black absolute" />
      </div>
      <div class="w-full z-999">
        <div class="flex my-6 text-3xl items-center justify-center">
          用户登录
        </div>
        <el-form class="mx-auto w-full px-4 sm:w-2/3 lg:px-0">
          <el-form-item>
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-input />
          </el-form-item>
          <el-button class="w-full" type="primary" size="large">
            登录
          </el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login-bg {
  background-image: url('../../assets/images/login-bg.webp');
}
</style>
