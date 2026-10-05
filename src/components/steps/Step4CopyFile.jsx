import React from 'react';
import { Copy, Folder, ArrowRight, ArrowLeft, Download, Usb, HelpCircle, CheckCircle } from 'lucide-react';

export function Step4CopyFile({ 
  onNext, 
  onPrev, 
  onOpenCopyGuide, 
  extractedFiles, 
  onDownloadFile 
}) {
  const primaryEmbroideryFile = extractedFiles?.find(f => f.isEmbroidery) || extractedFiles?.[0];

  return (
    <div className="space-y-6 pb-6 animate-fadeIn">
      {/* Step Header */}
      <div className="bg-indigo-600 text-white p-5 rounded-3xl border-4 border-indigo-800 shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-indigo-950 font-black text-sm px-3 py-1 rounded-full">
            స్టెప్ 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-yellow-300">
            Design ఫైల్ను Pen Driveలోకి పంపండి
          </h2>
        </div>

        <p className="text-lg font-bold text-indigo-100 leading-relaxed">
          ఇప్పుడు Extract చేసిన Folderలో ఉన్న Embroidery Design ఫైల్ను ఎంచుకోండి.
        </p>
      </div>

      {/* Visual Directional Flow Box */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-4">
        <h3 className="text-center text-lg font-black text-slate-800">
          కాపీ చేసే క్రమం (Copy Sequence):
        </h3>

        {/* Dynamic Diagram */}
        <div className="bg-slate-100 p-4 rounded-2xl border-2 border-slate-300">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-300 shadow-sm flex flex-col items-center">
              <Folder className="w-8 h-8 text-indigo-600 mb-1" />
              <span className="text-xs font-black text-slate-900">1. Extracted Folder</span>
            </div>

            <div className="bg-white p-3 rounded-2xl border-2 border-indigo-300 shadow-sm flex flex-col items-center">
              <span className="text-3xl mb-1">🧵</span>
              <span className="text-xs font-black text-slate-900">2. Design File</span>
            </div>

            <div className="bg-white p-3 rounded-2xl border-2 border-blue-400 shadow-sm flex flex-col items-center">
              <Copy className="w-8 h-8 text-blue-600 mb-1" />
              <span className="text-xs font-black text-slate-900">3. Copy ఆప్షన్</span>
            </div>

            <div className="bg-white p-3 rounded-2xl border-2 border-emerald-400 shadow-sm flex flex-col items-center bg-emerald-50">
              <Usb className="w-8 h-8 text-emerald-600 mb-1" />
              <span className="text-xs font-black text-emerald-800">4. Pen Drive Paste</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified 4 Step List */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-3">
        <h3 className="text-lg font-black text-indigo-950 border-b-2 border-slate-100 pb-2">
          చేయవలసిన పనులు:
        </h3>

        <ol className="space-y-3 font-extrabold text-base text-slate-900">
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">1</span>
            <span>Design ఫైల్ను నొక్కి పట్టుకోండి. (Long Press)</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">2</span>
            <span><strong>"Copy"</strong> ఎంచుకోండి.</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">3</span>
            <span><strong>"USB Drive / Pen Drive"</strong>ను ఓపెన్ చేయండి.</span>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">4</span>
            <span><strong>"Paste"</strong> నొక్కండి.</span>
          </li>
        </ol>
      </div>

      {/* Visual Guide Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onOpenCopyGuide('copy')}
          className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow border-2 border-blue-900 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Copy className="w-7 h-7 text-yellow-300" />
          <span>Copy చేయడం ఎలా?</span>
        </button>

        <button
          onClick={() => onOpenCopyGuide('paste')}
          className="p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg shadow border-2 border-emerald-900 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Usb className="w-7 h-7 text-yellow-300" />
          <span>Paste చేయడం ఎలా?</span>
        </button>
      </div>

      {/* Direct Save Option if file extracted */}
      {primaryEmbroideryFile && primaryEmbroideryFile.blob && (
        <div className="bg-indigo-50 border-3 border-indigo-300 p-4 rounded-2xl space-y-2 shadow-sm">
          <div className="text-xs font-black text-indigo-800 uppercase tracking-wider">
            డైరెక్ట్ సేవ్ ఆప్షన్:
          </div>
          <button
            onClick={() => onDownloadFile(primaryEmbroideryFile)}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg rounded-xl shadow flex items-center justify-center gap-2 border-2 border-indigo-900"
          >
            <Download className="w-6 h-6 text-yellow-300" />
            <span>{primaryEmbroideryFile.name} ఫైల్ సేవ్ చేయండి</span>
          </button>
        </div>
      )}

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
