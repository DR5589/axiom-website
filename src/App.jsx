import { useState, useEffect } from 'react'

const PILL = {
  executed: 'text-emerald-400 border-emerald-400/40',
  delivered: 'text-emerald-400 border-emerald-400/40',
  awarded: 'text-axiom-accent border-axiom-accent/40',
  progress: 'text-amber-400 border-amber-400/40',
}

const RECORD = [
  {
    group: 'Federal',
    rows: [
      { id: '15F06726D0000894', who: 'Federal Bureau of Investigation', what: 'Specialized OSINT Tools IDIQ · 5-year vehicle', pill: 'AWARDED SEPT 2026', tone: 'awarded' },
      { id: '554-P6L397', who: 'VA Eastern Colorado Health Care System', what: 'Dell 4K workstation displays · SDVOSB set-aside', pill: 'DELIVERED · PAID', tone: 'delivered' },
      { id: 'N6449826P2208', who: 'NSWC Philadelphia (NAVSEA)', what: '52-line COTS electronics, single consolidated delivery', pill: 'IN DELIVERY', tone: 'progress' },
    ],
  },
  {
    group: 'Cooperative Vehicles',
    rows: [
      { id: 'RFP 29.26', who: 'EPIC6 Cooperative', what: 'HVAC · 5-year vehicle', pill: 'FULLY EXECUTED', tone: 'executed' },
      { id: 'RFP 15.26', who: 'EPIC6 Cooperative', what: 'Office Supplies, Furniture & Services', pill: 'FULLY EXECUTED', tone: 'executed' },
      { id: 'RFP 22.26', who: 'EPIC6 Cooperative', what: 'Computer Hardware, Software, Services & Supplies', pill: 'AWARDED', tone: 'awarded' },
      { id: 'ESC-2', who: 'Goodbuy Cooperative', what: 'HVAC Filtration catalog', pill: 'AWARDED', tone: 'awarded' },
    ],
  },
  {
    group: 'State & Local',
    rows: [
      { id: 'PO 4500466722', who: 'City of Houston Airport System', what: 'Air filtration · 18 line items, on schedule', pill: 'DELIVERED', tone: 'delivered' },
      { id: 'Bid 2026-2027', who: 'Avoyelles Parish School Board (LA)', what: 'District air filter program', pill: 'AWARDED', tone: 'awarded' },
      { id: 'BidBuy', who: 'Illinois Department of Corrections', what: '9 awards across 8 facilities, 2026', pill: 'AWARDED', tone: 'awarded' },
    ],
  },
]

const NAICS = {
  'Distribution': [
    ['423430', 'Computer & Software Wholesalers'],
    ['423420', 'Office Equipment Wholesalers'],
    ['423690', 'Other Electronic Parts & Equipment Wholesalers'],
    ['423610', 'Electrical Apparatus & Wiring Wholesalers'],
    ['423450', 'Medical & Hospital Equipment Wholesalers'],
    ['424210', "Drugs & Druggists' Sundries Wholesalers"],
    ['423730', 'Warm Air Heating & A/C Equipment Wholesalers'],
    ['423740', 'Refrigeration Equipment & Supplies Wholesalers'],
    ['423720', 'Plumbing & Heating Equipment Wholesalers'],
    ['423840', 'Industrial Supplies Wholesalers'],
    ['423830', 'Industrial Machinery & Equipment Wholesalers'],
    ['423810', 'Construction & Mining Machinery Wholesalers'],
    ['423820', 'Farm & Garden Machinery Wholesalers'],
    ['423860', 'Transportation Equipment & Supplies Wholesalers'],
    ['423120', 'Motor Vehicle Supplies & New Parts Wholesalers'],
    ['423710', 'Hardware Wholesalers'],
    ['423320', 'Brick, Stone & Construction Material Wholesalers'],
    ['423390', 'Other Construction Material Wholesalers'],
    ['423210', 'Furniture Wholesalers'],
    ['423220', 'Home Furnishing Wholesalers'],
    ['423440', 'Other Commercial Equipment Wholesalers'],
    ['423490', 'Other Professional Equipment Wholesalers'],
    ['423620', 'Household Appliances & Electronics Wholesalers'],
    ['423850', 'Service Establishment Equipment Wholesalers'],
    ['423910', 'Sporting & Recreational Goods Wholesalers'],
    ['423990', 'Other Durable Goods Wholesalers'],
    ['424120', 'Stationery & Office Supplies Wholesalers'],
    ['424130', 'Industrial & Personal Service Paper Wholesalers'],
    ['424690', 'Other Chemical & Allied Products Wholesalers'],
    ['424990', 'Other Nondurable Goods Wholesalers'],
    ['444230', 'Outdoor Power Equipment Retailers'],
    ['513210', 'Software Publishers'],
    ['484230', 'Specialized Freight Trucking, Long-Distance'],
  ],
  'Services': [
    ['541380', 'Testing Laboratories & Services'],
    ['541620', 'Environmental Consulting Services'],
    ['541690', 'Other Scientific & Technical Consulting'],
    ['561621', 'Security Systems Services'],
    ['561210', 'Facilities Support Services'],
    ['238210', 'Electrical & Wiring Installation Contractors'],
  ],
}

