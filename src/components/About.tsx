// components/About.tsx
export const About = () => (
    <section className="about-section">
      <div className="about-text">
        <p>
          I'm a sophomore Software Engineering student at {' '}
          <a 
            href="https://carleton.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium no-underline"
          >
            Carleton University
          </a>. I'm interested in full-stack development, AI, infrastructure, distributed systems, compilers and open-source projects.
        </p>
        
        <div className="flex justify-center mt-4 gap-4">
          <a 
            href="https://github.com/bskdany" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all border border-gray-200 no-underline active:text-gray-700"
          >
            GitHub
          </a>
          <span>                                                                     </span>
          <a 
            href="https://linkedin.com/in/danielbyshkin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all border border-gray-200 no-underline active:text-gray-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )