<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface StatIndicator {
  label: string
  value: number
  color: string
}

const stats = ref<StatIndicator[]>([
  { label: '經濟', value: 50, color: '#87FF7C' },
  { label: '人口', value: 50, color: '#7C7EFF' },
  { label: '健康', value: 50, color: '#FF7C7C' },
  { label: '糧食', value: 50, color: '#FFC47C' },
  { label: '電力', value: 50, color: '#FFEE7C' }
])

const happiness = ref(50)
const showNotification = ref(false)
const showSidebar = ref(false)
const sidebarSection = ref<string | null>(null)

const players = ref(['玩家一', '玩家二', '玩家三', '玩家四', '玩家五'])
const clues = ref([
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消失。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。'
])

const router = useRouter()

function toggleNotification() {
  showNotification.value = !showNotification.value
}

function closeNotification() {
  showNotification.value = false
}

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
  if (!showSidebar.value) {
    sidebarSection.value = null
  }
}

function toggleSection(section: string) {
  if (sidebarSection.value === section) {
    sidebarSection.value = null
  } else {
    sidebarSection.value = section
  }
}

function goToKnowledgeTree() {
  router.push({ name: 'knowledgetree' })
}

function goToLeaderboard() {
  router.push({ name: 'leaderboard' })
}

function goToSeaTurtleSoup() {
  router.push({ name: 'seaturtlesoup' })
}
</script>

