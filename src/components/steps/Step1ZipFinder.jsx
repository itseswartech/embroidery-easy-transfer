import React, { useRef } from 'react';
import { Archive, FolderOpen, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare, Download, Sparkles } from 'lucide-react';

export function Step1ZipFinder({ 
  onNext, 
  onPrev, 
  onSelectZipFile, 
  onLoadDemoZip, 
  zipFileName, 
  isZipLoaded 
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onSelectZipFile(file);
    }
  };

  return (
    <div className="space-y-6 pb-6 animate-fadeIn">
      {/* Heading Card */}
      <div className="bg-indigo-600 text-white p-5 rounded-3xl border-4 border-indigo-800 shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-indigo-950 font-black text-sm px-3 py-1 rounded-full">
            స్టెప్ 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-yellow-300">
            ZIP ఫైల్ను కనుగొనండి
          </h2>
        </div>

        <p className="text-lg font-bold text-indigo-100 leading-relaxed">
          మీకు WhatsApp లేదా ఇతర యాప్లో వచ్చిన ZIP ఫైల్ను ముందుగా కనుగొనండి.
        </p>
      </div>

      {/* Visual Indicator of ZIP File */}
      <div className="bg-white rounded-3xl p-5 border-4 border-slate-200 shadow-md space-y-4">
        <h3 className="text-lg font-black text-slate-800 text-center">
          ZIP ఫైల్ ఇలా కనిపిస్తుంది:
        </h3>

        {/* Visual Box */}
        <div className="bg-amber-50 border-3 border-amber-300 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500 text-white rounded-2xl shadow">
              <Archive className="w-10 h-10" />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">
                {zipFileName || 'designs.zip'}
              </div>
              <div className="text-xs font-bold text-amber-800">
                📦 (Extract చేయాల్సిన ZIP ఫైల్)
              </div>
            </div>
          </div>

          {isZipLoaded && (
            <div className="bg-emerald-500 text-white p-2 rounded-full shadow animate-bounce">
              <CheckCircle2 className="w-7 h-7" />
            </div>
          )}
        </div>

        {/* Visual Path Flow */}
        <div className="bg-slate-100 p-3 rounded-2xl border border-slate-300 space-y-2">
          <div className="text-xs font-black text-slate-600 uppercase tracking-wider">
            మీ ఫోన్లో ఫైల్ ఉండే స్థలాలు:
          </div>
          <div className="flex items-center justify-around gap-2 text-center text-xs font-bold text-slate-700">
            <div className="bg-white p-2.5 rounded-xl border border-slate-300 flex flex-col items-center flex-1">
              <MessageSquare className="w-6 h-6 text-emerald-600 mb-1" />
              <span>WhatsApp Documents</span>
            </div>
            <span className="text-slate-400 font-black text-lg">↓</span>
            <div className="bg-white p-2.5 rounded-xl border border-slate-300 flex flex-col items-center flex-1">
              <Download className="w-6 h-6 text-blue-600 mb-1" />
              <span>Downloads Folder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Selection Buttons */}
      <div className="space-y-3">
        {/* Hidden HTML File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          accept=".zip,application/zip,application/x-zip-compressed"
          onChange={handleFileChange}
          className="hidden" 
        />

        {/* Main Upload Trigger Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xl rounded-2xl shadow-lg border-3 border-blue-900 active:scale-95 transition-transform flex items-center justify-center gap-3"
        >
          <FolderOpen className="w-8 h-8 text-yellow-300" />
          <span>
            {isZipLoaded ? 'వేరే ZIP ఫైల్ను ఎంచుకోండి' : 'ZIP ఫైల్ను ఓపెన్ చేయండి'}
          </span>
        </button>

        {/* Demo Mode Button */}
        {!isZipLoaded && (
          <button
            onClick={onLoadDemoZip}
            className="w-full py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold text-base rounded-2xl border-2 border-amber-400 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>నమూనా ZIP తో ట్రై చేయండి (Demo Try)</span>
          </button>
        )}

        {/* Status Confirmation Badge */}
        {isZipLoaded && (
          <div className="bg-emerald-100 border-3 border-emerald-400 p-4 rounded-2xl text-emerald-950 font-black text-lg flex items-center gap-3 shadow">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <div>ZIP ఫైల్ సిద్ధంగా ఉంది ✓</div>
              <div className="text-xs font-bold text-emerald-800">
                ఇప్పుడు "తర్వాత" నొక్కి ఫైల్స్ extract చేయండి.
              </div>
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
