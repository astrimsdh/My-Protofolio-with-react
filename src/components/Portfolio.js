const Portfolio = (props) => {
    return (
        <section id="portfolio" class="pt-36 pb-16 bg-slate-100">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                    <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi deserunt dolore molestias quos provident accusantium.</p>
                </div>
            </div>
            <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                <div class="mb-12 p-4 md:w-1/3">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src={props.ProjectPertama} alt="Aplikasi Pembukuan" width="w-full"></img>
                    </div>
                    <h3 class="font-semibold text-dark text-xl mt-5 mb-3">Aplikasi Pembukuan Data Order</h3>
                    <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore minus aliquam.</p>
                </div>
                <div class="mb-12 p-4 md:w-1/3">
                    <div class="rounded-md shadow-md overflow-hidden">
                        <img src={props.ProjectKedua} alt="Game Tikus Tanah" width="w-full"></img>
                    </div>
                    <h3 class="font-semibold text-dark text-xl mt-5 mb-3">Game Tikus Tanah</h3>
                    <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore minus aliquam.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio;