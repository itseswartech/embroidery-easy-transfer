import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export function Footer({ onOpenHelp }) {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 py-6 border-t-4 border-indigo-600">
      <div className="max-w-md mx-auto px-4 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold text-sm">
          <span>🧵 ఎంబ్రాయిడరీ మెషిన్ డిజైన్ సహాయకుడు</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed font-semibold">
          ZIP ఫైల్స్ extract చేసి OTG అడాప్టర్ ద్వారా Pen Drive లోకి డిజైన్స్ పంపడానికి అత్యంత సులువైన వెబ్ యాప్.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs font-bold pt-2 border-t border-slate-800">
          <button 
            onClick={onOpenHelp}
            className="text-yellow-400 hover:underline flex items-center gap-1"
          >
            <span>❓ సహాయం & ప్రశ్నలు</span>
          </button>
          <span>•</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" />
            <span>100% ప్రైవేట్ & సెక్యూర్</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