<template>
  <div class="page-wrapper">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <button class="icon-btn" aria-label="Menu" @click="toggleSidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" :fill="showSidebar ? '#333' : 'black'"/>
            </svg>
          </button>
          <h1 class="header-title">破解安洛克</h1>
        </div>
        
        <button class="icon-btn" aria-label="Notifications" @click="toggleNotification">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" :fill="showNotification ? '#FF4C4C' : 'black'"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Notification Panel -->
    <transition name="fade">
      <div v-if="showNotification" class="notification-panel">
        <div class="notification-content">
          <div class="notification-avatar"></div>
          <div class="notification-text">
            <span class="notification-country">風車國</span>
            <span class="notification-message">建造了火力發電廠</span>
          </div>
        </div>
        <button class="notification-close" @click="closeNotification">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9.00005 7.93955L12.7126 4.22705L13.7731 5.28755L10.0606 9.00005L13.7731 12.7126L12.7126 13.7731L9.00005 10.0606L5.28755 13.7731L4.22705 12.7126L7.93955 9.00005L4.22705 5.28755L5.28755 4.22705L9.00005 7.93955Z" fill="#666666"/>
          </svg>
        </button>
      </div>
    </transition>

    <div class="main-wrapper">
      <!-- Sidebar -->
      <transition name="slide">
        <div v-if="showSidebar" class="sidebar-overlay" @click="toggleSidebar">
          <div class="sidebar" @click.stop>
            <!-- Sidebar Header -->
            <div class="sidebar-header">
              <div class="sidebar-user">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#333333"/>
                </svg>
                <span class="sidebar-username">玩家一</span>
              </div>
              <div class="sidebar-divider"></div>
            </div>

            <!-- Sidebar Menu -->
            <div class="sidebar-menu">
              <div class="menu-item-wrapper">
                <button class="menu-item" @click="toggleSection('group')">
                  組別
                </button>
                <svg v-if="sidebarSection === 'group'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE"/>
                </svg>
              </div>
              <div class="menu-divider"></div>
              
              <div class="menu-item-wrapper">
                <button class="menu-item" @click="toggleSection('clues')">
                  個人擁有線索
                </button>
                <svg v-if="sidebarSection === 'clues'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE"/>
                </svg>
              </div>
              <div class="menu-divider"></div>
              
              <div class="menu-item-wrapper">
                <button class="menu-item" @click="toggleSection('construction')">
                  國家建設狀態
                </button>
              </div>
              <div class="menu-divider"></div>
              
              <button class="menu-item">
                登出
              </button>
            </div>
          </div>

          <!-- Expanded Section Content -->
          <transition name="slide-content">
            <div v-if="sidebarSection === 'group'" class="section-content">
              <div class="player-list">
                <button 
                  v-for="player in players" 
                  :key="player"
                  class="player-btn"
                >
                  {{ player }}
                </button>
              </div>
            </div>
          </transition>

          <transition name="slide-content">
            <div v-if="sidebarSection === 'clues'" class="section-content clues-content">
              <div class="clues-list">
                <div 
                  v-for="(clue, index) in clues" 
                  :key="index"
                  class="clue-item"
                >
                  <div class="clue-badge">線索</div>
                  <div class="clue-text">{{ clue }}</div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Status Card -->
        <div class="status-card">
          <h2 class="status-title">國家狀態</h2>
          
          <div class="status-content">
            <!-- Happiness Section (Left) -->
            <div class="happiness-section">
              <span class="happiness-label">國民幸福度</span>
              <div class="happiness-values">
                <span class="happiness-percent">{{ happiness }}%</span>
                <div class="happiness-badge">
                  <span class="happiness-level">中等</span>
                </div>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="vertical-divider"></div>

            <!-- Stats Grid (Right) -->
            <div class="stats-grid">
              <div 
                v-for="stat in stats" 
                :key="stat.label"
                class="stat-item"
              >
                <svg class="stat-circle" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#D9D9D9" stroke-width="4"/>
                  <circle 
                    cx="20" cy="20" r="18" fill="none" 
                    :stroke="stat.color" 
                    stroke-width="4"
                    :stroke-dasharray="`${(stat.value / 100) * 113.1} 113.1`"
                    transform="rotate(-90 20 20)"
                  />
                  <text x="20" y="20" text-anchor="middle" dominant-baseline="middle" class="stat-value">
                    {{ stat.value }}
                  </text>
                </svg>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Mode Cards -->
        <div class="mode-cards-container">
          <div class="mode-cards">
            <!-- Quiz Mode -->
            <div class="mode-card mode-card-quiz" @click="goToKnowledgeTree">
              <div class="mode-card-inner">
                <div class="mode-icon-box">
                  <div class="mode-icon-bg">
                    <div class="knowledge-tree">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4d0b9a9cc21eab064a8bb8237147922fd829e701?width=270" 
                        alt="" 
                        class="tree-img"
                      />
                      <div class="tree-node tree-node-green" style="left: 0; top: 0"></div>
                      <div class="tree-node tree-node-yellow" style="left: 33px; top: 46px"></div>
                      <div class="tree-node tree-node-yellow" style="left: 102px; top: 46px"></div>
                      <div class="tree-node tree-node-blue" style="left: 67px; top: 93px"></div>
                      <div class="tree-node tree-node-blue" style="left: 0; top: 93px"></div>
                      <div class="tree-node tree-node-blue" style="left: 136px; top: 93px"></div>
                      <div class="tree-node tree-node-blue" style="left: 102px; top: 139px"></div>
                      <div class="tree-node tree-node-blue" style="left: 34px; top: 139px"></div>
                      <div class="tree-node tree-node-green" style="left: 68px; top: 0"></div>
                      <div class="tree-node tree-node-green" style="left: 136px; top: 0"></div>
                    </div>
                  </div>
                </div>
                <div class="mode-text">
                  <h3 class="mode-title">搶答模式</h3>
                  <p class="mode-desc">競速搶答，獲得線索與金幣吧！</p>
                </div>
              </div>
            </div>

            <!-- Leaderboard Mode -->
            <div class="mode-card mode-card-leaderboard" @click="goToLeaderboard">
              <div class="mode-card-inner">
                <div class="mode-icon-box">
                  <div class="mode-icon-bg">
                    <svg width="192" height="195" viewBox="0 0 192 195" fill="none" class="leaderboard-svg">
                      <rect width="195" height="195" rx="30" fill="#E1E1E1"/>
                      <defs>
                        <linearGradient id="leaderboardGrad" x1="23" y1="111" x2="172" y2="110" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFBD42"/>
                          <stop offset="0.5" stop-color="#FF9C42"/>
                          <stop offset="1" stop-color="#FF7B42"/>
                        </linearGradient>
                      </defs>
                      <path d="M165.463 86.7968C164.935 85.7476 163.861 85.0833 162.688 85.0833H134.75V91.2917H167.71L165.463 86.7968ZM122.004 43.3385C121.477 42.2893 120.403 41.625 119.229 41.625H75.7708C74.5975 41.625 73.5234 42.2893 72.9957 43.3385L70.7483 47.8333H124.252L122.004 43.3385ZM171.857 99.8902C171.808 99.6915 171.783 99.4929 171.702 99.3128C171.212 98.2512 170.144 97.5 168.896 97.5H128.542V57.1458C128.542 56.8913 128.455 56.6678 128.399 56.4319C128.349 56.2332 128.324 56.0345 128.244 55.8545C127.753 54.7929 126.685 54.0417 125.438 54.0417H69.5625C68.3146 54.0417 67.253 54.7929 66.7563 55.8545C66.6756 56.0345 66.6446 56.2332 66.6011 56.4319C66.5452 56.6678 66.4583 56.8913 66.4583 57.1458V91.2917H26.1042C24.8563 91.2917 23.7947 92.0429 23.298 93.1045C23.2173 93.2845 23.1863 93.4832 23.1428 93.6819C23.0869 93.9178 23 94.1413 23 94.3958V150.271C23 151.978 24.3907 153.375 26.1042 153.375H168.896C170.609 153.375 172 151.978 172 150.271V100.604C172 100.35 171.913 100.126 171.857 99.8902ZM54.0417 128.535C55.7552 128.535 57.1458 129.932 57.1458 131.646C57.1458 133.359 55.7552 134.75 54.0417 134.75H41.625C40.3709 134.75 39.2348 133.993 38.7568 132.832C38.2725 131.671 38.5395 130.336 39.4272 129.448L47.4546 121.421C49.6958 119.173 50.9375 116.187 50.9375 113.015C50.9375 111.307 49.5468 109.91 47.8333 109.91C46.1198 109.91 44.7292 111.307 44.7292 113.015C44.7292 114.728 43.3385 116.119 41.625 116.119C39.9115 116.119 38.5208 114.728 38.5208 113.015C38.5208 107.88 42.699 103.702 47.8333 103.702C52.9676 103.702 57.1458 107.88 57.1458 113.015C57.1458 117.839 55.2647 122.389 51.8439 125.81L49.1185 128.535H54.0417ZM103.715 106.812H103.708C103.708 108.526 102.318 109.917 100.604 109.917C98.8907 109.917 97.5 108.526 97.5 106.812V83.2643L96.5936 84.1707C95.383 85.3813 93.4149 85.3813 92.2043 84.1707C90.9937 82.9601 90.9937 80.992 92.2043 79.7814L98.4126 73.5731C99.3004 72.6791 100.635 72.4183 101.796 72.9026C102.957 73.3806 103.715 74.5168 103.715 75.7708V106.812ZM156.479 131.646C156.479 136.78 152.301 140.958 147.167 140.958C142.032 140.958 137.854 136.78 137.854 131.646C137.854 129.932 139.245 128.542 140.958 128.542C142.672 128.542 144.062 129.932 144.062 131.646C144.062 133.353 145.453 134.75 147.167 134.75C148.88 134.75 150.271 133.353 150.271 131.646C150.271 129.939 148.88 128.542 147.167 128.542C145.453 128.542 144.062 127.151 144.062 125.438C144.062 123.724 145.453 122.333 147.167 122.333C148.88 122.333 150.271 120.936 150.271 119.229C150.271 117.522 148.88 116.125 147.167 116.125C145.453 116.125 144.062 117.522 144.062 119.229C144.062 120.943 142.672 122.333 140.958 122.333C139.245 122.333 137.854 120.943 137.854 119.229C137.854 114.095 142.032 109.917 147.167 109.917C152.301 109.917 156.479 114.095 156.479 119.229C156.479 121.613 155.579 123.786 154.101 125.438C155.579 127.089 156.479 129.262 156.479 131.646ZM60.25 78.875H32.3125C31.1391 78.875 30.0651 79.5393 29.5374 80.5885L27.29 85.0833H60.25V78.875Z" fill="url(#leaderboardGrad)"/>
                    </svg>
                  </div>
                </div>
                <div class="mode-text">
                  <h3 class="mode-title">排行榜</h3>
                  <p class="mode-desc">看看你的對手有誰！</p>
                </div>
              </div>
            </div>

            <!-- Turtle Soup Mode -->
            <div class="mode-card mode-card-turtle" @click="goToSeaTurtleSoup">
              <div class="mode-card-inner">
                <div class="mode-icon-box">
                  <div class="mode-icon-bg mode-icon-img">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F823bf74bbf4d497b95aefbaa5df7fb6a?format=webp&width=800" 
                      alt="" 
                      class="turtle-img"
                    />
                  </div>
                </div>
                <div class="mode-text">
                  <h3 class="mode-title">海龜湯模式</h3>
                  <p class="mode-desc">解開不同���題海龜湯，建立自己的國家！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  background: #FFF;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  border-bottom: 1px solid #C2C2C2;
  background: #FFF;
  padding: 33px 50px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  align-items: flex-end;
  gap: 50px;
}

