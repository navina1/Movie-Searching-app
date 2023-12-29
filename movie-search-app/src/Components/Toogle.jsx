import "../toogle.css";

export const Toogle =({handleChange,ischecked}) =>{
    return(
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={ischecked}
            />
            <label htmlFor="check">{ischecked?"Dark Mode":"Light Mode"}</label>
        </div>
    )
}