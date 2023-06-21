const CardComp = (props) =>{

    return(
        <div className='event-item' style={{padding: "1rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.24)",
            borderRadius: "14px",
            cursor: "pointer",
            width: "30%",
            margin: "auto",
            marginTop: "2.5%",
            minWidth: "300px",
            minHeight: "300px"}}>
            {props.children}
        </div>
    )
}
export default CardComp;