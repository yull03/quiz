
const Categoris = ({ categoris, onSelect }) => {
    return (
        <div className="category">
            <h1>웹 디자인 개발 기능사 퀴즈</h1>
            <div className="category-wrap">
                {
                    categoris.map((item, idx) => {
                        return <button key={idx}
                            onClick={() => { onSelect(item) }}
                            >{item}
                        </button>
                    })
                }
                
            </div>
        </div>

    );
};

export default Categoris;