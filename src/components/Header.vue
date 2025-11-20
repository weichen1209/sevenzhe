<template>
  <header class="header">
    <div class="header-content">
      <div class="header-left">
        <button class="icon-btn" aria-label="Menu" @click="$emit('toggle-sidebar')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black" />
          </svg>
        </button>
        <h1 class="header-title">破解安洛克</h1>
      </div>

      <button class="icon-btn" aria-label="Notifications" @click="$emit('toggle-notification')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" :fill="isNotificationActive ? '#FF4C4C' : 'black'"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{ isNotificationActive?: boolean }>()
// emits: toggle-sidebar, toggle-notification
</script>

<style scoped>
.header {
  border-bottom: 1px solid #c2c2c2;
  background: #fff;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-content { display:flex; justify-content:space-between; align-items:center }
.header-left { display:flex; align-items:center; gap:16px }
.header-title { font-size:18px; color:#333 }
.icon-btn { background:none; border:none; cursor:pointer; padding:0 }
</style>
