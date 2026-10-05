import React, { useState } from 'react';
import { X, Copy, Folder, ArrowDown, Usb, CheckCircle } from 'lucide-react';

export function CopyPasteGuideModal({ isOpen, onClose, initialTab = 'copy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-4 border-blue-600 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-2">
            <Copy className="w-7 h-7 text-yellow-300" />
            <div>
              <h2 className="text-2xl font-black text-yellow-300">
                Copy & Paste గైడ్
              </h2>
              <p className="text-xs font-bold text-blue-100">
                ఫోన్లో సులభంగా కాపీ-పేస్ట్ చేసే పద్ధతి
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-blue-700 hover:bg-blue-800 rounded-2xl text-white font-bold active:scale-90 transition-transform border-2 border-blue-400"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex border-b-2 border-slate-200 bg-slate-100 p-2 gap-2">
          <button
            onClick={() => setActiveTab('copy')}
            className={`flex-1 py-3 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'copy'
                ? 'bg-blue-600 text-white shadow-md border-2 border-blue-800'
                : 'bg-white text-slate-700 hover:bg-slate-200 border-2 border-slate-300'
            }`}
          >
            <span>📋 Copy చేయడం ఎలా?</span>
          </button>
          <button
            onClick={() => setActiveTab('paste')}
            className={`flex-1 py-3 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'paste'
                ? 'bg-emerald-600 text-white shadow-md border-2 border-emerald-800'
                : 'bg-white text-slate-700 hover:bg-slate-200 border-2 border-slate-300'
            }`}
          >
            <span>💾 Paste చేయడం ఎలా?</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 bg-slate-50">
          {activeTab === 'copy' ? (
            <div className="space-y-4">
              <div className="bg-blue-50 border-3 border-blue-200 p-4 rounded-2xl">
                <h3 className="text-xl font-black text-blue-950 mb-1">
                  కాపీ (Copy) చేసే విధానం:
                </h3>
                <p className="text-base font-bold text-slate-700">
                  మీ ఫోన్లో డిజైన్ ఫైల్ను OTG పెన్డ్రైవ్కి పంపడానికి ఈ 2 స్టెప్స్ చేయండి:
                </p>
              </div>

              {/* Step 1 Card */}
              <div className="bg-white p-4 rounded-2xl border-3 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-black text-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base">1</span>
                  <span>ఫైల్ పై నొక్కి పట్టుకోండి (Long Press)</span>
                </div>
                <p className="text-base font-bold text-slate-800 leading-relaxed bg-slate-100 p-3 rounded-xl">
                  Extract చేసిన ఫోల్డర్లోని Embroidery Design ఫైల్ (ఉదాహరణ: <code className="bg-yellow-200 text-slate-900 px-2 py-0.5 rounded font-black">design.dst</code>) పై మీ వేలుని 2 సెకన్ల పాటు నొక్కి ఉంచండి.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded-xl flex items-center justify-between font-bold text-sm">
                  <span>👇 2 సెకన్లు వేలు ఉంచండి</span>
                  <span className="bg-yellow-400 text-slate-950 px-2 py-1 rounded font-black">👆 Touch & Hold</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
              </div>

              {/* Step 2 Card */}
              <div className="bg-white p-4 rounded-2xl border-3 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-black text-lg">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base">2</span>
                  <span>"Copy" ఎంచుకోండి</span>
                </div>
                <p className="text-base font-bold text-slate-800 leading-relaxed bg-slate-100 p-3 rounded-xl">
                  కింద లేదా పైన మెనూలో <strong className="text-blue-700 font-black">"Copy"</strong> లేదా <strong className="text-blue-700 font-black">"తరలించు (Move)"</strong> అనే బటన్ కనిపిస్తుంది. దానిపై నొక్కండి.
                </p>
                <div className="bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center font-black text-lg gap-2 shadow">
                  <Copy className="w-6 h-6" />
                  <span>"Copy" నొక్కండి</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-emerald-50 border-3 border-emerald-200 p-4 rounded-2xl">
                <h3 className="text-xl font-black text-emerald-950 mb-1">
                  పేస్ట్ (Paste) చేసే విధానం:
                </h3>
                <p className="text-base font-bold text-slate-700">
                  Copy చేసుకున్న ఫైల్ను Pen Drive లో సేవ్ చేయడానికి:
                </p>
              </div>

              {/* Step 1 Card */}
              <div className="bg-white p-4 rounded-2xl border-3 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-black text-lg">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base">1</span>
                  <span>"USB Drive / Pen Drive" ఓపెన్ చేయండి</span>
                </div>
                <p className="text-base font-bold text-slate-800 leading-relaxed bg-slate-100 p-3 rounded-xl">
                  ఫైల్ మేనేజర్లో ఎడమ వైపు లేదా స్టోరేజ్ లిస్ట్లో <strong className="text-emerald-700 font-black">"USB Storage"</strong> లేదా <strong className="text-emerald-700 font-black">"Pen Drive"</strong> పై నొక్కండి.
                </p>
                <div className="bg-slate-900 text-white p-3 rounded-xl flex items-center gap-3 font-bold text-base border-2 border-emerald-400">
                  <Usb className="w-7 h-7 text-yellow-300" />
                  <div>
                    <div className="font-black text-yellow-300">USB Storage / OTG Drive</div>
                    <div className="text-xs text-slate-300">కనెక్ట్ అయి ఉంది ✓</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-emerald-600 animate-bounce" />
              </div>

              {/* Step 2 Card */}
              <div className="bg-white p-4 rounded-2xl border-3 border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-black text-lg">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base">2</span>
                  <span>"Paste" నొక్కండి</span>
                </div>
                <p className="text-base font-bold text-slate-800 leading-relaxed bg-slate-100 p-3 rounded-xl">
                  Pen Drive ఓపెన్ అవ్వగానే, స్క్రీన్ కింద ఉన్న <strong className="text-emerald-700 font-black">"Paste"</strong> లేదా <strong className="text-emerald-700 font-black">"ఇక్కడ కాపీ చేయి (Copy Here)"</strong> బటన్ నొక్కండి.
                </p>
                <div className="bg-emerald-600 text-white p-3 rounded-xl flex items-center justify-center font-black text-lg gap-2 shadow">
                  <CheckCircle className="w-6 h-6 text-yellow-300" />
                  <span>"Paste (పేస్ట్)" నొక్కండి</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t-2 border-slate-200">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl font-black text-lg shadow active:scale-95 transition-transform"
          >
            <span>సరే, అర్థమైంది 👍</span>
          </button>
        </div>
      </div>
    </div>
  );
}
