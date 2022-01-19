import React from 'react';
import Header from '../components/Header.js';
import '../css/Faq.css';

const FaqPage = () => {
    return (
        <>
                <Header />
                <div className="faq-header">
                        <h1>FAQ's</h1>
                </div>

                <div className="container-question">
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>Is there a dress code?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>Can I bring a date?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>What happens after the ceremony?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>Are there other wedding events I can attend?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>What will the weather be like this time of year?</p>
                    </div>
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>Will food and drinks be served at the reception?</p>
                    </div>
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>Can I take photos of the wedding?</p>
                    </div>
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>What will the weather be like this time of year?</p>
                    </div>
                </div>



                <div className="container-answer">

                    <div className="centered">
                        <h3>Answer</h3>
                        <p>The dress code for our wedding is semi-formal/cocktail attire. Consider this a chance to dress up!</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>We cannot guarentee a plus one at this time due to limited seating. We will let you know closer to the wedding.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>We have a pre-reception cocktail hour in the mezzanine level above the lobby of the Hilton President Hotel beginning at 5:00pm. Reception doors open at 6:00pm. </p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Yes! On Thursday, July 21st, we have an optional cocktail gathering at the <a href='https://www.ps1931.com/' target='blank' >Hotel Phillips speak easy lounge</a>, where any guest can spend some extra time with the couple before the big day. </p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Hot and muggy AF. <br/> Fortunately, everything will be indoors.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Yes. We offer an
                             open-bar starting with the cocktail hour following the ceremony and dinner will start at approximetly 6:20pm.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>We ask that for the ceremony, all phones remain in pockets/purses and kept on silent for the duration of the ceremony. We have two amazing photographers and a talented videographer to capture the best moments for you.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Hot and muggy AF. <br/> Fortunately, everything will be indoors.</p>
                    </div>
                </div>
        </>
    )
}

export default FaqPage;