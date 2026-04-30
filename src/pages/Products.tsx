import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MessageCircle, Server, Wrench, Cpu, Shield } from 'lucide-react';
import { products, Product } from '../data/products';

export default function Products() {
  const [filter, setFilter] = useState<string>('Todos');
  const [search, setSearch] = useState('');

  const categories = ['Todos', 'Herramientas', 'Repuestos', 'Servidor', 'Accesorios'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'Todos' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Herramientas': return <Wrench size={16} className="text-orange-400" />;
      case 'Repuestos': return <Cpu size={16} className="text-green-400" />;
      case 'Servidor': return <Server size={16} className="text-blue-400" />;
      case 'Accesorios': return <Shield size={16} className="text-purple-400" />;
      default: return null;
    }
  };

  const handleBuyClick = (product: Product) => {
    const message = `Hola YunicellServer, estoy interesado en adquirir: *${product.name}* (Precio ref: $${product.price}). ¿Me podrías dar más información?`;
    window.open(`https://wa.me/34634181266?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Catálogo de Productos</h1>
        <p className="text-slate-400">Encuentra todo lo necesario para tu taller técnico.</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                filter === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden bg-slate-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                {getCategoryIcon(product.category)}
                <span className="text-xs font-medium text-slate-200">{product.category}</span>
              </div>
              {product.isDigital && (
                <div className="absolute top-3 right-3 bg-blue-500/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg">
                  Digital / Remoto
                </div>
              )}
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xl font-bold text-white">
                  ${product.price.toFixed(2)}
                </span>
                <button 
                  onClick={() => handleBuyClick(product)}
                  className="bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white p-2.5 rounded-lg transition-colors flex items-center gap-2"
                  title="Comprar vía WhatsApp"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm font-medium sr-only md:not-sr-only md:block px-1">Consultar</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
          <button 
            onClick={() => {setSearch(''); setFilter('Todos');}}
            className="mt-4 text-blue-400 hover:text-blue-300 underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}