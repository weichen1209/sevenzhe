<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-orange via-primary-yellow to-primary-orange">
    <!-- Header -->
    <header class="bg-white border-b border-gray-300">
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

      <div class="max-w-6xl mx-auto">
        <!-- Title Section -->
        <div class="flex flex-col items-center gap-2 mb-8">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.9362 5.10879C3.92686 6.15639 3.30893 7.51953 3.18628 8.96909C3.06363 10.4186 3.44373 11.8662 4.2627 13.0685C5.08167 14.2708 6.28957 15.1546 7.68338 15.5711C9.07718 15.9877 10.5719 15.9118 11.9163 15.3561C12.0074 14.7624 11.8079 14.1924 11.7263 13.9929C11.5442 13.5495 10.9442 12.7919 9.9427 11.7414C9.67512 11.4603 9.69254 11.2442 9.78833 10.6037L9.79862 10.5317C9.86354 10.0931 9.97279 9.83345 11.4492 9.59912C12.1997 9.48037 12.3969 9.77962 12.67 10.1952L12.7618 10.3314C13.0215 10.7114 13.2139 10.7985 13.5044 10.9299C13.635 10.9893 13.7973 11.0645 14.015 11.1872C14.5312 11.4825 14.5312 11.8158 14.5312 12.5457V12.6288C14.5312 12.9384 14.5011 13.2107 14.4536 13.4474C15.0611 12.685 15.4845 11.7926 15.6907 10.8398C15.8969 9.88701 15.8804 8.89946 15.6426 7.95406C15.4047 7.00866 14.9519 6.13091 14.3193 5.38915C13.6867 4.64738 12.8915 4.06162 11.9955 3.67745C11.5577 3.97275 10.9568 4.39154 10.747 4.67891C10.6402 4.82537 10.4882 5.57508 9.99495 5.63683C9.8667 5.65266 9.69333 5.64158 9.50966 5.6297C9.01725 5.59804 8.34433 5.5545 8.129 6.13954C7.99204 6.51004 7.96829 7.51704 8.41083 8.03954C8.48208 8.12266 8.49554 8.27704 8.44725 8.45041C8.38391 8.67762 8.25645 8.81616 8.21608 8.84466C8.14008 8.80033 7.98808 8.62379 7.88437 8.50425C7.63658 8.21529 7.32625 7.85508 6.92566 7.74425C6.78 7.70387 6.62008 7.67062 6.46412 7.63737C6.0295 7.54633 5.53787 7.44262 5.42308 7.19879C5.33916 7.01987 5.33995 6.77366 5.33995 6.514C5.33995 6.18387 5.33995 5.811 5.17845 5.4492C5.12231 5.32009 5.03979 5.20414 4.9362 5.10879ZM9.50016 17.4168C5.12779 17.4168 1.5835 13.8725 1.5835 9.50016C1.5835 5.12779 5.12779 1.5835 9.50016 1.5835C13.8725 1.5835 17.4168 5.12779 17.4168 9.50016C17.4168 13.8725 13.8725 17.4168 9.50016 17.4168Z" fill="#FF5739"/>
            </svg>
            <h2 class="text-sm font-bold text-white">海龜湯</h2>
          </div>
          <p class="text-sm text-white text-center">利用線索，解開各域的謎題吧</p>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Column: Stats & Progress -->
          <div class="flex flex-col gap-6">
            <!-- National Stats -->
            <div class="flex items-center gap-12 p-4 rounded-[30px] bg-white">
              <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center gap-2">
                <div v-html="stat.icon" class="w-6 h-6"></div>
                <span class="text-lg text-black">{{ stat.value }}</span>
              </div>
            </div>

            <!-- Progress Cards -->
            <div class="flex items-center justify-center p-8 rounded-[30px] bg-gray-200">
              <div class="flex items-center gap-2">
                <svg class="w-9 h-9" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3182 2.59912L34.4008 15.6817L32.2193 17.8616L31.1294 16.7717L24.5896 23.3114L23.4997 28.7627L21.3182 30.9427L14.7785 24.4014L7.1472 32.0326L4.96729 29.8527L12.5985 22.2215L6.05724 15.6817L8.23716 13.5002L13.69 12.4103L20.2298 5.87054L19.1398 4.78058L21.3197 2.59912H21.3182ZM22.4097 8.05045L15.2086 15.25L10.858 16.1211L20.8788 26.1419L21.7483 21.7913L28.9495 14.5917L22.4097 8.05045Z" fill="#FF6969"/>
                </svg>
                <div class="flex flex-col">
                  <span class="text-xl text-gray-800">完成進度</span>
                  <span class="text-4xl font-bold text-gray-800">{{ progress }}</span>
                </div>
              </div>
            </div>

            <!-- Clues Card -->
            <button
              @click="showClues = true"
              class="group relative flex items-center justify-center p-8 rounded-[30px] bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <div class="flex items-center gap-2">
                <svg class="w-9 h-9" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7906 28.5002H17.4167V20.5835H20.5833V28.5002H22.2094C22.4184 26.597 23.389 25.0264 24.9644 23.3116C25.1433 23.1185 26.2817 21.9389 26.4163 21.771C27.5346 20.374 28.2356 18.6894 28.4384 16.9114C28.6413 15.1334 28.3379 13.3343 27.5631 11.7212C26.7882 10.1081 25.5736 8.74667 24.0589 7.79365C22.5443 6.84064 20.7912 6.33481 19.0017 6.33443C17.2122 6.33405 15.4589 6.83912 13.9439 7.79149C12.4288 8.74386 11.2136 10.1048 10.4381 11.7176C9.66256 13.3303 9.35835 15.1293 9.56047 16.9074C9.76259 18.6855 10.4628 20.3703 11.5805 21.7679C11.7167 21.9373 12.8582 23.1185 13.034 23.31C14.611 25.0264 15.5816 26.597 15.7906 28.5002ZM15.8333 31.6669V33.2502H22.1667V31.6669H15.8333ZM9.1105 23.7502C7.6193 21.8871 6.68475 19.6406 6.4145 17.2696C6.14425 14.8985 6.5493 12.4994 7.58298 10.3485C8.61667 8.19756 10.2369 6.38242 12.2571 5.11213C14.2774 3.84184 16.6153 3.16808 19.0017 3.16846C21.3881 3.16884 23.7259 3.84335 25.7457 5.11429C27.7655 6.38523 29.3851 8.20089 30.4181 10.3521C31.4511 12.5034 31.8554 14.9026 31.5844 17.2736C31.3134 19.6446 30.3781 21.8907 28.8863 23.7534C27.9047 24.9757 25.3333 26.9169 25.3333 29.2919V33.2502C25.3333 34.0901 24.9997 34.8955 24.4058 35.4894C23.812 36.0832 23.0065 36.4169 22.1667 36.4169H15.8333C14.9935 36.4169 14.188 36.0832 13.5942 35.4894C13.0003 34.8955 12.6667 34.0901 12.6667 33.2502V29.2919C12.6667 26.9169 10.0937 24.9757 9.1105 23.7502Z" fill="#D9C26C"/>
                </svg>
                <div class="flex flex-col items-start">
                  <span class="text-xl text-gray-800">已知線索</span>
                  <span class="text-4xl font-bold text-gray-800">{{ cluesFound }}</span>
                </div>
              </div>
              <svg class="absolute right-4 w-7 h-7 fill-gray-400 group-hover:fill-gray-500 transition-colors" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.00013585 2.00311C-0.000135938 0.46351 1.66653 -0.498736 2.99986 0.271064L18.9903 9.50312C20.3236 10.2729 20.3236 12.1974 18.9902 12.9672L2.99986 22.1993C1.66653 22.9691 -0.000135582 22.0068 -0.000135821 20.4672L-0.00013585 2.00311Z"/>
              </svg>
            </button>
          </div>

          <!-- Right Column: Domain Selection Wheel -->
          <div class="lg:col-span-2 flex items-center justify-center p-8 rounded-[30px] bg-gray-200">
            <div class="relative w-full max-w-md aspect-square">
              <!-- Center Domain -->
              <button
                @click="selectDomain(domains[8])"
                :class="[
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                  'flex flex-col items-center gap-1 transition-transform hover:scale-110',
                  selectedDomain === domains[8].name ? 'scale-110' : ''
                ]"
              >
                <div class="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-600">
                  <div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                </div>
                <span class="text-sm font-bold text-gray-800">{{ domains[8].name }}</span>
              </button>

              <!-- Surrounding Domains (8 positions in circle) -->
              <button
                v-for="(domain, index) in domains.slice(0, 8)"
                :key="domain.name"
                @click="selectDomain(domain)"
                :style="getDomainPosition(index)"
                :class="[
                  'absolute flex flex-col items-center gap-1 transition-transform hover:scale-110',
                  selectedDomain === domain.name ? 'scale-110' : ''
                ]"
              >
                <div 
                  class="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden"
                  :style="{ backgroundColor: domain.color }"
                >
                  <div class="w-full h-full bg-gradient-to-br opacity-80" :style="{ backgroundImage: `linear-gradient(to bottom right, ${domain.color}, ${domain.colorDark})` }"></div>
                </div>
                <span class="text-sm font-bold text-gray-800">{{ domain.name }}</span>
              </button>

              <!-- Connection Lines -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                <line v-for="i in 8" :key="`line-${i}`" x1="100" y1="100" :x2="getLineEndX(i-1)" :y2="getLineEndY(i-1)" stroke="#CCC" stroke-width="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Clues Modal -->
    <transition name="fade">
      <div
        v-if="showClues"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
        @click.self="showClues = false"
      >
        <div class="relative w-full max-w-4xl max-h-[90vh] mx-4">
          <!-- Close Button -->
          <button
            @click="showClues = false"
            class="absolute -top-4 -right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-9 h-9" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50098 4.49951L32.501 31.4995" stroke="#333" stroke-width="5" stroke-linecap="round"/>
              <path d="M32.1396 4.13965L5.13965 31.1397" stroke="#333" stroke-width="5" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Clues List -->
          <div class="bg-white rounded-[30px] p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            <div class="flex flex-col gap-6">
              <div
                v-for="(clue, index) in clues"
                :key="index"
                class="flex items-center gap-4 p-5 rounded-[30px] border border-[#FEAD00] bg-[#FFF4D8]"
              >
                <div class="flex-shrink-0 px-4 py-2 rounded-[20px] bg-[#FEAD00]">
                  <span class="text-lg font-bold text-white">線索</span>
                </div>
                <p class="text-lg text-gray-800">{{ clue }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Domain {
  name: string
  color: string
  colorDark: string
}

const stats = ref([
  { 
    label: '經濟', 
    value: 50,
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.584 14.5943C14.584 13.6283 13.724 12.8203 12.584 12.6343V16.5533C13.724 16.3673 14.584 15.5603 14.584 14.5943Z" fill="#87FF7C"/><path d="M9.58398 9.59428C9.58398 10.5603 10.444 11.3683 11.584 11.5543V7.63428C10.445 7.82028 9.58398 8.62828 9.58398 9.59428Z" fill="#87FF7C"/><path d="M12.084 0.594238C5.74298 0.594238 0.583984 5.75324 0.583984 12.0942C0.583984 18.4352 5.74298 23.5942 12.084 23.5942C18.425 23.5942 23.584 18.4352 23.584 12.0942C23.584 5.75324 18.426 0.594238 12.084 0.594238ZM15.584 14.5942C15.584 16.1022 14.276 17.3412 12.584 17.5512V18.0942C12.584 18.3702 12.36 18.5942 12.084 18.5942C11.808 18.5942 11.584 18.3702 11.584 18.0942V17.5502C9.89198 17.3402 8.58398 16.1012 8.58398 14.5932C8.58398 14.3172 8.80798 14.0932 9.08398 14.0932C9.35998 14.0932 9.58398 14.3172 9.58398 14.5932C9.58398 15.5592 10.444 16.3672 11.584 16.5532V12.5502C9.89198 12.3402 8.58398 11.1012 8.58398 9.59324C8.58398 8.08524 9.89198 6.84624 11.584 6.63624V6.09424C11.584 5.81824 11.808 5.59424 12.084 5.59424C12.36 5.59424 12.584 5.81824 12.584 6.09424V6.63724C14.276 6.84724 15.584 8.08624 15.584 9.59424C15.584 9.87024 15.36 10.0942 15.084 10.0942C14.808 10.0942 14.584 9.87024 14.584 9.59424C14.584 8.62824 13.724 7.82024 12.584 7.63424V11.6372C14.276 11.8472 15.584 13.0862 15.584 14.5942Z" fill="#87FF7C"/></svg>'
  },
  { 
    label: '人口', 
    value: 50,
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.023 15.416C7.491 17.606 9.695 19 12.16 19C14.624 19 16.829 17.607 18.296 15.416C16.6317 13.8606 14.4379 12.9968 12.16 13C9.88171 12.9966 7.68751 13.8604 6.023 15.416ZM12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8C15 7.20435 14.6839 6.44129 14.1213 5.87868C13.5587 5.31607 12.7956 5 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11Z" fill="#7C7EFF"/></svg>'
  },
  { 
    label: '健康', 
    value: 50,
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#FF7C7C"/><path d="M13.5794 10.2145C13.4397 10.0673 13.2504 9.98463 13.0529 9.98463C12.8555 9.98463 12.6661 10.0673 12.5265 10.2145L12 10.7687C11.8626 10.9186 11.6983 11.0382 11.5166 11.1205C11.3349 11.2028 11.1395 11.2461 10.9417 11.2479C10.744 11.2498 10.5479 11.21 10.3649 11.1311C10.1818 11.0521 10.0156 10.9356 9.87573 10.7881C9.7359 10.6407 9.62532 10.4654 9.55044 10.2725C9.47556 10.0795 9.43788 9.8728 9.43959 9.66433C9.44131 9.45586 9.4824 9.24984 9.56045 9.05829C9.6385 8.86675 9.75195 8.6935 9.89419 8.54867L14.0864 4.12748C15.079 3.88948 16.1174 3.98743 17.0541 4.40739C17.9908 4.82736 18.7781 5.54796 19.304 6.46673C19.8299 7.38551 20.0676 8.45568 19.9834 9.52509C19.8992 10.5945 19.4973 11.6087 18.8349 12.4235L17.2653 14.0995L13.5794 10.2137V10.2145ZM5.41823 5.49497C6.18874 4.68278 7.19657 4.16828 8.27876 4.03466C9.36096 3.90104 10.4543 4.15611 11.382 4.75863L8.84054 7.43866C8.29011 8.01779 7.97635 8.8009 7.9663 9.62065C7.95625 10.4404 8.25071 11.2318 8.78676 11.8257C9.32281 12.4197 10.0579 12.769 10.8351 12.7992C11.6122 12.8293 12.3697 12.5378 12.9457 11.987L13.0529 11.8795L16.2124 15.2095L13.0529 18.5403C12.7736 18.8347 12.3949 19 12 19C11.6051 19 11.2264 18.8347 10.9471 18.5403L5.41748 12.7108C4.50988 11.7539 4 10.4561 4 9.10289C4 7.74968 4.50988 6.45188 5.41748 5.49497H5.41823Z" fill="white"/></svg>'
  },
  { 
    label: '糧食', 
    value: 50,
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#FFC47C"/><path d="M6.1868 11.9955C6.27019 11.9955 6.35296 11.9608 6.41322 11.8944C7.35114 10.853 8.57999 9.6887 10.258 8.14823L10.7717 7.67592C11.0231 7.44464 11.2933 7.22065 11.5976 6.99059C11.695 6.91694 11.7388 6.79278 11.7096 6.6747C11.5788 6.14579 11.3487 5.44159 10.9963 5.08919C10.919 5.01189 10.8058 4.98206 10.7023 5.01067C10.597 5.03867 10.5149 5.12144 10.4869 5.22613C10.1819 6.37707 8.35662 8.82017 7.52278 9.65401C7.44974 9.72705 7.37183 9.80191 7.28967 9.88043C6.8764 10.2767 6.3627 10.7703 5.92204 11.5396C5.84475 11.6747 5.88187 11.8457 6.00786 11.937C6.06203 11.9766 6.12472 11.9955 6.1868 11.9955Z" fill="white"/><path d="M15.0422 11.9995C14.593 11.9995 10.5163 12.1389 5.69704 16.9575C5.61001 17.0446 5.58384 17.176 5.63131 17.2898C5.66052 17.3598 6.36594 18.9989 8.34647 18.9989C11.9222 18.9989 13.2418 17.6222 14.1152 16.711C14.1949 16.6276 14.2704 16.5485 14.344 16.4755C15.1779 15.6416 17.621 13.8163 18.7719 13.5114C18.8772 13.4834 18.9594 13.4012 18.9874 13.2959C19.0154 13.1912 18.9856 13.0786 18.9089 13.0019C18.2899 12.3823 16.4201 11.9995 15.0422 11.9995Z" fill="white"/></svg>'
  },
  { 
    label: '電力', 
    value: 50,
    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#FFEE7C"/><path d="M10.4799 16.4289H11.2502V12.8573H12.7501V16.4289H13.5204C13.6194 15.5703 14.0791 14.8617 14.8254 14.0881C14.9101 14.0009 15.4494 13.4687 15.5131 13.393C16.0429 12.7627 16.3749 12.0028 16.471 11.2006C16.5671 10.3985 16.4233 9.5868 16.0563 8.85906C15.6893 8.13131 15.1139 7.51709 14.3965 7.08714C13.679 6.65719 12.8486 6.42899 12.001 6.42881C11.1533 6.42864 10.3228 6.65651 9.60515 7.08617C8.88749 7.51583 8.31184 8.12981 7.9445 8.85741C7.57716 9.585 7.43306 10.3966 7.5288 11.1988C7.62454 12.001 7.95622 12.7611 8.48565 13.3916C8.55015 13.468 9.0909 14.0009 9.17415 14.0873C9.92115 14.8617 10.3809 15.5703 10.4799 16.4289ZM10.5002 17.8575V18.5718H13.5001V17.8575H10.5002ZM7.31565 14.2859C6.6093 13.4454 6.16661 12.4319 6.0386 11.3622C5.91059 10.2925 6.10245 9.21012 6.59209 8.23974C7.08173 7.26937 7.84923 6.45047 8.80617 5.87737C9.76311 5.30428 10.8706 5.00032 12.001 5.00049C13.1314 5.00066 14.2387 5.30497 15.1955 5.87835C16.1522 6.45173 16.9194 7.27087 17.4087 8.24139C17.8981 9.21192 18.0896 10.2944 17.9612 11.364C17.8328 12.4337 17.3898 13.447 16.6831 14.2874C16.2181 14.8388 15.0001 15.7146 15.0001 16.786V18.5718C15.0001 18.9507 14.8421 19.3141 14.5608 19.582C14.2795 19.85 13.898 20.0005 13.5001 20.0005H10.5002C10.1023 20.0005 9.7208 19.85 9.43949 19.582C9.15819 19.3141 9.00015 18.9507 9.00015 18.5718V16.786C9.00015 15.7146 7.7814 14.8388 7.31565 14.2859Z" fill="white"/></svg>'
  }
])

const progress = ref('0 / 9')
const cluesFound = ref('0 / 40')

const domains = ref<Domain[]>([
  { name: '火域', color: '#FF6B6B', colorDark: '#D63031' },
  { name: '風域', color: '#A8D8EA', colorDark: '#74B9CC' },
  { name: '土域', color: '#AA7E5A', colorDark: '#8B6F47' },
  { name: '光域', color: '#FFE66D', colorDark: '#F9CA24' },
  { name: '雷域', color: '#B8E994', colorDark: '#A8E063' },
  { name: '木域', color: '#6BCF7F', colorDark: '#4CAF50' },
  { name: '金域', color: '#FFD93D', colorDark: '#FAB900' },
  { name: '水域', color: '#4FACFE', colorDark: '#00B4D8' },
  { name: '空域', color: '#A29BFE', colorDark: '#6C5CE7' }
])

const selectedDomain = ref<string | null>(null)
const showClues = ref(false)

const clues = ref([
  '消波塊能夠��壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
  '消波塊能夠破壞海浪結構，使其在上岸前便消弭。',
])

function getDomainPosition(index: number) {
  const angle = (index * 45) * Math.PI / 180
  const radius = 40
  const centerOffset = 50
  
  const x = centerOffset + radius * Math.cos(angle)
  const y = centerOffset + radius * Math.sin(angle)
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)'
  }
}

function getLineEndX(index: number) {
  const angle = (index * 45) * Math.PI / 180
  const radius = 80
  return 100 + radius * Math.cos(angle)
}

function getLineEndY(index: number) {
  const angle = (index * 45) * Math.PI / 180
  const radius = 80
  return 100 + radius * Math.sin(angle)
}

function selectDomain(domain: Domain) {
  selectedDomain.value = domain.name
  console.log('Selected domain:', domain.name)
}

function handleBack() {
  router.push('/')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
