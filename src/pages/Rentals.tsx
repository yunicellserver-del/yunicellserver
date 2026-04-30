import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Clock, CreditCard, User, Phone, Download, ChevronDown } from 'lucide-react';
import { rentalTools, RentalTool } from '../data/rentals';

export default function Rentals() {
  const [selectedTool, setSelectedTool] = useState<RentalTool | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    tiempo: '12h',
    metodoPago: 'CUP 🇨🇺'
  });

  const handleOpenModal = (tool: RentalTool) => {
    setSelectedTool(tool);
    setFormData({ ...formData, tiempo: '12h', metodoPago: 'CUP 🇨🇺' });
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTool) return;

    // Obtener el precio según el método de pago y tiempo seleccionado
    let priceStr = '0';
    if (formData.metodoPago.includes('CUP')) {
      priceStr = selectedTool.prices.cup[formData.tiempo as keyof typeof selectedTool.prices.cup];
    } else if (formData.metodoPago.includes('MXN')) {
      priceStr = selectedTool.prices.mxn[formData.tiempo as keyof typeof selectedTool.prices.mxn];
    } else if (formData.metodoPago.includes('USDT') || formData.metodoPago.includes('Zelle')) {
      priceStr = selectedTool.prices.usdt[formData.tiempo as keyof typeof selectedTool.prices.usdt];
    } else if (formData.metodoPago.includes('Bizum')) {
      priceStr = selectedTool.prices.bizum[formData.tiempo as keyof typeof selectedTool.prices.bizum];
    }

    const text = `Hola YunicellServer, deseo rentar una herramienta.

🛠️ *Herramienta:* ${selectedTool.name}
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
⏱️ *Tiempo:* ${formData.tiempo}
💳 *Método de Pago:* ${formData.metodoPago}
💵 *Total a Pagar:* ${priceStr}

Por favor confirmarme disponibilidad. ¡Gracias!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    handleCloseModal();
  };

  const displayedTools = showAll ? rentalTools : rentalTools.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block">
          Renta de Herramientas
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Accede a las mejores herramientas de software por el tiempo que necesites. Selecciona la herramienta, elige tu tiempo y método de pago.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {displayedTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all flex flex-col relative"
          >
            {/* Unique Gear Icon */}
            <div className="p-6 flex justify-center items-center bg-slate-950/50 border-b border-white/5 relative overflow-hidden">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${tool.color}`}></div>
              <Settings 
                size={64} 
                className={`relative z-10 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-br animate-[spin_10s_linear_infinite] ${tool.color}`} 
                style={{ stroke: 'url(#gradient-' + tool.id + ')' }}
              />
              <svg width="0" height="0">
                <linearGradient id={`gradient-${tool.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={tool.color.includes('blue') ? '#3b82f6' : tool.color.includes('orange') ? '#f97316' : tool.color.includes('purple') ? '#a855f7' : tool.color.includes('green') ? '#22c55e' : '#e2e8f0'} />
                  <stop offset="100%" stopColor={tool.color.includes('cyan') ? '#06b6d4' : tool.color.includes('red') ? '#ef4444' : tool.color.includes('pink') ? '#ec4899' : tool.color.includes('emerald') ? '#10b981' : '#94a3b8'} />
                </linearGradient>
              </svg>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-black text-3xl mb-4 text-center text-white tracking-tight drop-shadow-lg">
                {tool.name}
              </h3>
              
              <div className="space-y-3 mb-6 flex-grow">
                {/* Pricing Table */}
                <div className="text-xs text-slate-300 bg-slate-950/50 rounded-lg p-3 space-y-2 border border-white/5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="font-semibold text-slate-100 flex items-center gap-1">🇨🇺 CUP</span>
                    <span className="text-right">12h: {tool.prices.cup['12h']} | 24h: {tool.prices.cup['24h']} | 48h: {tool.prices.cup['48h']}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="font-semibold text-slate-100 flex items-center gap-1">🇲🇽 MXN</span>
                    <span className="text-right">12h: {tool.prices.mxn['12h']} | 24h: {tool.prices.mxn['24h']} | 48h: {tool.prices.mxn['48h']}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="font-semibold text-slate-100 flex items-center gap-1">🪙 USDT</span>
                    <span className="text-right">12h: {tool.prices.usdt['12h']} | 24h: {tool.prices.usdt['24h']} | 48h: {tool.prices.usdt['48h']}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="font-semibold text-slate-100 flex items-center gap-1">🇪🇸 Bizum</span>
                    <span className="text-right">12h: {tool.prices.bizum['12h']} | 24h: {tool.prices.bizum['24h']} | 48h: {tool.prices.bizum['48h']}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-semibold text-slate-100 flex items-center gap-1">🇺🇸 Zelle</span>
                    <span className="text-right">12h: {tool.prices.usdt['12h']} | 24h: {tool.prices.usdt['24h']} | 48h: {tool.prices.usdt['48h']}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <button 
                  onClick={() => handleOpenModal(tool)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Clock size={18} />
                  Rentar
                </button>
                <a 
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Descargar
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && rentalTools.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2 border border-white/10"
          >
            Mostrar Todas
            <ChevronDown size={20} />
          </button>
        </div>
      )}

      {/* Rental Modal */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-950/50">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Settings className="text-blue-400" size={24} />
                  Rentar {selectedTool.name}
                </h2>
                <button 
                  onClick={handleCloseModal}
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
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Tu nombre completo"
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
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                      <Clock size={16} /> Tiempo
                    </label>
                    <select 
                      value={formData.tiempo}
                      onChange={(e) => setFormData({...formData, tiempo: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                    >
                      <option value="12h">12 Horas</option>
                      <option value="24h">24 Horas</option>
                      <option value="48h">48 Horas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2">
                      <CreditCard size={16} /> Método de Pago
                    </label>
                    <select 
                      value={formData.metodoPago}
                      onChange={(e) => setFormData({...formData, metodoPago: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
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