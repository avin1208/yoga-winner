import React from "react";

import './footer-right.styles.scss';

const FooterRight = () => {
    return(
        <div className="footer-right">
           <div className="footer-rt">
             <h2 className="right-title">
               About Us
             </h2>
             <p>We are an ambitious company and we are always looking for great people  <br/>
             to join our team from personal trainers, group exercise instructors and   <br/>
             club managers to our front-of-house teams.We are committed to training,   <br/>
             so you will be encouraged to improve your existing skills while    <br/>
             you develop new ones.
             <p>We want to help our members go further, so if you have any suggestions about  <br />
             clubs, classes, personal training sessions or anything else, please come in and  <br />
             talk to one of our team member or if you prefer, drop us a note via our online  <br />
             enquiry forms.
             </p>
             </p>
           </div>
           <div className="payment">
            <img src="https://demo.fieldthemes.com/ps_winner/home2/modules/fieldstaticfooter/images/payment_footer.png" alt="" />
           </div>
        </div>
    );
};

export default FooterRight;