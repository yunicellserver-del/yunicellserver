export interface Product {
  id: string;
  name: string;
  category: 'Herramientas' | 'Repuestos' | 'Servidor' | 'Accesorios';
  price: number;
  image: string;
  description: string;
  isDigital?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Estación de Soldadura Profesional T12',
    category: 'Herramientas',
    price: 85.99,
    image: 'https://images.unsplash.com/photo-1590740924040-59f77f54c935?auto=format&fit=crop&q=80&w=800',
    description: 'Estación de soldadura de calentamiento rápido ideal para micro-soldadura en placas base de celulares.'
  },
  {
    id: '2',
    name: 'Créditos Chimera Tool (50 crd)',
    category: 'Servidor',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    description: 'Créditos para operaciones de servidor, liberación de red, reparación de IMEI y FRP.',
    isDigital: true
  },
  {
    id: '3',
    name: 'Microscopio Trinocular 7X-45X',
    category: 'Herramientas',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
    description: 'Microscopio estéreo trinocular con luz LED, perfecto para diagnóstico y reparación de SMD.'
  },
  {
    id: '4',
    name: 'Pantalla OLED compatible con iPhone 13',
    category: 'Repuestos',
    price: 65.50,
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&q=80&w=800',
    description: 'Pantalla de reemplazo OLED de alta calidad. Colores vibrantes y táctil preciso.'
  },
  {
    id: '5',
    name: 'Pack Destornilladores de Precisión 115 en 1',
    category: 'Herramientas',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1530282670783-659f81498144?auto=format&fit=crop&q=80&w=800',
    description: 'Kit completo para apertura de cualquier modelo de smartphone (iPhone, Samsung, Xiaomi).'
  },
  {
    id: '6',
    name: 'Desbloqueo FRP Samsung (Servicio Remoto)',
    category: 'Servidor',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1614064641913-6b71a30f5d47?auto=format&fit=crop&q=80&w=800',
    description: 'Servicio de servidor para eliminar cuenta Google (FRP) en dispositivos Samsung vía USB.',
    isDigital: true
  },
  {
    id: '7',
    name: 'Cinta Kapton Térmica',
    category: 'Accesorios',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=800',
    description: 'Cinta resistente a altas temperaturas, esencial para proteger componentes durante el reballing.'
  },
  {
    id: '8',
    name: 'Batería Original Samsung S22 Ultra',
    category: 'Repuestos',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1609081524998-a11658dbbcdd?auto=format&fit=crop&q=80&w=800',
    description: 'Batería de repuesto 100% original con adhesivo incluido.'
  }
];