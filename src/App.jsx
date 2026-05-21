import React, { useState } from 'react';
import { startVoiceAnalysis } from './services/analysisLogic';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleStartAnalysis = async () => {
    setIsAnalyzing(true);
    setResult(null);
    try {
      const data = await startVoiceAnalysis();
      setResult(data);
    } catch (error) {
      console.error("分析失敗", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-teal-500/30">
      {/* 背景科技感光暈 */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-25%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 主卡片容器 */}
      <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 transition-all duration-300 hover:border-slate-700/80">
        
        {/* 標題區 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium rounded-full mb-4 animate-pulse">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
            AI Bio-Resonance Technology
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            AI 語音健康分析
          </h1>
          <p className="text-slate-400 mt-2 text-sm font-light">
            基於生物聲波共振頻率的智慧評測系統
          </p>
        </div>

        {/* 主操作區：按鈕與動畫 */}
        <div className="flex flex-col items-center justify-center py-6">
          {isAnalyzing ? (
            /* 分析中的聲波動畫 */
            <div className="flex items-end justify-center gap-1.5 h-20 mb-8 w-full">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="w-1.5 bg-gradient-to-t from-cyan-500 to-teal-400 rounded-full animate-bounce"
                  style={{
                    height: `${Math.floor(Math.random() * 60) + 40}%`,
                    animationDuration: `${0.6 + i * 0.15}s`,
                    animationDelay: `${i * 0.05}s`
                  }}
                />
              ))}
            </div>
          ) : (
            /* 平時待命的麥克風裝飾外圈 */
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative w-24 h-24 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 group-hover:text-teal-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v8.25a3 3 0 0 0 3 3Z" />
                </svg>
              </div>
            </div>
          )}

          {/* 觸發按鈕 */}
          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className={`w-full py-4 px-6 font-medium rounded-2xl shadow-lg transform active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-base ${
              isAnalyzing
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold hover:from-teal-400 hover:to-cyan-400 hover:shadow-teal-500/20 hover:shadow-2xl'
            }`}
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                正在擷取聲波頻率...
              </>
            ) : (
              <>
                <span>開始語音分析</span>
              </>
            )}
          </button>
        </div>

        {/* 分析結果顯示區 */}
        {result && (
          <div className="mt-8 pt-6 border-t border-slate-800/80 animate-fadeIn">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-teal-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.5 4.5 0 1 1 9.01 0c-.002.228-.015.456-.038.683M12.001 12v.007H12V12h.001Zm3.75 0v.007H15.75V12h.001Zm-3.75 3v.007H12V15h.001Zm3.75 0v.007H15.75V15h.001Zm-3.75 3v.007H12V18h.001Zm3.75 0v.007H15.75V18h.001Z" />
              </svg>
              聲波共振分析報告
            </h3>
            
            <div className="space-y-3">
              {/* 如果你的 result 是物件格式，可以像這樣漂亮地渲染出來 */}
              {typeof result === 'object' ? (
                Object.entries(result).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl">
                    <span className="text-slate-400 text-sm">{key}</span>
                    <span className="text-teal-400 font-mono font-medium">{String(value)}</span>
                  </div>
                ))
              ) : (
                <div className="bg-slate-950/40 border border-slate-800/50 p-4 rounded-xl text-center text-slate-300 text-sm leading-relaxed">
                  {result}
                </div>
              )}
            </div>
          </div>
        )}
        
      </div>
      
      {/* 頁尾版權宣告 */}
      <p className="text-slate-600 text-xs mt-6 relative z-10 font-light">
        &copy; 2026 AI Voice Analysis System. All rights reserved.
      </p>
    </div>
  );
}

export default App;
