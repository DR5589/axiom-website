import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-axiom-dark min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-axiom-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight">
            AXIOM<span className="text-axiom-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-axiom-gray border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Gradient accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-axiom-accent/10 rounded-full blur-[128px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* SDVOSB Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-400">Service-Disabled Veteran-Owned Small Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Federal Procurement,<br />
            <span className="text-gray-500">Delivered.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Axiom Group provides mission-critical supplies and equipment to federal agencies.
            Veteran-owned. Results-driven. Built for government.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Capabilities
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Streamlined procurement solutions for federal agencies. From sourcing to delivery, we handle the complexity so you can focus on your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* MRO */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">MRO Supplies</h3>
              <p className="text-gray-400 leading-relaxed">
                Maintenance, repair, and operations supplies. Hand tools, fasteners, industrial equipment—sourced from trusted distributors.
              </p>
            </div>

            {/* IT Hardware */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">IT & Hardware</h3>
              <p className="text-gray-400 leading-relaxed">
                Computer peripherals, monitors, networking equipment. We work with authorized distributors to meet your technology needs.
              </p>
            </div>

            {/* General Procurement */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">General Procurement</h3>
              <p className="text-gray-400 leading-relaxed">
                Office supplies, safety equipment, specialty items. If your agency needs it, we can source it through our vendor network.
              </p>
            </div>
          </div>

          {/* Contract Vehicles */}
          <div className="mt-16 p-8 bg-axiom-dark border border-white/5 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready for Your Requirements</h3>
                <p className="text-gray-400">SAM.gov registered and pursuing GSA Schedule. Open to subcontracting opportunities.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white/5 rounded-lg text-sm">
                  <span className="text-gray-500">UEI:</span> <span className="text-white">XSVAANVXZGM1</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-lg text-sm">
                  <span className="text-gray-500">CAGE:</span> <span className="text-white">181C2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-axiom-accent/10 rounded-full mb-6">
                <span className="text-sm text-axiom-accent font-medium">About Axiom Group</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Veteran-Owned.<br />
                Mission-Focused.
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Axiom Group was founded with a simple premise: federal agencies deserve reliable, responsive procurement partners who understand their mission.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                As a Service-Disabled Veteran-Owned Small Business, we bring the discipline and accountability of military service to every contract. We don't just fill orders—we build relationships with agencies and suppliers that deliver long-term value.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Based in Chicago, we serve federal agencies nationwide with a focus on MRO supplies, IT hardware, and general procurement needs.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-axiom-gray rounded-2xl border border-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-axiom-accent/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">SDVOSB Certified</h3>
                  <p className="text-gray-500">Service-Disabled Veteran-Owned Small Business</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-axiom-accent/5 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-axiom-accent/5 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-axiom-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you're a contracting officer, prime contractor, or agency buyer—we'd like to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:derek.reim@goaxiomgroup.com"
              className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-axiom-accent">derek.reim@goaxiomgroup.com</p>
            </a>

            <a
              href="tel:+15129407071"
              className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-axiom-accent">(512) 940-7071</p>
            </a>
          </div>

          <div className="p-6 bg-axiom-dark/50 border border-white/5 rounded-xl inline-block">
            <p className="text-gray-500 text-sm">
              <span className="text-white">Axiom Group, Inc.</span><br />
              201 N Garland Ct #3910, Chicago, IL 60601
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-axiom-dark border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Axiom Group, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>SDVOSB</span>
            <span>•</span>
            <span>UEI: XSVAANVXZGM1</span>
            <span>•</span>
            <span>CAGE: 181C2</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
