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
                        <p>laoreet sit amet cursus sit?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>diam sollicitudin tempor?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>morbi enim nunc faucibus a pellentesque sit amet porttitor eget?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>facilisis leo vel fringilla est ullamcorper?</p>
                    </div>
                
                    <div className="centered-left">
                        <h3>Question</h3>
                        <p>odio pellentesque diam volutpat commodo?</p>
                    </div>
                </div>



                <div className="container-answer">

                    <div className="centered">
                        <h3>Answer</h3>
                        <p>I'm baby gochujang DIY tousled, brunch next level unicorn literally tattooed meh squid vexillologist.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Jean shorts cred snackwave kombucha.</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Prism messenger bag fingerstache butcher snackwave. </p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>TBD</p>
                    </div>
                    <div className="centered">
                        <h3>Answer</h3>
                        <p>Brooklyn iPhone.</p>
                    </div>
                </div>
        </>
    )
}

export default FaqPage;