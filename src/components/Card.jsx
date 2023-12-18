import { motion } from 'framer-motion';
import { FaRegFileAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';

const Card = ({ data, reference }) => {
  const { desc, fileSize, close, tag } = data;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
      className="relative h-72 w-60 flex-shrink-0 overflow-hidden rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold leading-tight">{desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="mb-3 flex items-center justify-between px-8 py-3">
          <h5>{fileSize}</h5>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-600">
            {close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {tag.isOpen && (
          <div className="tag flex w-full items-center justify-center bg-green-600 py-4">
            <h3>{tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
