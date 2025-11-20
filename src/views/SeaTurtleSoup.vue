<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'

type Domain = { name: string; color: string; image?: string }

type BuildingCard = {
  id: number
  title: string
  description: string
  image: string
  effects: { type: string; value: string; icon?: string }[]
}

const router = useRouter()

const domains = ref<Domain[]>([
  { name: '火域', color: '#FF6B6B', image: '火域.png' },
  { name: '風域', color: '#A8D8EA', image: '風域.png' },
  { name: '土域', color: '#AA7E5A', image: '土域.png' },
  { name: '光域', color: '#FFE66D', image: '光域.png' },
  { name: '雷域', color: '#B8E994', image: '雷域.png' },
  { name: '木域', color: '#6BCF7F', image: '木域.png' },
  { name: '金域', color: '#FFD93D', image: '金域.png' },
  { name: '水域', color: '#4FACFE', image: '水域.png' },
  { name: '空域', color: '#A29BFE', image: '空域.png' }
])

const centerDomain = computed(() => {
  return domains.value.find((d) => d.name === '空域') || { name: '空域', color: '#A29BFE', image: '空域.png' }
})

const surroundingDomains = computed(() => domains.value.filter((d) => d.name !== centerDomain.value.name))

const selectedDomain = ref<string | null>(null)
const progressText = ref('0 / 9')
const cluesFoundText = ref('0 / 40')
const showCluesModal = ref(false)

const showSidebar = ref(false)
const sidebarSection = ref<string | null>(null)
const players = ref<string[]>(['玩家一', '玩家二', '玩家三'])
const buildingCards = ref<BuildingCard[]>([
  {
    id: 1,
    title: '火力發電廠',
    description: '透過建設火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2Fc4de6010b3be41548b416bd62c8334da?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 2,
    title: '堰塞湖',
    description: '處理堰塞湖，花費了大量經濟及人力。\n但因為妥善處理，於後續的大雨中並無造成人口傷亡，同時糧食也順利收成。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2Fd74f6bb3a084490baaf984f7e1cc2e2d?format=webp&width=800',
    effects: [
      { type: '經濟', value: '-3', icon: '#87FF7C' },
      { type: '人口', value: '-1', icon: '#7C7EFF' },
      { type: '糧食', value: '+2', icon: '#FFC47C' }
    ]
  },
  {
    id: 3,
    title: '金域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2Ff6d013861f294f4c90630637a06577e7?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 4,
    title: '光域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2Fd2932616865f401ebc49890ae648582f?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 5,
    title: '水域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F78a89b8524fd40f3a369c1ea1122945a?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 6,
    title: '雷域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F790594077862490d806b7169d2887e8b?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 7,
    title: '木域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F96ae0937fafa460c9863aa786605a37c?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 8,
    title: '風域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F2333e1220b3a4077a859f4cb9b5ec726?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  },
  {
    id: 9,
    title: '空域建設',
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F36288cf9aad0457f901b18157254c94b?format=webp&width=800',
    effects: [
      { type: '經濟', value: '+2', icon: '#87FF7C' },
      { type: '健康', value: '-3', icon: '#FF7C7C' },
      { type: '電力', value: '+3', icon: '#FFEE7C' }
    ]
  }
])

const clues = ref([
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。'
])

const isNotificationActive = ref(true)
const showNotification = ref(true)

function getDomainPosition(index: number) {
  const total = surroundingDomains.value.length
  if (total === 0) return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }
  const step = 360 / total
  const angleDeg = index * step - 90 // start from top
  const angle = (angleDeg * Math.PI) / 180
  const radius = 40
  const center = 50
  const x = center + radius * Math.cos(angle)
  const y = center + radius * Math.sin(angle)
  return { left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }
}

function getLineEndX(index: number) {
  const total = surroundingDomains.value.length
  if (total === 0) return 100
  const step = 360 / total
  const angleDeg = index * step - 90
  const angle = (angleDeg * Math.PI) / 180
  const radius = 40
  return 100 + radius * Math.cos(angle)
}

