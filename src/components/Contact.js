import { useState, useEffect } from "react";

const Contact = (props) => {
    const initialValues = {nama:"", email:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };


    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.nama) {
            errors.nama = "Nama tidak boleh kosong";
        }
        if(!values.email) {
            errors.email = "Email tidak boleh kosong";
        }else if(!regex.test(values.email)){
            errors.email = "Masukkan Email yang valid";

        }
        return errors;
    };

    return (
        <section id="contact" class="pt-36 pb-32">
        <div class="container">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
                    <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Saya</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum sit nostrum.</p>
                </div>
            </div>
            <form action="" class="form" onSubmit={handleSubmit} method="POST">
                <div class="w-full lg:w-2/3 lg:mx-auto">
                    <div class="w-full mb-8 px-4 relative">
                        <label for="nama" class="text-base text-primary font-bold">Nama</label>
                        <input type="text" id="nama" name="nama" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary border-red-600" values={formValues.nama} onChange={handleChange} />
                        <span class="error-message text-red-600 text-sm">{formErrors.nama}</span>
                        <svg class="icon-success text-green-600 w-6 h-6 right-5 absolute top-9 fill-current hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg> 
                        <svg class="icon-error text-red-600 w-6 h-6 right-5 absolute top-9 fill-current hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                          </svg>
                    </div>
                    <div class="w-full px-4 mb-8 relative">
                        <label for="email" class="text-base text-primary font-bold">Email</label>
                        <input type="text" id="email" name="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary border-red-600" values={formValues.email} onChange={handleChange} />
                        <span class="error-message text-red-600 text-sm">{formErrors.email}</span>
                        <svg class="icon-success text-green-600 w-6 h-6 right-5 absolute top-9 fill-current hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg> 
                        <svg class="icon-error text-red-600 w-6 h-6 right-5 absolute top-9 fill-current hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                          </svg>
                    </div>
                    <div class="w-full px-4 mb-8">
                        <label for="pesan" class="text-base text-primary font-bold">Pesan</label>
                        <textarea type="text" id="pesan" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"> 
                        </textarea>
                        
                    </div>
                    <div class="w-full">
                        <button class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    )
}
export default Contact;