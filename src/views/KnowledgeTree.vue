<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-purple via-primary-pink to-primary-purple">
    <header class="bg-white border-b border-gray-300">
      <meta charset="UTF-8"> 
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
          <button class="text-gray-800 hover:text-gray-600 transition-colors" aria-label="Settings">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.21301 14.06C1.92542 12.7017 1.92542 11.2983 2.21301 9.94001C3.32301 10.07 4.29301 9.70301 4.60901 8.93901C4.92601 8.17401 4.50101 7.22901 3.62301 6.53601C4.38005 5.37233 5.37233 4.38005 6.53601 3.62301C7.22801 4.50001 8.17401 4.92601 8.93901 4.60901C9.70401 4.29201 10.071 3.32301 9.94001 2.21301C11.2983 1.92542 12.7017 1.92542 14.06 2.21301C13.93 3.32301 14.297 4.29301 15.061 4.60901C15.826 4.92601 16.771 4.50101 17.464 3.62301C18.6277 4.38005 19.62 5.37233 20.377 6.53601C19.5 7.22801 19.074 8.17401 19.391 8.93901C19.708 9.70401 20.677 10.071 21.787 9.94001C22.0746 11.2983 22.0746 12.7017 21.787 14.06C20.677 13.93 19.707 14.297 19.391 15.061C19.074 15.826 19.499 16.771 20.377 17.464C19.62 18.6277 18.6277 19.62 17.464 20.377C16.772 19.5 15.826 19.074 15.061 19.391C14.296 19.708 13.929 20.677 14.06 21.787C12.7017 22.0746 11.2983 22.0746 9.94001 21.787C10.07 20.677 9.70301 19.707 8.93901 19.391C8.17401 19.074 7.22901 19.499 6.53601 20.377C5.37233 19.62 4.38005 18.6277 3.62301 17.464C4.50001 16.772 4.92601 15.826 4.60901 15.061C4.29201 14.296 3.32301 13.929 2.21301 14.06ZM4.00001 12.21C5.10001 12.515 6.00701 13.212 6.45701 14.296C6.90601 15.381 6.75701 16.516 6.19501 17.508C6.29101 17.61 6.39001 17.709 6.49201 17.805C7.48501 17.243 8.61901 17.095 9.70401 17.543C10.788 17.993 11.485 18.9 11.79 20C11.93 20.004 12.07 20.004 12.21 20C12.515 18.9 13.212 17.993 14.296 17.543C15.381 17.094 16.516 17.243 17.508 17.805C17.61 17.709 17.709 17.61 17.805 17.508C17.243 16.515 17.095 15.381 17.543 14.296C17.993 13.212 18.9 12.515 20 12.21C20.004 12.07 20.004 11.93 20 11.79C18.9 11.485 17.993 10.788 17.543 9.70401C17.094 8.61901 17.243 7.48401 17.805 6.49201C17.7086 6.3904 17.6096 6.29137 17.508 6.19501C16.515 6.75701 15.381 6.90501 14.296 6.45701C13.212 6.00701 12.515 5.10001 12.21 4.00001C12.07 3.9963 11.93 3.9963 11.79 4.00001C11.485 5.10001 10.788 6.00701 9.70401 6.45701C8.61901 6.90601 7.48401 6.75701 6.49201 6.19501C6.39001 6.29101 6.29101 6.39001 6.19501 6.49201C6.75701 7.48501 6.90501 8.61901 6.45701 9.70401C6.00701 10.788 5.10001 11.485 4.00001 11.79C3.99601 11.93 3.99601 12.07 4.00001 12.21ZM12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7957 9.00001 12C9.00001 11.2044 9.31608 10.4413 9.87869 9.87869C10.4413 9.31608 11.2044 9.00001 12 9.00001C12.7957 9.00001 13.5587 9.31608 14.1213 9.87869C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15ZM12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="text-gray-800 hover:text-gray-600 transition-colors" aria-label="User">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div class="relative px-6 py-8 md:px-12">
      <button 
        @click="handleBack" 
        class="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-6"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.828 10.9999L13.192 5.63592L11.778 4.22192L4 11.9999L11.778 19.7779L13.192 18.3639L7.828 12.9999H20V10.9999H7.828Z" fill="currentColor"/>
        </svg>
        <span class="text-lg">返回</span>
      </button>

      <!-- Horizontal Scrolling Carousel -->
      <div class="relative w-full overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(calc(-${currentIndex * 100}%))` }"
        >
          <div 
            v-for="subject in subjects" 
            :key="subject.id"
            class="flex-shrink-0 w-full"
            style="min-width: 100%"
          >
            <SubjectSection
              :title="subject.title"
              :progress="subject.progress"
              :questions="subject.questions"
              :gradient-from="subject.gradientFrom"
              :gradient-to="subject.gradientTo"
            />
          </div>
        </div>
      </div>

      <!-- Horizontal Swipe Controls -->
      <div class="flex justify-between items-center mt-8 px-4">
        <button
          @click="previousSubject"
          class="text-white hover:opacity-80 transition-opacity p-2"
          aria-label="Previous subject"
        >
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" fill="currentColor"/>
          </svg>
        </button>
        
        <button
          @click="nextSubject"
          class="text-white hover:opacity-80 transition-opacity p-2"
          aria-label="Next subject"
        >
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SubjectSection from '../components/SubjectSection.vue'

