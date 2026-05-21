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

    <div className="min-h-screen bg-[#0A0A0A] text-[#B39D81] flex flex-col items-center justify-center p-4 relative overflow-hidden font-serif">
      

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />


      <div className="w-full max-w-lg bg-[#111111] border border-[#B39D81]/20 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-500 hover:border-[#B39D81]/40">
        

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B39D81]/5 border border-[#B39D81]/20 text-[#B5A478] text-xs font-light tracking-[2px] rounded-full mb-5">
            <span className="w-1 h-1 bg-[#B39D81] rounded-full animate-pulse"></span>
            VOICE BIO-RESONANCE
          </div>
          
          <h1 className="text-2xl font-medium tracking-[4px] text-[#B39D81] font-serif">
            AI 語音健康分析
          </h1>
          

          <div className="w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[#B39D81]/40 to-transparent m-auto mt-4 mb-3 animate-[globalBreathe_3s_infinite_ease-in-out]" />
          
          <p className="text-[#A0A0A0] text-xs tracking-[1.5px] font-light">
            基於生物聲波共振頻率之智慧評測
          </p>
        </div>


        <div className="flex flex-col items-center justify-center py-4">
          {isAnalyzing ? (

            <div className="flex items-end justify-center gap-1 h-16 mb-8 w-full">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] bg-[#B5A478] rounded-full animate-bounce"
                  style={{
                    height: `${Math.floor(Math.random() * 50) + 50}%`,
                    animationDuration: `${0.6 + i * 0.1}s`,
                    animationDelay: `${i * 0.03}s`
                  }}
                />
              ))}
            </div>
          ) : (

            <div className="relative mb-8 group">
              <div className="absolute inset-0 border border-[#B39D81]/10 rounded-full scale-125 animate-[spin_20s_linear_infinite] pointer-events-none" />
              <div className="relative w-16 h-16 bg-[#0A0A0A] border border-[#B39D81]/40 rounded-full flex items-center justify-center text-[#B39D81]/70 group-hover:text-[#B5A478] group-hover:border-[#B5A478] transition-all duration-500 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 tracking-normal">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v8.25a3 3 0 0 0 3 3Z" />
                </svg>
              </div>
            </div>
          )}


          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className={`w-full py-3.5 px-6 rounded-xl font-medium tracking-[3px] text-xs transition-all duration-500 border border-[#B39D81]/40 ${
              isAnalyzing
                ? 'bg-[#111111] text-[#444444] border-[#444444]/30 cursor-not-allowed'
                : 'bg-[#B39D81]/10 text-[#B39D81] hover:bg-[#B39D81] hover:text-[#0A0A0A] hover:shadow-[0_0_15px_rgba(179,157,129,0.2)]'
            }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-3 w-3 text-[#444444]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>擷取聲波中...</span>
              </div>
            ) : (
              <span>開啟聲波共振檢測</span>
            )}
          </button>
        </div>


        {result && (
          <div className="mt-8 pt-6 border-t border-[#B39D81]/15 animate-fade-in">
            <h3 className="text-[11px] font-medium text-[#A0A0A0] tracking-[2px] uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-[#B5A478]"></span>
              聲波共振分析報告
            </h3>
            
            <div className="space-y-2">
              {typeof result === 'object' ? (
                Object.entries(result).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center bg-[#0A0A0A] border border-[#B39D81]/10 px-4 py-3 rounded-lg">
                    <span className="text-[#A0A0A0] text-xs tracking-[1px]">{key}</span>
                    <span className="text-[#B39D81] font-mono text-xs">{String(value)}</span>
                  </div>
                ))
              ) : (
                <div className="bg-[#0A0A0A] border border-[#B39D81]/10 px-4 py-3 rounded-lg text-[#B39D81]/90 text-xs tracking-[1px] leading-relaxed whitespace-pre-wrap font-serif">
                  {result}
                </div>
              )}
            </div>
          </div>
        )}
        
      </div>
      

      <p className="text-[#444444] text-[9px] mt-8 relative z-10 tracking-[3px] uppercase font-light">
        &copy; 2026 AI Voice Analysis. Qintian Standardized.
      </p>


      <style>{`
        @keyframes globalBreathe {
          0%, 100% { opacity: 0.15; width: 100px; }
          50% { opacity: 0.6; width: 150px; }
        }
      `}</style>
    </div>
  );
}

export default App;
