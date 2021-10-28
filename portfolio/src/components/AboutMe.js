export default function AboutMe() {
    return(
        <section id="about" class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Aniesia Schmolesky
            <br class="hidden lg:inline-block">Full-Stack Web Development Student
            </h1>
            <p class="mb-8 leading-relaxed">I'm studying full-stack web development at UCSD extension. I'm currently working as a Data Entry Associate with a background in shipping & receiving, as well as accessioning in a CAPA/CLIA regulated clinical trial laboratory. I'm studying web development to learn about data science and improve user experience in laboratory inventory management systems.</p>
          </div>
        </div>
      </section> 
    )
}