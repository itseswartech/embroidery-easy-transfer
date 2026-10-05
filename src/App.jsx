import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HelpModal } from './components/HelpModal';
import { CopyPasteGuideModal } from './components/CopyPasteGuideModal';
import { HomeScreen } from './components/steps/HomeScreen';
import { Step1ZipFinder } from './components/steps/Step1ZipFinder';
import { Step2Extract } from './components/steps/Step2Extract';
import { Step3ConnectOTG } from './components/steps/Step3ConnectOTG';
import { Step4CopyFile } from './components/steps/Step4CopyFile';
import { Step5Success } from './components/steps/Step5Success';
import { createDemoZipFile } from './utils/demoZip';
import { stopSpeech } from './utils/speech';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Home, 1..5 = Steps
  const [zipFile, setZipFile] = useState(null);
  const [isZipLoaded, setIsZipLoaded] = useState(false);
  const [extractedFiles, setExtractedFiles] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [isExtracted, setIsExtracted] = useState(false);

  // Modals
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCopyGuideOpen, setIsCopyGuideOpen] = useState(false);
  const [copyGuideTab, setCopyGuideTab] = useState('copy');

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    stopSpeech(); // Stop speech when switching steps
  }, [currentStep]);

  // Navigation Handlers
  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleGoHome = () => {
    setCurrentStep(0);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setZipFile(null);
    setIsZipLoaded(false);
    setExtractedFiles([]);
    setIsExtracted(false);
  };

  // ZIP File Upload & Parsing logic
  const handleSelectZipFile = (file) => {
    if (file) {
      setZipFile(file);
      setIsZipLoaded(true);
      setIsExtracted(false);
      setExtractedFiles([]);
    }
  };

  const handleLoadDemoZip = async () => {
    try {
      const demoZip = await createDemoZipFile();
      setZipFile(demoZip);
      setIsZipLoaded(true);
      setIsExtracted(false);
      setExtractedFiles([]);
    } catch (err) {
      console.error('Failed to create demo zip:', err);
    }
  };

  // Extract ZIP client-side using JSZip
  const handlePerformExtract = async () => {
    if (!zipFile) {
      alert('దయచేసి ముందుగా ZIP ఫైల్ను ఎంచుకోండి.');
      return;
    }

    setIsExtracting(true);

    try {
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(zipFile);
      const fileList = [];

      const embroideryExtensions = ['.dst', '.pes', '.jef', '.exp', '.vp3', '.hus', '.xxx', '.design', '.emb', '.pcs'];

      for (const [filename, fileObj] of Object.entries(zipContent.files)) {
        if (!fileObj.dir) {
          const blob = await fileObj.async('blob');
          const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
          const isEmbroidery = embroideryExtensions.includes(ext) || filename.toLowerCase().includes('design');

          fileList.push({
            name: filename.split('/').pop(), // Basename
            size: blob.size,
            blob: blob,
            ext: ext,
            isEmbroidery: isEmbroidery
          });
        }
      }

      // Sort so embroidery files come first
      fileList.sort((a, b) => (b.isEmbroidery ? 1 : 0) - (a.isEmbroidery ? 1 : 0));

      setExtractedFiles(fileList);
      setIsExtracted(true);
    } catch (error) {
      console.error('Error extracting zip:', error);
      alert('ZIP ఫైల్ ని Extract చేయడంలో చిన్న సమస్య వచ్చింది. దయచేసి సరైన ZIP ఫైల్ ఎంచుకోండి.');
    } finally {
      setIsExtracting(false);
    }
  };

  // Download extracted file helper
  const handleDownloadFile = (fileItem) => {
    if (!fileItem || !fileItem.blob) return;

    const url = URL.createObjectURL(fileItem.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileItem.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Open Copy / Paste guide modal
  const handleOpenCopyGuide = (tab = 'copy') => {
    setCopyGuideTab(tab);
    setIsCopyGuideOpen(true);
  };

  // Current Step Titles for Voice Assistant
  const getStepTitles = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "స్టెప్ 1: ZIP ఫైల్ను కనుగొనండి",
          desc: "మీకు WhatsApp లో వచ్చిన ZIP ఫైల్ను కనుగొని ZIP ఫైల్ను ఓపెన్ చేయండి నొక్కండి."
        };
      case 2:
        return {
          title: "స్టెప్ 2: ZIP ఫైల్ను Extract చేయండి",
          desc: "Extract నొక్కితే కొత్త ఫోల్డర్ వచ్చి అందులో మీ ఎంబ్రాయిడరీ డిజైన్ ఫైల్ కనిపిస్తుంది."
        };
      case 3:
        return {
          title: "స్టెప్ 3: OTGతో Pen Drive కనెక్ట్ చేయండి",
          desc: "ముందుగా OTG అడాప్టర్ ను ఫోన్కు కనెక్ట్ చేసి, తర్వాత Pen Drive ని OTG లో పెట్టండి."
        };
      case 4:
        return {
          title: "స్టెప్ 4: Design ఫైల్ను Pen Driveలోకి పంపండి",
          desc: "డిజైన్ ఫైల్ పై నొక్కి పట్టుకుని Copy నొక్కి, Pen Drive ఓపెన్ చేసి Paste నొక్కండి."
        };
      case 5:
        return {
          title: "స్టెప్ 5: పూర్తయింది",
          desc: "మీ డిజైన్ Pen Driveలోకి చేరింది. ఇప్పుడు Pen Driveను ఫోన్ నుంచి తీసి మిషన్లో పెట్టండి."
        };
      default:
        return { title: "", desc: "" };
    }
  };

  const { title: stepTitle, desc: stepDesc } = getStepTitles();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-telugu text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        currentStep={currentStep}
        totalSteps={5}
        onGoHome={handleGoHome}
        onRestart={handleRestart}
        onOpenHelp={() => setIsHelpOpen(true)}
        currentStepTitle={stepTitle}
        currentStepDesc={stepDesc}
      />

      {/* Main Container - Mobile Centered View */}
      <main className="flex-1 w-full max-w-md mx-auto p-4 sm:p-5">
        {currentStep === 0 && (
          <HomeScreen onStart={handleStart} />
        )}

        {currentStep === 1 && (
          <Step1ZipFinder
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            onSelectZipFile={handleSelectZipFile}
            onLoadDemoZip={handleLoadDemoZip}
            zipFileName={zipFile ? zipFile.name : null}
            isZipLoaded={isZipLoaded}
          />
        )}

        {currentStep === 2 && (
          <Step2Extract
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            zipFile={zipFile}
            extractedFiles={extractedFiles}
            isExtracting={isExtracting}
            isExtracted={isExtracted}
            onPerformExtract={handlePerformExtract}
            onDownloadFile={handleDownloadFile}
          />
        )}

        {currentStep === 3 && (
          <Step3ConnectOTG
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        )}

        {currentStep === 4 && (
          <Step4CopyFile
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            onOpenCopyGuide={handleOpenCopyGuide}
            extractedFiles={extractedFiles}
            onDownloadFile={handleDownloadFile}
          />
        )}

        {currentStep === 5 && (
          <Step5Success
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenHelp={() => setIsHelpOpen(true)} />

      {/* Interactive Modals */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onOpenCopyGuide={() => handleOpenCopyGuide('copy')}
      />

      <CopyPasteGuideModal
        isOpen={isCopyGuideOpen}
        onClose={() => setIsCopyGuideOpen(false)}
        initialTab={copyGuideTab}
      />
    </div>
  );
}
