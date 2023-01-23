import {motion} from "framer-motion";

export default function Answer(props) {
  return (
      <motion.button className={`my-4 border-2 rounded-lg mx-auto my-3 py-1 px-2 w-full text-white 
        ${props.answered ? `cursor-default 
          ${props.isRight ? "bg-green-700 border-green-700 hover:bg-green-700" :
          props.isClicked ? "border-red-700" : "border-blue-500"}` : "border-blue-500 animateButton"}`}
                     onClick={!props.answered ? () => {
                       props.setClicked(props.id);
                     } : () => {
                     }}
                     whileHover={{backgroundPosition: "0% 100%"}}
                     transition={{
                       duration: 0.3,
                       bounce: 0
                     }}
      >
        {props.answer}
      </motion.button>
  )
}