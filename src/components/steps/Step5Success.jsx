import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, RotateCcw, ShieldCheck, Usb, Smartphone, Sparkles } from 'lucide-react';

export function Step5Success({ onRestart }) {
  useEffect(() => {
    // Fire confetti on completion screen
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  }, []);

  return (
    <div className="space-y-6 pb-8 animate-fadeIn">
      {/* Success Celebration Header */}
      <div className="bg-gradient-to-b from-emerald-600 to-emerald-800 text-white p-6 rounded-3xl border-4 border-emerald-400 shadow-2xl text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-emerald-950 px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-wider shadow">
          <Sparkles className="w-4 h-4 text-emerald-900" />
          విజయం! (Success)
        </div>

        <div className="w-20 h-20 mx-auto bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-lg border-4 border-emerald-300 animate-bounce">
          <CheckCircle2 className="w-14 h-14" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-yellow-300 tracking-tight">
          పూర్తయింది! 🎉
        </h2>

        <p className="text-xl font-extrabold text-emerald-100 leading-relaxed max-w-sm mx-auto">
          మీ Embroidery Design Pen Driveలోకి విజయవంతంగా చేరింది.
        </p>
      </div>

      {/* Machine Step Diagram */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-4 text-center">
        <h3 className="text-lg font-black text-slate-800">
          ఇప్పుడు ఏమి చేయాలి?
        </h3>

        <p className="text-base font-bold text-slate-700 bg-slate-100 p-3 rounded-2xl border border-slate-300">
          ఇప్పుడు Pen Driveను ఫోన్ నుంచి తీసి <strong>Embroidery Machine</strong>లో పెట్టవచ్చు.
        </p>

        {/* Machine Insertion Graphic */}
        <div className="bg-emerald-50 border-3 border-emerald-300 p-4 rounded-2xl space-y-3">
          <div className="flex items-center justify-around gap-2 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-700 text-white flex items-center justify-center font-bold text-xl shadow">
                📱
              </div>
              <span className="text-[11px] font-bold text-slate-600 mt-1">ఫోన్ తీయండి</span>
            </div>

            <span className="text-emerald-600 font-black text-2xl">➔</span>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow border-2 border-emerald-300">
                💾
              </div>
              <span className="text-[11px] font-black text-emerald-800 mt-1">Pen Drive</span>
            </div>

            <span className="text-emerald-600 font-black text-2xl">➔</span>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow border-2 border-indigo-300">
                🧵
              </div>
              <span className="text-[11px] font-black text-indigo-900 mt-1">Embroidery Machine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Removal Instructions Warning */}
      <div className="bg-yellow-100 border-4 border-yellow-400 p-4 rounded-3xl text-yellow-950 shadow-md space-y-2">
        <div className="flex items-center gap-2 font-black text-lg text-amber-900">
          <ShieldCheck className="w-7 h-7 text-amber-600 shrink-0" />
          <span>భద్రతా సూచన (Safety Warning):</span>
        </div>
        <p className="text-base font-extrabold leading-relaxed">
          Pen Drive తీసే ముందు File Transfer పూర్తయ్యిందని నిర్ధారించుకోండి.
        </p>

        <div className="bg-white p-3 rounded-2xl border border-yellow-300 text-xs font-bold text-slate-800 space-y-1">
          <div className="font-black text-amber-900">సురక్షితంగా Pen Drive తీసివేసే మార్గం:</div>
          <div>1. ఫోన్ స్క్రీన్ పైన నుండి కిందకి లాగండి (Slide Down Notification).</div>
          <div>2. "USB Storage" పక్కన ఉన్న <strong>Unmount / Eject (తీసివేయి)</strong> నొక్కండి.</div>
        </div>
      </div>

      {/* Restart Button */}
      <div className="pt-2">
        <button
          onClick={onRestart}
          className="btn-primary-lg bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-yellow-300 font-black text-2xl py-5 rounded-2xl shadow-xl border-4 border-indigo-900 active:scale-95 transition-transform flex items-center justify-center gap-3 w-full"
        >
          <RotateCcw className="w-8 h-8" />
          <span>మళ్లీ మొదటి నుంచి</span>
        </button>
      </div>
    </div>
  );
}
