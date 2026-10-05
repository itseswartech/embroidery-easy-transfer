import React, { useState } from 'react';
import { X, HelpCircle, ChevronDown, ChevronUp, FolderSearch, ArchiveRestore, Usb, PlugZap, Copy, CheckCircle2 } from 'lucide-react';
import { helpQuestions } from '../data/helpData';

const iconMap = {
  FolderSearch,
  ArchiveRestore,
  Usb,
  PlugZap,
  Copy
};

export function HelpModal({ isOpen, onClose, onOpenCopyGuide }) {
  const [openId, setOpenId] = useState('zip-not-found');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border-4 border-rose-500 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-rose-600 text-white p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-yellow-300" />
            <div>
              <h2 className="text-2xl font-black tracking-wide text-yellow-300">
                సందేహాలు & సహాయం
              </h2>
              <p className="text-xs font-semibold text-rose-100">
                తరచుగా వచ్చే సమస్యల పరిష్కారాలు
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-rose-700 hover:bg-rose-800 rounded-2xl text-white font-bold active:scale-90 transition-transform border-2 border-rose-400"
            aria-label="మూసివేయి"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Modal Content / Questions Accordion */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 bg-slate-50">
          <p className="text-base font-bold text-slate-700 bg-yellow-100 p-3 rounded-2xl border-2 border-yellow-300 flex items-start gap-2">
            <span>💡</span>
            <span>మీరు ఎదుర్కొంటున్న సమస్యపై నొక్కితే పరిష్కారం కనిపిస్తుంది:</span>
          </p>

          {helpQuestions.map((q) => {
            const isOpenQuestion = openId === q.id;
            const IconComponent = iconMap[q.icon] || HelpCircle;

            return (
              <div 
                key={q.id}
                className={`rounded-2xl border-3 transition-all overflow-hidden ${
                  isOpenQuestion 
                    ? 'border-indigo-600 bg-white shadow-lg' 
                    : 'border-slate-300 bg-white hover:border-indigo-400'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpenQuestion ? null : q.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-lg font-black text-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isOpenQuestion ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-indigo-700'}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span>{q.question}</span>
                  </div>
                  {isOpenQuestion ? (
                    <ChevronUp className="w-6 h-6 text-indigo-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpenQuestion && (
                  <div className="px-4 pb-4 pt-1 border-t-2 border-slate-100 bg-indigo-50/50">
                    <p className="text-lg font-bold text-indigo-950 mb-3 bg-white p-3 rounded-xl border border-indigo-200 shadow-sm leading-relaxed">
                      {q.answer}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-indigo-800 uppercase tracking-wider">
                        చేయవలసిన పద్ధతి (Steps):
                      </h4>
                      {q.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200 text-base font-bold text-slate-800">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>

                    {q.id === 'copy-paste-help' && onOpenCopyGuide && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenCopyGuide();
                        }}
                        className="mt-3 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-extrabold text-base flex items-center justify-center gap-2 border-2 border-blue-800 shadow"
                      >
                        <Copy className="w-5 h-5" />
                        <span>Copy / Paste బొమ్మలతో గైడ్ చూడండి</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t-2 border-slate-200">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg shadow-md active:scale-95 transition-transform border-2 border-indigo-900 flex items-center justify-center gap-2"
          >
            <span>సరే, అర్థమైంది 👍</span>
          </button>
        </div>
      </div>
    </div>
  );
}
