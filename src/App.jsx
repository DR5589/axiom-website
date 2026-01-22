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
            <span className="text-xs text-gray-400">Service-Disabled Veteran-Owned Small Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Supplies and equipment<br />for federal agencies.{' '}
            <span className="text-gray-400">Delivered.</span>
          </h1>

          <p className="text-base text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Axiom Group is a veteran-owned procurement partner built for federal buyers. We source MRO, IT hardware, and specialty supplies. On time, on contract, without the overhead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-axiom-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Request Capability Statement
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Partner With Us
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
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs text-gray-400">
            <span className="font-medium text-white">SDVOSB Certified</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span><span className="text-gray-500">UEI:</span> XSVAANVXZGM1</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span><span className="text-gray-500">CAGE:</span> 181C2</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span>Accepts GPC</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span>Based in Chicago</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We handle vendor sourcing, quoting, and delivery logistics so your team can focus on operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MRO */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">MRO Supplies</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Hand tools, fasteners, HVAC components, electrical supplies, plumbing parts, janitorial products, and industrial equipment. Sourced from authorized distributors, quoted to your specs.
              </p>
            </div>

            {/* IT Hardware */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">IT & Hardware</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Monitors, docking stations, keyboards, cables, networking gear, and peripherals. We work with authorized resellers to meet TAA and compliance requirements.
              </p>
            </div>

            {/* General Procurement */}
            <div className="p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">General Procurement</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Office furniture, safety gear, signage, medical supplies, and specialty items. If your agency needs it and it ships, we can source it.
              </p>
            </div>
          </div>

          {/* Data Panel */}
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-axiom-dark border border-white/5 rounded-xl text-center">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-xs text-gray-500">Veteran-Owned</div>
            </div>
            <div className="p-6 bg-axiom-dark border border-white/5 rounded-xl text-center">
              <div className="text-2xl font-bold text-white mb-2">SAM</div>
              <div className="text-xs text-gray-500">Registered</div>
            </div>
            <div className="p-6 bg-axiom-dark border border-white/5 rounded-xl text-center">
              <div className="text-2xl font-bold text-white mb-2">GSA</div>
              <div className="text-xs text-gray-500">Schedule Pending</div>
            </div>
            <div className="p-6 bg-axiom-dark border border-white/5 rounded-xl text-center">
              <div className="text-2xl font-bold text-white mb-2">CONUS</div>
              <div className="text-xs text-gray-500">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Model Section */}
      <section className="py-24 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-axiom-gray border border-white/5 rounded-2xl p-10 md:p-14">
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
                <div className="text-xs text-gray-500 leading-relaxed">Ship to your location with tracking and delivery confirmation</div>
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
      <section id="about" className="py-32 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Structured Capability Data */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-axiom-accent/10 rounded-full mb-6">
                <span className="text-xs text-axiom-accent font-medium">About Axiom Group</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Built for Federal<br />Procurement.
              </h2>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                Axiom Group is a Service-Disabled Veteran-Owned Small Business providing procurement and fulfillment for federal agencies.
              </p>

              {/* Core Capabilities */}
              <div className="mb-10">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    MRO supplies and industrial equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    IT hardware and peripherals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    General and specialty procurement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Vendor sourcing and quoting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Delivery logistics and fulfillment
                  </li>
                </ul>
              </div>

              {/* Differentiators */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Differentiators</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    SDVOSB prime
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    SAM registered
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Authorized distributor network
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    TAA-compliant sourcing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>
                    Responsive quoting and fulfillment
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Corporate Data Panel */}
            <div>
              <div className="bg-axiom-dark border border-white/5 rounded-2xl p-8 h-full">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Corporate Data</h4>

                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">UEI</span>
                    <span className="text-sm text-white font-medium">XSVAANVXZGM1</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">CAGE Code</span>
                    <span className="text-sm text-white font-medium">181C2</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Headquarters</span>
                    <span className="text-sm text-white font-medium">Chicago, IL</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-sm text-gray-400">Delivery Area</span>
                    <span className="text-sm text-white font-medium">CONUS</span>
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
          <div className="mt-20 p-8 bg-axiom-dark border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Primary NAICS Codes</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423710</span>
                <span className="text-gray-400 ml-2">Hardware Merchant Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423430</span>
                <span className="text-gray-400 ml-2">Computer Equipment Merchant Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423840</span>
                <span className="text-gray-400 ml-2">Industrial Supplies Merchant Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">332510</span>
                <span className="text-gray-400 ml-2">Hardware Manufacturing</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423610</span>
                <span className="text-gray-400 ml-2">Electrical Equipment Merchant Wholesalers</span>
              </div>
              <div className="text-sm">
                <span className="text-axiom-accent font-mono">423490</span>
                <span className="text-gray-400 ml-2">Other Professional Equipment Wholesalers</span>
              </div>
            </div>
          </div>

          {/* Relevant Experience - Metrics Layout */}
          <div className="mt-8 p-8 bg-axiom-dark border border-white/5 rounded-2xl">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Relevant Experience</h4>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">8</div>
                <div className="text-sm text-gray-400">Federal agencies served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">7</div>
                <div className="text-sm text-gray-400">Primary NAICS codes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-gray-400">SOW compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-axiom-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you're a contracting officer, prime contractor, or agency buyer, we'd like to hear from you.
            </p>
          </div>

          {formSubmitted ? (
            <div className="max-w-xl mx-auto p-8 bg-axiom-gray border border-axiom-accent/20 rounded-2xl text-center">
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
                    className="w-full px-4 py-3 bg-axiom-gray border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-axiom-gray border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-axiom-gray border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-axiom-gray border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-axiom-accent/50 transition-colors resize-none"
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

          <div className="mt-16 p-6 bg-axiom-gray/50 border border-white/5 rounded-xl text-center">
            <p className="text-gray-500 text-xs">
              <span className="text-white">Axiom Group, Inc.</span><br />
              Chicago, IL
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
