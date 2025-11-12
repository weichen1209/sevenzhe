<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

interface StatIndicator {
  label: string
  value: number
  color: string
}

interface BuildingCard {
  id: number
  title: string
  description: string
  image: string
  effects: {
    type: string
    value: string
    icon: string
  }[]
}

const stats = ref<StatIndicator[]>([
  { label: '經濟', value: 50, color: '#87FF7C' },
  { label: '人口', value: 50, color: '#7C7EFF' },
  { label: '健康', value: 50, color: '#FF7C7C' },
  { label: '糧食', value: 50, color: '#FFC47C' },
  { label: '電力', value: 50, color: '#FFEE7C' }
])

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
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室���體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
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
    description: '透過火��發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
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
    description: '透過火力發電廠，國家電力提升、就業機會增加進而帶動經濟。\n但由於燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度���降。',
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
    description: '透過火力發電廠，國家電力提升、就業機會增��進而帶動經濟。\n但由��燃煤及燃氣發電廠釋放了大量溫室氣體，人民健康度下降，全球溫室效應加劇，全球人民健康度下降。',
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

const happiness = ref(50)
const isNotificationActive = ref(true)
const showNotification = ref(false)
const showSidebar = ref(false)
const sidebarSection = ref<string | null>(null)

const players = ref(['玩家一', '玩家二', '玩家三', '玩家四', '玩家五'])
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

const router = useRouter()
let lastScrollPosition = 0

function toggleNotification() {
  isNotificationActive.value = !isNotificationActive.value
  if (isNotificationActive.value) {
    showNotification.value = true
  } else {
    showNotification.value = false
  }
}

function closeNotification() {
  showNotification.value = false
}

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
  if (!showSidebar.value) {
    sidebarSection.value = null
    document.body.style.overflow = 'auto'
    window.removeEventListener('scroll', handleScroll)
  } else {
    lastScrollPosition = window.scrollY
    document.body.style.overflow = 'hidden'
    window.addEventListener('scroll', handleScroll)
  }
}

