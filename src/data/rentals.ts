export interface RentalPrices {
  cup: { '12h': string; '24h': string; '48h': string };
  mxn: { '12h': string; '24h': string; '48h': string };
  usdt: { '12h': string; '24h': string; '48h': string };
  bizum: { '12h': string; '24h': string; '48h': string };
}

export interface RentalTool {
  id: string;
  name: string;
  prices: RentalPrices;
  color: string; // Used to make the gear icon unique
  downloadUrl: string;
}

const typeAPrices: RentalPrices = {
  cup: { '12h': '2500', '24h': '3000', '48h': '4000' },
  mxn: { '12h': '80', '24h': '100', '48h': '150' },
  usdt: { '12h': '5', '24h': '6.50', '48h': '8' },
  bizum: { '12h': '5', '24h': '6.50', '48h': '8' },
};

const typeBPrices: RentalPrices = {
  cup: { '12h': '3000', '24h': '4000', '48h': '5000' },
  mxn: { '12h': '150', '24h': '200', '48h': '250' },
  usdt: { '12h': '8', '24h': '9.50', '48h': '10' },
  bizum: { '12h': '10', '24h': '12.50', '48h': '15' },
};

const typeCPrices: RentalPrices = {
  cup: { '12h': '3000', '24h': '4000', '48h': '5000' },
  mxn: { '12h': '150', '24h': '200', '48h': '250' },
  usdt: { '12h': '5', '24h': '8', '48h': '10' },
  bizum: { '12h': '10', '24h': '12.50', '48h': '15' },
};

const typeDPrices: RentalPrices = {
  cup: { '12h': '3000', '24h': '4000', '48h': '5000' },
  mxn: { '12h': '100', '24h': '150', '48h': '20' }, // Updated from 200 to 20
  usdt: { '12h': '5', '24h': '7', '48h': '9' },
  bizum: { '12h': '10', '24h': '12.50', '48h': '15' },
};

export const rentalTools: RentalTool[] = [
  { id: 'ts-tool', name: 'Ts Tool', prices: typeBPrices, color: 'from-rose-500 to-red-400', downloadUrl: 'https://drive.google.com/drive/folders/1tgz5A2EE1Lo7LwxF9vSB93O3XshnnFMi' },
  { id: 'dft-pro', name: 'DFT Pro', prices: typeAPrices, color: 'from-blue-500 to-cyan-400', downloadUrl: 'https://www.dftpro.com/#downloads-section' },
  { id: 'unlocktool', name: 'UnlockTool', prices: typeAPrices, color: 'from-red-500 to-orange-400', downloadUrl: 'https://unlocktool.net/download' },
  { id: 'sigma-plus', name: 'Sigma Plus', prices: typeCPrices, color: 'from-violet-500 to-purple-500', downloadUrl: 'https://sigmakey.com/es/downloads/software' },
  { id: 'tsm-tool', name: 'TSM Tool', prices: typeAPrices, color: 'from-cyan-500 to-blue-400', downloadUrl: 'https://tsm-tool.com/download' },
  { id: 'eft-pro', name: 'EFT Pro', prices: typeAPrices, color: 'from-green-500 to-emerald-400', downloadUrl: 'https://eftprodongle.com/download-setup' },
  { id: 'chimera-tool', name: 'Chimera Tool', prices: typeBPrices, color: 'from-orange-500 to-red-500', downloadUrl: 'https://chimeratool.com/es/download' },
  { id: 'pandora-tool', name: 'Pandora Tool', prices: typeBPrices, color: 'from-purple-500 to-pink-500', downloadUrl: 'https://z3x--team-com.translate.goog/download/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc' },
  { id: 'amt-tool', name: 'AMT Tool', prices: typeAPrices, color: 'from-indigo-500 to-blue-500', downloadUrl: 'https://androidmultitool.com' },
  { id: 'awt-tool', name: 'AWT Tool', prices: typeAPrices, color: 'from-teal-500 to-green-400', downloadUrl: 'https://androidwintool.com/download' },
  { id: 'octoplus-frp', name: 'Octoplus FRP', prices: typeAPrices, color: 'from-yellow-500 to-orange-500', downloadUrl: 'https://octoplusbox.com/es/download/software' },
  { id: 'anonyshu', name: 'Anonyshu', prices: typeBPrices, color: 'from-slate-600 to-slate-400', downloadUrl: 'https://anonyshu.com/index.html' },
  { id: 'tfm-tool', name: 'TFM Tool', prices: typeAPrices, color: 'from-fuchsia-500 to-purple-500', downloadUrl: 'https://tfmtool.com/downloads' },
  { id: 'samsung-tool', name: 'Samsung Tool Online', prices: typeBPrices, color: 'from-blue-600 to-indigo-600', downloadUrl: 'https://z3x--team-com.translate.goog/download/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc' },
  { id: 'mdmfix-tool', name: 'MDMFix Tool', prices: typeCPrices, color: 'from-emerald-500 to-teal-500', downloadUrl: 'https://mdmfixtool.com/' },
  { id: 'hydra-tool', name: 'HYDRA TOOL', prices: typeDPrices, color: 'from-sky-500 to-blue-500', downloadUrl: 'https://www.hydradongle.com/download/software' },
  { id: 'griffin-unlocker', name: 'GRIFFIN UNLOCKER', prices: typeDPrices, color: 'from-amber-500 to-yellow-400', downloadUrl: 'https://griffin-unlocker.com/download.html' },
  { id: 'rtc-tool', name: 'RTC Tool', prices: typeAPrices, color: 'from-pink-500 to-rose-500', downloadUrl: 'https://rtc-tool.com' },
];
