---
layout: page
title: Contact Us
permalink: /contact
---

Please get in touch with your own inspiring stories or suggestions. We look forward to hearing from you.

>**Address:**  
Professional Association of Emergency Surgical Officers of Ethiopia  
Filance building  
4th floor, Room No. 47  
Gulele Sub-city, Kebele 05  
Addis Ababa, Ethiopia.  
*We are located on the way to Wenget, just 500m from St. Paul's Hospital Millenium Medical College.*  
**Email:** [contactmelese@gmail.com](mailto:contactmelese@gmail.com)  
**Mobile:** +251912334612, +251922781608

**Or, get in touch using the form below.**
<form class="c-form"
    action="https://formspree.io/ieso.ethiopia@gmail.com"
    method="POST">
    <div>
        <label for="name">Name</label>
        <input id="name" 
                type="text" 
                name="name" 
                placeholder="Your name" />
    </div>
    <div >
        <label for="email">Email</label>
        <input id="email" 
                type="email" 
                name="_replyto" 
                placeholder="Your Email Address" />
    </div>
    <div >
        <label for="subject">Subject</label>
        <select id="subject" 
                type="text" 
                name="_subject"
                class="styled-select">
            <option value="Inspiring story">Inspiring Story</option>
            <option value="Fantastic suggestion">Fantastic suggestion</option>
            <option value="Link to learning material">Link to learning material</option>
            <option value="Can you tell me how to....?">Can you tell me how to....?</option>
            <option value="Something else...">Something else...</option>
        </select>
    </div>
    <div >
        <label for="message">Message</label>
        <textarea id="message" 
                    name="message" 
                    placeholder="Enter a brief message here.">
        </textarea>
    </div>
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="{{ site.baseurl }}/" />
    <div >
        <button class="c-btn" type="submit" 
                >Submit
        </button>
    </div>

</form>
