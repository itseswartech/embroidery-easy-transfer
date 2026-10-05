import React, { useState } from 'react';
import { Usb, Smartphone, Plug, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

export function Step3ConnectOTG({ onNext, onPrev }) {
  const [isConnectedChecked, setIsConnectedChecked] = useState(false);

  return (
    <div className="space-y-6 pb-6 animate-fadeIn">
      {/* Step Header */}
      <div className="bg-indigo-600 text-white p-5 rounded-3xl border-4 border-indigo-800 shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-indigo-950 font-black text-sm px-3 py-1 rounded-full">
            స్టెప్ 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-yellow-300">
            OTGతో Pen Drive కనెక్ట్ చేయండి
          </h2>
        </div>

        <p className="text-lg font-bold text-indigo-100 leading-relaxed">
          మీ ఫోన్కు OTG Adapter పెట్టండి.
        </p>
      </div>

      {/* Visual Hardware Diagram Box */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-4">
        <h3 className="text-center text-lg font-black text-slate-800">
          కనెక్ట్ చేసే పద్ధతి (Connection Diagram):
        </h3>

        {/* Dynamic Connected Graphic */}
        <div className="bg-slate-900 text-white p-5 rounded-3xl border-4 border-slate-700 shadow-inner">
          <div className="flex items-center justify-around gap-1 text-center">
            {/* Phone Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-blue-400 animate-float">
                <Smartphone className="w-8 h-8" />
              </div>
              <span className="text-xs font-black text-blue-300">📱 Phone</span>
            </div>

            {/* Plus / Arrow 1 */}
            <div className="text-yellow-400 font-black text-2xl animate-pulse">
              ➔
            </div>

            {/* OTG Adapter Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-amber-300">
                <Plug className="w-8 h-8" />
              </div>
              <span className="text-xs font-black text-amber-300">🔌 OTG Adapter</span>
            </div>

            {/* Plus / Arrow 2 */}
            <div className="text-yellow-400 font-black text-2xl animate-pulse">
              ➔
            </div>

            {/* Pen Drive Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-emerald-400">
                <Usb className="w-8 h-8" />
              </div>
              <span className="text-xs font-black text-emerald-300">💾 Pen Drive</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700 text-center font-black text-yellow-300 text-sm">
            📱 ➔ 🔌 ➔ 💾
          </div>
        </div>
      </div>

      {/* Numbered Instruction Steps */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-3">
        <div className="flex items-start gap-3 bg-indigo-50 p-3.5 rounded-2xl border-2 border-indigo-200">
          <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-lg flex items-center justify-center shrink-0">
            1
          </span>
          <p className="text-lg font-extrabold text-indigo-950 leading-snug">
            ముందుగా <strong>OTG Adapter</strong>ను ఫోన్ ఛార్జింగ్ పిన్లో కనెక్ట్ చేయండి.
          </p>
        </div>

        <div className="flex items-start gap-3 bg-indigo-50 p-3.5 rounded-2xl border-2 border-indigo-200">
          <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-lg flex items-center justify-center shrink-0">
            2
          </span>
          <p className="text-lg font-extrabold text-indigo-950 leading-snug">
            తర్వాత <strong>Pen Drive</strong>ను OTG Adapterలో పెట్టండి.
          </p>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-yellow-100 border-4 border-yellow-400 p-4 rounded-3xl text-yellow-950 shadow-md space-y-2">
        <div className="flex items-center gap-2 font-black text-lg text-amber-900">
          <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0" />
          <span>ముఖ్యమైన గమనిక (Warning):</span>
        </div>
        <p className="text-base font-extrabold leading-relaxed">
          Pen Drive కనెక్ట్ చేసిన తర్వాత ఫోన్లో అనుమతి అడిగితే <strong>"Allow / అనుమతించు"</strong> లేదా <strong>"OK"</strong> నొక్కండి.
        </p>
      </div>

      {/* Interactive Checkbox Button */}
      <button
        onClick={() => setIsConnectedChecked(!isConnectedChecked)}
        className={`w-full p-4 rounded-2xl font-black text-lg border-3 transition-all flex items-center justify-center gap-3 shadow ${
          isConnectedChecked
            ? 'bg-emerald-600 text-white border-emerald-900'
            : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-500'
        }`}
      >
        <CheckCircle2 className={`w-7 h-7 ${isConnectedChecked ? 'text-yellow-300' : 'text-slate-400'}`} />
        <span>
          {isConnectedChecked 
            ? 'Pen Drive కనెక్ట్ చేసాను ✓' 
            : 'Pen Drive కనెక్ట్ చేసిన తర్వాత ఇక్కడ నొక్కండి'}
        </span>
      </button>

      {/* Navigation Controls */}
      <div className="flex items-center gap-3 pt-4 border-t-2 border-slate-200">
        <button
          onClick={onPrev}
          className="flex-1 btn-secondary-lg text-slate-800"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>వెనక్కి</span>
        </button>

        <button
          onClick={onNext}
          className="flex-1 btn-primary-lg text-yellow-300 font-black"
        >
          <span>తర్వాత</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
