/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  Construction, 
  PaintBucket, 
  HardHat, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Menu, 
  X, 
  ChevronRight,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

// --- Constants & Types ---

const COLORS = {
  primary: '#F97316', // Orange
  secondary: '#1A1A1A', // Charcoal
  accent: '#334155', // Slate
  light: '#F8FAFC',
};

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Gros Œuvre',
    description: 'Fondations, murs porteurs et structures en béton pour assurer la solidité de vos bâtiments.',
    icon: <Construction className="w-8 h-8" />,
  },
  {
    id: '2',
    title: 'Maçonnerie Générale',
    description: 'Expertise en briques, pierres et blocs pour toutes vos constructions neuves ou extensions.',
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    id: '3',
    title: 'Rénovation Complète',
    description: 'Transformation et remise à neuf de vos espaces intérieurs et extérieurs avec soin.',
    icon: <PaintBucket className="w-8 h-8" />,
  },
  {
    id: '4',
    title: 'Second Œuvre',
    description: 'Finitions intérieures, isolation, plâtrerie et revêtements pour un confort optimal.',
    icon: <HardHat className="w-8 h-8" />,
  },
];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Résidence Moderne Orléans',
    category: 'Construction Neuve',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Rénovation Loft Industriel',
    category: 'Rénovation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Extension Villa Contemporaine',
    category: 'Extension',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Façade Pierre de Taille',
    category: 'Restauration',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-orange-500 p-2 rounded-sm transform group-hover:rotate-12 transition-transform">
            <HardHat className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            RABAB
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-orange-500 transition-colors ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 text-white px-6 py-2 rounded-sm text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            DEVIS GRATUIT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle"
          className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-900 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://image.noelshack.com/fichiers/2026/18/2/1777383174-whatsapp-image-2026-04-28-at-14-16-30-2.jpeg" 
          alt="Chantier de construction Rabab"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Expert Bâtiment Orléans</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
            <span className="text-gold">BATIR LE FUTUR</span> <br /> 
            <span className="text-orange-500">AVEC RIGUEUR.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            Rabab vous accompagne dans tous vos projets de construction et rénovation à Orléans. Qualité artisanale, respect des délais et solidité garantie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="bg-orange-500 text-white px-8 py-4 font-bold rounded-sm flex items-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20"
            >
              NOS SERVICES
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#pricing" 
              className="border-2 border-white text-white px-8 py-4 font-bold rounded-sm hover:bg-white hover:text-slate-900 transition-all uppercase tracking-wider"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 right-0 hidden lg:block bg-white p-10 z-10">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-slate-900">15+</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Années d'Expérience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-slate-900">300+</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Projets Réalisés</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-slate-900">100%</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Satisfaction Client</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dea58da41?auto=format&fit=crop&q=80&w=800" 
              alt="Expert Rabab sur site"
              className="rounded-sm shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 -z-1" />
            <div className="absolute top-8 left-8 border-4 border-slate-900 w-full h-full -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Notre Histoire</h4>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              L'Excellence du Bâtiment à <span className="italic">Orléans</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Depuis plus de 15 ans, l'entreprise Rabab s'est imposée comme une référence dans le Loiret. Nous ne nous contentons pas de bâtir des structures ; nous créons des espaces de vie solides, durables et esthétiques.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900">Qualité Matériaux</h5>
                  <p className="text-sm text-slate-500">Nous sélectionnons uniquement le meilleur pour chaque étape.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900">Délais Respectés</h5>
                  <p className="text-sm text-slate-500">La ponctualité fait partie de notre ADN d'artisan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900">Garantie Décennale</h5>
                  <p className="text-sm text-slate-500">Toutes nos constructions sont couvertes et assurées.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HardHat className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900">Sécurité Site</h5>
                  <p className="text-sm text-slate-500">Normes de sécurité strictes pour nos équipes et clients.</p>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-slate-900 font-black border-b-4 border-orange-500 pb-1 hover:text-orange-500 transition-colors"
            >
              DÉCOUVREZ NOTRE MÉTHODE
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Nos Prestations</h4>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Des Solutions sur Mesure</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all group border-t-4 border-transparent hover:border-orange-500"
          >
            <div className="bg-slate-100 p-4 rounded-sm inline-block mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              {service.description}
            </p>
            <a href="#contact" className="text-orange-500 font-bold text-sm flex items-center gap-1 group/link">
              En savoir plus
              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      title: "Maçonnerie Générale",
      price: "65€",
      unit: "m²",
      features: ["Murs extérieurs/intérieurs", "Dalles béton armé", "Fondations standards", "Nettoyage de chantier"],
      highlight: false
    },
    {
      title: "Rénovation Complète",
      price: "850€",
      unit: "m²",
      features: ["Démolition contrôlée", "Cloisonnement & Plâtrerie", "Revêtements sols/murs", "Isolation thermique"],
      highlight: true
    },
    {
      title: "Gros Œuvre & Extension",
      price: "1200€",
      unit: "m²",
      features: ["Étude de sol incluse", "Structure porteuse", "Charpente & Maçonnerie", "Garantie Décennale"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Estimations</h4>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos Tarifs Indicatifs</h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Chaque projet est unique. Ces tarifs sont donnés à titre indicatif pour vous aider à budgétiser vos travaux. Contactez-nous pour un devis précis.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-sm shadow-xl flex flex-col ${
              tier.highlight ? 'bg-slate-900 text-white scale-105 z-10' : 'bg-white text-slate-900'
            }`}
          >
            <h3 className={`text-xl font-bold mb-4 ${tier.highlight ? 'text-gold' : 'text-slate-900'}`}>{tier.title}</h3>
            <div className="mb-8">
              <span className={`text-4xl font-black ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                {tier.highlight ? 'Dès ' : '~'}
                {tier.price}
              </span>
              <span className="text-slate-500 font-bold"> / {tier.unit}</span>
            </div>
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-gold' : 'text-orange-500'}`} />
                  <span className={tier.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className={`w-full py-4 text-center font-black transition-all ${
                tier.highlight 
                  ? 'bg-gold text-slate-900 hover:bg-white' 
                  : 'bg-orange-500 text-white hover:bg-slate-900'
              }`}
            >
              OBTENIR UN DEVIS PRÉCIS
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Galerie</h4>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos Réalisations</h2>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-8 py-4 font-bold rounded-sm hover:bg-orange-500 transition-colors">
          VOIR TOUT LE PORTFOLIO
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-1">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-80 overflow-hidden cursor-pointer"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">{project.category}</span>
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Construction Neuve',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Préparation du message WhatsApp
    const phoneNumber = "33761771520";
    const text = `Bonjour Rabab BTP,\n\nJe m'appelle ${formData.name}.\nJe vous contacte concernant un projet de : ${formData.projectType}.\n\nMessage : ${formData.message}\n\nEmail de contact : ${formData.email}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    setTimeout(() => {
      setFormStatus('success');
      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Contactez Rabab</h4>
            <h2 className="text-5xl font-black mb-10 tracking-tighter">Parlons de <br /> <span className="text-orange-500">votre projet.</span></h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="bg-orange-500/20 p-4 rounded-sm border border-orange-500/30">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-xl font-bold">07 61 77 15 20</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-orange-500/20 p-4 rounded-sm border border-orange-500/30">
                  <Mail className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold">contact@rabab-btp.fr</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-orange-500/20 p-4 rounded-sm border border-orange-500/30">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Siège Social</p>
                  <p className="text-xl font-bold text-slate-200">Orléans Centre, 45000 Orléans</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-sm shadow-2xl relative"
          >
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-6 text-slate-900">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Nom Complet</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="bg-slate-50 border border-slate-200 p-4 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                    className="bg-slate-50 border border-slate-200 p-4 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Type de Projet</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="bg-slate-50 border border-slate-200 p-4 focus:border-orange-500 focus:outline-none transition-colors appearance-none"
                >
                  <option>Construction Neuve</option>
                  <option>Rénovation</option>
                  <option>Maçonnerie</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ici..."
                  className="bg-slate-50 border border-slate-200 p-4 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={formStatus === 'sending'}
                className="bg-orange-500 text-white font-black p-5 flex items-center justify-center gap-3 hover:bg-orange-600 transition-all disabled:opacity-50"
              >
                {formStatus === 'idle' && 'ENVOYER LE MESSAGE'}
                {formStatus === 'sending' && 'OUVERTURE WHATSAPP...'}
                {formStatus === 'success' && 'REDIRECTION RÉUSSIE !'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-sm">
                <HardHat className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">RABAB</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Spécialiste de la construction et de la rénovation à Orléans. Nous mettons notre savoir-faire au service de vos projets pour des résultats durables et de haute qualité.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-orange-500 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-orange-500 uppercase tracking-widest text-xs">Légal</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plan du Site</a></li>
              <li className="text-xs text-slate-500 mt-4 italic">© 2026 Rabab BTP. <br />Tous droits réservés.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white font-sans selection:bg-orange-500 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

