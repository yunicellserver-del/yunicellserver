import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileArchive, X, User, Phone, Smartphone, Link as LinkIcon, CreditCard, Info, DownloadCloud, Cloud, Search } from 'lucide-react';

const prices = {
  'CUP 🇨🇺': '500',
  'USDT 🪙': '1.00',
  'MXN 🇲🇽': '20',
  'Bizum 🇪🇸': '1.00',
  'Zelle 🇺🇸': '1.50'
};

type PaymentMethod = keyof typeof prices;

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    link: '',
    metodoPago: 'CUP 🇨🇺' as PaymentMethod
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, deseo comprar un archivo de HalabTech.

📂 *Servicio:* Archivo Premium HalabTech
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
🔗 *Link del archivo:* ${formData.link}
💳 *Método de Pago:* ${formData.metodoPago}
💵 *Total a Pagar:* ${prices[formData.metodoPago]}

Por favor confirmarme disponibilidad. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block">
          Servicios Especiales
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Soluciones rápidas para tus reparaciones. Descarga archivos premium de HalabTech o verifica el estado de iCloud totalmente gratis.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
        
        {/* HalabTech Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
        >
          <div className="p-8 bg-gradient-to-br from-amber-500/10 to-orange-600/10 border-b border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl animate-pulse">
                <FileArchive size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HalabTech Premium</h3>
                <p className="text-amber-400 font-medium">Archivos de Reparación</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              {Object.entries(prices).map(([method, price]) => (
                <div key={method} className="flex items-center justify-between p-3 bg-slate-950/50 rounded-xl border border-white/5">
                  <span className="text-sm font-medium text-slate-300">{method}</span>
                  <span className="text-sm font-bold text-amber-400">{price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <p className="text-slate-400 mb-6 leading-relaxed">
              Descarga cualquier archivo premium de HalabTech. Solo envíanos el enlace y nosotros te proporcionamos la descarga directa.
            </p>
            
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-3 mb-8 mt-auto">
              <Info className="text-amber-400 shrink-0 mt-0.5" size={20} />
              <p className="text-amber-100/80 text-sm">
                Si el archivo contiene alguna contraseña para su extracción, la misma le será enviada junto con el link de descarga final.
              </p>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg"
            >
              <DownloadCloud size={20} />
              Comprar Archivo
            </button>
          </div>
        </motion.div>

        {/* iCloud Check Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
        >
          <div className="relative h-64 overflow-hidden bg-slate-800 border-b border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1611406208882-96ab6eb9c5f8?auto=format&fit=crop&q=80&w=800" 
              alt="iPhone iCloud" 
              className="w-full h-full object-cover opacity-50 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-500/20 backdrop-blur-md rounded-2xl border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-xl relative overflow-hidden">
                <Smartphone size={56} className="absolute -left-2 text-slate-200" strokeWidth={1.5} />
                <Cloud size={40} className="absolute -right-2 top-2 text-blue-400 drop-shadow-lg" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white shadow-sm tracking-tight drop-shadow-md">iCloud Check</h3>
                <p className="text-blue-400 font-bold bg-blue-950/80 px-3 py-1 rounded-md inline-block mt-2 text-sm border border-blue-500/30 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]">Servicio Gratuito</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
              Verifica el estado de activación (Find My iPhone), carrier, simlock y más detalles de cualquier dispositivo Apple usando su IMEI o número de serie. Una herramienta indispensable para todo técnico.
            </p>
            
            <a
              href="https://ifreeicloud.co.uk/free-check"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg"
            >
              <Search size={20} />
              Chequear Gratis
            </a>
          </div>
        </motion.div>

      </div>

      {/* HalabTech Purchase Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-amber-500/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <FileArchive className="text-amber-400" size={24} />
                  Solicitar Archivo
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <User size={16} /> Nombre
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Phone size={16} /> Número
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.numero}
                    onChange={(e) => setFormData({...formData, numero: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <LinkIcon size={16} /> Link del Archivo (HalabTech)
                  </label>
                  <input 
                    type="url" 
                    required
                    value={formData.link}
                    onChange={(e) => setFormData({...formData, link: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="https://halabtech.com/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <CreditCard size={16} /> Método de Pago
                  </label>
                  <select 
                    value={formData.metodoPago}
                    onChange={(e) => setFormData({...formData, metodoPago: e.target.value as PaymentMethod})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                  >
                    {Object.keys(prices).map(method => (
                      <option key={method} value={method}>{method} - {prices[method as PaymentMethod]}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/25 flex items-center justify-center gap-2 text-lg"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}