import React, { useState } from 'react';
import { ArchiveRestore, Folder, FileCheck, ArrowRight, ArrowLeft, Download, CheckCircle2, AlertCircle } from 'lucide-react';
import { embroideryFormats } from '../../data/helpData';

export function Step2Extract({ 
  onNext, 
  onPrev, 
  zipFile, 
  extractedFiles, 
  isExtracting, 
  isExtracted, 
  onPerformExtract,
  onDownloadFile 
}) {
  const [selectedFormatInfo, setSelectedFormatInfo] = useState(null);

  return (
    <div className="space-y-6 pb-6 animate-fadeIn">
      {/* Step Header */}
      <div className="bg-indigo-600 text-white p-5 rounded-3xl border-4 border-indigo-800 shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-indigo-950 font-black text-sm px-3 py-1 rounded-full">
            స్టెప్ 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-yellow-300">
            ZIP ఫైల్ను Extract చేయండి
          </h2>
        </div>

        <p className="text-lg font-bold text-indigo-100 leading-relaxed">
          ZIP ఫైల్ను ఓపెన్ చేసిన తర్వాత <strong>'Extract'</strong> లేదా <strong>'వెలికితీయండి'</strong> అనే ఆప్షన్ను ఎంచుకోండి.
        </p>
      </div>

      {/* Animation / Illustration Diagram */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-4">
        <h3 className="text-center text-lg font-black text-slate-800">
          Extract చేయడం అంటే ఏమిటి?
        </h3>

        {/* Visual Flow Animation */}
        <div className="bg-indigo-50 p-4 rounded-2xl border-2 border-indigo-200">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-amber-100 border-2 border-amber-400 px-4 py-2 rounded-xl flex items-center gap-2 text-amber-900 font-extrabold text-base">
              <span>📦 ZIP ఫైల్ (మూసి ఉంది)</span>
            </div>

            <div className="flex items-center gap-2 text-indigo-600 font-black text-xl animate-bounce">
              <span>↓</span>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                ⬆️ Extract (తెరిచాము)
              </span>
              <span>↓</span>
            </div>

            <div className="bg-emerald-100 border-2 border-emerald-400 px-4 py-3 rounded-xl flex items-center gap-2 text-emerald-950 font-black text-lg shadow">
              <Folder className="w-7 h-7 text-emerald-600" />
              <span>📁 Embroidery Designs ఫోల్డర్</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 border-2 border-yellow-400 p-3 rounded-2xl text-yellow-950 font-bold text-sm leading-snug">
          💡 Extract చేసిన తర్వాత కొత్త Folder వస్తుంది. అందులో మీ Embroidery Design ఫైల్ ఉంటుంది.
        </div>
      </div>

      {/* Interactive Extraction Action */}
      <div className="space-y-4">
        {!isExtracted ? (
          <button
            onClick={onPerformExtract}
            disabled={isExtracting}
            className="w-full py-5 px-6 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-black text-2xl rounded-2xl shadow-xl border-4 border-emerald-900 active:scale-95 transition-transform flex items-center justify-center gap-3"
          >
            <ArchiveRestore className="w-9 h-9 text-yellow-300 animate-pulse" />
            <span>
              {isExtracting ? 'Extract అవుతోంది...' : 'Extract / Unzip నొక్కండి'}
            </span>
          </button>
        ) : (
          <div className="bg-emerald-50 border-4 border-emerald-500 p-5 rounded-3xl space-y-3 shadow-lg">
            <div className="flex items-center gap-3 text-emerald-950 font-black text-xl border-b-2 border-emerald-200 pb-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <div>Extract పూర్తయింది! 🎉</div>
                <div className="text-xs font-bold text-emerald-700">
                  {extractedFiles.length} ఫైల్స్ బయటికి వచ్చాయి:
                </div>
              </div>
            </div>

            {/* Extracted Files List */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {extractedFiles.map((file, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2 shadow-sm ${
                    file.isEmbroidery 
                      ? 'bg-white border-indigo-400 hover:border-indigo-600' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-2xl">{file.isEmbroidery ? '🧵' : '📄'}</span>
                    <div className="truncate">
                      <div className="font-black text-slate-900 text-base truncate">
                        {file.name}
                      </div>
                      <div className="text-xs font-bold text-indigo-700 flex items-center gap-1">
                        {file.isEmbroidery ? (
                          <span className="bg-indigo-100 px-2 py-0.5 rounded-full border border-indigo-300 font-extrabold text-indigo-900">
                            ఎంబ్రాయిడరీ ఫైల్ ({file.ext})
                          </span>
                        ) : (
                          <span>సైజు: {(file.size / 1024).toFixed(1)} KB</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {file.blob && (
                    <button
                      onClick={() => onDownloadFile(file)}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shrink-0 flex items-center gap-1 shadow active:scale-90"
                      title="ఫైల్ డౌన్లోడ్ చేయండి"
                    >
                      <Download className="w-4 h-4" />
                      <span>సేవ్</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Embroidery Formats Educational Section */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-3">
        <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
          <span>🧵 ఎంబ్రాయిడరీ ఫైల్ రకాలు (Formats):</span>
        </h3>
        <p className="text-xs font-bold text-slate-600 leading-snug">
          వేర్వేరు మిషన్లకు వేర్వేరు పేరు చివరి భాగాలు ఉంటాయి (ఉదాహరణకు):
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {embroideryFormats.map((fmt, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFormatInfo(fmt)}
              className="bg-slate-50 hover:bg-indigo-50 border-2 border-slate-300 hover:border-indigo-400 p-2 rounded-xl text-left transition-all active:scale-95"
            >
              <div className="font-black text-indigo-800 text-sm">{fmt.ext}</div>
              <div className="text-[11px] font-bold text-slate-600 truncate">{fmt.name}</div>
            </button>
          ))}
        </div>

        {selectedFormatInfo && (
          <div className="bg-indigo-50 border-2 border-indigo-300 p-3 rounded-2xl text-xs font-bold text-indigo-950 flex items-start gap-2 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-indigo-900 font-black">{selectedFormatInfo.ext} ({selectedFormatInfo.name}):</strong> {selectedFormatInfo.desc}
            </div>
          </div>
        )}
      </div>

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
