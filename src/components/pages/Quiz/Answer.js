import {motion} from "framer-motion";

export default function Answer(props) {
  return (
      <motion.button className={`my-4 border-2 rounded-lg mx-auto w-full text-white
        ${props.answered ? `cursor-default 
          ${props.isRight ? "bg-green-700 border-green-700 hover:bg-green-700" :
          props.isClicked ? "border-red-700" : "border-blue-500"}` : "border-blue-500 animateButton"}`}
                     onClick={!props.answered ? () => {
                       props.setClicked(props.id);
                     } : () => {
                     }}
                     initial={{backgroundPosition: "100% 0%", backgroundSize: "200% 100%"}}
                     whileHover={{backgroundPosition: "0% 100%"}}
                     transition={{
                       duration: 0.3,
                       bounce: 0
                     }}
      >
        <p className={"my-[10%] text-3xl"}>{props.answer}</p>
      </motion.button>
  )
}