export default function HistorySidebar(props) {
    const content = props.history.map((hist, index) => {
        const questionAnswer = hist.answers.find(ans => {
            return ans.isRight
        });
        const userAnswer = hist.answers.find(ans => {
            return ans.isClicked
        });
        console.log(hist);
        return (
            <li key={index}>
                <div className="flex text-left p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {hist.question}
                    <br/>
                    Answer: {questionAnswer.answer}
                    <br/>
                    Your answer: {userAnswer.answer}
                </div>
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
