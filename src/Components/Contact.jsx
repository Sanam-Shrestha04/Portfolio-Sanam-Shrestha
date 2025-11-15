import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import { cn } from "@/lib/utils";
import { useRef } from "react";
export const Contact = () => {

  return (
    <section id="contact" className="py-24 px-4 relative text-secondary ">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities
        </p>
        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            <div className="space-y-6 items-center justify-center">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div >
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sthasanam067@gmail.com"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    sthasanam067@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center ">
                <a
                  href="https://www.linkedin.com/in/sanam-shrestha-85b680303/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Sanam-Shrestha04"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/sanam.stha.737/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
