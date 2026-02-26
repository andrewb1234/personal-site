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
            {/* Tokyo GPX Map Project */}
            <div className="card-bauhaus p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-red" />
                <div className="w-3 h-3 bg-primary-blue" />
                <div className="w-3 h-3 clip-triangle bg-primary-yellow" />
              </div>
              
              {/* Project Preview Placeholder */}
              <div className="aspect-video bg-primary-blue border-4 border-foreground mb-6 relative overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" />
                    <span className="font-bold uppercase tracking-wider text-sm sm:text-base">
                      Coming Soon
                    </span>
                  </div>
                </div>
                {/* Decorative shapes */}
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-primary-yellow/50" />
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary-red/50 rotate-45" />
              </div>

              <span className="inline-block px-3 py-1 bg-primary-yellow text-foreground text-xs font-bold uppercase tracking-widest border-2 border-foreground mb-4">
                In Progress
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                Tokyo GPX Map
              </h3>
              <p className="font-medium text-foreground/70 mb-4">
                An interactive map of Tokyo with my Strava GPX data overlaid, visualizing all my running routes through the city.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted text-foreground text-xs font-bold uppercase tracking-wider border-2 border-foreground">
                  React
                </span>
                <span className="px-2 py-1 bg-muted text-foreground text-xs font-bold uppercase tracking-wider border-2 border-foreground">
                  Mapbox
                </span>
                <span className="px-2 py-1 bg-muted text-foreground text-xs font-bold uppercase tracking-wider border-2 border-foreground">
                  GPX
                </span>
              </div>
            </div>

            {/* More Projects Coming Soon */}
            <div className="card-bauhaus p-6 sm:p-8 relative bg-muted/50 flex flex-col items-center justify-center min-h-[300px]">
              <div className="flex gap-4 mb-6">
                <Circle className="w-8 h-8 sm:w-12 sm:h-12 text-primary-red" strokeWidth={3} />
                <Square className="w-8 h-8 sm:w-12 sm:h-12 text-primary-blue" strokeWidth={3} />
                <Triangle className="w-8 h-8 sm:w-12 sm:h-12 text-primary-yellow" strokeWidth={3} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-center mb-2">
                More Coming Soon
              </h3>
              <p className="font-medium text-foreground/70 text-center">
                Stay tuned for more projects
              </p>
            </div>
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
