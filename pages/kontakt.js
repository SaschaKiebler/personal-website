import {motion} from "framer-motion";


export default function Kontakt(){
    return(
        <motion.main initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
        className="absolute bg-black left-0 right-0 w-full h-full text-white"
        >
            <h1>Nice Hier kannst du mir eine Nachricht schreiben</h1>
        </motion.main>
    );
}