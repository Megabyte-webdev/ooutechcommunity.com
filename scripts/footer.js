var html = `
        <div>
    	<div class="col">    
            <img class="logo" src="./images/logo1.png" alt="logo">
		</div>
        <div class="col">
			<h2>Get Involved</h2>
			<p>Partner With Us</p>
			<p>Make A Donation</p>
			<p>Summit</p>
			<a href="cohort.html">Cohorts</a>
		</div>
		<div class="col">
<h2>About us</h2>
			<p><a href="#team"  >Meet the team</a></p>
			<p>FAQ</p>
			<p>Privacy Policy</p>
			<p>Terms and Condition</p>
		</div>
		<div class="col">
			<h2>Community</h2>
			<p>Upcoming Events</p>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLScTMCtHuyuJcBoiOwtcP8i8CkXIew-wSpqU-q6kFLa7fgiIqw/viewform"" ><p>Join Our Community</p></a>
			<p>Follow Us on Social Media</p>
            <div class="contact">
			<a href="https://twitter.com/OOU_Tech" ><i>t</i> twitter</a>
			<a href="https://www.linkedin.com/company/oou-tech-community/?viewAsMember=true"><i>in</i> linkedin</a>
		</div>
		</div>
        </div>
        <div class="foot-note">
            <small>Afo-webdev &copy;${new Date().getFullYear()} All rights reserved</small>
            <small>Terms & Conditions</small>
            <small>Privacy Policy</small>
        </div>`


window.addEventListener("load", function() {
    var main=document.querySelector("main"),
        body =document.body || document.documentElement,
        footer=document.querySelector("#footer");
        footer.innerHTML=html;

})