function LogoCard({ src, alt, text, blurb, tall, keepColor }) {
  return (
    <div className="p-6 md:p-8 bg-axiom-gray border border-white/5 rounded-xl text-center hover:border-axiom-accent/30 hover:-translate-y-0.5 transition-all group">
      <div className={`${tall ? 'h-12' : 'h-10'} flex items-center justify-center gap-3 mb-3`}>
        {src && (
          <img
            src={src}
            alt={alt || text}
            className={`${tall ? 'h-11' : 'h-8'} w-auto ${keepColor ? '' : 'brightness-0 invert'} opacity-70 group-hover:opacity-100 transition-opacity`}
          />
        )}
        {text && <span className="text-xl font-bold text-white opacity-80 group-hover:opacity-100 transition-opacity">{text}</span>}
      </div>
      <p className="text-xs text-gray-500">{blurb}</p>
    </div>
  )
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-axiom-accent/10 rounded-full mb-6">
      <span className="text-xs text-axiom-accent font-medium">{children}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

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

  const navLinks = [
    ['#services', 'Services'],
    ['#record', 'Record'],
    ['#partners', 'Partners'],
    ['#suppliers', 'For Suppliers'],
    ['#about', 'About'],
    ['#contact', 'Contact'],
  ]

  return (
    <div className="bg-axiom-dark min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-axiom-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/logo-white.svg" alt="Axiom Group" style={{height: '40px'}} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

        {menuOpen && (
          <div className="md:hidden bg-axiom-gray border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} className="text-gray-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-axiom-accent/10 rounded-full blur-[140px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            <span className="text-xs text-gray-400">SBA-Certified Service-Disabled Veteran-Owned Small Business</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight mb-6 leading-[1.05]">
            We put manufacturers' products<br />
            <span className="text-gray-400">on government contracts.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Manufacturers make it. Axiom finds the bid, wins the contract, carries the compliance, and coordinates drop-ship delivery. No inventory. No channel conflict. One accountable vendor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contact"
              className="px-8 py-4 bg-axiom-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Request Capability Statement
            </a>
            <a
              href="#suppliers"
              className="px-8 py-4 bg-white/5 border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Partner With Us — Suppliers
            </a>
          </div>

          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Delivered for</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-sm text-gray-400">
            <span>FBI</span>
            <span>Dept. of Veterans Affairs</span>
            <span>U.S. Navy · NAVSEA</span>
            <span>City of Houston</span>
            <span>EPIC6 Cooperative</span>
            <span>Illinois Dept. of Corrections</span>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="py-6 bg-axiom-gray/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs text-gray-400">
            <span className="font-medium text-white">SBA VetCert SDVOSB</span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="font-medium text-white">Illinois VBP Certified</span>
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

      {/* Audience Split */}
      <section className="py-16 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#services" className="reveal block p-8 bg-axiom-gray border border-white/5 rounded-2xl hover:border-axiom-accent/40 hover:-translate-y-0.5 transition-all group">
              <div className="text-xs font-semibold text-axiom-accent uppercase tracking-wider mb-3">Government Buyers</div>
              <h3 className="text-xl font-bold mb-3">One SDVOSB vendor. Six lanes.</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                SDVOSB and small business set-aside eligible, TAA-compliant sourcing through authorized channels, 24–48 hour quotes, GPC accepted.
              </p>
              <span className="text-sm text-axiom-accent group-hover:underline">See what we deliver ↓</span>
            </a>
            <a href="#suppliers" className="reveal block p-8 bg-axiom-gray border border-white/5 rounded-2xl hover:border-axiom-accent/40 hover:-translate-y-0.5 transition-all group">
              <div className="text-xs font-semibold text-axiom-accent uppercase tracking-wider mb-3">Manufacturers &amp; Suppliers</div>
              <h3 className="text-xl font-bold mb-3">Your products. Our paperwork.</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                We bid your catalog into federal, state, and local contracts and send you the PO — you drop-ship. No stocking, no minimums, no channel conflict.
              </p>
              <span className="text-sm text-axiom-accent group-hover:underline">How the partnership works ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <Eyebrow>What We Deliver</Eyebrow>
            <h2 className="text-4xl font-bold mb-4">Six lanes. One accountable vendor.</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Product distribution and facility services for federal, state, and local government buyers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT & Cybersecurity',
                body: 'Workstations, displays, servers, networking, and security platforms. TAA-compliant sourcing through authorized federal distribution.',
                tag: 'Dell • Cisco • Palo Alto • Fortinet • Splunk',
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              },
              {
                title: 'Physical Security',
                body: 'Cloud-managed cameras, access control, intercoms, and environmental sensors. Supply-only or with partner installation across CONUS.',
                tag: 'Verkada Authorized Partner',
                icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
              },
              {
                title: 'HVAC & Air Filtration',
                body: 'Pleated, box, bag, V-bank, and HEPA filters for commercial and institutional air handlers. MERV 7–16, ASHRAE 52.2 tested, UL 900 classified.',
                tag: 'Nordic Pure • AAF Flanders • Koch Filter',
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              },
              {
                title: 'Water Safety Testing',
                body: 'Facility water safety and Legionella testing programs for healthcare and institutional sites: sampling, analysis, and reporting through CDC ELITE-certified, ISO 17025-accredited partner laboratories.',
                tag: 'VHA Directive 1061 • ASHRAE 188 • AAMI ST108',
                icon: 'M12 3v2m0 14v2m7-9h2M3 12h2m11.66-5.66l1.41-1.41M5.93 18.07l1.41-1.41m0-9.32L5.93 5.93m12.14 12.14l-1.41-1.41M12 8a4 4 0 100 8 4 4 0 000-8z',
              },
              {
                title: 'Safety & Fall Protection',
                body: 'Harnesses, lanyards, self-retracting lifelines, and anchor systems for facility maintenance and construction operations.',
                tag: 'FC Safety · French Creek',
                icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              },
              {
                title: 'Medical Equipment & Supplies',
                body: 'Hospital equipment, medical carts and cabinets, AEDs, and healthcare consumables for VA, IHS, and state health systems.',
                tag: 'Authorized distributor channels',
                icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
              },
            ].map((s) => (
              <div key={s.title} className="reveal p-8 bg-axiom-dark border border-white/5 rounded-2xl hover:border-axiom-accent/30 hover:-translate-y-0.5 transition-all group">
                <div className="w-12 h-12 bg-axiom-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-axiom-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.body}</p>
                <p className="text-xs text-gray-500">{s.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Record */}
      <section id="record" className="py-28 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <Eyebrow>2026 Contract Record</Eyebrow>
            <h2 className="text-4xl font-bold mb-4">Awarded. Executed. Delivered.</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every line below is a real contract number. References available on request.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              ['3', 'Federal awards, 2026'],
              ['5', 'Contract vehicles held'],
              ['9', 'Illinois BidBuy awards'],
              ['10', 'Authorized OEM partners'],
            ].map(([n, label]) => (
              <div key={label} className="reveal p-6 bg-axiom-gray border border-white/5 rounded-2xl text-center">
                <div className="font-mono text-3xl font-bold text-white mb-1">{n}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          <div className="reveal bg-axiom-gray border border-white/5 rounded-2xl overflow-hidden">
            {RECORD.map((g) => (
              <div key={g.group}>
                <div className="px-6 py-3 bg-axiom-dark/60 border-y border-white/5 first:border-t-0">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{g.group}</h4>
                </div>
                <div className="divide-y divide-white/5">
                  {g.rows.map((r) => (
                    <div key={r.id + r.who} className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <span className="font-mono text-xs text-gray-500 md:w-40 flex-shrink-0">{r.id}</span>
                      <span className="text-sm text-white flex-grow">
                        {r.who} <span className="text-gray-500">· {r.what}</span>
                      </span>
                      <span className={`font-mono text-xs font-semibold tracking-widest border rounded px-2.5 py-1 self-start md:self-auto whitespace-nowrap ${PILL[r.tone]}`}>
                        {r.pill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-28 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <Eyebrow>Authorized Distributor</Eyebrow>
            <h2 className="text-4xl font-bold mb-4">Manufacturer Partners</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Authorized to distribute from the manufacturers below. Factory-direct pricing, full warranty coverage, verified TAA compliance.
            </p>
          </div>

          <div className="mb-10 reveal">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">IT &amp; Cybersecurity</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <LogoCard src="/logos/dell.svg" alt="Dell" blurb="Workstations, servers, displays" />
              <LogoCard src="/logos/cisco.svg" alt="Cisco" blurb="Networking, switches, security" />
              <LogoCard src="/logos/paloalto.svg" alt="Palo Alto Networks" blurb="Next-gen firewalls, Panorama" />
              <LogoCard src="/logos/fortinet.svg" alt="Fortinet" blurb="FortiGate firewalls, SD-WAN" />
              <LogoCard src="/logos/splunk.svg" alt="Splunk" blurb="SIEM, log management, analytics" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="reveal">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">Physical Security</h4>
              <div className="grid grid-cols-1 gap-4">
                <LogoCard text="Verkada" blurb="Cloud-managed cameras, access control, intercoms, sensors — Authorized Partner" tall />
              </div>
            </div>
            <div className="reveal">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">Safety &amp; Fall Protection</h4>
              <div className="grid grid-cols-1 gap-4">
                <LogoCard src="/logos/frenchcreek.png" alt="FC Safety — French Creek" blurb="Harnesses, lanyards, self-retracting lifelines, anchor systems" tall />
              </div>
            </div>
          </div>

          <div className="reveal">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">HVAC &amp; Air Filtration</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <LogoCard src="/logos/nordicpure.png" alt="Nordic Pure" text="Nordic Pure" blurb="Pleated panel filters MERV 7–16, custom sizes, made in Tulsa, OK" tall keepColor />
              <LogoCard src="/logos/aaf.png" alt="AAF Flanders" blurb="VariCel, PREpleat, DuraMAX, MicroMAX, bag and box filters" tall />
              <LogoCard text="Koch Filter" blurb="MicroMAX commercial filters, MultiSak bag filters, carbon products" tall />
            </div>
          </div>
        </div>
      </section>

      {/* For Suppliers */}
      <section id="suppliers" className="py-28 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <Eyebrow>For Manufacturers &amp; Suppliers</Eyebrow>
            <h2 className="text-4xl font-bold mb-4">A government sales channel<br />you don't have to staff.</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              If you make or distribute products, Axiom is a zero-overhead path into federal, state, and local contracts. We find the bids, carry the compliance, and win the business — you ship the product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              ['01', 'We find and win the business', 'We monitor federal, state, and local solicitations daily for your product lines and write every bid ourselves. You never touch a government form.'],
              ['02', "We win where you can't", "As a certified SDVOSB, Axiom competes for set-aside contracts that manufacturers and large distributors are barred from. That's net-new revenue for your channel — not cannibalized sales."],
              ['03', 'You just ship', 'When we win, you get a standard PO from Axiom Group — not from the government — at dealer pricing. Drop-ship to the address on the order. We pay NET 30 and own everything else.'],
            ].map(([n, h, p]) => (
              <div key={n} className="reveal p-8 bg-axiom-gray border border-white/5 rounded-2xl hover:border-axiom-accent/30 transition-colors">
                <div className="font-mono text-xs text-axiom-accent mb-4">{n}</div>
                <h3 className="text-lg font-semibold mb-3">{h}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal p-8 bg-axiom-gray border border-white/5 rounded-2xl">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">What we'll ask you for</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>Standard dealer pricing — no stocking requirement, no minimums</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>Spec sheets and product data for the lines we quote</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>A per-bid letter of authorization when a solicitation requires one</li>
              </ul>
            </div>
            <div className="reveal p-8 bg-axiom-gray border border-white/5 rounded-2xl">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">What you'll never deal with</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>SAM registration, FAR clauses, and government certifications</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>Government invoicing, payment portals, and collection cycles</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-axiom-accent rounded-full"></span>Bid protests, compliance paperwork, and the end-customer relationship</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <a href="#contact" className="inline-block px-8 py-4 bg-axiom-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section className="py-24 bg-axiom-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal bg-axiom-dark border border-white/5 rounded-2xl p-10 md:p-14">
            <h3 className="text-center text-xl font-semibold mb-14">How an order runs</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
              {[
                ['Source', 'Identify products through our authorized distributor network', 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'],
                ['Quote', 'Competitive pricing with 24–48 hour turnaround', 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'],
                ['Fulfill', 'Place the PO with the manufacturer and coordinate the ship date', 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'],
                ['Deliver', 'FOB Destination shipping with tracking and confirmation', 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'],
                ['Report', 'Documentation, invoicing, and post-delivery reporting', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'],
              ].map(([t, d, icon], i) => (
                <div key={t} className={`text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <div className="w-12 h-12 mx-auto mb-4 bg-axiom-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-axiom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                    </svg>
                  </div>
                  <div className="text-axiom-accent font-semibold mb-2">{t}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-axiom-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal">
              <Eyebrow>About Axiom Group</Eyebrow>
              <h2 className="text-3xl font-bold mb-6">
                Built for Federal, State,<br />&amp; Local Procurement.
              </h2>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                Axiom Group is a Service-Disabled Veteran-Owned Small Business headquartered in Chicago, providing authorized distribution, fulfillment, and facility services to government agencies at every level — from VA medical centers and federal law enforcement to state correctional systems and public school districts.
              </p>

              <div className="mb-10">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    'IT hardware and cybersecurity (TAA-compliant)',
                    'Physical security systems (Verkada)',
                    'HVAC air filtration (MERV 7–16, pleated, box, bag, V-bank, HEPA)',
                    'Facility water safety and Legionella testing',
                    'Fall protection and safety equipment',
                    'Medical equipment and healthcare supplies',
                    'Brand-name and approved-equivalent sourcing',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>{t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Differentiators</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    'SBA VetCert certified SDVOSB · Illinois VBP certified',
                    'Authorized distributor network (factory direct)',
                    'Federal, cooperative, and state contract vehicles in place',
                    'Rapid quote turnaround on bid responses',
                    'FOB Destination delivery, freight included',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-axiom-accent rounded-full"></span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-axiom-gray border border-white/5 rounded-2xl p-8 h-full">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Corporate Data</h4>

                <div className="space-y-6">
                  {[
                    ['UEI', 'XSVAANVXZGM1', true],
                    ['CAGE Code', '181C2', true],
                    ['Headquarters', 'Chicago, IL'],
                    ['Delivery Area', 'CONUS'],
                    ['Certification', 'SBA VetCert SDVOSB'],
                    ['State Certification', 'Illinois Veterans Business Program'],
                    ['Payment', 'GPC · Card · Net 30'],
                  ].map(([k, v, mono], i, arr) => (
                    <div key={k} className={`flex justify-between items-center py-4 ${i < arr.length - 1 ? 'border-b border-white/5' : ''}`}>
                      <span className="text-sm text-gray-400">{k}</span>
                      <span className={`text-sm text-white font-medium text-right ${mono ? 'font-mono' : ''}`}>{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Business Classification</div>
                  <div className="text-sm text-white">Service-Disabled Veteran-Owned Small Business (SDVOSB)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Authorizations */}
          <div className="mt-16 p-8 bg-axiom-gray border border-white/5 rounded-2xl reveal">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Certifications &amp; Authorizations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
              {[
                'SBA VetCert — Service-Disabled Veteran-Owned Small Business',
                'Illinois Veterans Business Program — certified SDVOSB; recognized by City of Chicago and Cook County',
                'VA Vendor Acquisition Portal — approved',
                'Cisco U.S. Federal Authorization — active',
                'Splunk Partnerverse — authorized to transact',
                'Dell Technologies Partner Program — member',
                'Verkada — Authorized Partner',
                'SAM.gov registered — CAGE 181C2, UEI XSVAANVXZGM1',
                'Authorized distribution across every product lane',
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-2 bg-axiom-accent rounded-full flex-shrink-0"></span>{t}
                </div>
              ))}
            </div>
          </div>

          {/* NAICS */}
          <div className="mt-8 p-8 bg-axiom-gray border border-white/5 rounded-2xl reveal">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">NAICS Codes</h4>
            {Object.entries(NAICS).map(([group, codes]) => (
              <div key={group} className="mb-6 last:mb-0">
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-3">{group}</div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                  {codes.map(([c, d]) => (
                    <div key={c} className="text-sm">
                      <span className="text-axiom-accent font-mono">{c}</span>
                      <span className="text-gray-400 ml-2">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Customers */}
          <div className="mt-8 p-8 bg-axiom-gray border border-white/5 rounded-2xl reveal">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Customers</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              {[
                ['Federal', 'Dept. of Veterans Affairs · Federal Bureau of Investigation · U.S. Navy (NAVSEA)'],
                ['Cooperative', 'EPIC6 and Goodbuy member agencies — school districts, municipalities, and public entities'],
                ['State', 'Illinois Department of Corrections · Illinois BidBuy agencies'],
                ['Local & Education', 'City of Houston Airport System · Avoyelles Parish School Board'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-white font-semibold mb-2">{k}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-axiom-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Contracting officer with a requirement? Manufacturer looking for a government channel? Prime contractor building a team? Tell us what you need.
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
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto reveal">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2">Name</label>
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
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2">Email</label>
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
                  <label htmlFor="organization" className="block text-xs font-medium text-gray-400 mb-2">Organization</label>
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
                  <label htmlFor="inquiryType" className="block text-xs font-medium text-gray-400 mb-2">I am a...</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-axiom-dark border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-axiom-accent/50 transition-colors"
                  >
                    <option value="" disabled>Select one</option>
                    <option value="Government buyer">Government buyer / contracting officer</option>
                    <option value="Manufacturer or supplier">Manufacturer or supplier</option>
                    <option value="Prime contractor">Prime contractor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2">Message</label>
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
        {/* Certification badge row — partner-program badges get added here */}
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center gap-8 mb-8">
          <img src="/sba-sdvosb-badge.png" alt="SBA Certified Service-Disabled Veteran-Owned Small Business" className="h-24 w-auto rounded" />
        </div>
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
