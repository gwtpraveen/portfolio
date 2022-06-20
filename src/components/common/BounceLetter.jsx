import "../../style/css/common/bounceLetter.css";

const BounceLetter = (props) => {
    const handleAnimation = (e) =>  {
        if (e.target.classList.length === 1) {
            e.target.classList.add("animate");
            setTimeout(() => {
                e.target.classList.remove("animate");
            }, 810);
        }
    }

    return ( 
        <>
            {props.children.split("").map((item, idx) => <span key={idx} onMouseOver={e => handleAnimation(e)} className="animate-letter">{item}</span>)}
        </>
     );
}
 
export default BounceLetter;
