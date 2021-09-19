import { motion } from 'framer-motion';

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const onClickHandle = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={onClickHandle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ delay: 0.2 }}
    >
      <motion.img
        src={selectedImg}
        alt='enlarged pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default ImageModal;
