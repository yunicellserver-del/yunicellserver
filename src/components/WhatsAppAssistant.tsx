import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    servicio: 'Renta de Herramientas',
    nombre: '',
    numero: '',
    mensaje: ''
  });

  const servicios = [
    'Renta de Herramientas',
    'Servicio Remoto',
    'Compra de Créditos',
    'Compra Archivos HalabTech',
    'Compra USDT'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hola YunicellServer, necesito ayuda:
📌 *Servicio:* ${formData.servicio}
👤 *Nombre:* ${formData.nombre}
📱 *Número:* ${formData.numero}
${formData.mensaje ? `💬 *Mensaje:* ${formData.mensaje}` : ''}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34634181266?text=${encodedText}`, '_blank');
    setIsOpen(false);
    
    // Reset form optionally, though keeping it might be nice if they reopen
    setFormData({ ...formData, mensaje: '' }); 
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right"
          >
            <div className="bg-[#25D366] p-4 flex justify-between items-center">
              <h3 className="font-bold text-slate-950 flex items-center gap-2">
                <MessageCircle size={20} className="fill-slate-950" />
                Necesitas Ayuda
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-900 hover:text-white transition-colors bg-white/20 hover:bg-white/30 rounded-full p-1"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  ¿En qué podemos ayudarte?
                </label>
                <select 
                  value={formData.servicio}
                  onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all"
                >
                  {servicios.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Tu Nombre
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Tu Número
                </label>
                <input 
                  type="tel" 
                  required
                  value={formData.numero}
                  onChange={(e) => setFormData({...formData, numero: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Mensaje (Opcional)
                </label>
                <textarea 
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-all resize-none"
                  placeholder="Describe tu consulta..."
                  rows={2}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send size={16} />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        {/* Blinking red dot */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
        </span>
        
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="fill-current" />}
      </button>
    </div>
  );
}