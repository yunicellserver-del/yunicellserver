import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileArchive, X, User, Smartphone, Link as LinkIcon, CreditCard, Info, DownloadCloud, ChevronRight } from 'lucide-react';

const prices = {
  'CUP 🇨🇺': '500',
  'USDT 🪙': '1.00',
  'MXN 🇲🇽': '20',
  'Bizum 🇪🇸': '1.00',
  'Zelle 🇺🇸': '1.50'
};

type PaymentMethod = keyof typeof prices;

export default function HalabTech() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    modelo: '',
    link: '',
    metodoPago: 'CUP 🇨🇺' as PaymentMethod
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, deseo comprar un archivo de HalabTech.
📂 *Servicio:* Archivo Premium HalabTech
👤 *Nombre:* ${formData.nombre}
📱 *Modelo:* ${formData.modelo}
🔗 *Link del archivo:* ${formData.link}
💳 *Método de Pago:* ${formData.metodoPago}

Por favor confirmarme disponibilidad. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 mb-6 border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <FileArchive size={40} className="text-amber-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent inline-block">
          Archivos Premium HalabTech
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Descarga cualquier archivo premium de HalabTech de forma rápida. Solo envíanos el enlace y nosotros te proporcionamos la descarga directa.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Info & Prices Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CreditCard className="text-amber-400" />
              Precios por Archivo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(prices).map(([method, price]) => (
                <div key={method} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-white/5">
                  <span className="font-medium text-slate-200">{method}</span>
                  <span className="text-lg font-bold text-amber-400">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6 flex items-start gap-4">
            <Info className="text-amber-400 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="text-amber-400 font-bold mb-1">Información Importante</h4>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                Si el archivo descargado contiene alguna contraseña para su extracción, la misma le será enviada junto con el link de descarga final. ¡Garantizamos el acceso completo a tu archivo!
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center space-y-8 h-full"
        >
          <div className="relative w-full">
            <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-10 rounded-full"></div>
            <div className="relative bg-slate-900 border border-amber-500/20 p-10 rounded-3xl flex flex-col items-center">
              <DownloadCloud size={64} className="text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">¿Tienes el link de HalabTech?</h3>
              <p className="text-slate-400 text-sm mb-8">
                Presiona el botón de abajo, rellena los datos con el link exacto del archivo que necesitas y procesaremos tu solicitud inmediatamente.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg"
              >
                COMPRAR Archivo
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Purchase Modal */}
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
                    <Smartphone size={16} /> Modelo del Equipo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.modelo}
                    onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="Ej: SM-A525M"
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