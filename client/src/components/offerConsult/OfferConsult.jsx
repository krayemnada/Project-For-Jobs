import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../../redux/action/postAction";

const OfferConsult = () => {
    const { posts } = useSelector((state) => state.postReducer);
    // console.log(UsersOffers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_posts());
    }, []);
    return (
        <div>
            {posts &&
                posts.map((elt) => (
                    <div>
                        <p> {elt.title}</p>
                        <p>{elt.postEmail}</p>
                        <p>{elt.postDescription}</p>
                    </div>
                ))}
        </div>
    );
};

export default OfferConsult;
