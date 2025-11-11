<template>
  <div class="flex flex-col items-center gap-6">
    <div class="flex flex-col items-center gap-1.5 text-center">
      <div 
        class="inline-flex items-center justify-center px-4 py-2 rounded-md font-bold text-sm text-white"
        :style="{ background: `linear-gradient(118deg, ${gradientFrom} 0%, ${gradientTo} 157.69%)` }"
      >
        {{ title }}
      </div>
      <div class="flex flex-col items-center">
        <p class="text-white font-bold text-xs">選擇題目挑戰</p>
        <p class="text-white text-xs">已完成 {{ progress }} 題</p>
      </div>
    </div>

    <!-- Fixed size scrollable container -->
    <div class="relative rounded-3xl bg-white overflow-hidden" style="width: 620px; height: 460px">
      <!-- Scrollable content area -->
      <div class="relative w-full h-full overflow-y-auto" style="padding: 60px 40px">
        <!-- SVG for connecting lines -->
        <svg 
          class="absolute inset-0 w-full h-full pointer-events-none"
          style="top: 0; left: 0; width: 620px; height: 1200px"
          preserveAspectRatio="none"
        >
          <g stroke="#999999" stroke-width="2" fill="none" stroke-linecap="round">
            <!-- Level 1 to Level 2: center vertical line -->
            <line x1="50%" y1="130" x2="50%" y2="200"/>
            
            <!-- Level 2 horizontal connector -->
            <line x1="15%" y1="270" x2="85%" y2="270"/>
            
            <!-- Level 2 to Level 3: left vertical -->
            <line x1="15%" y1="330" x2="15%" y2="380"/>
            
            <!-- Level 2 to Level 3: right vertical -->
            <line x1="85%" y1="330" x2="85%" y2="380"/>
            
            <!-- Level 2 diagonals converging to center -->
            <path d="M 15% 330 Q 32.5% 355 50% 380" />
            <path d="M 85% 330 Q 67.5% 355 50% 380" />
            
            <!-- Level 3 to Level 4: center vertical -->
            <line x1="50%" y1="440" x2="50%" y2="510"/>
            
            <!-- Level 4 horizontal connector -->
            <line x1="15%" y1="580" x2="85%" y2="580"/>
            
            <!-- Level 4 to Level 5: left vertical -->
            <line x1="15%" y1="640" x2="15%" y2="700"/>
            
            <!-- Level 4 to Level 5: right vertical -->
            <line x1="85%" y1="640" x2="85%" y2="700"/>
          </g>
        </svg>

        <!-- Level 1: Top Center -->
        <div class="absolute w-full flex justify-center" style="top: 20px; left: 0">
          <QuestionCard
            :text="questions[0].text"
            :stars="questions[0].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
        </div>

        <!-- Level 2: Left and Right -->
        <div class="absolute w-full flex justify-between px-12" style="top: 210px; left: 0">
          <QuestionCard
            :text="questions[1].text"
            :stars="questions[1].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
          <QuestionCard
            :text="questions[2].text"
            :stars="questions[2].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
        </div>

        <!-- Level 3: Center -->
        <div class="absolute w-full flex justify-center" style="top: 390px; left: 0">
          <QuestionCard
            :text="questions[3].text"
            :stars="questions[3].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
        </div>

        <!-- Level 4: Left and Right -->
        <div class="absolute w-full flex justify-between px-12" style="top: 520px; left: 0">
          <QuestionCard
            :text="questions[4].text"
            :stars="questions[4].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
          <QuestionCard
            :text="questions[5].text"
            :stars="questions[5].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
        </div>

        <!-- Level 5: Left and Right (Bottom) -->
        <div class="absolute w-full flex justify-between px-12" style="top: 730px; left: 0">
          <QuestionCard
            :text="questions[6].text"
            :stars="questions[6].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
          <QuestionCard
            :text="questions[7].text"
            :stars="questions[7].stars"
            :gradient-from="gradientFrom"
            :gradient-to="gradientTo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from './QuestionCard.vue'

interface Question {
  id: number
  text: string
  stars: number
}

interface Props {
  title: string
  progress: string
  questions: Question[]
  gradientFrom: string
  gradientTo: string
}

defineProps<Props>()
</script>
