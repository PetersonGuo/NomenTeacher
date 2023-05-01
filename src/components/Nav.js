import {useEffect, useState} from "react";
import {IconButton, MobileNav, Navbar, Typography,} from "@material-tailwind/react";
import { HiSun, HiMoon } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function Nav(props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
      <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
          <motion.a href="../home" className="flex items-center" whileHover={{scale: 1.1}} transition={{bounce: 0}}>
            Home
          </motion.a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
          <motion.a href="../quiz" className="flex items-center" whileHover={{scale: 1.1}} transition={{bounce: 0}}>
            Quizzing Tool
          </motion.a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
          <motion.a href="../ionic-bonds" className="flex items-center" whileHover={{scale: 1.1}} transition={{bounce: 0}}>
            Ionic Bonds
          </motion.a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
          <motion.a href="../covalent-bonds" className="flex items-center" whileHover={{scale: 1.1}} transition={{bounce: 0}}>
            Covalent Bonds
          </motion.a>
        </Typography>
        <Typography
            as="li"
            color="blue-gray"
            className="p-1 font-normal"
        >
          <motion.a href="https://ptable.com/?lang=en#Properties" target={"_blank"} className="flex items-center" whileHover={{scale: 1.1}} transition={{bounce: 0}}>
            Periodic Table
          </motion.a>
        </Typography>
        <div className="cursor-pointer sm:hidden md:block lg:block" style={{marginRight: 0}}
             onClick={props.toggleDarkMode}>
          {props.darkMode ? <HiMoon className="text-blue-700" size={30}/> : <HiSun className={"text-white"} size={30}/>}
        </div>
      </ul>
  );

  return (
      <Navbar className="mx-auto w-[70vw] py-2 px-4 lg:px-8 lg:py-4 bg-slate-900 border-0 rounded-xl">
        <div className="mx-auto flex items-center justify-between">
          <motion.a
              href="../home"
              className="mr-4 cursor-pointer py-1.5 font-bold text-lg"
              whileHover={{scale: 1.1}}
              transition={{bounceHome: 0}}
          >
            <span className="text-black dark:text-white">NomenTeacher</span>
          </motion.a>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav} className="opacity-100">
          {navList}
        </MobileNav>
      </Navbar>
  );
}