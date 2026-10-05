import React from 'react';
import { Play, Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export function HomeScreen({ onStart }) {
  return (
    <div className="space-y-6 pb-8 animate-fadeIn">
      {/* Hero Header Card */}
      <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white rounded-3xl p-6 shadow-2xl border-4 border-indigo-400 relative overflow-hidden">
        {/* Soft Decorative motifs */}
        <div className="absolute -right-6 -bottom-6 text-indigo-400/20 text-9xl font-black select-none pointer-events-none">
          🧵
        </div>

        <div className="relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-indigo-950 px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-wider shadow">
            <Sparkles className="w-4 h-4 text-indigo-900" />
            సులువైన డిజైన్ సహాయకుడు
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight text-yellow-300 tracking-tight drop-shadow-md">
            ఎంబ్రాయిడరీ డిజైన్ను పెన్డ్రైవ్లోకి పంపండి
          </h1>

          <p className="text-lg sm:text-xl font-bold text-indigo-100 leading-relaxed max-w-sm mx-auto">
            ZIP ఫైల్ను సులభంగా Extract చేసి Pen Driveలోకి పంపడానికి ఈ స్టెప్స్ను ఫాలో అవ్వండి.
          </p>
        </div>
      </div>

      {/* Visual Directional Flow Box */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-lg space-y-4">
        <h2 className="text-xl font-black text-slate-800 text-center flex items-center justify-center gap-2">
          <span>సులువైన మార్గం (Flow Guide)</span>
        </h2>

        {/* Large Arrow Diagram */}
        <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            {/* Step 1 Node */}
            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-sm flex flex-col items-center justify-center">
              <span className="text-3xl mb-1 animate-bounce">📦</span>
              <span className="text-xs font-black text-indigo-700">1. ZIP FILE</span>
              <span className="text-[11px] font-bold text-slate-500">ఫైల్ వస్తుంది</span>
            </div>

            {/* Step 2 Node */}
            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-sm flex flex-col items-center justify-center">
              <span className="text-3xl mb-1">📂</span>
              <span className="text-xs font-black text-indigo-700">2. EXTRACT</span>
              <span className="text-[11px] font-bold text-slate-500">ఓపెన్ చేయడం</span>
            </div>

            {/* Step 3 Node */}
            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-sm flex flex-col items-center justify-center">
              <span className="text-3xl mb-1">🔌</span>
              <span className="text-xs font-black text-indigo-700">3. OTG ADAPTER</span>
              <span className="text-[11px] font-bold text-slate-500">ఫోన్కి పెట్టడం</span>
            </div>

            {/* Step 4 Node */}
            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-sm flex flex-col items-center justify-center">
              <span className="text-3xl mb-1">💾</span>
              <span className="text-xs font-black text-indigo-700">4. PEN DRIVE</span>
              <span className="text-[11px] font-bold text-slate-500">కాపీ చేయడం</span>
            </div>

            {/* Step 5 Node */}
            <div className="bg-white p-3 rounded-2xl border-2 border-emerald-300 shadow-sm flex flex-col items-center justify-center col-span-2 sm:col-span-2 bg-emerald-50">
              <span className="text-3xl mb-1">🧵</span>
              <span className="text-xs font-black text-emerald-800">5. EMBROIDERY MACHINE</span>
              <span className="text-[11px] font-bold text-emerald-600">మిషన్లో కుట్టడం! 🎉</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3 pt-2">
        <button
          onClick={onStart}
          className="btn-primary-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-yellow-300 font-black text-2xl py-5 rounded-2xl shadow-xl border-4 border-indigo-900 active:scale-95 transition-transform flex items-center justify-center gap-3 w-full"
        >
          <Play className="w-8 h-8 fill-yellow-300 text-indigo-900" />
          <span>ప్రారంభించండి</span>
          <ArrowRight className="w-7 h-7" />
        </button>

        <p className="text-center text-sm font-bold text-slate-600 flex items-center justify-center gap-1.5 bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
          <HeartHandshake className="w-5 h-5 text-indigo-600" />
          <span>ఏమీ కంగారు పడకండి! ఈ గైడ్ ప్రతి స్టెప్ వివరంగా చూపిస్తుంది.</span>
        </p>
      </div>

      {/* Safety & Privacy Banner */}
      <div className="bg-emerald-50 border-2 border-emerald-200 p-3.5 rounded-2xl text-emerald-900 flex items-center gap-3">
        <ShieldCheck className="w-7 h-7 text-emerald-600 shrink-0" />
        <p className="text-xs font-bold leading-snug">
          మీ డిజైన్ ఫైల్స్ మీ ఫోన్లోనే భద్రంగా ఉంటాయి. ఎక్కడా అప్లోడ్ కావు.
        </p>
      </div>
    </div>
  );
}
