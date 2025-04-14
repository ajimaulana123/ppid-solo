import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
    const { scrollY } = useScroll();

    const bgY = useTransform(scrollY, [0, 500], [0, 150]);
    const contentY = useTransform(scrollY, [0, 500], [0, -50]);
    const statsY = useTransform(scrollY, [0, 500], [0, 50]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0.3]);

    return (
        <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Main Background with Parallax */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/balai-kota-solo.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </motion.div>
    
        {/* Overlay Pattern with Different Parallax Speed */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]), opacity: useTransform(scrollY, [0, 300], [0.2, 0]) }}
          className="absolute inset-0 z-1"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
    
        {/* Gradient Overlay */}
        <motion.div
          style={{ opacity: opacityHero }}
          className="absolute inset-0 z-2 bg-gradient-to-r from-blue-900/80 to-blue-800/80"
        />
    
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Subtle Parallax */}
            <motion.div
              style={{ y: contentY }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Keterbukaan Informasi Publik untuk
                <span className="text-blue-300"> Surakarta yang Transparan</span>
              </motion.h1>
    
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-blue-100 leading-relaxed"
              >
                Akses informasi publik dengan mudah dan cepat. Kami berkomitmen untuk mewujudkan pelayanan informasi yang transparan dan akuntabel.
              </motion.p>
    
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Ajukan Permohonan
                </motion.button>
                <motion.button
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </motion.div>
            </motion.div>
    
            {/* Hero Stats with Different Parallax Speed */}
            <motion.div
              style={{ y: statsY }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "1,234+", text: "Permohonan Informasi Diselesaikan" },
                { number: "98%", text: "Tingkat Kepuasan Layanan" },
                { number: "24/7", text: "Layanan Online" },
                { number: "500+", text: "Dataset Tersedia" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 4) }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
    
          {/* Scroll Indicator with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>
    );
} 