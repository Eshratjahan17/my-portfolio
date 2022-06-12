import emailjs from "@emailjs/browser";
import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const handleSubmit=event=>{
     
    event.preventDefault();
    
      emailjs
        .sendForm(
          "service_t53it4e",
          "template_j9y7r18",
          form.current,
          "vUAUxH3l08MGR3Cde"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent");
            event.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
  }
  return (
    <div >
      <div id="contact" className="bg-primary">
        <div>
          <h1 class="text-5xl text-white font-bold text-center pt-5 ">
            Get In Touch
          </h1>
          <div class="divider w-1/4 mx-auto white h-2 bg-white "></div>
        </div>
        <div class="hero min-h-screen bg-primary">
          <div class="hero-content flex-col lg:flex-row">
            <div class="text-center lg:text-left text-white mr-40">
              <h1 class="text-5xl font-bold mb-9 text-white">Contact </h1>
              <p class="flex mt-2 ">
                <MailIcon className="w-6 h-6 mr-2 "></MailIcon>
                eshratjahan701@gmail.com
              </p>
              <p class="flex mt-2 ">
                <PhoneIcon className="w-6 h-6 mr-2 "></PhoneIcon> +8801759460842
              </p>
              <p class="flex mt-2 ">
                <LocationMarkerIcon className="w-6 h-6 mr-2 "></LocationMarkerIcon>
                Sylhet,Bangladesh
              </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form ref={form} onSubmit={handleSubmit}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      class="input input-bordered"
                      defaultValue=" "
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      class="input input-bordered"
                      defaultValue=" "
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Message</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Message"
                      name="message"
                      class="input input-bordered "
                      rows="50"
                      cols="500"
                      defaultValue=" "
                    />
                  </div>
                  <div class="form-control mt-6">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn btn-primary w-1/2"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
