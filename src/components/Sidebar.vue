<template>
  <transition name="fade">
    <div v-if="showSidebar" class="sidebar-overlay" @click="$emit('toggle-sidebar')">
      <div class="sidebar" @click.stop>
        <div class="sidebar-header">
          <div class="sidebar-user">
            <button class="sidebar-close-btn" aria-label="Close menu" @click="$emit('toggle-sidebar')">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#333333" />
              </svg>
            </button>
            <span class="sidebar-username">玩家一</span>
          </div>
          <div class="sidebar-divider"></div>
        </div>

        <div class="sidebar-menu">
          <div class="menu-item-wrapper">
            <button class="menu-item" @click="$emit('toggle-section','group')">組員</button>
            <svg v-if="sidebarSection === 'group'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
              <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE" />
            </svg>
          </div>
          <div class="menu-divider"></div>

          <div class="menu-item-wrapper">
            <button class="menu-item" @click="$emit('toggle-section','clues')">個人擁有線索</button>
            <svg v-if="sidebarSection === 'clues'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
              <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE" />
            </svg>
          </div>
          <div class="menu-divider"></div>

          <div class="menu-item-wrapper">
            <button class="menu-item" @click="$emit('toggle-section','construction')">國家建設狀態</button>
            <svg v-if="sidebarSection === 'construction'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
              <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE" />
            </svg>
          </div>
          <div class="menu-divider"></div>

          <button class="menu-item">登出</button>
        </div>

        <!-- sections rendered by the component when toggled -->
        <transition name="slide-content">
          <div v-if="sidebarSection === 'group'" class="section-content">
            <div class="player-list">
              <button v-for="player in players" :key="player" class="player-btn">{{ player }}</button>
            </div>
          </div>
        </transition>

        <transition name="slide-content">
          <div v-if="sidebarSection === 'clues'" class="section-content clues-content">
            <div class="clues-list">
              <div v-for="(clue, index) in clues" :key="index" class="clue-item">
                <div class="clue-badge">線索</div>
                <div class="clue-text">{{ clue }}</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="slide-content">
          <div v-if="sidebarSection === 'construction'" class="section-content construction-content">
            <div class="building-cards-wrapper">
              <div class="building-cards">
                <div v-for="(card, index) in buildingCards" :key="card.id" :class="['building-card', { 'building-card-locked': index > 0 }]">
                  <img :src="card.image" :alt="card.title" class="building-card-img" />
                  <div class="building-card-content">
                    <div class="building-card-text">
                      <h3 class="building-card-title">{{ card.title }}</h3>
                      <p class="building-card-desc">{{ card.description }}</p>
                    </div>
                    <div class="building-card-effects">
                      <div v-for="(effect, idx) in card.effects" :key="idx" class="effect-item">
                        <div class="effect-icon">
                          <svg v-if="effect.type === '經濟'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.584 14.5943C14.584 13.6283 13.724 12.8203 12.584 12.6343V16.5533C13.724 16.3673 14.584 15.5603 14.584 14.5943Z" fill="#87FF7C" />
                            <path d="M9.58398 9.59428C9.58398 10.5603 10.444 11.3683 11.584 11.5543V7.63428C10.445 7.82028 9.58398 8.62828 9.58398 9.59428Z" fill="#87FF7C" />
                            <path d="M12.084 0.594238C5.74298 0.594238 0.583984 5.75324 0.583984 12.0942C0.583984 18.4352 5.74298 23.5942 12.084 23.5942C18.425 23.5942 23.584 18.4352 23.584 12.0942C23.584 5.75324 18.426 0.594238 12.084 0.594238ZM15.584 14.5942C15.584 16.1022 14.276 17.3412 12.584 17.5512V18.0942C12.584 18.3702 12.36 18.5942 12.084 18.5942C11.808 18.5942 11.584 18.3702 11.584 18.0942V17.5502C9.89198 17.3402 8.58398 16.1012 8.58398 14.5932C8.58398 14.3172 8.80798 14.0932 9.08398 14.0932C9.35998 14.0932 9.58398 14.3172 9.58398 14.5932C9.58398 15.5592 10.444 16.3672 11.584 16.5532V12.5502C9.89198 12.3402 8.58398 11.1012 8.58398 9.59324C8.58398 8.08524 9.89198 6.84624 11.584 6.63624V6.09424C11.584 5.81824 11.808 5.59424 12.084 5.59424C12.36 5.59424 12.584 5.81824 12.584 6.09424V6.63724C14.276 6.84724 15.584 8.08624 15.584 9.59424C15.584 9.87024 15.36 10.0942 15.084 10.0942C14.808 10.0942 14.584 9.87024 14.584 9.59424C14.584 8.62824 13.724 7.82024 12.584 7.63424V11.6372C14.276 11.8472 15.584 13.0862 15.584 14.5942Z" fill="#87FF7C" />
                          </svg>
                          <svg v-else-if="effect.type === '人口'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.023 15.416C7.491 17.606 9.695 19 12.16 19C14.624 19 16.829 17.607 18.296 15.416C16.6317 13.8606 14.4379 12.9968 12.16 13C9.88171 12.9966 7.68751 13.8604 6.023 15.416ZM12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11Z" fill="#7C7EFF" />
                          </svg>
                          <svg v-else-if="effect.type === '糧食'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="#FFC47C" />
                            <path d="M6.1868 11.9955C6.27019 11.9955 6.35296 11.9608 6.41322 11.8944C7.35114 10.853 8.57999 9.6887 10.258 8.14823L10.7717 7.67592C11.0231 7.44464 11.2933 7.22065 11.5976 6.99059C11.695 6.91694 11.7388 6.79278 11.7096 6.6747C11.5788 6.14579 11.3487 5.44159 10.9963 5.08919C10.919 5.01189 10.8058 4.98206 10.7023 5.01067C10.597 5.03867 10.5149 5.12144 10.4869 5.22613C10.1819 6.37707 8.35662 8.82017 7.52278 9.65401C7.44974 9.72705 7.37183 9.80191 7.28967 9.88043C6.8764 10.2767 6.3627 10.7703 5.92204 11.5396C5.84475 11.6747 5.88187 11.8457 6.00786 11.937C6.06203 11.9766 6.12472 11.9955 6.1868 11.9955Z" fill="white" />
                            <path d="M15.0419 11.9995C14.5927 11.9995 10.516 12.1389 5.6968 16.9575C5.60976 17.0446 5.58359 17.176 5.63107 17.2898C5.66028 17.3598 6.3657 18.9989 8.34622 18.9989C11.922 18.9989 13.2415 17.6222 14.1149 16.711C14.1947 16.6276 14.2702 16.5485 14.3438 16.4755C15.1776 15.6416 17.6207 13.8163 18.7717 13.5114C18.877 13.4834 18.9591 13.4012 18.9871 13.2959C19.0151 13.1912 18.9853 13.0786 18.9086 13.0019C18.2896 12.3823 16.4199 11.9995 15.0419 11.9995Z" fill="white" />
                          </svg>
                        </div>
                        <span class="effect-value">{{ effect.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  showSidebar: boolean
  sidebarSection: string | null
  players?: string[]
  buildingCards?: any[]
  clues?: string[]
}>()
// emits: toggle-sidebar, toggle-section
</script>

<style scoped>
/* Overlay and container */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 200;
  display: flex;
}