function handleScroll() {
  if (showSidebar.value && window.scrollY !== lastScrollPosition) {
    showSidebar.value = false
    sidebarSection.value = null
    document.body.style.overflow = 'auto'
    window.removeEventListener('scroll', handleScroll)
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

onBeforeUnmount(() => {
  if (showSidebar.value) {
    document.body.style.overflow = 'auto'
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div class="page-wrapper" :class="{ 'sidebar-open': showSidebar }">
    <!-- Sidebar Overlay (covers entire screen including header) -->
    <transition name="fade">
      <div v-if="showSidebar" class="sidebar-overlay" @click="toggleSidebar">
        <div class="sidebar" @click.stop>
          <div class="sidebar-header">
            <div class="sidebar-user">
              <button class="sidebar-close-btn" aria-label="Close menu" @click="toggleSidebar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#333333"/>
                </svg>
              </button>
              <span class="sidebar-username">玩家一</span>
            </div>
            <div class="sidebar-divider"></div>
          </div>

          <div class="sidebar-menu">
            <div class="menu-item-wrapper">
              <button class="menu-item" @click="toggleSection('group')">
                組員
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
              <svg v-if="sidebarSection === 'construction'" class="menu-arrow" width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M4.92758e-05 2.0032C4.91279e-05 0.4636 1.66672 -0.498652 3.00005 0.271148L9.91694 4.26461C11.2503 5.03441 11.2503 6.95892 9.91694 7.72872L3.00005 11.7222C1.66672 12.492 4.8823e-05 11.5297 4.90604e-05 9.99013L4.92758e-05 2.0032Z" fill="#EEEEEE"/>
              </svg>
            </div>
            <div class="menu-divider"></div>
            
            <button class="menu-item">
              登出
            </button>
          </div>
        </div>

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

        <transition name="slide-content">
          <div v-if="sidebarSection === 'construction'" class="section-content construction-content">
            <div class="building-cards-wrapper">
              <div class="building-cards">
                <div
                  v-for="card in buildingCards"
                  :key="card.id"
                  class="building-card"
                >
                  <img :src="card.image" :alt="card.title" class="building-card-img" />
                  <div class="building-card-content">
                    <div class="building-card-text">
                      <h3 class="building-card-title">{{ card.title }}</h3>
                      <p class="building-card-desc">{{ card.description }}</p>
                    </div>
                    <div class="building-card-effects">
                      <div
                        v-for="(effect, idx) in card.effects"
                        :key="idx"
                        class="effect-item"
                      >
                        <div class="effect-icon">
                          <svg v-if="effect.type === '經濟'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.584 14.5943C14.584 13.6283 13.724 12.8203 12.584 12.6343V16.5533C13.724 16.3673 14.584 15.5603 14.584 14.5943Z" fill="#87FF7C"/>
                            <path d="M9.58398 9.59428C9.58398 10.5603 10.444 11.3683 11.584 11.5543V7.63428C10.445 7.82028 9.58398 8.62828 9.58398 9.59428Z" fill="#87FF7C"/>
                            <path d="M12.084 0.594238C5.74298 0.594238 0.583984 5.75324 0.583984 12.0942C0.583984 18.4352 5.74298 23.5942 12.084 23.5942C18.425 23.5942 23.584 18.4352 23.584 12.0942C23.584 5.75324 18.426 0.594238 12.084 0.594238ZM15.584 14.5942C15.584 16.1022 14.276 17.3412 12.584 17.5512V18.0942C12.584 18.3702 12.36 18.5942 12.084 18.5942C11.808 18.5942 11.584 18.3702 11.584 18.0942V17.5502C9.89198 17.3402 8.58398 16.1012 8.58398 14.5932C8.58398 14.3172 8.80798 14.0932 9.08398 14.0932C9.35998 14.0932 9.58398 14.3172 9.58398 14.5932C9.58398 15.5592 10.444 16.3672 11.584 16.5532V12.5502C9.89198 12.3402 8.58398 11.1012 8.58398 9.59324C8.58398 8.08524 9.89198 6.84624 11.584 6.63624V6.09424C11.584 5.81824 11.808 5.59424 12.084 5.59424C12.36 5.59424 12.584 5.81824 12.584 6.09424V6.63724C14.276 6.84724 15.584 8.08624 15.584 9.59424C15.584 9.87024 15.36 10.0942 15.084 10.0942C14.808 10.0942 14.584 9.87024 14.584 9.59424C14.584 8.62824 13.724 7.82024 12.584 7.63424V11.6372C14.276 11.8472 15.584 13.0862 15.584 14.5942Z" fill="#87FF7C"/>
                          </svg>
                          <svg v-else-if="effect.type === '健康'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="#FF7C7C"/>
                            <path d="M13.5794 10.2145C13.4397 10.0673 13.2504 9.98463 13.0529 9.98463C12.8555 9.98463 12.6661 10.0673 12.5265 10.2145L12 10.7687C11.8626 10.9186 11.6983 11.0382 11.5166 11.1205C11.3349 11.2028 11.1395 11.2461 10.9417 11.2479C10.744 11.2498 10.5479 11.21 10.3649 11.1311C10.1818 11.0521 10.0156 10.9356 9.87573 10.7881C9.7359 10.6407 9.62532 10.4654 9.55044 10.2725C9.47556 10.0795 9.43788 9.8728 9.43959 9.66433C9.44131 9.45586 9.4824 9.24984 9.56045 9.05829C9.6385 8.86675 9.75195 8.6935 9.89419 8.54867L14.0864 4.12748C15.079 3.88948 16.1174 3.98743 17.0541 4.40739C17.9908 4.82736 18.7781 5.54796 19.304 6.46673C19.8299 7.38551 20.0676 8.45568 19.9834 9.52509C19.8992 10.5945 19.4973 11.6087 18.8349 12.4235L17.2653 14.0995L13.5794 10.2137V10.2145ZM5.41823 5.49497C6.18874 4.68278 7.19657 4.16828 8.27876 4.03466C9.36096 3.90104 10.4543 4.15611 11.382 4.75863L8.84054 7.43866C8.29011 8.01779 7.97635 8.8009 7.9663 9.62065C7.95625 10.4404 8.25071 11.2318 8.78676 11.8257C9.32281 12.4197 10.0579 12.769 10.8351 12.7992C11.6122 12.8293 12.3697 12.5378 12.9457 11.987L13.0529 11.8795L16.2124 15.2095L13.0529 18.5403C12.7736 18.8347 12.3949 19 12 19C11.6051 19 11.2264 18.8347 10.9471 18.5403L5.41748 12.7108C4.50988 11.7539 4 10.4561 4 9.10289C4 7.74968 4.50988 6.45188 5.41748 5.49497H5.41823Z" fill="#EEEEEE"/>
                          </svg>
                          <svg v-else-if="effect.type === '電力'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="#FFEE7C"/>
                            <path d="M10.4797 16.4289H11.2499V12.8573H12.7499V16.4289H13.5202C13.6192 15.5703 14.0789 14.8617 14.8252 14.0881C14.9099 14.0009 15.4492 13.4687 15.5129 13.393C16.0426 12.7627 16.3746 12.0028 16.4707 11.2006C16.5668 10.3985 16.4231 9.5868 16.0561 8.85906C15.6891 8.13131 15.1137 7.51709 14.3962 7.08714C13.6788 6.65719 12.8484 6.42899 12.0007 6.42881C11.153 6.42864 10.3226 6.65651 9.6049 7.08617C8.88724 7.51583 8.3116 8.12981 7.94425 8.85741C7.57691 9.585 7.43281 10.3966 7.52855 11.1988C7.62429 12.001 7.95598 12.7611 8.48541 13.3916C8.54991 13.468 9.09066 14.0009 9.17391 14.0873C9.92091 14.8617 10.3807 15.5703 10.4797 16.4289ZM10.4999 17.8575V18.5718H13.4999V17.8575H10.4999ZM7.31541 14.2859C6.60905 13.4454 6.16637 12.4319 6.03836 11.3622C5.91034 10.2925 6.10221 9.21012 6.59185 8.23974C7.08149 7.26937 7.84898 6.45047 8.80592 5.87737C9.76286 5.30428 10.8703 5.00032 12.0007 5.00049C13.1311 5.00066 14.2385 5.30497 15.1952 5.87835C16.152 6.45173 16.9192 7.27087 17.4085 8.24139C17.8978 9.21192 18.0893 10.2944 17.9609 11.364C17.8326 12.4337 17.3895 13.447 16.6829 14.2874C16.2179 14.8388 14.9999 15.7146 14.9999 16.786V18.5718C14.9999 18.9507 14.8419 19.3141 14.5606 19.582C14.2793 19.85 13.8977 20.0005 13.4999 20.0005H10.4999C10.1021 20.0005 9.72055 19.85 9.43925 19.582C9.15794 19.3141 8.99991 18.9507 8.99991 18.5718V16.786C8.99991 15.7146 7.78116 14.8388 7.31541 14.2859Z" fill="#EEEEEE"/>
                          </svg>
                          <svg v-else-if="effect.type === '人口'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.023 15.416C7.491 17.606 9.695 19 12.16 19C14.624 19 16.829 17.607 18.296 15.416C16.6317 13.8606 14.4379 12.9968 12.16 13C9.88171 12.9966 7.68751 13.8604 6.023 15.416ZM12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11Z" fill="#7C7EFF"/>
                          </svg>
                          <svg v-else-if="effect.type === '糧食'" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="#FFC47C"/>
                            <path d="M6.1868 11.9955C6.27019 11.9955 6.35296 11.9608 6.41322 11.8944C7.35114 10.853 8.57999 9.6887 10.258 8.14823L10.7717 7.67592C11.0231 7.44464 11.2933 7.22065 11.5976 6.99059C11.695 6.91694 11.7388 6.79278 11.7096 6.6747C11.5788 6.14579 11.3487 5.44159 10.9963 5.08919C10.919 5.01189 10.8058 4.98206 10.7023 5.01067C10.597 5.03867 10.5149 5.12144 10.4869 5.22613C10.1819 6.37707 8.35662 8.82017 7.52278 9.65401C7.44974 9.72705 7.37183 9.80191 7.28967 9.88043C6.8764 10.2767 6.3627 10.7703 5.92204 11.5396C5.84475 11.6747 5.88187 11.8457 6.00786 11.937C6.06203 11.9766 6.12472 11.9955 6.1868 11.9955Z" fill="white"/>
                            <path d="M15.0419 11.9995C14.5927 11.9995 10.516 12.1389 5.6968 16.9575C5.60976 17.0446 5.58359 17.176 5.63107 17.2898C5.66028 17.3598 6.3657 18.9989 8.34622 18.9989C11.922 18.9989 13.2415 17.6222 14.1149 16.711C14.1947 16.6276 14.2702 16.5485 14.3438 16.4755C15.1776 15.6416 17.6207 13.8163 18.7717 13.5114C18.877 13.4834 18.9591 13.4012 18.9871 13.2959C19.0151 13.1912 18.9853 13.0786 18.9086 13.0019C18.2896 12.3823 16.4199 11.9995 15.0419 11.9995Z" fill="white"/>
                            <path d="M17.5959 5.00049C17.4888 5.00049 17.3877 5.01205 17.2867 5.03518C16.675 5.17578 13.5064 5.9871 11.1844 8.12465L10.6695 8.59757C7.88193 11.1557 5 13.8015 5 15.6524C5 15.7978 5.01582 15.9396 5.03348 16.0802C5.04808 16.1947 5.12599 16.2908 5.23494 16.3286C5.2678 16.3401 5.30189 16.3456 5.33597 16.3456C5.41327 16.3456 5.48996 16.3158 5.54778 16.2598C9.2605 12.6664 12.983 11.3912 15.0432 11.3912C15.5265 11.3912 16.101 11.4412 16.6616 11.5312C16.7821 11.5501 16.8984 11.4978 16.9647 11.3973C18.3147 9.33829 18.8679 7.13317 18.9653 6.71139C18.9885 6.61035 19 6.50932 19 6.39976C18.9982 5.62861 18.3701 5.00049 17.5959 5.00049Z" fill="white"/>
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
    </transition>

    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="header-left">
          <button class="icon-btn" aria-label="Menu" @click="toggleSidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>
            </svg>
          </button>
          <h1 class="header-title">破解安洛克</h1>
        </div>
        
        <button class="icon-btn" aria-label="Notifications" @click="toggleNotification">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" :fill="isNotificationActive ? '#FF4C4C' : 'black'"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Notification Panel -->
    <transition name="fade">
      <div v-if="showNotification && isNotificationActive" class="notification-panel">
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

    <!-- Main Content -->
    <main class="main-content">
      <div class="status-card">
        <h2 class="status-title">國家狀態</h2>
        
        <div class="status-content">
          <div class="stats-grid">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat-item"
            >
              <svg class="stat-circle" viewBox="0 0 40 40">
                <text x="20" y="24.85" text-anchor="middle" class="stat-value">50</text>
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20Z" fill="#D9D9D9"/>
                <path
                  d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 -6.32535e-08 20 0V4C24.2435 4 28.3131 5.68571 31.3137 8.68629C34.3143 11.6869 36 15.7565 36 20C36 24.2435 34.3143 28.3131 31.3137 31.3137C28.3131 34.3143 24.2435 36 20 36V40Z"
                  :fill="stat.color"
                />
              </svg>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <div class="horizontal-divider"></div>

          <div class="happiness-section">
            <span class="happiness-label">國民幸福度</span>
            <span class="happiness-percent">{{ happiness }}%</span>
            <div class="happiness-badge">
              <span class="happiness-level">中等</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mode-cards-container">
        <div class="mode-cards">
          <div class="mode-card mode-card-quiz" @click="goToKnowledgeTree">
            <div class="mode-card-inner">
              <div class="mode-icon-box">
                <div class="mode-icon-bg">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f2d996d90dba5a808fecb0535cf90a693c13fd96?width=390"
                    alt="搶答模式"
                    class="quiz-img"
                  />
                </div>
              </div>
              <div class="mode-text-content">
                <h3 class="mode-title">搶答模式</h3>
                <p class="mode-desc">競速搶答，獲得線索與金幣吧！</p>
              </div>
            </div>
          </div>

          <div class="mode-card mode-card-leaderboard" @click="goToLeaderboard">
            <div class="mode-card-inner">
              <div class="mode-icon-box">
                <div class="mode-icon-bg">
                  <svg width="192" height="195" viewBox="0 0 192 195" fill="none">
                    <rect width="195" height="195" rx="30" fill="#E1E1E1"/>
                    <defs>
                      <filter id="filter0_d" x="19" y="39.625" width="157" height="119.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                      </filter>
                      <linearGradient id="leaderboardGrad" x1="23" y1="111" x2="172" y2="110" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFBD42"/>
                        <stop offset="0.5" stop-color="#FF9C42"/>
                        <stop offset="1" stop-color="#FF7B42"/>
                      </linearGradient>
                    </defs>
                    <g filter="url(#filter0_d)">
                      <path d="M165.463 86.7968C164.935 85.7476 163.861 85.0833 162.688 85.0833H134.75V91.2917H167.71L165.463 86.7968ZM122.004 43.3385C121.477 42.2893 120.403 41.625 119.229 41.625H75.7708C74.5975 41.625 73.5234 42.2893 72.9957 43.3385L70.7483 47.8333H124.252L122.004 43.3385ZM171.857 99.8902C171.808 99.6915 171.783 99.4929 171.702 99.3128C171.212 98.2512 170.144 97.5 168.896 97.5H128.542V57.1458C128.542 56.8913 128.455 56.6678 128.399 56.4319C128.349 56.2332 128.324 56.0345 128.244 55.8545C127.753 54.7929 126.685 54.0417 125.438 54.0417H69.5625C68.3146 54.0417 67.253 54.7929 66.7563 55.8545C66.6756 56.0345 66.6446 56.2332 66.6011 56.4319C66.5452 56.6678 66.4583 56.8913 66.4583 57.1458V91.2917H26.1042C24.8563 91.2917 23.7947 92.0429 23.298 93.1045C23.2173 93.2845 23.1863 93.4832 23.1428 93.6819C23.0869 93.9178 23 94.1413 23 94.3958V150.271C23 151.978 24.3907 153.375 26.1042 153.375H168.896C170.609 153.375 172 151.978 172 150.271V100.604C172 100.35 171.913 100.126 171.857 99.8902ZM54.0417 128.535C55.7552 128.535 57.1458 129.932 57.1458 131.646C57.1458 133.359 55.7552 134.75 54.0417 134.75H41.625C40.3709 134.75 39.2348 133.993 38.7568 132.832C38.2725 131.671 38.5395 130.336 39.4272 129.448L47.4546 121.421C49.6958 119.173 50.9375 116.187 50.9375 113.015C50.9375 111.307 49.5468 109.91 47.8333 109.91C46.1198 109.91 44.7292 111.307 44.7292 113.015C44.7292 114.728 43.3385 116.119 41.625 116.119C39.9115 116.119 38.5208 114.728 38.5208 113.015C38.5208 107.88 42.699 103.702 47.8333 103.702C52.9676 103.702 57.1458 107.88 57.1458 113.015C57.1458 117.839 55.2647 122.389 51.8439 125.81L49.1185 128.535H54.0417ZM103.715 106.812H103.708C103.708 108.526 102.318 109.917 100.604 109.917C98.8907 109.917 97.5 108.526 97.5 106.812V83.2643L96.5936 84.1707C95.383 85.3813 93.4149 85.3813 92.2043 84.1707C90.9937 82.9601 90.9937 80.992 92.2043 79.7814L98.4126 73.5731C99.3004 72.6791 100.635 72.4183 101.796 72.9026C102.957 73.3806 103.715 74.5168 103.715 75.7708V106.812ZM156.479 131.646C156.479 136.78 152.301 140.958 147.167 140.958C142.032 140.958 137.854 136.78 137.854 131.646C137.854 129.932 139.245 128.542 140.958 128.542C142.672 128.542 144.062 129.932 144.062 131.646C144.062 133.353 145.453 134.75 147.167 134.75C148.88 134.75 150.271 133.353 150.271 131.646C150.271 129.939 148.88 128.542 147.167 128.542C145.453 128.542 144.062 127.151 144.062 125.438C144.062 123.724 145.453 122.333 147.167 122.333C148.88 122.333 150.271 120.936 150.271 119.229C150.271 117.522 148.88 116.125 147.167 116.125C145.453 116.125 144.062 117.522 144.062 119.229C144.062 120.943 142.672 122.333 140.958 122.333C139.245 122.333 137.854 120.943 137.854 119.229C137.854 114.095 142.032 109.917 147.167 109.917C152.301 109.917 156.479 114.095 156.479 119.229C156.479 121.613 155.579 123.786 154.101 125.438C155.579 127.089 156.479 129.262 156.479 131.646ZM60.25 78.875H32.3125C31.1391 78.875 30.0651 79.5393 29.5374 80.5885L27.29 85.0833H60.25V78.875Z" fill="url(#leaderboardGrad)"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="mode-text">
                <h3 class="mode-title">排行榜</h3>
                <p class="mode-desc">看看你的對手有誰！</p>
              </div>
            </div>
          </div>

          <div class="mode-card mode-card-turtle" @click="goToSeaTurtleSoup">
            <div class="mode-card-inner">
              <div class="mode-icon-box">
                <div class="mode-icon-bg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F07579a4373634a9cae301a29b729ecef%2F7cf59e86c9114cf69282ae8353e29bcb?format=webp&width=800"
                    alt=""
                    class="turtle-img"
                  />
                </div>
              </div>
              <div class="mode-text">
                <h3 class="mode-title">海龜湯模式</h3>
                <p class="mode-desc">解開不同主題海龜湯，建立自己的國家！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  background: #FFF;
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
  background: #FFF;
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
  background: #EEE;
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
  background: #DDD;
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
  border: 1px solid #FEAD00;
  background: #FFF4D8;
  min-height: 50px;
}

.clue-badge {
  padding: 10px 15px;
  border-radius: 20px;
  background: #FEAD00;
  color: #FFF;
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

.main-content {
  flex: 1;
  padding: 39px 20px;
  display: flex;
  flex-direction: column;
  gap: 51px;
}

.status-card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 29px 51px;
  border-radius: 20px;
  border: 1px solid #E2E2E2;
  background: #FFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  align-self: center;
}

.status-title {
  color: #333;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 40px;
}

.status-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.happiness-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-content: center;
}

.happiness-label {
  color: #333;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.happiness-percent {
  color: #7C7EFF;
  text-align: center;
  font-family: Arial, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
}

.happiness-badge {
  padding: 6px;
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
}

.horizontal-divider {
  width: 100%;
  height: 1px;
  background: #E5E5E5;
}

.stats-grid {
  display: flex;
  align-items: center;
  gap: 60px;
  flex: 1;
  justify-content: center;
  width: 100%;
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

.mode-cards-container {
  width: calc(100vw - 0px);
  margin-left: calc(-50vw + 50%);
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 20px;
  scroll-behavior: smooth;
}

.mode-cards {
  display: flex;
  gap: 59px;
  padding: 23px 20px;
  margin: 0 auto;
  width: fit-content;
}

.mode-card {
  width: 357px;
  height: 357px;
  border-radius: 30px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s;
  position: relative;
}

.mode-card:hover {
  transform: scale(1.05);
}

.mode-card-quiz {
  background: linear-gradient(135deg, #8B6EF2 0%, #CF6EF2 50%, #8B6EF2 100%);
  padding: 24px 61px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mode-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.mode-card-leaderboard {
  background: linear-gradient(135deg, #4A53FF 0%, #9BAEFF 50%, #4A53FF 100%);
  padding: 24px 61px;
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
  height: 100%;
}

.mode-icon-box {
  width: 235px;
  height: 235px;
  padding: 20px;
  border-radius: 30px;
  background: rgba(243, 243, 245, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mode-icon-bg {
  width: 195px;
  height: 195px;
  border-radius: 30px;
  background: #E1E1E1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.turtle-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.quiz-img {
  width: 195px;
  height: 195px;
  border-radius: 30px;
  object-fit: cover;
}

.mode-text-content,
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
  font-weight: 400;
  line-height: 22px;
}

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
  background: #EEE;
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

  .status-card {
    padding: 20px;
  }

  .status-content {
    gap: 30px;
  }

  .horizontal-divider {
    width: 100%;
  }

  .stats-grid {
    flex-wrap: wrap;
    gap: 40px;
  }

  .mode-cards {
    gap: 30px;
  }

  .building-cards-wrapper {
    padding: 30px 0 30px 15px;
  }

  .building-cards {
    gap: clamp(15px, 4vw, 30px);
    padding-right: clamp(15px, 4vw, 30px);
  }

  .building-card {
    width: clamp(200px, 75vw, 280px);
  }
}

@media (max-width: 600px) {
  .stats-grid {
    gap: 15px;
  }

  .stat-item {
    width: calc(33.33% - 10px);
  }
}
</style>
