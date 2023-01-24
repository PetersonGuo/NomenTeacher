import Prompt from "./Prompt";

export default function SettingsSidebar(props) {
    const content = props.history.map(hist => {
        return(
            <li>
                <a href="#"
                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    {/*<Prompt question={hist} setClicked={() => {console.log("Hi")}}/>*/}
                </a>
            </li>
        );
    });
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    {content}
                </ul>
            </div>
        </aside>
    );
}
