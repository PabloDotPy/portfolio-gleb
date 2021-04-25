import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [succesMessage, setSuccesMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = 'service_ID';
    const templateID = 'template_ID';
    const userID = "user_9gGj7QekzQ8VA86DT4GZ6";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccesMessage("Form sent successfully!");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }


    return (
        <div id="contact" className="contacts">
            <a name="contacts"></a>
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out form and describe the subject of your email and i'll contact you
            as soon as possible.</p>
                <span className="success-message" >{succesMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with fewer than 20 characters",
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Please enter more information",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone number"
                                    name="phone"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    {...register("phone", {
                                        required: "Please enter your phone number",
                                        minLength: {
                                            value: 9,
                                            message: "Please enter a phone number with at least 9 digits",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    aria-invalid={errors.email ? "true" : "false"}
                                    {...register("email", {
                                        required: "Please provide your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Please enter more information",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    aria-invalid={errors.subject ? "true" : "false"}
                                    {...register("subject", {
                                        required: "You forget to add the subject",
                                        minLength: {
                                            value: 2,
                                            message: "Please enter more information",
                                        },
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION INPUT */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your message here..."
                                    name="description"
                                    aria-invalid={errors.description ? "true" : "false"}
                                    {...register("description", {
                                        required: "Please write your message",
                                        minLength: {
                                            value: 2,
                                            message: "Please enter more information",
                                        },
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">Contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
