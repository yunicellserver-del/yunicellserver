import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, X, User, Phone, Wrench, Coins, Send } from 'lucide-react';

export default function BuyCreditsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    herramienta: '',
    cantidad: '',
    metodoPago: 'CUP 🇨🇺'
  });

  const rates = {
    'CUP 🇨🇺': 670,
    'MXN 🇲🇽': 20,
    'Bizum 🇪🇸': 1.60,
    'USDT 🪙': 1,
    'Zelle 🇺🇸': 1.06
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rate = rates[formData.metodoPago as keyof typeof rates] || 1;
    const totalToPay = (Number(formData.cantidad) || 0) * rate;

    const text = `Hola YunicellServer, deseo comprar créditos.

💳 *Servicio:* Compra de Créditos
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
🛠️ *Herramienta:* ${formData.herramienta}
🪙 *Cantidad:* ${formData.cantidad} créditos
💰 *Método de Pago:* ${formData.metodoPago}
💵 *Total a Pagar:* ${totalToPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

Por favor confirmarme disponibilidad. ¡Gracias!`;

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
            className="relative w-full max-w-md bg-slate-900 border border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Coins className="text-yellow-400" size={24} />
                Compra de Créditos
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
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
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
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                  <Wrench size={16} /> Nombre de la Herramienta
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.herramienta}
                  onChange={(e) => setFormData({...formData, herramienta: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  placeholder="Ej: Chimera, Z3X, Octoplus..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Coins size={16} /> Cantidad
                  </label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    value={formData.cantidad}
                    onChange={(e) => setFormData({...formData, cantidad: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                    placeholder="Ej: 50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <CreditCard size={16} /> Método de Pago
                  </label>
                  <select 
                    value={formData.metodoPago}
                    onChange={(e) => setFormData({...formData, metodoPago: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all appearance-none"
                  >
                    <option value="CUP 🇨🇺">CUP 🇨🇺</option>
                    <option value="MXN 🇲🇽">MXN 🇲🇽</option>
                    <option value="Bizum 🇪🇸">Bizum 🇪🇸</option>
                    <option value="USDT 🪙">USDT 🪙</option>
                    <option value="Zelle 🇺🇸">Zelle 🇺🇸</option>
                  </select>
                </div>
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