.header-title {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
}

.icon-btn:hover {
  opacity: 0.7;
}

/* Notification Panel */
.notification-panel {
  position: fixed;
  top: 100px;
  right: 50px;
  width: 350px;
  height: 56px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.notification-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url('https://api.builder.io/api/v1/image/assets/TEMP/04fc62df1623912b4d9d4e67ee4161cfe407f580?width=72') no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
}

.notification-text {
  display: flex;
  gap: 5px;
  padding-left: 6px;
}

.notification-country {
  color: #FF7C7C;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 22px;
}

.notification-message {
  color: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 22px;
}

.notification-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* Main Wrapper */
.main-wrapper {
  flex: 1;
  position: relative;
  display: flex;
}

/* Sidebar */
.sidebar-overlay {
  position: fixed;
  top: 91px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(145, 145, 145, 0.4);
  z-index: 90;
  display: flex;
}

.sidebar {
  width: 236px;
  height: 100%;
  background: #FFF;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
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

.sidebar-divider {
  width: 100%;
  height: 1px;
  background: #EEE;
}

.sidebar-menu {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-item-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item {
  width: 167px;
  color: #333;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-arrow {
  position: absolute;
  right: 7px;
  top: 3px;
}

.menu-divider {
  width: 167px;
  height: 1px;
  background: #DDD;
  margin: 0 auto;
}

/* Section Content */
.section-content {
  margin-left: 236px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  height: 100%;
  overflow-y: auto;
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

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
}

.clues-content {
  width: 100%;
  max-width: 800px;
}

.clues-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.clue-item {
  display: flex;
  padding: 13px 30px;
  align-items: center;
  gap: 15px;
  border-radius: 30px;
  border: 1px solid #FEAD00;
  background: #FFF4D8;
}

.clue-badge {
  padding: 10px 0;
  border-radius: 20px;
  background: #FEAD00;
  color: #FFF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  min-width: 74px;
  flex-shrink: 0;
}

.clue-text {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 39px 20px;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 51px;
}

/* Status Card */
.status-card {
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
  padding: 29px 51px;
  border-radius: 20px;
  border: 1px solid #E2E2E2;
  background: #FFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.status-title {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  line-height: 22px;
  margin-bottom: 40px;
}

.status-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.happiness-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.happiness-label {
  color: #333;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.happiness-values {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.happiness-percent {
  color: #7C7EFF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.happiness-badge {
  padding: 6px 0;
  border-radius: 11px;
  background: #7C7EFF;
  display: flex;
  justify-content: center;
  align-items: center;
}

.happiness-level {
  color: #1C20FF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 22px;
  padding: 0 8px;
}

.vertical-divider {
  width: 1px;
  height: 150px;
  background: #E5E5E5;
  flex-shrink: 0;
}

.stats-grid {
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.stat-circle {
  width: 40px;
  height: 40px;
}

.stat-value {
  fill: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
}

.stat-label {
  color: #666;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

/* Mode Cards */
.mode-cards-container {
  width: 100%;
  overflow-x: auto;
}

.mode-cards {
  display: flex;
  gap: 59px;
  padding-bottom: 40px;
}

.mode-card {
  width: 357px;
  height: 357px;
  padding: 24px 61px;
  border-radius: 30px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s;
}

.mode-card:hover {
  transform: scale(1.05);
}

.mode-card-quiz {
  background: linear-gradient(135deg, #8B6EF2 0%, #CF6EF2 50%, #8B6EF2 100%);
}

.mode-card-leaderboard {
  background: linear-gradient(135deg, #4A53FF 0%, #9BAEFF 50%, #4A53FF 100%);
}

.mode-card-turtle {
  background: linear-gradient(135deg, #F90 0%, #FFC300 50%, #F90 100%);
  padding: 24px 31px;
}

.mode-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mode-icon-box {
  width: 235px;
  height: 235px;
  padding: 20px;
  border-radius: 30px;
  background: rgba(243, 243, 245, 0.95);
}

.mode-icon-bg {
  width: 195px;
  height: 195px;
  border-radius: 30px;
  background: #E1E1E1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.mode-icon-img {
  overflow: hidden;
}

.knowledge-tree {
  position: relative;
  width: 170px;
  height: 161px;
}

.tree-img {
  position: absolute;
  left: 16px;
  top: 26px;
  width: 135px;
  height: 109px;
}

.tree-node {
  position: absolute;
  width: 34px;
  height: 22px;
  border-radius: 3px;
}

.tree-node-green {
  border: 1px solid #5E9858;
  background: #A8D89D;
}

.tree-node-yellow {
  border: 1px solid #F1B93C;
  background: #F9D77E;
}

.tree-node-blue {
  border: 1px solid #6289AF;
  background: #A2C4E0;
}

.leaderboard-svg {
  width: 195px;
  height: 195px;
}

.turtle-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.mode-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.mode-title {
  color: #FFF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
}

.mode-desc {
  color: #FFF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-content-enter-active,
.slide-content-leave-active {
  transition: transform 0.3s;
}

.slide-content-enter-from,
.slide-content-leave-to {
  transform: translateX(-100%);
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    padding: 20px;
  }

  .notification-panel {
    right: 20px;
    width: calc(100% - 40px);
    max-width: 350px;
  }

  .status-card {
    padding: 20px;
  }

  .status-content {
    flex-direction: column;
    gap: 20px;
  }

  .vertical-divider {
    width: 100%;
    height: 1px;
  }

  .stats-grid {
    flex-wrap: wrap;
    gap: 20px;
  }

  .mode-cards {
    gap: 30px;
  }
}
</style>
