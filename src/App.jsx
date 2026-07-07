import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mzddveoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setFormSubmitted(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-axiom-dark min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-axiom-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/logo-white.svg" alt="Axiom Group" style={{height: '40px'}} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#partners" className="text-sm text-gray-400 hover:text-white transition-colors">Partners</a>
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
              <a href="#partners" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Partners</a>
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
          {/* SDVOSB text badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-xs text-gray-400">Service-Disabled Veteran-Owned Small Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Government procurement,<br />
            <span className="text-gray-400">without the friction.</span>
          </h1>

          <p className="text-base text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Sourced, quoted, and delivered on contract. Axiom Group is an SDVOSB authorized distributor serving federal, state, and local government agencies nationwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-axiom-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Request Capability Statement
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Capabilities
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

      {/* Credibility Bar */}
      <section className="py-6 bg-axiom-gray/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs text-gray-400">
            <span className="font-medium text-white">SDVOSB Certified</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="font-medium text-white">Sole-Source Eligible to $5M</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="font-mono"><span className="text-gray-500">UEI:</span> XSVAANVXZGM1</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="font-mono"><span className="text-gray-500">CAGE:</span> 181C2</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span>SAM Registered</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span>Accepts GPC</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Four core verticals serving federal, state, and local government buyers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* IT & Cybersecurity */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/30 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">IT &amp; Cybersecurity</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Workstations, monitors, servers, networking, and cybersecurity. TAA-compliant sourcing through authorized federal distribution channels.
              </p>
              <p className="text-xs text-gray-500">Dell • Cisco • Palo Alto • Fortinet • Splunk</p>
            </div>

            {/* Medical */}
            <div className="p-8 bg-axiom-dark border border-axiom-accent/20 rounded-2xl hover:border-axiom-accent/40 transition-colors group relative">
              <div className="absolute top-4 right-4 px-2 py-1 bg-axiom-accent/20 rounded text-xs text-axiom-accent font-medium">NEW</div>
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Medical Equipment &amp; Supplies</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Hospital equipment, medical supplies, surgical instruments, and healthcare consumables for VA, IHS, DHA, and state health systems.
              </p>
              <p className="text-xs text-gray-500">Building authorized distributor partnerships</p>
            </div>

            {/* HVAC & Air Filtration */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/30 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">HVAC &amp; Air Filtration</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Pleated, box, bag, and HEPA filters for commercial and institutional HVAC systems. MERV 7-16, ASHRAE 52.2 tested, UL 900 certified.
              </p>
              <p className="text-xs text-gray-500">Nordic Pure • AAF Flanders • Koch Filter</p>
            </div>

            {/* Safety & Fall Protection */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/30 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Safety &amp; Fall Protection</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Fall protection harnesses, lanyards, anchor points, and safety equipment for federal facility maintenance and construction operations.
              </p>
              <p className="text-xs text-gray-500">French Creek Production</p>
            </div>
          </div>

          {/* Awards Ledger */}
          <div className="mt-20 bg-axiom-dark border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Contract Vehicles &amp; Awards</h4>
              <span className="text-xs text-gray-600 font-mono hidden md:inline">Verifiable · References on request</span>
            </div>
            <div className="divide-y divide-white/5">
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-mono text-xs text-gray-500 md:w-32 flex-shrink-0">RFP 29.26</span>
                <span className="text-sm text-white flex-grow">EPIC6 Cooperative — HVAC <span className="text-gray-500">· 5-year vehicle</span></span>
                <span className="font-mono text-xs font-semibold tracking-widest text-emerald-400 border border-emerald-400/40 rounded px-2.5 py-1 self-start md:self-auto">FULLY EXECUTED</span>
              </div>
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-mono text-xs text-gray-500 md:w-32 flex-shrink-0">RFP 15.26</span>
                <span className="text-sm text-white flex-grow">EPIC6 Cooperative — Office Supplies, Furniture &amp; Services</span>
                <span className="font-mono text-xs font-semibold tracking-widest text-emerald-400 border border-emerald-400/40 rounded px-2.5 py-1 self-start md:self-auto">FULLY EXECUTED</span>
              </div>
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-mono text-xs text-gray-500 md:w-32 flex-shrink-0">RFP 22.26</span>
                <span className="text-sm text-white flex-grow">EPIC6 Cooperative — Computer HW/SW, Services &amp; Supplies</span>
                <span className="font-mono text-xs font-semibold tracking-widest text-axiom-accent border border-axiom-accent/40 rounded px-2.5 py-1 self-start md:self-auto">AWARDED</span>
              </div>
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-mono text-xs text-gray-500 md:w-32 flex-shrink-0">ESC-2</span>
                <span className="text-sm text-white flex-grow">Goodbuy Cooperative — HVAC Filtration</span>
                <span className="font-mono text-xs font-semibold tracking-widest text-axiom-accent border border-axiom-accent/40 rounded px-2.5 py-1 self-start md:self-auto">AWARDED</span>
              </div>
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-mono text-xs text-gray-500 md:w-32 flex-shrink-0">City of Houston</span>
                <span className="text-sm text-white flex-grow">Houston Airport System — Air Filtration <span className="text-gray-500">· 18 line items, on schedule</span></span>
                <span className="font-mono text-xs font-semibold tracking-widest text-emerald-400 border border-emerald-400/40 rounded px-2.5 py-1 self-start md:self-auto">DELIVERED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Partners Section */}
      <section id="partners" className="py-32 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-axiom-accent/10 rounded-full mb-6">
              <span className="text-xs text-axiom-accent font-medium">Authorized Distributor</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Trusted Manufacturer Partners</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We are authorized to distribute products from leading manufacturers across our four core verticals. Direct factory pricing, full warranty coverage, and verified TAA compliance.
            </p>
          </div>

          {/* HVAC Partners */}
          <div className="mb-12">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center">HVAC &amp; Air Filtration</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-2xl font-bold text-white mb-2">Nordic Pure</div>
                <p className="text-xs text-gray-500">Pleated panel filters MERV 7-16, custom sizes, made in Tulsa, OK</p>
              </div>
              <div className="p-8 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-2xl font-bold text-white mb-2">AAF Flanders</div>
                <p className="text-xs text-gray-500">VariCel rigid cell, PREpleat, DuraMAX, MicroMAX, bag and box filters</p>
              </div>
              <div className="p-8 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-2xl font-bold text-white mb-2">Koch Filter</div>
                <p className="text-xs text-gray-500">MicroMAX commercial filters, MultiSak bag filters, carbon products</p>
              </div>
            </div>
          </div>

          {/* IT Partners */}
          <div className="mb-12">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center">IT &amp; Cybersecurity</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="p-6 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-xl font-bold text-white mb-1">Dell</div>
                <p className="text-xs text-gray-500">Workstations, servers, monitors</p>
              </div>
              <div className="p-6 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-xl font-bold text-white mb-1">Cisco</div>
                <p className="text-xs text-gray-500">Networking, switches, security</p>
              </div>
              <div className="p-6 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-xl font-bold text-white mb-1">Palo Alto</div>
                <p className="text-xs text-gray-500">Next-gen firewalls, Panorama</p>
              </div>
              <div className="p-6 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-xl font-bold text-white mb-1">Fortinet</div>
                <p className="text-xs text-gray-500">FortiGate firewalls, secure SD-WAN</p>
              </div>
              <div className="p-6 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors">
                <div className="text-xl font-bold text-white mb-1">Splunk</div>
                <p className="text-xs text-gray-500">SIEM, log management, analytics</p>
              </div>
            </div>
          </div>

          {/* Safety Partners */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center">Safety &amp; Fall Protection</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-8 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 transition-colors md:col-start-2">
                <div className="text-2xl font-bold text-white mb-2">French Creek</div>
                <p className="text-xs text-gray-500">Fall protection harnesses, lanyards, self-retracting lifelines, anchor systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Model Section */}
      <section className="py-24 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-axiom-dark border border-white/5 rounded-2xl p-10 md:p-14">
            <h3 className="text-center text-xl font-semibold mb-14">Our Execution Model</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
              {/* Source */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div className="text-axiom-accent font-semibold mb-2">Source</div>
                <div className="text-xs text-gray-500 leading-relaxed">Identify products through our authorized distributor network</div>
              </div>

              {/* Quote */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-axiom-accent font-semibold mb-2">Quote</div>
                <div className="text-xs text-gray-500 leading-relaxed">Provide competitive pricing with rapid turnaround times</div>
              </div>

              {/* Fulfill */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="text-axiom-accent font-semibold mb-2">Fulfill</div>
                <div className="text-xs text-gray-500 leading-relaxed">Process orders and coordinate with vendors for inventory</div>
              </div>

              {/* Deliver */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="text-axiom-accent font-semibold mb-2">Deliver</div>
                <div className="text-xs text-gray-500 leading-relaxed">FOB Destination shipping with tracking and confirmation</div>
              </div>

              {/* Report */}
              <div className="text-center col-span-2 md:col-span-1">
                <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-axiom-accent font-semibold mb-2">Report</div>
                <div className="text-xs text-gray-500 leading-relaxed">Provide documentation and post-delivery reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Capability Statement Layout */}
      <section id="about" className="py-32 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Structured Capability Data */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-axiom-accent/10 rounded-full mb-6">
                <span className="text-xs text-axiom-accent font-medium">About Axiom Group</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Built for Federal, State,<br />&amp; Local Procurement.
              </h2>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                Axiom Group is a Service-Disabled Veteran-Owned Small Business providing authorized distribution and fulfillment for government agencies at every level — from VA medical centers to public school districts.
              </p>

              {/* Core Capabilities */}
              <div className="mb-10">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    HVAC air filtration (MERV 7-16, pleated, box, bag, HEPA)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    IT hardware and cybersecurity (TAA-compliant)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Medical equipment and healthcare supplies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Fall protection and safety equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Brand-name and approved equivalent sourcing
                  </li>
                </ul>
              </div>

              {/* Differentiators */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Differentiators</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    SDVOSB sole-source eligibility up to $5M
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Authorized distributor network (factory direct)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Premium equivalents at competitive pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Rapid quote turnaround on bid responses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    FOB Destination delivery, freight included
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Corporate Data Panel */}
            <div>
              <div className="bg-axiom-gray border border-white/5 rounded-2xl p-8 h-full">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Corporate Data</h4>

                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">UEI</span>
                    <span className="text-sm text-white font-medium font-mono">XSVAANVXZGM1</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">CAGE Code</span>
                    <span className="text-sm text-white font-medium font-mono">181C2</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Headquarters</span>
                    <span className="text-sm text-white font-medium">Chicago, IL</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Delivery Area</span>
                    <span className="text-sm text-white font-medium">CONUS</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Sole Source</span>
                    <span className="text-sm text-white font-medium">Eligible to $5M</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-sm text-gray-400">Payment</span>
                    <span className="text-sm text-white font-medium">Accepts GPC</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Business Classification</div>
                  <div className="text-sm text-white">Service-Disabled Veteran-Owned Small Business (SDVOSB)</div>
                </div>
              </div>
            </div>
          </div>

          {/* NAICS Codes */}
          <div className="mt-20 p-8 bg-axiom-gray border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">NAICS Codes</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423430</span>
                <span className="text-gray-400 ml-2">Computer &amp; Software Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423420</span>
                <span className="text-gray-400 ml-2">Office Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423610</span>
                <span className="text-gray-400 ml-2">Electrical Apparatus &amp; Wiring Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423690</span>
                <span className="text-gray-400 ml-2">Other Electronic Parts &amp; Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423450</span>
                <span className="text-gray-400 ml-2">Medical &amp; Hospital Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">424210</span>
                <span className="text-gray-400 ml-2">Drugs &amp; Druggists' Sundries Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423730</span>
                <span className="text-gray-400 ml-2">Warm Air Heating &amp; A/C Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423740</span>
                <span className="text-gray-400 ml-2">Refrigeration Equipment &amp; Supplies Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423720</span>
                <span className="text-gray-400 ml-2">Plumbing &amp; Heating Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423840</span>
                <span className="text-gray-400 ml-2">Industrial Supplies Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423830</span>
                <span className="text-gray-400 ml-2">Industrial Machinery &amp; Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423710</span>
                <span className="text-gray-400 ml-2">Hardware Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423210</span>
                <span className="text-gray-400 ml-2">Furniture Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423220</span>
                <span className="text-gray-400 ml-2">Home Furnishing Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423440</span>
                <span className="text-gray-400 ml-2">Other Commercial Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423620</span>
                <span className="text-gray-400 ml-2">Household Appliances &amp; Electronics Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423850</span>
                <span className="text-gray-400 ml-2">Service Establishment Equipment Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">424130</span>
                <span className="text-gray-400 ml-2">Industrial &amp; Personal Service Paper Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">424690</span>
                <span className="text-gray-400 ml-2">Other Chemical &amp; Allied Products Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">424120</span>
                <span className="text-gray-400 ml-2">Stationery &amp; Office Supplies Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423910</span>
                <span className="text-gray-400 ml-2">Sporting &amp; Recreational Goods Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423990</span>
                <span className="text-gray-400 ml-2">Other Durable Goods Wholesalers</span>
              </div>
            </div>
          </div>

          {/* Authorizations & Certifications */}
          <div className="mt-8 p-8 bg-axiom-gray border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Authorizations &amp; Certifications</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                SBA-Certified Service-Disabled Veteran-Owned Small Business (SDVOSB)
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                VA Vendor Acquisition Portal — approved
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                Cisco U.S. Federal Authorization — active
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                Splunk Partnerverse — authorized to transact
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                SAM.gov registered — CAGE 181C2, UEI XSVAANVXZGM1
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                Authorized distribution across all four core verticals
              </div>
            </div>
          </div>

          {/* Cooperative Vehicles & Awards */}
          <div className="mt-8 p-8 bg-axiom-gray border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Cooperative Contract Vehicles &amp; Awards</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                EPIC6 Cooperative — HVAC (RFP 29.26), executed
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                EPIC6 Cooperative — Office Supplies, Furniture &amp; Services (RFP 15.26), executed
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                EPIC6 Cooperative — Computer HW/SW, Services &amp; Supplies (RFP 22.26), awarded
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                Goodbuy ESC-2 — HVAC Filtration Cooperative, awarded
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>
                City of Houston Airport System — air filtration, awarded &amp; delivered
              </div>
            </div>
          </div>

          {/* Customer Base */}
          <div className="mt-8 p-8 bg-axiom-gray border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Customer Base</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="text-white font-semibold mb-2">Federal</div>
                <div className="text-gray-400 text-xs leading-relaxed">VA, IHS, DHA, DLA, NIH, HHS, DoD facilities</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">State</div>
                <div className="text-gray-400 text-xs leading-relaxed">State universities, state agencies, statewide cooperatives</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Local</div>
                <div className="text-gray-400 text-xs leading-relaxed">County governments, transit authorities, public works</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Education</div>
                <div className="text-gray-400 text-xs leading-relaxed">K-12 school districts, community colleges, universities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-axiom-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you're a contracting officer, prime contractor, or agency buyer, we'd like to hear from you.
            </p>
          </div>

          {formSubmitted ? (
            <div className="max-w-xl mx-auto p-8 bg-axiom-dark border border-axiom-accent/20 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-axiom-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Message Received</h3>
              <p className="text-sm text-gray-400">Thank you for reaching out. We'll get back to you within 1-2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-axiom-dark border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-axiom-dark border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
                    placeholder="you@agency.gov"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-medium text-gray-400 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-axiom-dark border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
                    placeholder="Agency or company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-axiom-dark border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors resize-none"
                    placeholder="Tell us about your requirements or request a capability statement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-axiom-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}

          <div className="mt-16 p-6 bg-axiom-dark/50 border border-white/5 rounded-xl text-center">
            <p className="text-gray-500 text-xs">
              <span className="text-white">Axiom Group, Inc.</span><br />
              Chicago, Illinois
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-axiom-dark border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            © 2026 Axiom Group, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>SDVOSB</span>
            <span>•</span>
            <span className="font-mono">UEI: XSVAANVXZGM1</span>
            <span>•</span>
            <span className="font-mono">CAGE: 181C2</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
