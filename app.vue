<script setup>
onMounted(() => {
  const stickyHeader = document.querySelector('.header-sticky')
  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    if(scrollTop > 100) {
      stickyHeader.classList.add('active')
    } else {
      stickyHeader.classList.remove('active')
    }
  })
})
</script>


<template>
  <div class="wrapper">
    <Header/>
    <main>
      <NuxtPage/>
    </main>
    <Footer/>
  </div>
</template>
