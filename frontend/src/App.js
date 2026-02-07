import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/App.css';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh animate-gradient" />
      
      {/* Large Floating Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #FFB7C5 0%, transparent 70%)' }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #E6E6FA 0%, transparent 70%)' }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.8, 1.3, 1]
        }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, #FFDAB9 0%, transparent 70%)' }}
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />
      
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: -50,
            opacity: 0.6,
            filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.5))'
          }}
          animate={{
            y: [-50, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        >
          💗
        </motion.div>
      ))}
      
      {/* Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, white 0%, transparent 70%)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

const IntroCard = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-12 text-center"
      data-testid="intro-card"
    >
      <motion.h1
        className="heading-text text-6xl md:text-7xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        For You, Pragya
      </motion.h1>
      
      <motion.p
        className="body-text text-xl md:text-2xl text-gray-700 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        A little corner of the internet, just for you.
      </motion.p>
      
      <motion.button
        onClick={onNext}
        className="btn-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 105, 180, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        data-testid="intro-next-button"
      >
        Begin ✨
      </motion.button>
    </motion.div>
  );
};

const MessageCard = ({ onNext }) => {
  const message = "On your special day, I wanted to remind you how much light you bring into this world. Like these drifting stars, you shine effortlessly.";
  const words = message.split(' ');
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-12 text-center"
      data-testid="message-card"
    >
      <motion.h2
        className="heading-text text-5xl md:text-6xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        A Message for You
      </motion.h2>
      
      <div className="body-text text-lg md:text-xl leading-relaxed text-gray-700 mb-12 max-w-2xl mx-auto">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.button
        onClick={onNext}
        className="btn-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 105, 180, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        data-testid="message-next-button"
      >
        Continue 💫
      </motion.button>
    </motion.div>
  );
};

const GalleryCard = ({ onNext }) => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1707940940830-97b3eaf2e32e?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Dreamy trees and clouds' },
    { url: 'https://images.unsplash.com/photo-1731682603770-f2115dbf4b29?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Purple flower field' },
    { url: 'https://images.unsplash.com/photo-1555381253-80a9580c32a5?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Pink petals' },
    { url: 'https://images.unsplash.com/photo-1767324719420-3a698b25903b?crop=entropy&cs=srgb&fm=jpg&q=85', alt: 'Pink canopy' }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-12 text-center"
      data-testid="gallery-card"
    >
      <motion.h2
        className="heading-text text-5xl md:text-6xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Moments of Beauty
      </motion.h2>
      
      <div className="grid grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover"
              data-testid={`gallery-image-${i}`}
            />
          </motion.div>
        ))}
      </div>
      
      <motion.button
        onClick={onNext}
        className="btn-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 105, 180, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        data-testid="gallery-next-button"
      >
        One More Thing 🌸
      </motion.button>
    </motion.div>
  );
};

const FinalCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass-card p-12 text-center relative overflow-hidden"
      data-testid="final-card"
    >
      {/* Extra sparkles for final card */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`final-sparkle-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.8)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut'
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: 'spring', bounce: 0.5 }}
        className="text-8xl mb-6"
      >
        🎂
      </motion.div>
      
      <motion.h1
        className="heading-text text-6xl md:text-8xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Happy Birthday!
      </motion.h1>
      
      <motion.p
        className="body-text text-2xl md:text-3xl text-gray-700 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Here's to another year of magic.
      </motion.p>
      
      <motion.div
        className="body-text text-xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        May your day be filled with love, laughter, and endless joy. 💕
      </motion.div>
    </motion.div>
  );
};

const MusicPlayer = ({ shouldPlay }) => {
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (audioRef.current && shouldPlay) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(err => console.log('Audio autoplay prevented:', err));
    }
  }, [shouldPlay]);
  
  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
    </audio>
  );
};

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);
  
  useEffect(() => {
    const handleInteraction = () => {
      if (!musicStarted) {
        setMusicStarted(true);
      }
    };
    
    document.addEventListener('click', handleInteraction, { once: true });
    return () => document.removeEventListener('click', handleInteraction);
  }, [musicStarted]);
  
  const cards = [
    <IntroCard key="intro" onNext={() => setCurrentCard(1)} />,
    <MessageCard key="message" onNext={() => setCurrentCard(2)} />,
    <GalleryCard key="gallery" onNext={() => setCurrentCard(3)} />,
    <FinalCard key="final" />
  ];
  
  return (
    <div className="app-container" data-testid="birthday-app">
      <AnimatedBackground />
      <MusicPlayer shouldPlay={musicStarted} />
      
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          {cards[currentCard]}
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <motion.div
          className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {cards.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentCard(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentCard === i
                  ? 'bg-pink-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid={`nav-dot-${i}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;