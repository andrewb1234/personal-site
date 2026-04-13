import { Github, MapPin, BookOpen, ArrowRight, Circle, Square, Triangle } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b-4 border-foreground bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Geometric Logo */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary-red" />
              <div className="w-4 h-4 bg-primary-blue" />
              <div className="w-4 h-4 clip-triangle bg-primary-yellow" />
            </div>
            <span className="font-black text-lg sm:text-xl uppercase tracking-tight">
              Andrew Betbadal
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left - Text Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Hello,
                <br />
                <span className="text-primary-red">I&apos;m Andrew</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium leading-relaxed max-w-md mb-8">
                Builder, runner, and explorer. Welcome to my corner of the internet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#connect"
                  className="btn-bauhaus bg-primary-red text-white px-6 py-3 inline-flex items-center gap-2"
                >
                  Connect
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#projects"
                  className="btn-bauhaus bg-white text-foreground px-6 py-3"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right - Geometric Composition */}
            <div className="bg-primary-blue border-t-4 lg:border-t-0 lg:border-l-4 border-foreground relative overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-0">
              {/* Large Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full bg-primary-yellow border-4 border-foreground" />
              {/* Rotated Square */}
              <div className="absolute top-1/4 right-1/4 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-primary-red border-4 border-foreground rotate-45" />
              {/* Small Square with Triangle */}
              <div className="absolute bottom-1/4 left-1/4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white border-4 border-foreground flex items-center justify-center">
                <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 clip-triangle bg-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="connect" className="border-b-4 border-foreground bg-primary-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-foreground" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
              Connect With Me
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* GitHub Card */}
            <a
              href="https://github.com/andrewb1234"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bauhaus p-6 sm:p-8 group relative"
            >
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary-red" />
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-white flex items-center justify-center mb-4 sm:mb-6 border-2 border-foreground shadow-hard">
                <Github className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                GitHub
              </h3>
              <p className="font-medium text-foreground/70 mb-4">
                Code, projects, and contributions
              </p>
              <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-primary-blue group-hover:gap-3 transition-all">
                View Profile
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Strava Card */}
            <a
              href="https://www.strava.com/athletes/65443689"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bauhaus p-6 sm:p-8 group relative"
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary-blue" />
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-red text-white flex items-center justify-center mb-4 sm:mb-6 border-2 border-foreground shadow-hard">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                Strava
              </h3>
              <p className="font-medium text-foreground/70 mb-4">
                Running routes and adventures
              </p>
              <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-primary-red group-hover:gap-3 transition-all">
                View Profile
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Substack Card */}
            <a
              href="https://houseofandrew.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bauhaus p-6 sm:p-8 group relative sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-4 right-4 w-3 h-3 clip-triangle bg-primary-yellow" />
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-blue text-white flex items-center justify-center mb-4 sm:mb-6 border-2 border-foreground shadow-hard">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                Substack
              </h3>
              <p className="font-medium text-foreground/70 mb-4">
                Writing and thoughts
              </p>
              <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-primary-blue group-hover:gap-3 transition-all">
                Read Articles
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-red" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter">
              Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Shoe Matcher Project */}
            <a
              href="https://shoe-mapping.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bauhaus p-0 relative block group overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-yellow" />
                <div className="w-3 h-3 bg-primary-red" />
              </div>
              
              {/* Project Image Preview */}
              <div className="aspect-video border-b-4 border-foreground relative overflow-hidden bg-muted">
                <img
                  src="/images/shoe-matcher.webp"
                  alt="Shoe Matcher Interface Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 bg-primary-blue text-white text-xs font-bold uppercase tracking-widest border-2 border-foreground mb-4">
                  Live
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                  Shoe Matcher
                </h3>
                <p className="font-medium text-foreground/70 mb-4">
                  Recommendation engine to help you find your next running shoe.
                </p>
                <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-primary-red group-hover:gap-3 transition-all">
                  Try Shoe Matcher
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Tokyo GPX Map Project */}
            <div className="card-bauhaus p-6 sm:p-8 relative bg-muted/50 flex flex-col items-center justify-center min-h-[300px]">
              <div className="flex gap-4 mb-6">
                <Circle className="w-8 h-8 sm:w-12 sm:h-12 text-primary-red" strokeWidth={3} />
                <Square className="w-8 h-8 sm:w-12 sm:h-12 text-primary-blue" strokeWidth={3} />
                <Triangle className="w-8 h-8 sm:w-12 sm:h-12 text-primary-yellow" strokeWidth={3} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-center mb-2">
                Tokyo GPX Map
              </h3>
              <p className="font-medium text-foreground/70 text-center">
                Coming Soon
              </p>
            </div>

            {/* BackgammonConquest Project */}
            <a
              href="https://backgammon-conquest.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bauhaus p-0 relative block group overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-blue" />
                <div className="w-3 h-3 clip-triangle bg-primary-yellow" />
              </div>
              
              {/* Project Image Preview */}
              <div className="aspect-video border-b-4 border-foreground relative overflow-hidden bg-muted">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFhd3rmqqmiPMxs0NQUt9d__Bi36psU56-QFyPz-0esLT1NKInYPeCkVYykS5j6e30APp4_eqta9HHx_BzN_ruGaS7T5vm8m7Eup09kzQySbduxzkw2fYGq8untQEyE98sov2J4mBQm7OKOAo2HhniNXH8qwN9La7Roe8Idx9-B3gvdQWv55KcmXXNbT8vNlqdZflxMbLTWa9tyxhqt0_heFmqGkkrdVFdceQPByBvoi_EdqI1s4-oBbnujPPw9XF-Qk6N06nWpM"
                  alt="BackgammonConquest - Epic space battle scene with fleet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block px-3 py-1 bg-primary-red text-white text-xs font-bold uppercase tracking-widest border-2 border-foreground mb-4">
                  Game
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                  BackgammonConquest
                </h3>
                <p className="font-medium text-foreground/70 mb-4">
                  An epic space-themed backgammon experience with strategic fleet battles.
                </p>
                <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-wider text-primary-blue group-hover:gap-3 transition-all">
                  Play Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Geometric Logo */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-red" />
              <div className="w-3 h-3 bg-primary-blue" />
              <div className="w-3 h-3 clip-triangle bg-primary-yellow" />
              <span className="ml-2 font-bold uppercase tracking-tight text-sm">
                Andrew Betbadal
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/andrewb1234"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-yellow transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.strava.com/athletes/65443689"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-red transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="https://houseofandrew.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-blue transition-colors"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-white/60 font-medium">
              &copy; {new Date().getFullYear()} Andrew Betbadal
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
