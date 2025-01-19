
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialMediaLinks } from "../SocialMediaLinks";

export function ContactInfo() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <header className="text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-800">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Have questions about our resume analyzer? We're here to help!
        </p>
      </header>

      {/* Contact Details Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ContactDetail
          icon={<Phone className="h-6 w-6 text-white" />}
          title="Phone"
          detail="+91 9390 252 500"
          iconBg="bg-blue-600"
        />
        <ContactDetail
          icon={<Mail className="h-6 w-6 text-white" />}
          title="Email"
          detail={
            <a
              href="mailto:praveen.resumeanalyzer@gmail.com"
              className="text-base text-gray-600 hover:text-green-700 break-all"
            >
              praveen.resumeanalyzer@gmail.com
            </a>
          }
          iconBg="bg-green-600"
        />
        <ContactDetail
          icon={<MapPin className="h-6 w-6 text-white" />}
          title="Location"
          detail="Visakhapatnam, Andhra Pradesh"
          iconBg="bg-red-600"
        />
      </section>

      {/* Social Media Links Section */}
      <footer className="text-center flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
        <SocialMediaLinks className="mt-2 flex space-x-4 justify-center"/>
      </footer>
    </section>
  );
}

function ContactDetail({ icon, title, detail, iconBg }) {
  return (
    <div className="flex items-center space-x-4">
      <div className={`${iconBg} p-3 rounded-full`}>{icon}</div>
      <div>
        <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );
}
