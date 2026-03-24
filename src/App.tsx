import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  TrendingUp,
  Mail,
  Phone,
  User,
  MessageSquare
} from 'lucide-react';

type SectionType = 'consultant' | 'aesthetics' | 'partner';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('consultant');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = {
    consultant: {
      id: 'consultant',
      title: '景觀顧問｜專業規劃',
      subtitle: '專業規劃．低成本．低維護．長期好管理',
      desc: '不施工、不販售材料，只做專業顧問與景觀規劃報告',
      icon: <TreePine className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop',
      points: [
        '協助客戶做最適合的景觀配置，降低未來維護成本',
        '規劃省水、省時、低照護、好管理的植栽與空間',
        '協助客戶避開高成本設計、減少浪費預算',
        '提供專業景觀評估、改善建議、整體規劃報告',
        '協助客戶與廠商溝通，避免被亂報價',
        '強調：只做顧問，不做施工，專注專業價值'
      ],
      targets: [
        '社區、透天、店面、商業空間需要景觀改善',
        '想要長期好照顧、低成本、低維護的景觀',
        '不想被廠商綁定、想要專業獨立顧問評估'
      ]
    },
    aesthetics: {
      id: 'aesthetics',
      title: '生活美學會員｜純粹享受',
      subtitle: '健康．醫美．交流．純享受',
      desc: '不推銷、不做事業、不囤貨，單純生活品質提升',
      icon: <Sparkles className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop',
      points: [
        '年度健康營養補給，照顧身體基礎',
        '專屬醫美資源與優惠，變美更省錢',
        '同頻朋友交流、生活分享、輕鬆社交',
        '不涉及業績、不推廣、不銷售',
        '專給想放鬆、變美、照顧健康的人'
      ],
      targets: [
        '追求生活品質，想在繁忙中找到平衡的人',
        '重視健康管理與自我形象提升的菁英',
        '喜愛單純社交，不喜歡商業推銷環境的人'
      ]
    },
    partner: {
      id: 'partner',
      title: '事業夥伴｜共同成長',
      subtitle: '低門檻．零庫存．增加第二收入',
      desc: '結合景觀顧問與生活資源，一起拓展收入',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
      points: [
        '不用施工、不用囤貨、不用懂設計',
        '介紹有景觀需求的客戶，即可獲顧問回饋',
        '介紹生活美學會員，也可獲額外收入',
        '提供專業報告、後端支援、完整 SOP',
        '適合想增加副業、有人脈、想穩定增收的人'
      ],
      targets: [
        '擁有廣泛人脈，想將資源變現的專業人士',
        '尋求穩定第二收入，且不希望承擔庫存壓力者',
        '認同專業價值，願意共同推廣生活美學的夥伴'
      ]
    }
  };

  return (
    <div className="min-h-screen selection:bg-moss selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-moss rounded-full flex items-center justify-center">
              <Leaf className="text-cream w-6 h-6" />
            </div>
            <span className="font-serif text-xl font-bold tracking-wider text-moss">LANDSCAPE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
            <button onClick={() => setActiveSection('consultant')} className={`hover:text-moss transition-colors ${activeSection === 'consultant' ? 'text-moss' : 'text-deep-gray/60'}`}>景觀顧問</button>
            <button onClick={() => setActiveSection('aesthetics')} className={`hover:text-moss transition-colors ${activeSection === 'aesthetics' ? 'text-moss' : 'text-deep-gray/60'}`}>生活美學</button>
            <button onClick={() => setActiveSection('partner')} className={`hover:text-moss transition-colors ${activeSection === 'partner' ? 'text-moss' : 'text-deep-gray/60'}`}>事業夥伴</button>
          </div>
          <a href="#contact" className="bg-moss text-cream px-6 py-2 rounded-full text-sm font-medium hover:bg-deep-gray transition-all">
            立即諮詢
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl leading-tight text-deep-gray mb-6">
                景觀顧問<br />
                <span className="text-moss italic">整合服務平台</span>
              </h1>
              <p className="text-lg text-deep-gray/70 mb-10 max-w-lg leading-relaxed">
                我們提供專業的景觀規劃建議，結合生活美學與事業機會，為您的空間與人生創造長期價值。
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {(Object.keys(sections) as SectionType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 border ${
                      activeSection === key 
                        ? 'bg-moss text-cream border-moss shadow-lg scale-105' 
                        : 'bg-white/50 text-deep-gray border-deep-gray/10 hover:border-moss/30'
                    }`}
                  >
                    {sections[key].icon}
                    <span className="font-medium">{sections[key].title.split('｜')[0]}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeSection}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  src={sections[activeSection].image} 
                  alt={sections[activeSection].title}
                  className="w-full h-full object-cover absolute inset-0"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-moss/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-cream font-serif italic text-xl"
                  >
                    {activeSection === 'consultant' && '"好的景觀不只是視覺，更是長期的生活品質與管理智慧。"'}
                    {activeSection === 'aesthetics' && '"在繁忙的生活中，為自己保留一份純粹的優雅與健康。"'}
                    {activeSection === 'partner' && '"結合專業與人脈，共同創造穩定且具美感的事業未來。"'}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-moss/10 text-moss text-xs font-bold tracking-widest uppercase mb-6">
                  {sections[activeSection].icon}
                  {sections[activeSection].title.split('｜')[0]}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-deep-gray mb-4">
                  {sections[activeSection].subtitle}
                </h2>
                <p className="text-xl text-moss font-medium mb-12">
                  {sections[activeSection].desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {sections[activeSection].points.map((point, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-moss/10 flex items-center justify-center group-hover:bg-moss group-hover:text-cream transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-deep-gray/80 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-moss p-10 rounded-[2.5rem] text-cream shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 opacity-50" />
                    適合對象
                  </h3>
                  <ul className="space-y-6">
                    {sections[activeSection].targets.map((target, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-cream/40 mt-2.5 flex-shrink-0" />
                        <span className="text-lg opacity-90 leading-relaxed">{target}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center gap-3 text-cream font-bold group"
                    >
                      了解更多細節 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-gray mb-4">為什麼選擇我們？</h2>
            <p className="text-deep-gray/60">我們專注於專業價值，而非材料銷售。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '獨立顧問立場', desc: '不綁定施工廠商，提供最客觀、最符合客戶利益的規劃建議。', icon: <ShieldCheck className="w-10 h-10 text-moss" /> },
              { title: '長期管理思維', desc: '從維護成本出發，規劃低耗能、好管理的景觀空間。', icon: <TrendingUp className="w-10 h-10 text-moss" /> },
              { title: '資源整合平台', desc: '結合美學、健康與事業機會，為您的生活提供全方位支持。', icon: <Sparkles className="w-10 h-10 text-moss" /> }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-deep-gray/5 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-deep-gray">{feature.title}</h3>
                <p className="text-deep-gray/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-deep-gray text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-moss rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-moss rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">開啟您的美學生活</h2>
            <p className="text-cream/60 text-lg">留下您的聯絡資訊，我們將由專人為您提供初步評估與建議。</p>
          </div>

          <form className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium mb-2 opacity-60">您的姓名</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
                  <input 
                    type="text" 
                    placeholder="請輸入姓名"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-moss transition-colors"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium mb-2 opacity-60">聯絡電話</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
                  <input 
                    type="tel" 
                    placeholder="請輸入電話"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-moss transition-colors"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium mb-2 opacity-60">電子郵件</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
                  <input 
                    type="email" 
                    placeholder="請輸入 Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-moss transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium mb-2 opacity-60">需求類型</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-moss transition-colors appearance-none">
                    <option className="bg-deep-gray">景觀顧問諮詢</option>
                    <option className="bg-deep-gray">生活美學會員</option>
                    <option className="bg-deep-gray">事業夥伴合作</option>
                    <option className="bg-deep-gray">其他需求</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium mb-2 opacity-60">您的訊息</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 opacity-30" />
                  <textarea 
                    placeholder="請簡述您的需求..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-moss transition-colors resize-none"
                  />
                </div>
              </div>
              <button className="w-full bg-moss hover:bg-moss-light text-cream font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-moss/20">
                送出需求報告
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-deep-gray/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Leaf className="text-moss w-5 h-5" />
            <span className="font-serif text-lg font-bold tracking-wider text-moss">LANDSCAPE</span>
          </div>
          <p className="text-sm text-deep-gray/40">
            © 2026 景觀顧問整合服務平台. All rights reserved. 專業規劃．低維護．長期好管理
          </p>
          <div className="flex gap-6 text-deep-gray/40">
            <a href="#" className="hover:text-moss transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-moss transition-colors">服務條款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
