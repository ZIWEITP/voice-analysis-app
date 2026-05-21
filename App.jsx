import React, { useState } from 'react';
import { buildResult } from "./services/analysisLogic";

function App() {
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 模擬分析流程
  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);

    // 模擬 2 秒的 AI 分析時間
    setTimeout(() => {
      const data = buildResult();
      setResult(data);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-app-bg text-white p-6 md:p-12 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
          AI 語音健康分析
        </h1>
        <p className="text-gray-400 mt-2">基於生物共振頻率的智慧評測</p>
      </header>

      <main className="max-w-3xl mx-auto">
        {/* 主要互動區 */}
        <div className="glass-card p-8 text-center">
          <button 
            className={`glass-button w-full md:w-auto ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? '正在分析頻率中...' : '開始語音分析'}
          </button>
        </div>

        {/* 結果展示區 */}
        {result && (
          <div className="mt-8 glass-card p-8 animate-in fade-in duration-700">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">分析報告</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-gray-400 text-sm">綜合能量得分</p>
                <p className="text-4xl font-bold text-accent-cyan">{result.score} / 100</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-gray-400 text-sm">分析時間</p>
                <p className="text-lg">{result.timestamp.split('T')[0]}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">各脈輪狀態</h3>
              <div className="space-y-3">
                {result.chakra.map((c) => (
                  <div key={c.id} className="flex items-center justify-between">
                    <span className="w-24">{c.name}</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full mx-4 overflow-hidden">
                      <div 
                        className="h-full bg-accent-purple" 
                        style={{ width: `${c.value}%` }}
                      />
                    </div>
                    <span className="w-12 text-right">{Math.round(c.value)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;