import { motion } from "framer-motion";

export default function Sidebar() {
  return (
      <div className="flex fixed top-0 right-0">
        <motion.div className="flex flex-col h-screen p-3 bg-white shadow w-72 bg-neutral-800 opacity-90" initial={{ x: "18rem" }} animate={{ x: 0 }} transition={{bounce: 0}} exit={{
          x: "18rem", duration: 1
        }}>
          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold mt-[40%] mx-auto font-bold text-3xl">Settings</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <button
                      className="flex items-center mx-auto py-2 rounded-md"
                  >
                    <span>Temp</span>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                      className="flex items-center mx-auto py-2 rounded-md"
                  >
                    <span>Temp2</span>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                      className="flex items-center mx-auto py-2 rounded-md"
                  >
                    <span>Temp3</span>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                      className="flex items-center mx-auto py-2 rounded-md"
                  >
                    <span>Temp4</span>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                      className="flex items-center mx-auto py-2 rounded-md"
                  >
                    <span>Temp5</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
  );
}