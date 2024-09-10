"use strict";

window.onload = function() {
    const loader = document.getElementById("loader")
    const form = document.getElementById('form');
    const fname = document.getElementById('firstname');
    const lname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const confirmemail = document.getElementById('confirmemail');
    const mobile = document.getElementById('mobile');
    const gender = document.getElementById('gender');
    const campus = document.getElementById('campus');
    const niche = document.getElementById('niche');
    const student = document.getElementById('student');
    const registerBtn = document.getElementById('register');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let user_obj = {};

    function notify(elem, txt, attr) {
        const notification = elem.parentElement.querySelector('.notice');
        if (notification) {
            notification.innerHTML = txt;
            if (attr) {
                notification.classList.add(attr);
            } else {
                notification.classList.remove('confirmed');
            }
        } else {
            let notice_board = `<small class="notice${(attr !== undefined || attr !== null) ? ` ${attr}`: ''}">${txt}</small>`;
            elem.insertAdjacentHTML('afterend', `${notice_board}`);
        }
    }



    fname.oninput = function() {
        if (this.value.length < 3 || this.value.length > 20) {
            notify(fname, 'First Name must be between 3 and 20 characters');
            delete user_obj.name;
        } else {
            notify(this, 'Good!', "confirmed");
            if (lname.value.length >= 3 && lname.value.length <= 20) {
                user_obj.name = `${this.value.trim()} ${lname.value.trim()}`;
            } else {
                delete user_obj.name;
            }
        }
    };

    lname.oninput = function() {
        if (this.value.length < 3 || this.value.length > 20) {
            notify(this, 'Last Name must be between 3 and 20 characters');
            delete user_obj.name;
        } else {
            notify(this, 'Good!', "confirmed");
            if (fname.value.length >= 3 && fname.value.length <= 20) {
                user_obj.name = `${fname.value.trim()} ${this.value.trim()}`;
            } else {
                delete user_obj.name;
            }
        }
    };


    email.oninput = (e)=> {
        confirmemail.value = e.target.value
        emailRegex.test(e.target.value)? notify(e.target, 'good!', "confirmed"): notify(e.target, 'Enter a valid email');
        if (confirmemail.value === email.value) {
            notify(confirmemail, 'Email matched', "confirmed");
            user_obj.email = confirmemail.value;
        }
    }

    confirmemail.oninput = (e)=> {
        const notification = confirmemail.parentElement.querySelector('.notice');
        if (notification) {
            notification.remove();
        }
        if (confirmemail.value !== email.value) {
            notify(confirmemail, 'Email did not match');
        } else {
            notify(confirmemail, 'Email matched', "confirmed");
            user_obj.email = confirmemail.value;
        }
    }

    mobile.oninput = function() {
        if (this.value.length < 7 || this.value.length > 14) {
            notify(this, 'Phone Number must be between 7 and 14 characters');
        } else if (this.value.indexOf("+") == -1 || this.value.indexOf("+") !== 0) {
            notify(this, 'indicate your country code');
        } else {
            notify(this, 'Good!', "confirmed");
            user_obj.number = this.value.trim();
        }
    };

    gender.addEventListener('change', function() {
        if (this.value === '') {
            notify(this, 'Please select a gender');
        } else {
            notify(this, 'Good!', "confirmed");
            user_obj.gender = this.value;
        }
    });

    campus.addEventListener('change',
        function() {
            if (this.value === '') {
                notify(this, 'Please select your campus');
            } else {
                notify(this, 'Good!', "confirmed");
                user_obj.campus = this.value;
            }
        });

    niche.addEventListener('change',
        function() {
            if (this.value === '') {
                notify(this, 'Please select a tech niche');
            } else {
                notify(this, 'Good!', "confirmed");
                user_obj.niche = this.value;
            }
        });

    student.addEventListener('change',
        function() {
            if (this.value === '') {
                notify(this, 'Please select an option for Student of OOU');
            } else {
                notify(this, 'Good!', "confirmed");
                user_obj.student = this.value;
            }
            if (this.value.toLowerCase() === 'yes') {
                campus.parentElement.classList.add('visible')
            } else {
                delete user_obj.campus;
                campus.parentElement.classList.remove('visible')
            }
        });


    const endDate = new Date('2024-09-16T23:59:59');
    if (new Date() > endDate) {
        registerBtn.disabled = true;
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.disabled = true
            if(field === registerBtn){
                notify(field, 'Registration ended, cohort will be starting on the 16th of September 2024.<br> Contact us for more details');
            }else{
notify(field, 'Registration ended');
            }
        });
        return;
    }

    registerBtn.addEventListener('click',
        function(event) {
            
            event.preventDefault();
            if (!fname.value || !lname.value || !email.value || !mobile.value || !gender.value || !niche.value || !student.value) {
                notify(registerBtn, 'Please fill in all fields');
                const firstInvalidField = form.querySelector('[required]:invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                    notify(firstInvalidField, 'This field is required');
                }
            } else {
                if (!(user_obj.name && user_obj.email && user_obj.number && user_obj.gender && user_obj.niche && user_obj.student)) {
                    notify(registerBtn, 'Please ensure all fields are valid');
                    const firstInvalidField = form.querySelector('[required]:invalid');
                    if (firstInvalidField) {
                        firstInvalidField.focus();
                    }
                } else if ((student.value.toLowerCase() === 'yes' && !user_obj.campus)) {
                    notify(registerBtn, 'Please select a campus');
                } else {
                    loader.classList.add('active');

                    notify(this, 'Good!', "confirmed");

                    const requestOptions = {
                        method: "POST",
                        body: JSON.stringify(user_obj),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: "follow"
                    };





                    async function checkEmail() {
                        loader.classList.add('active');
                        console.log(user_obj);

                        await delay(3000);

                        try {
                            const response = await fetch('https://otc-3hlr.onrender.com/');
                            const data = await response.json();

                            loader.classList.remove('active');

                            const exists = data.some((item) => item.email === user_obj.email);
                            if (exists) {
                                alert("You've registered before");
                                window.location.href = "cohortdocs.html";
                            } else {
                                const registrationResponse = await fetch("https://otc-3hlr.onrender.com/", requestOptions);
                                if (!registrationResponse.ok) {
                                    throw new Error("Network response was not ok");
                                }
                                const result = await registrationResponse.json();

                                alert("Registration Successful!, Please check your mail for more informations ");
                                console.log(result);
                                console.log(user_obj)
                                window.location.href = "cohortdocs.html";
                            }
                        } catch (error) {
                            loader.classList.remove('active');
                            console.log(user_obj)
                            console.error(error.message);
                            alert("Error checking email");
                        }
                    }

                    checkEmail();

                    function delay(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                    }


                }
            }
        });




};