const router = useRouter()
const currentIndex = ref(0)

interface Question {
  id: number
  text: string
  stars: number
}

interface Subject {
  id: number
  title: string
  progress: string
  questions: Question[]
  gradientFrom: string
  gradientTo: string
}

const chemistryQuestions: Question[] = [
  { id: 1, text: '燃燒需要的氣體是什麼？', stars: 3 },
  { id: 2, text: '食鹽的主要成分是什麼？', stars: 2 },
  { id: 3, text: 'CO₂的中文名字是什麼？', stars: 2 },
  { id: 4, text: '週期表��一個元素為？', stars: 2 },
  { id: 5, text: '原子序為6的元素為？', stars: 2 },
  { id: 6, text: 'PH值為7代表什麼性質？', stars: 2 },
  { id: 7, text: '水的化學式是多少？', stars: 2 },
  { id: 8, text: '金的化學符號是什麼？', stars: 2 },
]

const physicsQuestions: Question[] = [
  { id: 1, text: '質量轉換公式是什麼？', stars: 3 },
  { id: 2, text: '電壓如何利用電阻及電流計算出來？', stars: 2 },
  { id: 3, text: '聲音可以在真空中傳播嗎？', stars: 2 },
  { id: 4, text: '能量的國際單位是什麼？', stars: 2 },
  { id: 5, text: '力的單位是？', stars: 2 },
  { id: 6, text: '電阻的單位是？', stars: 2 },
  { id: 7, text: '牛頓第一運動定律又稱為什麼？', stars: 2 },
  { id: 8, text: '電流的單位是？', stars: 2 },
]

const biologyQuestions: Question[] = [
  { id: 1, text: '細胞的核心功能是什麼？', stars: 3 },
  { id: 2, text: '光合作用的主要產物是？', stars: 2 },
  { id: 3, text: '人體最大的器官是？', stars: 2 },
  { id: 4, text: '染色體中含有什麼？', stars: 2 },
  { id: 5, text: '蛋白質由什麼組成？', stars: 2 },
  { id: 6, text: '呼吸作用發生在哪裡？', stars: 2 },
  { id: 7, text: '血紅蛋白的主要功能？', stars: 2 },
  { id: 8, text: '植物的主要營養來源？', stars: 1 },
]

const geoscieceQuestions: Question[] = [
  { id: 1, text: '地球最大的洋是？', stars: 3 },
  { id: 2, text: '地震波有幾種類型？', stars: 2 },
  { id: 3, text: '地球的核心層是什麼？', stars: 2 },
  { id: 4, text: '颶風形成的條件？', stars: 2 },
  { id: 5, text: '火山的類型有幾種？', stars: 2 },
  { id: 6, text: '風化作用的主要形式？', stars: 2 },
  { id: 7, text: '板塊運動的證據？', stars: 2 },
  { id: 8, text: '化石如何形成？', stars: 2 },
]

const mathQuestions: Question[] = [
  { id: 1, text: '勾股定理的內容是？', stars: 3 },
  { id: 2, text: '圓周率π約等於？', stars: 2 },
  { id: 3, text: '質數的定義是？', stars: 2 },
  { id: 4, text: '等差數列的通項公式？', stars: 2 },
  { id: 5, text: '三角形面積公式？', stars: 2 },
  { id: 6, text: '方程式的根是什麼？', stars: 2 },
  { id: 7, text: '對數的定義？', stars: 2 },
  { id: 8, text: '向量的模如何計算？', stars: 2 },
]

const subjects = ref<Subject[]>([
  {
    id: 1,
    title: '化學',
    progress: '0 / 8',
    questions: chemistryQuestions,
    gradientFrom: '#36FAB3',
    gradientTo: '#05A15D',
  },
  {
    id: 2,
    title: '物理',
    progress: '0 / 8',
    questions: physicsQuestions,
    gradientFrom: '#3640FA',
    gradientTo: '#05A194',
  },
  {
    id: 3,
    title: '生物',
    progress: '0 / 8',
    questions: biologyQuestions,
    gradientFrom: '#FF6B6B',
    gradientTo: '#FF4757',
  },
  {
    id: 4,
    title: '地球科學',
    progress: '0 / 8',
    questions: geoscieceQuestions,
    gradientFrom: '#FFA502',
    gradientTo: '#FF7675',
  },
  {
    id: 5,
    title: '數學',
    progress: '0 / 8',
    questions: mathQuestions,
    gradientFrom: '#FFB200',
    gradientTo: '#FFA502',
  },
])

function nextSubject() {
  if (currentIndex.value < subjects.value.length - 1) {
    currentIndex.value++
  }
}

function previousSubject() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function handleBack() {
  router.push('/')
}
</script>