.sidebar {
  width: 236px;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: visible;
}

.sidebar-header {
  padding: 30px 0 5px;
  display: flex;
  flex-direction: column;
  gap: 37px;
}

.sidebar-user {
  display: flex;
  padding: 0 50px;
  align-items: center;
  gap: 50px;
}

.sidebar-username {
  color: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 22px;
}

.sidebar-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.sidebar-close-btn:hover { opacity: 0.7; }

.sidebar-divider { width: 100%; height: 1px; background: #eee; }

.sidebar-menu { display: flex; flex-direction: column; gap: 20px; padding: 0 50px; }

.menu-item-wrapper { position: relative; display: flex; align-items: center; justify-content: flex-start; width: 100%; }

.menu-item { color: #333; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 22px; background: none; border: none; cursor: pointer; padding: 0; text-align: left; }

.menu-item:hover { opacity: 0.7; }

.menu-arrow { position: absolute; right: -35px; flex-shrink: 0; }

.menu-divider { width: calc(100% + 100px); height: 1px; background: #ddd; margin: 0 -50px; }

/* Sections that slide out next to the sidebar */
.section-content {
  position: fixed;
  left: 236px;
  top: 100px;
  padding: 20px;
  background: transparent;
  height: auto;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  z-index: 150;
}

.player-list { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }

.player-btn {
  padding: 10px 50px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.25);
  color: #333;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 22px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}

.player-btn:hover { background: rgba(255, 255, 255, 0.9); }

.clues-content { width: auto; max-width: calc(100vw - 280px); }

.clues-list { display: flex; flex-direction: column; gap: 20px; max-height: calc(100vh - 140px); overflow-y: auto; padding-right: 10px; }

.clue-item { display: flex; padding: 10px 25px; align-items: center; gap: 15px; border-radius: 25px; border: 1px solid #FEAD00; background: #FFF4D8; min-height: 50px; }

.clue-badge { padding: 10px 15px; border-radius: 20px; background: #FEAD00; color: #FFF; text-align: center; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 700; line-height: 22px; flex-shrink: 0; }

.clue-text { color: #333; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 22px; }

/* Building cards (construction section) */
.construction-content { position: fixed; left: 236px; top: 0; right: 0; bottom: 0; padding: 0; background: transparent; z-index: 150; overflow: hidden; }

.building-cards-wrapper { width: 100%; height: 100vh; overflow-x: auto; overflow-y: hidden; padding: 50px 0 50px 50px; }

.building-cards { display: flex; align-items: center; gap: clamp(20px, 5vw, 40px); height: 100%; padding-right: clamp(20px, 5vw, 50px); }

.building-card { display: flex; width: min(100%, 280px); flex-direction: column; border-radius: 25px; flex-shrink: 0; background: #EEE; box-shadow: 0 4px 8px rgba(0,0,0,0.1); aspect-ratio: 280 / 536; }

.building-card-img { width: 100%; aspect-ratio: 280 / 301; object-fit: cover; border-radius: 25px 25px 0 0; flex-shrink: 0; }

.building-card-content { display: flex; padding: clamp(10px, 4vw, 15px); flex-direction: column; align-items: center; gap: clamp(10px, 2vw, 15px); flex: 1; justify-content: space-between; }

.building-card-text { display: flex; flex-direction: column; gap: 10px; width: 100%; flex: 1; min-height: 0; }

.building-card-title { color: #666; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: clamp(13px, 3vw, 18px); font-weight: 700; line-height: 1.2; margin: 0; flex-shrink: 0; }

.building-card-desc { color: #666; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: clamp(10px, 2.5vw, 13px); font-weight: 400; line-height: 1.5; margin: 0; white-space: pre-line; overflow-y: auto; flex: 1; }

.building-card-effects { display: flex; justify-content: center; align-items: center; gap: clamp(8px, 2vw, 15px); flex-shrink: 0; width: 100%; min-height: clamp(15px, 3vw, 20px); }

.effect-item { display: flex; align-items: center; justify-content: center; gap: 4px; min-width: auto; }

.effect-icon { width: clamp(15px, 3vw, 20px); height: clamp(15px, 3vw, 20px); flex-shrink: 0; display: flex; align-items: center; justify-content: center; }

.effect-icon svg { width: 100%; height: 100%; }

.effect-value { color: #666; font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif; font-size: clamp(10px, 2.5vw, 14px); line-height: 1.4; }

.building-card-locked { filter: grayscale(100%); opacity: 0.8; }
.building-card-locked .effect-value { display: none; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-content-enter-active { transition: opacity 0.3s ease-in-out; }
.slide-content-leave-active { transition: opacity 0.2s ease-in-out; }
.slide-content-enter-from, .slide-content-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .building-cards-wrapper { padding: 30px 0 30px 15px; }
  .building-cards { gap: clamp(15px, 4vw, 30px); padding-right: clamp(15px, 4vw, 30px); }
}

</style>