function getLineEndY(index: number) {
  const total = surroundingDomains.value.length
  if (total === 0) return 100
  const step = 360 / total
  const angleDeg = index * step - 90
  const angle = (angleDeg * Math.PI) / 180
  const radius = 40
  return 100 + radius * Math.sin(angle)
}

function selectDomain(domain: Domain) {
  console.log('[SeaTurtleSoup] selectDomain called:', domain)
  selectedDomain.value = domain.name
  const routeName = 'seaturtlesoup-domain'
  try {
    router.push({ name: routeName, params: { domain: domain.name } })
  } catch (e) {
    // fallback to path
    router.push(`/sea-turtle-soup/${encodeURIComponent(domain.name)}`)
  }
}

function handleBack() {
  router.push('/')
}
function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function closeSidebar() {
  showSidebar.value = false
}

function setSidebarSection(s: string | null) {
  sidebarSection.value = s
}
</script>

<template>
  <div class="page-wrapper">
    <Header @toggle-sidebar="toggleSidebar" />

    <main class="main-content seaturtle-main">
      <div class="seaturtle-topbar">
        <button class="seaturtle-back-btn" @click="handleBack">
          <svg class="seaturtle-back-icon" viewBox="0 0 24 24" fill="none">
            <path d="M7.828 10.9999L13.192 5.63592L11.778 4.22192L4 11.9999L11.778 19.7779L13.192 18.3639L7.828 12.9999H20V10.9999H7.828Z" fill="white" />
          </svg>
          <span>返回</span>
        </button>

        <div class="seaturtle-title-block">
          <div class="seaturtle-title-row">
            <svg class="seaturtle-title-icon" viewBox="0 0 19 19" fill="none">
              <path d="M4.9362 5.10879C3.92686 6.15639 3.30893 7.51953 3.18628 8.96909C3.06363 10.4186 3.44373 11.8662 4.2627 13.0685C5.08167 14.2708 6.28957 15.1546 7.68338 15.5711C9.07718 15.9877 10.5719 15.9118 11.9163 15.3561C12.0074 14.7624 11.8079 14.1924 11.7263 13.9929C11.5442 13.5495 10.9442 12.7919 9.9427 11.7414C9.67512 11.4603 9.69254 11.2442 9.78833 10.6037L9.79862 10.5317C9.86354 10.0931 9.97279 9.83345 11.4492 9.59912C12.1997 9.48037 12.3969 9.77962 12.67 10.1952L12.7618 10.3314C13.0215 10.7114 13.2139 10.7985 13.5044 10.9299C13.635 10.9893 13.7973 11.0645 14.015 11.1872C14.5312 11.4825 14.5312 11.8158 14.5312 12.5457V12.6288C14.5312 12.9384 14.5011 13.2107 14.4536 13.4474C15.0611 12.685 15.4845 11.7926 15.6907 10.8398C15.8969 9.88701 15.8804 8.89946 15.6426 7.95406C15.4047 7.00866 14.9519 6.13091 14.3193 5.38915C13.6867 4.64738 12.8915 4.06162 11.9955 3.67745C11.5577 3.97275 10.9568 4.39154 10.747 4.67891C10.6402 4.82537 10.4882 5.57508 9.99495 5.63683C9.8667 5.65266 9.69333 5.64158 9.50966 5.6297C9.01725 5.59804 8.34433 5.5545 8.129 6.13954C7.99204 6.51004 7.96829 7.51704 8.41083 8.03954C8.48208 8.12266 8.49554 8.27704 8.44725 8.45041C8.38391 8.67762 8.25645 8.81616 8.21608 8.84466C8.14008 8.80033 7.98808 8.62379 7.88437 8.50425C7.63658 8.21529 7.32625 7.85508 6.92566 7.74425C6.78 7.70387 6.62008 7.67062 6.46412 7.63737C6.0295 7.54633 5.53787 7.44262 5.42308 7.19879C5.33916 7.01987 5.33995 6.77366 5.33995 6.514C5.33995 6.18387 5.33995 5.811 5.17845 5.4492C5.12231 5.32009 5.03979 5.20414 4.9362 5.10879ZM9.50016 17.4168C5.12779 17.4168 1.5835 13.8725 1.5835 9.50016C1.5835 5.12779 5.12779 1.5835 9.50016 1.5835C13.8725 1.5835 17.4168 5.12779 17.4168 9.50016C17.4168 13.8725 13.8725 17.4168 9.50016 17.4168Z" />
            </svg>
            <h2>海龜湯</h2>
          </div>
        </div>
      </div>

      <div class="seaturtle-grid">
        <div class="wheel-card">
          <div class="wheel-inner">
            <div class="wheel-container">
              <div class="wheel-lines">
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                  <circle cx="100" cy="100" r="40" fill="rgba(255,255,255,0.2)" />
                  <g>
                    <line v-for="(d, i) in surroundingDomains" :key="i" x1="100" y1="100" :x2="getLineEndX(i)" :y2="getLineEndY(i)" stroke="rgba(255,255,255,0.3)" />
                  </g>
                </svg>

                <button class="domain-center" @click="selectDomain(centerDomain)">
                  <div class="center-circle">
                    <img v-if="centerDomain.image" :src="centerDomain.image" :alt="centerDomain.name" class="domain-img" />
                    <div v-else :style="{ background: centerDomain.color }" class="center-fallback"></div>
                  </div>
                  <div class="domain-label">{{ centerDomain.name }}</div>
                </button>

                <button
                  v-for="(domain, idx) in surroundingDomains"
                  :key="domain.name"
                  class="domain-item"
                  :class="{ 'domain-selected': selectedDomain === domain.name }"
                  :style="getDomainPosition(idx)"
                  @click="selectDomain(domain)"
                >
                  <div class="domain-circle">
                    <img v-if="domain.image" :src="domain.image" :alt="domain.name" class="domain-img" />
                    <div v-else :style="{ background: domain.color }" class="domain-fallback"></div>
                  </div>
                  <div class="domain-label">{{ domain.name }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="seaturtle-right">
          <div class="info-card">
            <div class="info-card-title-row">
              <div class="info-card-icon">🏆</div>
              <div class="info-card-title">完成進度</div>
            </div>
            <div class="info-card-main-text">
              <div class="info-card-main-number">{{ progressText }}</div>
            </div>
          </div>

          <div class="info-card" @click="showCluesModal = true">
            <div class="info-card-title-row">
              <div class="info-card-icon">🔎</div>
              <div class="info-card-title">已知線索</div>
            </div>
            <div class="info-card-main-text">
              <div class="info-card-main-number" >{{ cluesFoundText }}</div>
            </div>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="showCluesModal" class="clues-modal-overlay" @click.self="showCluesModal = false">
          <div class="clues-modal">
            <button class="clues-modal-close" @click="showCluesModal = false">
              <svg class="clues-modal-close-icon" viewBox="0 0 37 36" fill="none">
                <path d="M5.50098 4.49951L32.501 31.4995" stroke="#333" stroke-width="5" stroke-linecap="round" />
                <path d="M32.1396 4.13965L5.13965 31.1397" stroke="#333" stroke-width="5" stroke-linecap="round" />
              </svg>
            </button>

            <div class="clues-modal-inner">
              <div v-for="(clue, index) in clues" :key="index" class="clue-item">
                <div class="clue-badge">線索</div>
                <div class="clue-text">{{ clue }}</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </main>

  <Sidebar
    v-if="showSidebar"
    :showSidebar="showSidebar"
    :sidebarSection="sidebarSection"
    :buildingCards="buildingCards"
    :players="players"
    :clues="clues"
    @toggle-sidebar="closeSidebar"
    @toggle-section="setSidebarSection"
  />
    </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
}

