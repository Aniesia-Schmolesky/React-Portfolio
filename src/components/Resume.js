import resume from './images/resume.jpg'
export default function Resume() {
    return(
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">My Resume</h1>
  <a class="underline text-blue-600 inline-flex items-center md:mb-4 lg:mb-10" href="https://docs.google.com/document/d/1Q6PRDAbD6haRgCSCWK_BXbDSblZBFbKUMAKrnoA0pM4/edit?usp=sharing" target="_blank">View in Google Docs</a>
    <img class="lg:w-6/6 md:w-6/6 w-6/6 mb-10 object-cover object-center rounded" alt="hero" src={resume}/>
  </div>
</section>
    )
}