import React from 'react';
import { Home, RotateCcw, HelpCircle, Volume2, Sparkles } from 'lucide-react';
import { speakTeluguText } from '../utils/speech';

export function Header({ 
  currentStep, 
  totalSteps, 
  onGoHome, 
  onRestart, 
  onOpenHelp, 
  currentStepTitle,
  currentStepDesc 
}) {
  const isHome = currentStep === 0;

  const handleSpeak = () => {
    if (isHome) {
      speakTeluguText("ఎంబ్రాయిడరీ డిజైన్ను పెన్డ్రైవ్లోకి పంపండి. ప్రారంభించడానికి ప్రారంభించండి నొక్కండి.");
    } else {
      speakTeluguText(`${currentStepTitle || ''}. ${currentStepDesc || ''}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-indigo-700 text-white shadow-xl border-b-4 border-indigo-900">
      <div className="max-w-md mx-auto px-4 py-3">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo & Title */}
          <button 
            onClick={onGoHome}
            className="flex items-center gap-2 text-left bg-indigo-800/80 hover:bg-indigo-800 active:scale-95 transition-all p-2 rounded-xl border-2 border-indigo-400/40"
            title="మొదటి పేజీ"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-400 text-indigo-950 flex items-center justify-center text-xl font-bold shadow">
              🧵
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight tracking-tight text-yellow-300">
                ఎంబ్రాయిడరీ సహాయకుడు
              </h1>
              <p className="text-xs font-semibold text-indigo-100">
                Embroidery Pen Drive Helper
              </p>
            </div>
          </button>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-1.5">
            {/* Audio Voice Guide Button */}
            <button
              onClick={handleSpeak}
              className="p-2.5 bg-yellow-400 hover:bg-yellow-300 text-indigo-950 rounded-xl font-bold flex items-center justify-center shadow-md active:scale-90 transition-transform border-2 border-yellow-200"
              title="వాయిస్ గైడ్ (చదవండి)"
              aria-label="చదవండి"
            >
              <Volume2 className="w-6 h-6 animate-pulse" />
            </button>

            {/* Help Button */}
            <button
              onClick={onOpenHelp}
              className="px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-black text-sm flex items-center gap-1 shadow-md active:scale-95 transition-transform border-2 border-rose-300"
            >
              <HelpCircle className="w-5 h-5 text-yellow-200" />
              <span>సహాయం</span>
            </button>
          </div>
        </div>

        {/* Wizard Progress Bar (Only visible after Home screen) */}
        {!isHome && (
          <div className="mt-3 pt-2 border-t border-indigo-500/50">
            <div className="flex items-center justify-between text-yellow-300 font-extrabold text-base mb-1.5">
              <span className="bg-indigo-900/90 px-3 py-1 rounded-full border border-indigo-400/50 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                స్టెప్ {currentStep} / {totalSteps}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={onGoHome}
                  className="px-2.5 py-1 bg-indigo-800 hover:bg-indigo-900 text-indigo-100 text-xs rounded-lg font-bold flex items-center gap-1 border border-indigo-400/30"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>హోమ్</span>
                </button>
                <button
                  onClick={onRestart}
                  className="px-2.5 py-1 bg-indigo-800 hover:bg-indigo-900 text-indigo-100 text-xs rounded-lg font-bold flex items-center gap-1 border border-indigo-400/30"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>మళ్లీ</span>
                </button>
              </div>
            </div>

            {/* Visual Progress Bar Track */}
            <div className="w-full bg-indigo-950/70 h-4 rounded-full overflow-hidden p-0.5 border border-indigo-400/40">
              <div
                className="bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 h-full rounded-full transition-all duration-500 shadow-inner"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
