<script lang="ts" setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Perfil', href: '#about' },
  { name: 'Herramientas', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
]

const mobileMenuOpen = ref(false)

const scrollToSection = (target: any) => {
  const section = document.querySelector(target);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <header>
    <nav style="background: #688ba1" class="lg:fixed top-0 left-0 w-full shadow-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <!-- <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
          </a>
        </div>
        <div class="lg:flex lg:gap-x-12 sm:flex sm:gap-x-4">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-semibold leading-6 text-ming-900 hover:text-emerald-500 scroll-smooth mx-2 "
            @click.prevent="scrollToSection(item.href)">{{ item.name }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