.page-wrapper.sidebar-open::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(145, 145, 145, 0.4);
  z-index: 95;
  pointer-events: none;
}

/* Header */
.header {
  border-bottom: 1px solid #c2c2c2;
  background: #fff;
  padding: 33px 50px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

/* Notification */
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
  background: url('https://api.builder.io/api/v1/image/assets/TEMP/04fc62df1623912b4d9d4e67ee4161cfe407f580?width=72')
    no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
}

.notification-text {
  display: flex;
  gap: 5px;
  padding-left: 6px;
}

.notification-country {
  color: #ff7c7c;
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

/* Sidebar */
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

.sidebar-close-btn:hover {
  opacity: 0.7;
}

.sidebar-divider {
  width: 100%;
  height: 1px;
  background: #eee;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 50px;
}

.menu-item-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.menu-item {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.menu-item:hover {
  opacity: 0.7;
}

.menu-arrow {
  position: absolute;
  right: -35px;
  flex-shrink: 0;
}

.menu-divider {
  width: calc(100% + 100px);
  height: 1px;
  background: #ddd;
  margin: 0 -50px;
}

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

.player-list {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
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
  white-space: nowrap;
}

.player-btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

.clues-content {
  width: auto;
  max-width: calc(100vw - 280px);
}

.clues-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  padding-right: 10px;
}

.clue-item {
  display: flex;
  padding: 10px 25px;
  align-items: center;
  gap: 15px;
  border-radius: 25px;
  border: 1px solid #fead00;
  background: #fff4d8;
  min-height: 50px;
}

.clue-badge {
  padding: 10px 15px;
  border-radius: 20px;
  background: #fead00;
  color: #fff;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  flex-shrink: 0;
}

.clue-text {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

/* Main */
.main-content {
  flex: 1;
  padding: 39px 50px 40px;
}

/* 海龜湯整體背景 */
.seaturtle-main {
  background: linear-gradient(135deg, #ffb347 0%, #ffcc33 40%, #ff9447 100%);
  border-radius: 0;
  margin: 0 -50px -40px;
  padding: 30px 60px 60px;
}

/* 上方：返回 + title */
.seaturtle-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.seaturtle-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
}

.seaturtle-back-icon {
  width: 20px;
  height: 20px;
}

.seaturtle-title-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.seaturtle-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.seaturtle-title-row h2 {
  color: #fff;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.seaturtle-title-icon {
  width: 18px;
  height: 18px;
  fill: #ff5739;
}

.seaturtle-subtitle {
  color: #fff;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 40px;
}

/* Grid：左輪盤 + 右資訊 */
.seaturtle-grid {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.3fr);
  gap: 32px;
}

/* 左側輪盤卡片 */
.wheel-card {
  background: #f7f7f7;
  border-radius: 30px;
  padding: 32px 24px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.wheel-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheel-container {
  position: relative;
  width: min(380px, 100%);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}

/* 連線 SVG */
.wheel-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* allow buttons inside wheel to receive pointer events even if parent has pointer-events:none */
.wheel-lines .domain-item,
.wheel-lines .domain-center {
  pointer-events: auto;
}

/* 中心域 */
.domain-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.center-circle .domain-img {
  width: 70%;
  height: 70%;
  object-fit: cover;
}

.center-fallback,
.domain-fallback {
  width: 100%;
  height: 100%;
}

/* 周圍域 Button */
.domain-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.domain-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.domain-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.domain-label {
  margin-top: 4px;
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
}

/* 選中狀態 */
.domain-selected .domain-circle {
  outline: 3px solid rgba(255, 255, 255, 0.9);
  transform: scale(1.05);
  transition: transform 0.15s ease-out;
}

/* 右側資訊區 */
.seaturtle-right {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* 五屬性 pill */
.stats-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  background: #fff;
  padding: 16px 24px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.stats-pill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 40px;
}

.stats-pill-icon {
  width: 14px;
  height: 14px;
  border-radius: 999px;
}

.stats-pill-value {
  color: #555;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
}

/* 通用 info 卡片 */
.info-card {
  border-radius: 26px;
  background: #f5f5f5;
  padding: 20px 24px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
}

.info-card-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-card-icon {
  font-size: 20px;
}

.info-card-title {
  color: #555;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
}

.info-card-main-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-card-main-number {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 700;
}

.info-card-arrow {
  width: 22px;
  height: 22px;
}

/* 完成進度卡 */
.progress-card {
  background: #f7f7f7;
}

/* 已知線索卡 */
.clues-card-main {
  background: #f7f7f7;
  cursor: pointer;
}

/* 海龜湯 線索 Modal */
.clues-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 250;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.clues-modal {
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 85vh;
  border-radius: 30px;
  background: #fff;
  padding: 30px 30px;
  overflow: hidden;
}

.clues-modal-close {
  position: absolute;
  top: -18px;
  right: -18px;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: none;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.clues-modal-close-icon {
  width: 30px;
  height: 30px;
}

.clues-modal-inner {
  max-height: calc(85vh - 60px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-content-enter-active {
  transition: opacity 0.3s ease-in-out;
}

.slide-content-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.slide-content-enter-from,
.slide-content-leave-to {
  opacity: 0;
}

/* 建設 cards（側欄） */
.construction-content {
  position: fixed;
  left: 236px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  background: transparent;
  z-index: 150;
  overflow: hidden;
}

.building-cards-wrapper {
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 50px 0 50px 50px;
}

.building-cards {
  display: flex;
  align-items: center;
  gap: clamp(20px, 5vw, 40px);
  height: 100%;
  padding-right: clamp(20px, 5vw, 50px);
}

.building-card {
  display: flex;
  width: min(100%, 280px);
  flex-direction: column;
  border-radius: 25px;
  flex-shrink: 0;
  background: #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  aspect-ratio: 280 / 536;
}

.building-card-img {
  width: 100%;
  aspect-ratio: 280 / 301;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
  flex-shrink: 0;
}

.building-card-content {
  display: flex;
  padding: clamp(10px, 4vw, 15px);
  flex-direction: column;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  flex: 1;
  justify-content: space-between;
}

.building-card-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  flex: 1;
  min-height: 0;
}

.building-card-title {
  color: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: clamp(13px, 3vw, 18px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  flex-shrink: 0;
}

.building-card-desc {
  color: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: clamp(10px, 2.5vw, 13px);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
  overflow-y: auto;
  flex: 1;
}

.building-card-effects {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 2vw, 15px);
  flex-shrink: 0;
  width: 100%;
  min-height: clamp(15px, 3vw, 20px);
}

.effect-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: auto;
}

.effect-icon {
  width: clamp(15px, 3vw, 20px);
  height: clamp(15px, 3vw, 20px);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.effect-icon svg {
  width: 100%;
  height: 100%;
}

.effect-value {
  color: #666;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: clamp(10px, 2.5vw, 14px);
  line-height: 1.4;
}

.building-card-locked {
  filter: grayscale(100%);
  opacity: 0.8;
}

.building-card-locked .effect-value {
  display: none;
}

/* RWD */
@media (max-width: 1024px) {
  .seaturtle-main {
    padding: 24px 20px 40px;
    margin: 0 -20px -40px;
  }

  .seaturtle-grid {
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.3fr);
  }
}

@media (max-width: 768px) {
  .header {
    padding: 20px;
  }

  .header-left {
    gap: 20px;
  }

  .notification-panel {
    right: 20px;
    width: calc(100% - 40px);
    max-width: 350px;
  }

  .main-content {
    padding: 20px;
  }

  .seaturtle-main {
    padding: 24px 16px 32px;
    margin: 0 -16px -32px;
  }

  .seaturtle-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .wheel-card {
    padding: 20px 12px;
  }

  .seaturtle-topbar {
    align-items: flex-start;
  }

  .seaturtle-title-block {
    align-items: center;
  }
}

@media (max-width: 600px) {
  .stats-pill {
    flex-wrap: wrap;
    row-gap: 10px;
  }

  .stats-pill-item {
    flex: 1 0 20%;
  }
}
</style>
