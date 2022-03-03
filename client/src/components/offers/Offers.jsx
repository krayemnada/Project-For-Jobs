import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffer } from "../../redux/action/OffresAction";

const Offers = () => {
    const { loading, offers } = useSelector((state) => state.OfferReducer);
    console.log();

    const dispatch = useDispatch();
    // console.log(offer);
    useEffect(() => {
        dispatch(getOffer());
    }, []);
    return (
        <div>
            {/* {offer && offer ? (
                <h1 style={{ marginTop: "300px" }}>{`Hello ${offer.title}`}</h1>
            ) : (
                <h1>Loading ....</h1>
            )} */}
            {offers && offers.map((elt, key) => <h1>{elt.title}</h1>)}
        </div>
    );
};

export default Offers;
