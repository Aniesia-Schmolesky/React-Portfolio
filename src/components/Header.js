import { Link } from "react-router-dom";

export default function Header() {
    return(
      <header class="text-gray-600 body-font bg-gray-200">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
  aria-describedby="desc" role="img" xlink="http://www.w3.org/1999/xlink">
  <title>Laptop Screen</title>
  <desc>A line styled icon from Orion Icon Library.</desc>
  <path data-name="layer2"
  fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round"
  stroke-width="2" d="M6 45l-4 6v2h60v-2l-4-6"></path>
  <path data-name="layer1" fill="none" stroke="#202020" stroke-linecap="round"
  stroke-linejoin="round" stroke-width="2" d="M6 11h52v34H6z"></path>
</svg>
      <span class="ml-3 text-xl">Aniesia Schmolesky</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to="/" class="mr-5 hover:text-gray-900">About Me</Link>
      <Link to="/projects" class="mr-5 hover:text-gray-900">Projects</Link>
      <Link to="/resume" class="mr-5 hover:text-gray-900">Resume</Link>
      <Link to="/contactme" class="mr-5 hover:text-gray-900">Contact Me</Link>
    </nav>
    <a href="https://github.com/Aniesia-Schmolesky" target="_blank"><button class="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5" >GitHub
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></a>
    <a href="https://www.linkedin.com/in/aniesia-schmolesky-25b08814a/" target="_blank"><button class="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">LinkedIn
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></a>
  </div>
</header>
  );
}