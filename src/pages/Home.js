import {useNavigate} from "react-router-dom";

export default function Home() {
  const list = [
    {text: "Learn about Ionic Bonds", link: "/ionic-bonds"},
    {text: "Learn about Covalent Bonds", link: "/covalent-bonds"},
    {text: "Ionic Compound Quiz", link: "/quiz"},
    {text: "Covalent Compound Quiz", link: "/quiz"},
    {text: "Nomenclature Quiz", link: "/quiz"}
  ];
  const navigate = useNavigate();
    return (
            <div className="flex flex-col items-center justify-center h-[80%]">
                <h1 className="text-4xl font-bold">Welcome to NomenTeacher!</h1>

                {list.map(item =>
                    (<button key= {item.text} onClick={() => {navigate(item.link)}} className={"text-3xl flex" +
                        " flex-col items-center justify-center bg-purple-700 rounded-xl w-[30%] h-[20%] py-2 my-4"}>
                      {item.text}
                  </button>))
                }
            </div>
    );
}
