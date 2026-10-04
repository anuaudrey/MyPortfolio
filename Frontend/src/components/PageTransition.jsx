/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a reusable page transition component that provides a smooth fade animation when navigating between pages.
 */
import { motion } from "framer-motion";


export default function PageTransition({ children }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mx-auto max-w-6xl px-6 pt-16">
      {children}
    </motion.main>
  );
}
