<template>
  <div class="wrapper">
    <!--login-->
    <div class="card grid grid-cols-1 gap-4">
      <!--avatar-->
      <div class="formAvatar justify-self-center">
        <img
          src="https://avatars1.githubusercontent.com/u/72216013?s=460&u=9af74959fafce6a2e3e799be7024060f0c74a63c&v=4"
        />
      </div>
      <!--fields-->
      <label class="block">
        <span class="sr-only">Email address</span>
        <input type="email" class="w-full" placeholder="email" required />
      </label>
      <label class="block">
        <span class="sr-only">Password</span>
        <input type="password" class="w-full" placeholder="password" required />
      </label>
      <label class="block">
        <input type="checkbox" checked />
        <span class="text-sm">Remember Me</span>
      </label>
      <button class="btn justify-self-start" type="submit">Sign in</button>
      <a href="#" class="text-sm text-gray-400">Forgot the password?</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex justify-center items-center h-screen;
}
.card {
  @apply border rounded-lg p-10 m-10 bg-white shadow-sm w-full max-w-sm;
}

[type="text"],
[type="password"],
[type="email"],
[type="number"],
[type="url"],
[type="date"],
[type="datetime-local"],
[type="month"],
[type="week"],
[type="time"],
[type="search"],
[type="tel"],
[type="checkbox"],
[type="radio"],
[multiple],
textarea,
select {
  @apply rounded-md border-gray-100 border shadow-sm bg-gray-100 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50;
}

[type="checkbox"],
[type="radio"] {
  @apply text-emerald-400 bg-current;
}

.formAvatar {
  @apply text-gray-300;
  img {
    @apply rounded-full border w-32 h-32;
  }
}

.btn {
  @apply rounded border px-6 py-2 bg-emerald-400 text-gray-100 shadow-sm;
}
</style>
