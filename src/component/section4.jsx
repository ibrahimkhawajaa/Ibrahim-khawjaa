import Image from "next/image";
import Github from './Img/github.png'
export default function section4() {
  return (
    <div class="min-h-screen p-7   flex items-center justify-center section-4">
      <div class="container max-w-screen-lg mx-auto ">
        <div>
          <div class="form-bg rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class=" grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600 grid items-center text-Grotesk p-2 gap-6 flex flex-col">
                <div>
                  <p className="text-2xl">Email</p>
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    title="Send me an email"
                    className="text-normal underline sm:text-base"
                  >
                    ibrahimmkhawajaa@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-2xl"> Phone Number.</p>
                  <span
                    class="text-normal underline sm:text-base"
                    title="Give me a call"
                  >
                    +92 325 9330819
                  </span>
                </div>
                <div>
                  <p className="text-2xl">Location.</p>
                  <span class="text-normal underline sm:text-base">
                    Lahore, Pakistan
                  </span>
                </div>
                <div>
                  <p className="text-2xl">Social's.</p>
                  <a href="https://github.com/ibrahimkhawajaa" target="_blank">
             <Image src={Github}/>
                  </a>
                </div>
              </div>

              <div class="lg:col-span-2 pt-10">
                <h1 className="text-black text-3xl text-Grotesk text-gray-600 ">
                  Contact me
                </h1>
                <form   action="https://formspree.io/f/myyqnbza"
            method="POST"
            id="contact-form"
            class="form-horizontal"
            role="form">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input
                        type="text"
                        name="Name"
                        id="full_name"
                        class="outline-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        placeholder="Your Name*"
                        required
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="Email"
                        id="email"
                        class="outline-gray-400 h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      <input
                        type="Message"
                        name="message"
                        id="address"
                        class="text-Nenu h-56 w-4/5 border mt-1 rounded outline-gray-400 pb-[160px] px-4 w-full bg-gray-50 text-black"
                        placeholder="Message"
                        required
                      />
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button  type="submit" value="Send" class="bg-[#90EE20]  hover: text-white font-bold py-2 px-4 rounded-full">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="text-normal underline text-Grotesk text-gray-600" id="end">
          &copy; 2023
           All rights reserved.
        </div>
      </div>
    </div>
  );
}
