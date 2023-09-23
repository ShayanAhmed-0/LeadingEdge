export default function My_FAQS(){

    return(
    <div> 
        <Navbar/>
    <section class="bg-stone-600 text-gray-800">
        <div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 class="text-4xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p class="mt-4 mb-8 text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
            <div class="space-y-4">
                <details class="w-full border-2 rounded-lg">
                    <summary class="px-4 py-6 focus:outline-none focus-visible:ri">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                    <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                </details>
                <details class="w-full border rounded-lg">
                    <summary class="px-4 py-6 focus:outline-none focus-visible:ri">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                    <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                </details>
                <details class="w-full border rounded-lg">
                    <summary class="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                    <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                </details>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
    )
    
    }