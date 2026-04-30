import { Link } from 'react-router-dom';
import { Smartphone, Mail, MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 animate-pulse">
                <img 
                  src="https://i.imgur.com/YirVLbd.jpeg" 
                  alt="YunicellServer Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.imgur.com/YirVLbd.png";
                  }}
                />
              </div>
              <span className="font-black text-xl tracking-tight flex items-center">
                <span className="text-[#ffcc00]">Yunicell</span>
                <span className="text-[#00ff00]">Server</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Tu proveedor de confianza para herramientas, repuestos y servicios de servidor especializado para técnicos de telefonía móvil.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Inicio</Link>
              </li>
              <li>
                <a href="/#renta" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Renta de Herramientas</a>
              </li>
              <li>
                <a href="/#descargas" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Software & Drivers</a>
              </li>
              <li>
                <a href="/#usdt" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Comprar USDT</a>
              </li>
              <li>
                <a href="/#servicios" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Archivos & iCloud</a>
              </li>
              <li>
                <a href="https://wa.me/34634181266" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Soporte Técnico</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>+34 634 18 12 66</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:yunicellserver@gmail.com" className="hover:text-blue-400 transition-colors">yunicellserver@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="https://yunicellserver.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">yunicellserver.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Servicio Online - 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} YunicellServer. Todos los derechos reservados.
          </p>
          <div className="text-slate-500 text-sm flex gap-4">
            <span>Para Técnicos</span>
            <span>•</span>
            <span>Por Técnicos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}