import { motion } from 'framer-motion';
import { Download, MonitorSmartphone, Monitor, Usb } from 'lucide-react';

export default function RemoteTools() {
  const tools = [
    {
      name: 'AnyDesk',
      description: 'Software de escritorio remoto rápido y seguro para asistencia técnica.',
      url: 'https://anydesk.com/es/downloads/windows',
      icon: <MonitorSmartphone size={56} className="text-red-500" />,
      color: 'from-red-500/20 to-red-900/10',
      borderColor: 'hover:border-red-500/50',
      btnColor: 'bg-red-600 hover:bg-red-500 shadow-red-500/25'
    },
    {
      name: 'UltraViewer',
      description: 'Controla y da soporte a computadoras de forma remota fácilmente.',
      url: 'https://www.ultraviewer.net/es/download.html',
      icon: <Monitor size={56} className="text-blue-500" />,
      color: 'from-blue-500/20 to-blue-900/10',
      borderColor: 'hover:border-blue-500/50',
      btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/25'
    },
    {
      name: 'USB Redirector 1.9.7 Cliente',
      description: 'Redirige dispositivos USB de forma remota, esencial para reparaciones.',
      url: 'https://www.mediafire.com/file/1mrd9nmi1rhdx6l/REDIRECTOR_1.9.7_CLIENT.7z/file',
      icon: <Usb size={56} className="text-green-500" />,
      color: 'from-green-500/20 to-green-900/10',
      borderColor: 'hover:border-green-500/50',
      btnColor: 'bg-green-600 hover:bg-green-500 shadow-green-500/25'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block">
          Programas para Trabajos Remotos
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Descarga gratis los programas necesarios para que podamos conectarnos a tu equipo y realizar los servicios remotos de forma segura y eficiente.
        </p>
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
              
              {/* Decorative background glow */}
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
  );
}