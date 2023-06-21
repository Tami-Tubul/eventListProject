// import { useRef, useState } from "react"
// import { useDispatch } from "react-redux"

// const SearchComponent = () => {

//     const [valsearch, setValsearch] = useState()
//     const searchInputRef = useRef()
//     const dispatch = useDispatch()


//     const searchEvent = (e) => {
//         e.preventDefault();
//         let valsearch = searchInputRef.current.value;
//         setValsearch(valsearch) // save on state for check if field was fill or not
//         if (valsearch) {
//             let filterEvents = events.filter(evn => {
//                 return (evn.title && evn.title.toLowerCase().indexOf(valsearch.toLowerCase()) > -1) || (evn.location && evn.location.toLowerCase().indexOf(valsearch.toLowerCase()) > -1)
//             })

//             dispatch({ type: "FILTERED_EVENTS", payload: filterEvents })
//         }
//     }


//     return (
//         <form className="search-form">
//             <input type="search" placeholder="חפש אירוע" ref={searchInputRef} />
//             <button type="submit" onClick={searchEvent}>חפש</button>
//         </form>
//     )
// }

// export default SearchComponent;