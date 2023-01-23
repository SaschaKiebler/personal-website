import { motion } from "framer-motion";


export default function Portfolio(){
    return(
        <motion.div initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
        className='w-full h-full absolute bg-black text-white font-poppins'>

        </motion.div>
    );
}