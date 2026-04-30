import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Wrench, Zap, ShieldCheck, Coins, MonitorSmartphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Rentals from './Rentals';
import Downloads from './Downloads';
import BuyUSDT from './BuyUSDT';
import Services from './Services';
import BuyCreditsModal from '../components/BuyCreditsModal';
import RemoteWorkModal from '../components/RemoteWorkModal';

export default function Home() {
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [isRemoteModalOpen, setIsRemoteModalOpen] = useState(false);
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-blue-400" />,
      title: 'Herramientas Pro',
      description: 'Equipamiento de alta precisión para micro-soldadura y diagnóstico.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: 'Repuestos Originales',
      description: 'Pantallas, baterías y componentes de la más alta calidad del mercado.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Servicios de Servidor',
      description: 'Desbloqueos, FRP, y créditos para las mejores herramientas de software.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Garantía Técnica',
      description: 'Soporte especializado y garantía en todos nuestros productos.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Servicios de Servidor Activos 24/7
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="inline-block animate-pulse">📱</span> La plataforma integral para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">técnicos de celulares en software.</span>
              </h1>
              <div className="text-lg text-slate-300 mb-8 leading-relaxed space-y-3">
                <p className="flex items-center gap-2"><span className="text-xl">⚡</span> Renta de las herramientas más potentes del mercado</p>
                <p className="flex items-center gap-2"><span className="text-xl">💳</span> Compra de créditos para herramientas</p>
                <p className="flex items-center gap-2"><span className="text-xl">📂</span> Archivos premium (Halabtech)</p>
                <p className="flex items-center gap-2"><span className="text-xl">💱</span> Compra de USDT con distintos métodos de pago</p>
                <p className="flex items-center gap-2"><span className="text-xl">🛠️</span> Soporte gratis de programas, drivers y servicios</p>
                <p className="flex items-center gap-2"><span className="text-xl">🌐</span> Trabajos remotos a tu alcance</p>
                <p className="flex items-center gap-2"><span className="text-xl">🤝</span> Si no sabes, no te preocupes: nosotros lo hacemos por ti</p>
                <p className="flex items-center gap-2"><span className="text-xl">🚀</span> Recursos y soluciones especializadas que optimizan tu taller</p>
                <p className="flex items-center gap-2"><span className="text-xl">⭐</span> Elevan la calidad de tus servicios y te mantienen siempre actualizado en el mundo de la reparación móvil.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a 
                  href="#renta"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Rentar Herramientas
                  <ArrowRight size={20} />
                </a>
                <button 
                  onClick={() => setIsCreditsModalOpen(true)}
                  className="inline-flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/25"
                >
                  <Coins size={20} />
                  Compra de Créditos
                </button>
                <button 
                  onClick={() => setIsRemoteModalOpen(true)}
                  className="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-red-600/25"
                >
                  <MonitorSmartphone size={20} />
                  Trabajos Remotos
                </button>
                <a 
                  href="https://chat.whatsapp.com/I5UYPNx0JysDrqQfk1gn2E?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#25D366]/25"
                >
                  <Users size={20} />
                  Únete a nuestro grupo
                </a>
              </div>
              
              <div className="mt-6 bg-slate-900/50 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="text-[#25D366] font-bold">¡Comunidad Activa!</span> Nuestro grupo de WhatsApp cuenta con <span className="text-white font-bold">más de 600 miembros de más de 10 países</span>. Únete para compartir conocimientos, brindar apoyo mutuo y encontrar soluciones rápidas entre colegas técnicos.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm p-2 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Técnico reparando celular" 
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
                {/* Floating badge */}
                <div className="absolute bottom-8 -left-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Soporte Rápido</p>
                    <p className="text-white font-bold">+34 634 18 12 66</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renta de Herramientas Section */}
      <div id="renta" className="bg-slate-950">
        <Rentals />
      </div>

      {/* Software & Drivers Section */}
      <div id="descargas" className="bg-slate-900/30 border-y border-white/5">
        <Downloads />
      </div>

      {/* Comprar USDT Section */}
      <div id="usdt" className="bg-slate-950">
        <BuyUSDT />
      </div>

      {/* Archivos & iCloud Section */}
      <div id="servicios" className="bg-slate-900/30 border-y border-white/5">
        <Services />
      </div>

      <BuyCreditsModal isOpen={isCreditsModalOpen} onClose={() => setIsCreditsModalOpen(false)} />
      <RemoteWorkModal isOpen={isRemoteModalOpen} onClose={() => setIsRemoteModalOpen(false)} />
    </div>
  );
}