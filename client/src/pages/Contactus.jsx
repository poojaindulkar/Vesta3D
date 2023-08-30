import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contactus = () => {
    return (
        <div>
        
        <section class="bg-white h-screen flex justify-center items-center">
            
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <a href="/">
                    <button
                        type="submit"
                        class="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600 mb-4"
                    >
                        Go Back
                    </button>
                </a>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback? Need any details? Let us know.</p>
                
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button
                        type="submit"
                        class="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
        </div>
    );
};

export default Contactus;
