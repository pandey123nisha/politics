<template>
  <div>
    <header>
      <navbar-component />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <footer-component/>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { NavbarComponent, FooterComponent },
  name: "TemplateView",
};
</script>

<style lang="scss" scoped></style>
