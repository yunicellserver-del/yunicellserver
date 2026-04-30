import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, X, User, Phone, CreditCard, Calculator, ArrowRight, Wallet, BadgePercent } from 'lucide-react';

const TetherIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2.4c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm.545-12.72v-1.68h-1.09v1.68c-2.486.136-4.364.886-4.364 1.77 0 .883 1.878 1.633 4.364 1.77v4.62h1.09v-4.62c2.486-.137 4.364-.887 4.364-1.77 0-.884-1.878-1.634-4.364-1.77zm0 2.64v-1.8c2.046-.11 3.546-.628 3.546-1.2 0-.573-1.5-1.09-3.546-1.2v1.8c-2.046.11-3.546.628-3.546 1.2 0 .573 1.5 1.09 3.546 1.2z" />
  </svg>
);

const rates = {
  'CUP (Transfermóvil/Enzona) 🇨🇺': 670,
  'MXN 🇲🇽': 20,
  'Bizum 🇪🇸': 1.60,
  'Zelle 🇺🇸': 1.06
};

type PaymentMethod = keyof typeof rates;

export default function BuyUSDT() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    cantidad: '',
    metodoPago: 'CUP (Transfermóvil/Enzona) 🇨🇺' as PaymentMethod
  });

  const totalToPay = (Number(formData.cantidad) || 0) * rates[formData.metodoPago];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cantidad || Number(formData.cantidad) <= 0) return;

    const text = `Hola YunicellServer, deseo comprar USDT.
🪙 *Servicio:* Compra de USDT
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
💰 *Cantidad solicitada:* ${formData.cantidad} USDT
💳 *Método de Pago:* ${formData.metodoPago}
💵 *Total a pagar:* ${totalToPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

Por favor confirmarme los datos para realizar el pago. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 mb-6 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-pulse">
          <TetherIcon size={48} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent inline-block">
          Compra de USDT
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Adquiere USDT de forma rápida y segura. Selecciona tu método de pago preferido, calcula tu total y recibe tus criptomonedas al instante.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Rates Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/60 border border-white/10 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BadgePercent className="text-emerald-400" />
            Tasas de Cambio Activas
          </h3>
          <div className="space-y-4">
            {Object.entries(rates).map(([method, rate]) => (
              <div key={method} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-white/5">
                <span className="font-medium text-slate-200">{method}</span>
                <div className="text-right">
                  <span className="text-sm text-slate-400 block">1 USDT =</span>
                  <span className="text-lg font-bold text-emerald-400">{rate.toFixed(2)}</span>
                </div>
              </div>
            ))}
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
            <div className="absolute inset-0 bg-emerald-500 blur-[100px] opacity-10 rounded-full"></div>
            <div className="relative bg-slate-900 border border-emerald-500/20 p-10 rounded-3xl flex flex-col items-center">
              <Wallet size={64} className="text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comprar?</h3>
              <p className="text-slate-400 text-sm mb-8">
                Haz clic en el botón de abajo, completa el formulario con la cantidad que deseas y te contactaremos por WhatsApp para finalizar la transacción.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-3 hover:-translate-y-1 text-lg"
              >
                Solicitar Compra de USDT
                <ArrowRight size={20} />
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
              className="relative w-full max-w-md bg-slate-900 border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                  <Coins className="text-emerald-400" size={24} />
                  Formulario de Compra
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
                    <User size={16} /> Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Ej: Carlos Rodríguez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Phone size={16} /> Número de Teléfono
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.numero}
                    onChange={(e) => setFormData({...formData, numero: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <Coins size={16} /> Cantidad de USDT
                  </label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    step="0.01"
                    value={formData.cantidad}
                    onChange={(e) => setFormData({...formData, cantidad: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Ej: 50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                    <CreditCard size={16} /> Método de Pago
                  </label>
                  <select 
                    value={formData.metodoPago}
                    onChange={(e) => setFormData({...formData, metodoPago: e.target.value as PaymentMethod})}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                  >
                    {Object.keys(rates).map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                {/* Calculator Summary */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-6">
                  <div className="flex items-center justify-between text-sm text-emerald-100 mb-1">
                    <span>Tasa aplicada:</span>
                    <span>{rates[formData.metodoPago].toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-lg text-emerald-400">
                    <span className="flex items-center gap-2">
                      <Calculator size={18} /> Total a Pagar:
                    </span>
                    <span>
                      {totalToPay > 0 ? totalToPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={!formData.cantidad || Number(formData.cantidad) <= 0}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/25 flex items-center justify-center gap-2 text-lg"
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