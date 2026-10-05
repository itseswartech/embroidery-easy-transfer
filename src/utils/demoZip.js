import JSZip from 'jszip';

export async function createDemoZipFile() {
  const zip = new JSZip();

  // Add sample embroidery design files
  const dstContent = "HEADER DATA FOR TAJIMA EMBROIDERY MACHINE\nLA:FLORAL DESIGN 01\nST:14500\nCO:6\nPOS: +120 +450\nEND";
  const pesContent = "BROTHER EMBROIDERY MACHINE FORMAT DATA v4.0\nDESIGN NAME: PEACOCK NECK PATTERN\nSTITCH COUNT: 22000";
  const jefContent = "JANOME EMBROIDERY FILE FORMAT\nDESIGN: SAREE BUTTA BORDER\nSTITCHES: 18500";

  zip.file("floral_design_border.dst", dstContent);
  zip.file("peacock_neck_pattern.pes", pesContent);
  zip.file("saree_butta_design.jef", jefContent);
  zip.file("README_సూచనలు.txt", "ఈ ఫోల్డర్ లో ఉన్న .dst ఫైల్ ను పెన్డ్రైవ్ లోకి కాపీ చేయండి.");

  const blob = await zip.generateAsync({ type: "blob" });
  return new File([blob], "embroidery_designs_demo.zip", { type: "application/zip" });
}
