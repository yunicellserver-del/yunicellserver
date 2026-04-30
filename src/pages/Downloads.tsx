import { motion } from 'framer-motion';
import { Download, MonitorSmartphone, Monitor, Usb, HardDriveDownload, Cpu, Settings, CheckCircle2 } from 'lucide-react';

export default function Downloads() {
  const tools = [
    {
      name: 'AnyDesk',
      description: 'Software de escritorio remoto rápido y seguro para asistencia técnica.',
      url: 'https://anydesk.com/es/downloads/windows',
      icon: <MonitorSmartphone size={80} className="text-red-500 animate-pulse drop-shadow-lg" />,
      color: 'from-red-500/20 to-red-900/10',
      borderColor: 'hover:border-red-500/50',
      btnColor: 'bg-red-600 hover:bg-red-500 shadow-red-500/25'
    },
    {
      name: 'UltraViewer',
      description: 'Controla y da soporte a computadoras de forma remota fácilmente.',
      url: 'https://www.ultraviewer.net/es/download.html',
      icon: <Monitor size={80} className="text-blue-500 animate-pulse drop-shadow-lg" />,
      color: 'from-blue-500/20 to-blue-900/10',
      borderColor: 'hover:border-blue-500/50',
      btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25'
    },
    {
      name: 'USB Redirector 1.9.7',
      description: 'Redirige dispositivos USB de forma remota, esencial para reparaciones.',
      url: 'https://www.mediafire.com/file/1mrd9nmi1rhdx6l/REDIRECTOR_1.9.7_CLIENT.7z/file',
      icon: <Usb size={80} className="text-green-500 animate-pulse drop-shadow-lg" />,
      color: 'from-green-500/20 to-green-900/10',
      borderColor: 'hover:border-green-500/50',
      btnColor: 'bg-green-600 hover:bg-green-500 shadow-green-500/25'
    }
  ];

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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block">
          Centro de Descargas
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Todo lo que necesitas para trabajar: programas de conexión remota y el pack de drivers universal, gratis y en un solo lugar.
        </p>
      </div>

      {/* Remote Tools Section */}
      <div className="mb-24">
        <div className="flex items-center justify-center gap-3 mb-10">
          <MonitorSmartphone className="text-blue-400" size={32} />
          <h2 className="text-3xl font-bold text-white">Software Remoto</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col ${tool.borderColor}`}
            >
              <div className={`p-10 flex justify-center items-center bg-gradient-to-b ${tool.color} border-b border-white/5 relative overflow-hidden`}>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                  {tool.icon}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-2xl">
                  {tool.icon}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-2xl mb-3 text-white tracking-wide">
                  {tool.name}
                </h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                  {tool.description}
                </p>
                
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 ${tool.btnColor} hover:-translate-y-1`}
                >
                  <Download size={20} />
                  Descargar Gratis
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-white/10 mb-24"></div>

      {/* Drivers Section */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <HardDriveDownload className="text-blue-400" size={32} />
          <h2 className="text-3xl font-bold text-white">Pack de Drivers Universal</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center space-y-8"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
              <div className="relative bg-slate-900 border border-white/10 p-10 rounded-3xl flex flex-col items-center">
                <Cpu size={96} className="text-blue-400 mb-6 animate-pulse drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
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
                  Descargar Pack
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}