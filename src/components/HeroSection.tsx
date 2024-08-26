import ParticlesComponent from "../components/Particles";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-hero-parallax flex flex-col items-center justify-center text-center h-screen w-full"
    >
      {/* Particles Effect */}
      <ParticlesComponent />

      <div className="relative z-10 p-8 rounded-md bg-opacity-50 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-primary">
          Welcome to <span className="text-blue-500">CodeWrench Studios</span>
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          At <span className="text-blue-500">CodeWrench Studios</span>, I am passionate about delivering impactful digital solutions that drive results and exceed expectations.
        </p>
        <p className="mt-2 text-md text-gray-300">
          With a unique blend of hands-on precision and craftsmanship, I bring the same dedication and meticulous attention to detail to every web development project. Let me help you turn your vision into reality with cutting-edge technology and innovative design.
        </p>
        <div className="mt-8">
          <a href="#services" className="btn-primary mx-2">
            Services
          </a>
          <a href="#contact" className="btn-secondary mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
