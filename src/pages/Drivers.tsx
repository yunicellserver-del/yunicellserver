import { motion } from 'framer-motion';
import { Download, HardDriveDownload, Cpu, Smartphone, Settings, Zap, CheckCircle2 } from 'lucide-react';

export default function Drivers() {
  const driverList = [
    'Drivers MTK (MediaTek)',
    'Drivers Qualcomm (Qloader 9008)',
    'Drivers Samsung USB',
    'Drivers SPD / Unisoc',
    'Drivers ADB & Fastboot',
    'Drivers Apple Mobile Device',
    'Drivers Huawei USB',
    'Drivers LG Mobile',
    'Drivers Motorola USB',
    'Filtros LibUSB'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <HardDriveDownload size={40} className="text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block">
          Pack de Drivers Universal
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Descarga fácil y gratis todos los drivers necesarios en un mismo lugar. Optimiza tu tiempo y evita errores de conexión durante tus procesos de software, flasheo y liberación.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 lg:p-10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Settings className="text-blue-400" />
            Contenido del Pack
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {driverList.map((driver, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-[#25D366] shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{driver}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center space-y-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
            <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl flex flex-col items-center">
              <Cpu size={64} className="text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Descarga Directa</h3>
              <p className="text-slate-400 text-sm mb-8 max-w-xs">
                Accede a la carpeta de MediaFire con todos los instaladores actualizados y listos para usar en Windows.
              </p>
              
              <a
                href="https://www.mediafire.com/folder/fz0a2v660gp00/DRIVER"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg"
              >
                <Download size={24} />
                Descargar Pack de Drivers
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}