import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
    const phoneNumber = "8801779296092"; // Make sure to use country code without +
    const message = "Hello Rakeb, I would like to discuss a project with you!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-[90px] z-[9999] flex flex-col items-end gap-3">
            {/* Tooltip on hover (desktop only) */}
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                Chat with me!
            </div>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className="relative h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-300 group"
                aria-label="Contact on WhatsApp"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" style={{ animationDuration: '2s' }} />

                <FaWhatsapp className="text-3xl relative z-10" />
            </motion.a>
        </div>
    );
};

export default WhatsAppWidget;
