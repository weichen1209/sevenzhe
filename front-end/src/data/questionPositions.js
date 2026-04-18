// ============================================
// 直線排列配置 - 每題都有對應的位置和連接
// 按難度從上到下排列（難到易）
// 垂直間距：250px
// ============================================

// 物理 - 9題
const physicsPositions = [
  { index: 0, x: 50, y: 60, connections: [1] },           // Level 3
  { index: 1, x: 50, y: 310, connections: [2] },          // Level 2
  { index: 2, x: 50, y: 560, connections: [3] },          // Level 1
  { index: 3, x: 50, y: 810, connections: [4] },
  { index: 4, x: 50, y: 1060, connections: [5] },
  { index: 5, x: 50, y: 1310, connections: [6] },
  { index: 6, x: 50, y: 1560, connections: [7] },
  { index: 7, x: 50, y: 1810, connections: [8] },
  { index: 8, x: 50, y: 2060, connections: [] }
]

// 化學 - 5題
const chemistryPositions = [
  { index: 0, x: 50, y: 60, connections: [1] },           // Level 3
  { index: 1, x: 50, y: 310, connections: [2] },          // Level 3
  { index: 2, x: 50, y: 560, connections: [3] },          // Level 2
  { index: 3, x: 50, y: 810, connections: [4] },
  { index: 4, x: 50, y: 1060, connections: [] }
]

// 生物 - 8題
const biologyPositions = [
  { index: 0, x: 50, y: 60, connections: [1] },           // Level 3
  { index: 1, x: 50, y: 310, connections: [2] },          // Level 3
  { index: 2, x: 50, y: 560, connections: [3] },          // Level 2
  { index: 3, x: 50, y: 810, connections: [4] },
  { index: 4, x: 50, y: 1060, connections: [5] },
  { index: 5, x: 50, y: 1310, connections: [6] },
  { index: 6, x: 50, y: 1560, connections: [7] },
  { index: 7, x: 50, y: 1810, connections: [] }
]

// 地科 - 9題
const earthSciencePositions = [
  { index: 0, x: 50, y: 60, connections: [1] },           // Level 2
  { index: 1, x: 50, y: 310, connections: [2] },          // Level 2
  { index: 2, x: 50, y: 560, connections: [3] },          // Level 2
  { index: 3, x: 50, y: 810, connections: [4] },          // Level 1
  { index: 4, x: 50, y: 1060, connections: [5] },
  { index: 5, x: 50, y: 1310, connections: [6] },
  { index: 6, x: 50, y: 1560, connections: [7] },
  { index: 7, x: 50, y: 1810, connections: [8] },
  { index: 8, x: 50, y: 2060, connections: [] }
]

// 地理 - 9題
const geographyPositions = [
  { index: 0, x: 50, y: 60, connections: [1] },           // Level 3
  { index: 1, x: 50, y: 310, connections: [2] },          // Level 3
  { index: 2, x: 50, y: 560, connections: [3] },          // Level 3
  { index: 3, x: 50, y: 810, connections: [4] },          // Level 2
  { index: 4, x: 50, y: 1060, connections: [5] },         // Level 1
  { index: 5, x: 50, y: 1310, connections: [6] },
  { index: 6, x: 50, y: 1560, connections: [7] },
  { index: 7, x: 50, y: 1810, connections: [8] },
  { index: 8, x: 50, y: 2060, connections: [] }
]

// 為每個科目生成位置配置（基於索引）
const generateSubjectPositions = (positions) => {
  return positions.map((pos) => ({
    index: pos.index,
    x: pos.x,
    y: pos.y,
    connections: pos.connections
  }))
}

export const questionPositions = {
  physics: generateSubjectPositions(physicsPositions),
  chemistry: generateSubjectPositions(chemistryPositions),
  biology: generateSubjectPositions(biologyPositions),
  'earth-science': generateSubjectPositions(earthSciencePositions),
  geography: generateSubjectPositions(geographyPositions)
}

// 計算連接線的座標
export function calculateConnections(subjectId, cardWidth = 140, cardHeight = 100) {
  const positions = questionPositions[subjectId]
  if (!positions) return []

  const lines = []
  positions.forEach(pos => {
    pos.connections.forEach(targetIdx => {
      const target = positions[targetIdx]
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
