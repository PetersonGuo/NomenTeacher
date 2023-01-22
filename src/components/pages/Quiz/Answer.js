export default function Answer(props) {
  return (
      <button className={`my-4 border-2 rounded-lg mx-auto my-3 py-1 px-2 w-full text-white 
        ${props.answered ? `cursor-default 
          ${props.isRight ? "bg-green-700 border-green-700 hover:bg-green-700" :
          props.isClicked ? "border-red-700" : "border-blue-500"}` : "border-blue-500" +
          " hover:bg-blue-500"}`}
              onClick={!props.answered ? () => {
                props.setClicked(props.id);
                props.setAnswered(true)
              } : () => {
              }}
      >
        {props.answer}
      </button>
  )

}