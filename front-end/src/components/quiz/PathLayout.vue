<template>
  <div class="path-layout">
    <!-- 題目卡片層 -->
    <div
      v-for="(question, index) in questions"
      :key="question.id"
      class="question-wrapper"
      :style="getPositionStyle(index)"
      :class="{ 'has-next': index < questions.length - 1 }"
      @click="$emit('questionClick', question)"
    >
      <slot name="question" :question="question"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { questionPositions } from '../../data/questionPositions.js'

const props = defineProps({
  subjectId: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  }
})

defineEmits(['questionClick'])

const positions = computed(() => questionPositions[props.subjectId] || [])

const getPositionStyle = (index) => {
  const pos = positions.value[index]
  if (!pos) return {}

  return {
    left: `${pos.x}%`,
    top: `${pos.y}px`,
    transform: 'translate(-50%, -50%)'
  }
}

// 計算容器動態高度
const containerHeight = computed(() => {
  const posArray = positions.value
  if (posArray.length === 0) return 200
  
  const maxY = Math.max(...posArray.map(p => p.y), 0)
  return Math.max(maxY + 200, 300)
})
</script>

<style scoped>
.path-layout {
  position: relative;
  width: 100%;
  height: v-bind(containerHeight + 'px');
}

.question-wrapper {
  position: absolute;
  z-index: 2;
}

/* 使用偽元素 ::before 連接到下一個卡片 */
.question-wrapper.has-next::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%; /* 卡片中心 */
  width: 4px;
  /* 線的高度計算：從當前卡片下邊緣到下一個卡片上邊緣 */
  /* 這裡使用 250px（卡片間距）减去卡片高度 120px = 130px */
  height: 130px;
  background: linear-gradient(to bottom, #10B981, #10B981);
  transform: translateX(-50%) translateY(60px); /* 從卡片下方開始 */
}
</style>
