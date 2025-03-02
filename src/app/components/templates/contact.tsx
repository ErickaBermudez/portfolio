import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || ""
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
          style={{ color: "#FFE6C9" }}
          aria-hidden="true"
        >
          <path
            d="M0,0 H1200 V20
               C1300,200 1000,20 900,100
               C800,180 700,0 600,80
               C500,160 400,20 300,100
               C200,180 100,20 0,100
               Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-10 px-10 lg:px-36 min-h-[80vh]">
        <div className="flex col-span-2 lg:col-span-1 flex-col items-center justify-center">
          <h1 className="text-4xl font-bold relative z-10">
            Let&apos;s Connect!
          </h1>
          <div
            className="w-48 h-6 -mt-5 -ml-6"
            style={{ backgroundColor: "#FFE6C9" }}
          />
          <div className="mt-8 space-y-4">
            <p className="text-lg">
              Excited to chat? Whether you have a project in mind, want to talk
              code, or simply want to connect, I&apos;d love to hear from you!
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <a
                href="https://github.com/ErickaBermudez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/ericka-bermudez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-linkedin-plain text-3xl hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 col-span-2 lg:col-span-1 items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFE6C9] focus:ring focus:ring-[#FFE6C9] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFE6C9] focus:ring focus:ring-[#FFE6C9] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFE6C9] focus:ring focus:ring-[#FFE6C9] focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-[#FFE6C9] hover:bg-[#ffd7a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFE6C9] transition-colors duration-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
