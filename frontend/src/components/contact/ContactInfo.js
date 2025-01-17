  import React from 'react';
  import { Mail, Phone, MapPin} from 'lucide-react';
  import { SocialMediaLinks } from '../SocialMediaLinks';
  
  export function ContactInfo() {
    return (
      <div className="space-y-8 bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto">
        <div className="transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-800 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Have questions about our resume analyzer? We're here to help!
          </p>
        </div>
  
        <div className="space-y-6">
          <div className="flex items-start group transform transition-transform duration-300">
            <div className="p-2 rounded-lg bg-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-800">Phone</h3>
              <p className="text-base text-gray-600 transition-all duration-300 ease-in-out">
                +91 9390 252 500
              </p>
            </div>
          </div>
  
          <div className="flex sm:flex-row items-start group transform transition-transform duration-300">
            <div className="p-2 rounded-lg bg-green-600 group-hover:bg-green-700 hover:scale-105 cursor-pointer  transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-800">Email</h3>
              <a 
                href="mailto:YOUR_EMAIL@example.com" 
                className="text-base text-gray-600 break-all transition-colors"
              >
                praveen.resumeanalyzer@gmail.com
              </a>
            </div>
          </div>
  
          <div className="flex items-start group transform transition-transform duration-300">
            <div className="p-2 rounded-lg bg-purple-600 group-hover:bg-purple-700 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-800">Location</h3>
              <p className="text-base text-gray-600 break-all transition-colors">
                H. B. Colony<br />
                Visakhapatnam, Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform justify-center">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Connect With Us</h3>
          <SocialMediaLinks className="flex flex-wrap gap-4 sm:gap-6" />
        </div>
      </div>
    );
  }
  
  