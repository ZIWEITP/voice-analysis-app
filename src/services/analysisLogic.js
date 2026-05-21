import { chakraMap, organBase } from "../constants/healthData";

export const buildResult = (audioData) => {
  // 未來這裡可以根據 audioData (如錄音的頻率分佈) 進行真實運算
  // 目前先保留隨機數，但增加結構以供前端使用
  
  const score = Math.floor(Math.random() * 100);
  
  return {
    score,
    chakra: chakraMap.map(c => ({ 
      ...c, 
      value: Math.floor(Math.random() * 100) // 確保數值是整數，方便圖表繪製
    })),
    organs: organBase.map(o => ({
      ...o,
      status: Math.random() > 0.5 ? '平衡' : '需調整'
    })),
    timestamp: new Date().toLocaleString()
  };
};