import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    // Smooth scrolling para links internos
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Adicionar event listeners para todos os links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>SmartHome Pro - Automação Residencial Inteligente</title>
        <meta name="description" content="Transforme sua casa em uma residência inteligente. Integração com Alexa e Google Home. Portões, cortinas, iluminação e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${geistSans.variable} ${geistMono.variable} font-sans scroll-smooth`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">SmartHome Pro</h1>
              </div>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#servicos"
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Serviços
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Portfolio
                </a>
                <a
                  href="#contato"
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out hover:scale-105"
                >
                  Contato
                </a>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                Orçamento Grátis
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Transforme sua casa em uma
                  <span className="text-blue-600"> residência inteligente</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Integração completa com Alexa e Google Home. Controle portões, cortinas,
                  iluminação e muito mais com comandos de voz ou pelo smartphone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                    Solicitar Orçamento
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                    Ver Demonstração
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <Image
                    src="/smart-home-demo.jpg"
                    alt="Casa inteligente com automação"
                    width={500}
                    height={400}
                    className="rounded-lg w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
              <p className="text-xl text-gray-600">Soluções completas de automação residencial</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portões Automáticos */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Portões Inteligentes</h4>
                <p className="text-gray-600 mb-4">
                  Abra e feche portões com comandos de voz ou pelo smartphone.
                  Integração total com Alexa e Google Home.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Controle por voz</li>
                  <li>• App móvel dedicado</li>
                  <li>• Sensores de segurança</li>
                </ul>
              </div>

              {/* Cortinas Automatizadas */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Cortinas Automatizadas</h4>
                <p className="text-gray-600 mb-4">
                  Controle suas cortinas automaticamente baseado no horário,
                  luminosidade ou comandos de voz.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Programação automática</li>
                  <li>• Sensores de luz</li>
                  <li>• Controle remoto</li>
                </ul>
              </div>

              {/* Iluminação Inteligente */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Iluminação Inteligente</h4>
                <p className="text-gray-600 mb-4">
                  Sistema completo de iluminação com controle de intensidade,
                  cores e programação automática.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Controle de intensidade</li>
                  <li>• Mudança de cores</li>
                  <li>• Programação por horário</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h3>
              <p className="text-xl text-gray-600">Veja alguns dos nossos trabalhos realizados</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/projeto-1.jpg"
                  alt="Projeto de automação residencial"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Casa Moderna - Nova São José</h4>
                  <p className="text-gray-600 text-sm">
                    Portões inteligentes e sistema de segurança integrado
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/projeto-2.jpg"
                  alt="Projeto de automação residencial"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Apartamento Luxury - Vila Olímpia</h4>
                  <p className="text-gray-600 text-sm">
                    Sistema de cortinas e iluminação com Google Home
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="/projeto-3.jpg"
                  alt="Projeto de automação residencial"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Condomínio Premium - Morumbi</h4>
                  <p className="text-gray-600 text-sm">
                    Automação completa com 15 dispositivos integrados à Alexa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-white mb-6">
              Pronto para automatizar sua casa?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato conosco e receba um orçamento personalizado sem compromisso
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Orçamento Grátis
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h3>
                <p className="text-gray-600 mb-8">
                  Estamos prontos para transformar sua casa em uma residência inteligente.
                  Entre em contato e agende uma visita técnica gratuita.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">(48) 98409-9001</p>
                      <p className="text-gray-600">WhatsApp disponível 24h</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">marcelo.cp78@gmail.com</p>
                      <p className="text-gray-600">Resposta em até 2 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">SmartHome Pro</h4>
                <p className="text-gray-400">
                  Especialistas em automação residencial com integração Alexa e Google Home.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Serviços</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>Portões Inteligentes</li>
                  <li>Cortinas Automatizadas</li>
                  <li>Iluminação Smart</li>
                  <li>Segurança Integrada</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Contato</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>(11) 99999-9999</li>
                  <li>contato@smarthomepro.com.br</li>
                  <li>São Paulo - SP</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Redes Sociais</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 SmartHome Pro. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


