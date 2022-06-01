const Clients = (props) => {
    return (
        <section id="clients" class="pt-36 pb-32 bg-slate-800">
        <div class="container">
            <div class="w-full px-4">
                <div class=" mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-yellow-500 mb-2">Clients</h4>
                    <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerja Sama</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi deserunt dolore molestias quos provident accusantium.</p>
                </div>
            </div>
            <div class="w-full px-4">
                <div class="flex flex-wrap items-center justify-center">   
                    <a href="#" class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                        <img src={props.LogoGoogle} alt="Google"></img>
                    </a>
                    <a href="#" class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                        <img src={props.LogoGojek} alt="Gojek"></img>
                    </a>
                    <a href="#" class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                        <img src={props.LogoTokopedia} alt="Tokopedia"></img>
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Clients;