<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-blue via-primary-lightblue to-primary-blue">
    <!-- Header -->
    <header class="bg-white border-b border-gray-300">
      <metaa charset="UTF-8" />
      <div class="flex items-center justify-between px-6 py-4 md:px-12 md:py-8">
        <div class="flex items-center gap-8 md:gap-12">
          <button class="text-gray-800 hover:text-gray-600 transition-colors" aria-label="Menu">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"/>
            </svg>
          </button>
          <h1 class="text-lg text-gray-800 font-normal">破解安洛克</h1>
        </div>
        <div class="flex items-center gap-8 md:gap-12">
          <button class="text-gray-800 hover:text-gray-600 transition-colors" aria-label="Notifications">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="relative px-6 py-8 md:px-12">
      <!-- Back Button -->
      <button 
        @click="handleBack" 
        class="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-6"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.828 10.9999L13.192 5.63592L11.778 4.22192L4 11.9999L11.778 19.7779L13.192 18.3639L7.828 12.9999H20V10.9999H7.828Z" fill="currentColor"/>
        </svg>
        <span class="text-lg">返回</span>
      </button>

      <div class="max-w-4xl mx-auto">
        <!-- Title Section -->
        <div class="flex flex-col items-center gap-2 mb-6">
          <div class="flex items-end gap-2">
            <svg class="w-6 h-6" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.328 10.965C11.382 10.985 11.439 11 11.5 11C13.797 11 17 8.147 17 3.5C17 3.224 16.776 3 16.5 3H13.869C13.932 2.367 13.972 1.7 13.985 1H14.5C14.776 1 15 0.776 15 0.5C15 0.224 14.776 0 14.5 0H2.5C2.224 0 2 0.224 2 0.5C2 0.776 2.224 1 2.5 1H3.015C3.028 1.7 3.068 2.367 3.131 3H0.5C0.224 3 0 3.224 0 3.5C0 8.147 3.203 11 5.5 11C5.561 11 5.618 10.985 5.672 10.965C6.248 11.883 6.751 12.453 7 12.708V14.092C6.419 14.299 6 14.849 6 15.5V16H3.5C3.224 16 3 16.224 3 16.5C3 16.776 3.224 17 3.5 17H4V23H3.5C3.224 23 3 23.224 3 23.5C3 23.776 3.224 24 3.5 24H13.5C13.776 24 14 23.776 14 23.5C14 23.224 13.776 23 13.5 23H13V17H13.5C13.776 17 14 16.776 14 16.5C14 16.224 13.776 16 13.5 16H11V15.5C11 14.849 10.581 14.299 10 14.092V12.708C10.249 12.453 10.753 11.883 11.328 10.965ZM13.748 4H15.987C15.792 7.667 13.484 9.652 11.906 9.954C12.645 8.535 13.377 6.566 13.748 4ZM1.013 4H3.252C3.623 6.567 4.355 8.536 5.094 9.954C3.516 9.652 1.207 7.667 1.013 4ZM5.087 2.543C5.063 2.268 5.267 2.025 5.541 2.001C5.823 1.966 6.059 2.18 6.083 2.456C6.467 6.84 8.096 9.325 8.779 10.189C8.95 10.406 8.913 10.72 8.696 10.892C8.604 10.964 8.495 10.999 8.386 10.999C8.239 10.999 8.092 10.934 7.993 10.809C7.077 9.648 5.479 7.03 5.087 2.543ZM10.5 18C10.776 18 11 18.224 11 18.5V20.5C11 20.776 10.776 21 10.5 21H6.5C6.224 21 6 20.776 6 20.5V18.5C6 18.224 6.224 18 6.5 18H10.5Z" fill="#FEAD00"/>
            </svg>
            <h2 class="text-sm font-bold text-white">搶答排行榜</h2>
          </div>
          <p class="text-sm text-white text-center">查看各科目排行與總排行</p>
        </div>

        <!-- Content Card -->
        <div class="rounded-[30px] bg-white p-6 md:p-8">
          <!-- Category Tabs -->
          <div class="flex gap-2 p-2 rounded-[20px] bg-gray-200 mb-6 overflow-x-auto">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-1 rounded-[20px] text-sm whitespace-nowrap transition-colors',
                selectedCategory === category
                  ? 'bg-white text-gray-800'
                  : 'text-gray-800 hover:bg-gray-100'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <!-- Leaderboard List -->
          <div class="flex flex-col gap-5 max-h-[500px] overflow-y-auto pr-2">
            <div
              v-for="(player, index) in filteredPlayers"
              :key="player.id"
              :class="[
                'flex flex-col gap-4 p-4 rounded-[20px] border',
                index < 3
                  ? 'border-[#FEAD00] bg-[#FFF4D8]'
                  : 'border-gray-300 bg-white'
              ]"
            >
              <!-- Player Name and Rank -->
              <div class="flex items-center gap-2">
                <!-- Rank Badge -->
                <div v-if="index === 0" class="flex-shrink-0">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9102 0.214C19.8162 0.08 19.6632 0 19.5002 0H14.5002C14.2892 0 14.1002 0.133 14.0292 0.332L11.9812 6.074L9.97219 0.334C9.90219 0.133 9.71219 0 9.50019 0H4.50019C4.33719 0 4.18419 0.08 4.09019 0.213C3.99719 0.346 3.97419 0.516 4.03019 0.671L7.34319 9.779C7.39319 9.917 7.50219 10.027 7.64019 10.077C7.69619 10.098 7.75519 10.108 7.81319 10.108C7.89819 10.108 7.98419 10.086 8.06019 10.043C9.26219 9.361 10.6242 9 12.0002 9C12.0502 9 12.0992 9.004 12.1482 9.007L12.2862 9.015C12.2962 9.016 12.3062 9.016 12.3152 9.015C12.3922 9.024 12.4722 8.995 12.5472 8.953L12.7602 9.025C12.7952 9.037 12.8302 9.045 12.8662 9.048C13.9492 9.165 14.9832 9.499 15.9402 10.042C16.0162 10.085 16.1022 10.107 16.1872 10.107C16.2452 10.107 16.3042 10.097 16.3602 10.076C16.4982 10.025 16.6072 9.916 16.6572 9.778L19.9702 0.67C20.0262 0.518 20.0032 0.347 19.9102 0.214ZM12.0002 10C8.14019 10 5.00019 13.14 5.00019 17C5.00019 20.86 8.14019 24 12.0002 24C15.8602 24 19.0002 20.86 19.0002 17C19.0002 13.14 15.8602 10 12.0002 10ZM13.0002 20.5C13.0002 20.776 12.7762 21 12.5002 21C12.2242 21 12.0002 20.776 12.0002 20.5V14.31L10.7242 14.948C10.4762 15.071 10.1772 14.971 10.0532 14.724C9.92919 14.477 10.0302 14.177 10.2772 14.053L12.2772 13.053C12.4322 12.975 12.6152 12.983 12.7632 13.075C12.9102 13.167 13.0002 13.327 13.0002 13.5V20.5Z" fill="#FFBD42"/>
                  </svg>
                </div>
                <div v-else-if="index === 1" class="flex-shrink-0">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 10C8.14118 10 5.00018 13.14 5.00018 17C5.00018 20.86 8.14118 24 12.0002 24C15.8592 24 19.0002 20.86 19.0002 17C19.0002 13.14 15.8592 10 12.0002 10ZM13.5002 20C13.7762 20 14.0002 20.224 14.0002 20.5C14.0002 20.776 13.7762 21 13.5002 21H10.5002C10.3112 21 10.1382 20.893 10.0532 20.724C9.96818 20.555 9.98718 20.352 10.1002 20.201L12.2002 17.401C12.7162 16.712 13.0002 15.86 13.0002 15C13.0002 14.449 12.5522 14 12.0002 14C11.4482 14 11.0002 14.449 11.0002 15V15.5C11.0002 15.776 10.7762 16 10.5002 16C10.2242 16 10.0002 15.776 10.0002 15.5V15C10.0002 13.897 10.8972 13 12.0002 13C13.1032 13 14.0002 13.897 14.0002 15C14.0002 16.075 13.6452 17.141 12.9992 18L11.5002 20H13.5002ZM19.9092 0.213C19.8162 0.08 19.6632 0 19.5002 0H14.5002C14.2892 0 14.1012 0.133 14.0292 0.332L11.9812 6.076L9.97218 0.335C9.90118 0.134 9.71318 0 9.50018 0H4.50018C4.33718 0 4.18418 0.08 4.09118 0.213C3.99718 0.346 3.97518 0.517 4.03018 0.671L7.34318 9.779C7.39318 9.917 7.50218 10.027 7.64018 10.077C7.69618 10.098 7.75418 10.108 7.81318 10.108C7.89918 10.108 7.98418 10.086 8.06018 10.043C9.26118 9.361 10.6242 9 12.0002 9C12.0512 9 12.1002 9.004 12.1482 9.007L12.2862 9.015H12.3262C12.4092 9.015 12.4842 8.99 12.5532 8.954L12.7612 9.024C12.7952 9.036 12.8312 9.044 12.8672 9.047C13.9502 9.164 14.9842 9.498 15.9412 10.042C16.0172 10.085 16.1022 10.107 16.1882 10.107C16.2472 10.107 16.3052 10.097 16.3612 10.076C16.4992 10.025 16.6082 9.916 16.6582 9.778L19.9712 0.67C20.0252 0.518 20.0032 0.347 19.9092 0.213Z" fill="#CCCCCC" fill-opacity="0.8"/>
                  </svg>
                </div>
                <div v-else-if="index === 2" class="flex-shrink-0">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9092 0.213C19.8162 0.08 19.6632 0 19.5002 0H14.5002C14.2892 0 14.1012 0.133 14.0292 0.332L11.9812 6.076L9.97218 0.335C9.90118 0.134 9.71318 0 9.50018 0H4.50018C4.33718 0 4.18418 0.08 4.09118 0.213C3.99718 0.346 3.97518 0.517 4.03018 0.671L7.34318 9.779C7.39318 9.917 7.50218 10.027 7.64018 10.077C7.69618 10.098 7.75418 10.108 7.81318 10.108C7.89918 10.108 7.98418 10.086 8.06018 10.043C9.26118 9.361 10.6242 9 12.0002 9C12.0512 9 12.1002 9.004 12.1482 9.007L12.2862 9.015H12.3262C12.4092 9.015 12.4842 8.99 12.5532 8.954L12.7612 9.024C12.7952 9.036 12.8312 9.044 12.8672 9.047C13.9502 9.164 14.9842 9.498 15.9412 10.042C16.0172 10.085 16.1022 10.107 16.1882 10.107C16.2472 10.107 16.3052 10.097 16.3612 10.076C16.4992 10.025 16.6082 9.916 16.6582 9.778L19.9712 0.67C20.0252 0.518 20.0032 0.347 19.9092 0.213ZM12.0002 10C8.14118 10 5.00018 13.14 5.00018 17C5.00018 20.86 8.14118 24 12.0002 24C15.8592 24 19.0002 20.86 19.0002 17C19.0002 13.14 15.8592 10 12.0002 10ZM14.0002 18V19C14.0002 20.103 13.1032 21 12.0002 21C10.8972 21 10.0002 20.103 10.0002 19C10.0002 18.724 10.2242 18.5 10.5002 18.5C10.7762 18.5 11.0002 18.724 11.0002 19C11.0002 19.551 11.4482 20 12.0002 20C12.5522 20 13.0002 19.551 13.0002 19V18C13.0002 17.449 12.5522 17 12.0002 17H11.5002C11.2242 17 11.0002 16.776 11.0002 16.5C11.0002 16.224 11.2242 16 11.5002 16H12.0002C12.5522 16 13.0002 15.551 13.0002 15C13.0002 14.449 12.5522 14 12.0002 14C11.4482 14 11.0002 14.449 11.0002 15C11.0002 15.276 10.7762 15.5 10.5002 15.5C10.2242 15.5 10.0002 15.276 10.0002 15C10.0002 13.897 10.8972 13 12.0002 13C13.1032 13 14.0002 13.897 14.0002 15C14.0002 15.597 13.7372 16.133 13.3212 16.5C13.7372 16.867 14.0002 17.403 14.0002 18Z" fill="#FF7B42"/>
                  </svg>
                </div>
                <div v-else class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-gray-800">
                  <span class="text-sm text-gray-800">{{ index + 1 }}</span>
                </div>
                
                <span class="text-sm text-gray-800">{{ player.name }}</span>
              </div>

              <!-- Stats -->
              <div class="flex justify-between items-center">
                <!-- Answer Count -->
                <div class="flex items-center gap-1">
                  <svg class="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_pen)">
                      <path d="M11.4375 4.20337L15.916 8.68188C16.0925 8.85847 16.1914 9.09823 16.1914 9.3479C16.1914 9.59757 16.0925 9.83733 15.916 10.0139L10.3184 15.6116L10.2129 15.718L10.1064 15.6116L8.98633 14.4924L8.87988 14.386L8.98633 14.2795L13.918 9.34692L13.5703 8.99927L5.83887 16.7317L5.79492 16.7756H2.22461V13.2043L2.26855 13.1604L11.2246 4.20337L11.3311 4.0979L11.4375 4.20337ZM4.1084 13.9846V14.8928H5.01562L12.2393 7.66821L11.3311 6.76099L4.1084 13.9846ZM14.1309 1.68872C14.3804 1.68883 14.6194 1.78866 14.7959 1.96509L17.0361 4.20337L17.0986 4.27271C17.2358 4.44023 17.3115 4.65096 17.3115 4.86938C17.3115 5.11907 17.2126 5.35881 17.0361 5.5354L15.8096 6.76196L15.7031 6.65552L12.3457 3.29614L12.2393 3.19067L13.4648 1.96509C13.6414 1.78855 13.8812 1.68872 14.1309 1.68872Z" fill="#7C7EFF" stroke="white" stroke-width="0.3"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_pen">
                        <rect width="19" height="19" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="text-xs text-gray-800">答題數：{{ player.answersCount }} / 40</span>
                </div>

                <!-- Average Time -->
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.2168 0.149658C12.6719 0.149834 16.2832 3.76193 16.2832 8.21704C16.283 12.672 12.6718 16.2833 8.2168 16.2834C3.76169 16.2834 0.14959 12.6721 0.149414 8.21704C0.149414 3.76182 3.76158 0.149658 8.2168 0.149658ZM8.2168 2.03345C6.57687 2.03345 5.00335 2.68439 3.84375 3.84399C2.68415 5.00359 2.0332 6.57712 2.0332 8.21704C2.03329 9.85677 2.68433 11.4296 3.84375 12.5891C5.00335 13.7487 6.57687 14.3997 8.2168 14.3997C9.8566 14.3996 11.4293 13.7486 12.5889 12.5891C13.7484 11.4296 14.3993 9.85685 14.3994 8.21704C14.3994 6.57712 13.7485 5.00359 12.5889 3.84399C11.4294 2.68457 9.85652 2.03353 8.2168 2.03345ZM9.1582 4.10864V8.06665H12.3252V9.95044H7.27441V4.10864H9.1582Z" fill="#7C7EFF" stroke="white" stroke-width="0.3"/>
                  </svg>
                  <span class="text-xs text-gray-800">平均作答時間：{{ player.avgTime }}秒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Player {
  id: number
  name: string
  answersCount: number
  avgTime: number
  category: string
}

const categories = ref(['總排行', '化學', '物理', '生物', '地科', '地理'])
const selectedCategory = ref('總排行')

const allPlayers = ref<Player[]>([
  { id: 1, name: '玩家一', answersCount: 40, avgTime: 2, category: '化學' },
  { id: 2, name: '玩家二', answersCount: 38, avgTime: 3, category: '化學' },
  { id: 3, name: '玩家三', answersCount: 35, avgTime: 4, category: '化學' },
  { id: 4, name: '玩家四', answersCount: 30, avgTime: 5, category: '化學' },
  { id: 5, name: '玩家五', answersCount: 28, avgTime: 6, category: '化學' },
  { id: 6, name: '物理高手', answersCount: 39, avgTime: 2, category: '物理' },
  { id: 7, name: '生物達人', answersCount: 37, avgTime: 3, category: '生物' },
  { id: 8, name: '地科專家', answersCount: 36, avgTime: 3, category: '地科' },
  { id: 9, name: '地理王者', answersCount: 34, avgTime: 4, category: '地理' },
])

const filteredPlayers = computed(() => {
  if (selectedCategory.value === '總排行') {
    return allPlayers.value
      .slice()
      .sort((a, b) => {
        if (b.answersCount !== a.answersCount) {
          return b.answersCount - a.answersCount
        }
        return a.avgTime - b.avgTime
      })
  }
  
  return allPlayers.value
    .filter(p => p.category === selectedCategory.value)
    .sort((a, b) => {
      if (b.answersCount !== a.answersCount) {
        return b.answersCount - a.answersCount
      }
      return a.avgTime - b.avgTime
    })
})

function handleBack() {
  router.push('/')
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
