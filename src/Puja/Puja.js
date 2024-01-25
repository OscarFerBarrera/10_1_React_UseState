import "./Puja.css";

const Puja = ({ name, addPuja }) => {

    return (
        <>
            <button onClick={addPuja} className="buttonPuja">
                {name} quiere pujar 5€
            </button>
        </>
    );
}

export default Puja;