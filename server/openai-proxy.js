// server/openai-proxy.js
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import 'dotenv/config'; 

const app = express();
app.use(cors());
app.use(express.json());
// 簡單的 request logger（方便除錯）
app.use((req, res, next) => {
  console.log(`[openai-proxy] ${req.method} ${req.url}`);
  next();
});

// 健康檢查路由（用來確認 server 是否在指定埠上運行）
app.get('/api/health', (req, res) => {
  res.json({ ok: true, port: process.env.PORT || 3001 });
});

// 初始化 OpenAI client，從 env 讀取 API key
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 範例 endpoint：接收前端的 message 與選擇（可擴充）
app.post("/api/openai", async (req, res) => {
  try {
    const { message, story_question , story_answer } = req.body;
    // console.log('story_question:', story_question, 'story_answer:', story_answer);
    // 使用標準的 Chat Completions API
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `你是一個GM負責協助使用推斷，海龜湯底。只會回答「是」、「否」，湯面：${story_question}，湯底：${story_answer}。`
        },
        {
          role: "user",
          content: message || ""
        }
      ],
      temperature: 0,
      max_tokens: 512
    });

    // 從標準的 Chat Completions 響應中提取內容
    const text = response.choices[0]?.message?.content || "";

    // 基本回傳格式
    res.json({ ok: true, text });
  } catch (err) {
    console.error("OpenAI proxy error:", err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`OpenAI proxy running at http://localhost:${port}`);
});