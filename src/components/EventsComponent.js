import './style/Events.css';
import './style/Search.css';

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventComponent from "./EventComponent"

const EventsComponent = () => {
   
    const URL = "https://tickchak.co.il/ajax/api/get_events_suggestions_exercise";
   
    const [initialParams , setInitialParams] = useState({ eid: 30871, limit: 10, offset: 0 })
    const [valsearch, setValsearch] = useState()
    const searchInputRef = useRef()

    const dispatch = useDispatch()
    const events = useSelector(state => state.events)
    const filterEvents = useSelector(state => state.filterEvents)
   
   
    const getData = () => {

         axios.post(URL, initialParams,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => {
                let eventsToShow = resp.data.events.splice(0, initialParams.limit + initialParams.offset)
                dispatch({ type: "SHOW_EVENTS", payload: eventsToShow })
                dispatch({ type: "LOAD_EVENTS", payload: false })

            })
            .catch(err => {
                console.log(err)
                dispatch({ type: "LOAD_EVENTS", payload: false })

            })
    }


    useEffect(() => {

        dispatch({ type: "LOAD_EVENTS", payload: true })

        getData();
      
    }, [dispatch, getData()])


    const loadMore = () => {
        setInitialParams({ ...initialParams, offset: initialParams.offset + 10 });
        getData();
    }

    const searchEvent = (e) => {
        e.preventDefault();
        let valsearch = searchInputRef.current.value;
        setValsearch(valsearch) // save on state for check if field was fill or not
        if (valsearch) {
            let filterEvents = events.filter(evn => {
                return (evn.title && evn.title.toLowerCase().indexOf(valsearch.toLowerCase()) > -1) || (evn.location && evn.location.toLowerCase().indexOf(valsearch.toLowerCase()) > -1)
            })

            dispatch({ type: "FILTERED_EVENTS", payload: filterEvents })
        }
    }

    return (
        <>
            <form className="search-form">
                <input type="search" placeholder="חפש אירוע" ref={searchInputRef} />
                <button type="submit" onClick={searchEvent}>חפש</button>
            </form>

            <div className="events-list">

                {
                    events.length === 0 ?
                        Array.from({ length: 9 }).map((_, idx) => {
                            return <EventComponent key={idx} eventsData={idx} />
                        }) :
                        valsearch ?
                            filterEvents.map(event => {
                                return <EventComponent key={event.eid} eventsData={event} />
                            })
                            :
                            events.map(event => {
                                return <EventComponent key={event.eid} eventsData={event} />
                            })
                }

            </div>
        <br/>
          {initialParams.offset < 20 && <div className='load-more-div'>
            <button className='btn btn-info load-more' type='submit' onClick={loadMore}>טען עוד</button>
          </div>}
          <br/>
        </>
    )
}

export default EventsComponent;