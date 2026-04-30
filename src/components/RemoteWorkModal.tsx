import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, X, User, Phone, Smartphone, Settings, Send, MonitorSmartphone } from 'lucide-react';

export default function RemoteWorkModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    marca: '',
    modelo: '',
    proceso: '',
    metodoPago: 'CUP 🇨🇺'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hola YunicellServer, solicito un trabajo remoto.

💻 *Servicio:* Trabajo Remoto
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
🏷️ *Marca:* ${formData.marca}
📲 *Modelo:* ${formData.modelo}
⚙️ *Proceso:* ${formData.proceso}
💰 *Método de Pago:* ${formData.metodoPago}

Por favor confirmarme disponibilidad y precio. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-slate-900 border border-red-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50 sticky top-0 z-10">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <MonitorSmartphone className="text-red-400" size={24} />
                Trabajos Remotos
              </h2>
              <button 
                onClick={onClose}
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
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
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
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Smartphone size={16} /> Marca
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.marca}
                    onChange={(e) => setFormData({...formData, marca: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    placeholder="Ej: Samsung"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Smartphone size={16} /> Modelo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.modelo}
                    onChange={(e) => setFormData({...formData, modelo: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    placeholder="Ej: SM-A525M"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                  <Settings size={16} /> Proceso a realizar
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.proceso}
                  onChange={(e) => setFormData({...formData, proceso: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  placeholder="Ej: FRP, Liberación, Flasheo..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                  <CreditCard size={16} /> Método de Pago
                </label>
                <select 
                  value={formData.metodoPago}
                  onChange={(e) => setFormData({...formData, metodoPago: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none"
                >
                  <option value="CUP 🇨🇺">CUP 🇨🇺</option>
                  <option value="MXN 🇲🇽">MXN 🇲🇽</option>
                  <option value="Bizum 🇪🇸">Bizum 🇪🇸</option>
                  <option value="USDT 🪙">USDT 🪙</option>
                  <option value="Zelle 🇺🇸">Zelle 🇺🇸</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/25 flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}