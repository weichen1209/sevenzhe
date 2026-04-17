// 統一的8題架構配置 - 使用像素單位以實現垂直滾動
const basePositions = [
  { index: 0, x: 50, y: 100, connections: [1, 2] },   // 題1 (3星) - 頂部中央
  { index: 1, x: 28, y: 450, connections: [3] },      // 題2 (2星) - 左側
  { index: 2, x: 72, y: 450, connections: [3] },      // 題3 (2星) - 右側
  { index: 3, x: 50, y: 800, connections: [4, 5] },   // 題4 (1星) - 中央
  { index: 4, x: 28, y: 1150, connections: [6] },     // 題5 (1星) - 左側
  { index: 5, x: 72, y: 1150, connections: [7] },     // 題6 (1星) - 右側
  { index: 6, x: 28, y: 1500, connections: [] },      // 題7 (1星) - 左下
  { index: 7, x: 72, y: 1500, connections: [] }       // 題8 (1星) - 右下
]

// 灰色框配置
const baseFrames = [
  { x: 15, y: 300, width: 70, height: 250, rx: 8 },   // 第一個框 (2星題目區域)
  { x: 15, y: 650, width: 70, height: 950, rx: 8 }    // 第二個框 (1星題目區域)
]

// 為每個科目生成位置配置
const generateSubjectPositions = (startId) => {
  return basePositions.map((pos, index) => ({
    id: startId + index,
    x: pos.x,
    y: pos.y,
    connections: pos.connections.map(conn => startId + conn)
  }))
}

export const questionPositions = {
  chemistry: generateSubjectPositions(1),
  biology: generateSubjectPositions(10),
  physics: generateSubjectPositions(19),
  'earth-science': generateSubjectPositions(28),
  geography: generateSubjectPositions(37)
}

export const frames = baseFrames

// 計算連接線的座標
export function calculateConnections(subjectId, cardWidth = 140, cardHeight = 100) {
  const positions = questionPositions[subjectId]
  if (!positions) return []

  const lines = []
  positions.forEach(pos => {
    pos.connections.forEach(targetId => {
      const target = positions.find(p => p.id === targetId)
      if (target) {
        lines.push({
          x1: pos.x,
          y1: pos.y,
          x2: target.x,
          y2: target.y
        })
      }
    })
  })
  return lines
}
