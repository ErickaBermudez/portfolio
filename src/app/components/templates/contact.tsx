import Image from "next/image";
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
    <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
      <div>
        <h2 className="m-0 flex items-center gap-2 font-display font-extrabold text-[clamp(30px,4.5vw,40px)]">
          Let&apos;s connect!{" "}
          <Image
            src="/icons/contact.png"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="inline-block w-[0.85em] h-[0.85em]"
          />
        </h2>
        <p className="mt-[18px] mb-0 text-[17px] leading-[1.7] text-muted max-w-[420px]">
          Excited to chat? Whether you have a project in mind, want to talk
          code, or simply want to connect, I&apos;d love to hear from you!
        </p>

        <div className="mt-6 max-w-[420px] bg-sage border-2 border-ink rounded-2xl px-6 py-5 shadow-[4px_4px_0_var(--ink)] rotate-1 hover:rotate-0 transition-transform">
          <p className="m-0 mb-2 flex items-center gap-2 font-display font-extrabold text-[17px] text-chip-ink">
            <span aria-hidden="true">🐾</span> Run a shelter or nonprofit?
          </p>
          <p className="m-0 text-[15px] leading-relaxed text-chip-ink">
            If you&apos;re an animal shelter or a mission-driven nonprofit —
            especially anything animal-related — and you need a hand with
            tech, please reach out. I&apos;ll help for <strong>free</strong>.{" "}
            💛
          </p>
        </div>

        <div className="flex gap-3 mt-7 flex-wrap">
          <a
            href="https://github.com/ErickaBermudez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink text-[15px] font-extrabold no-underline bg-card border-2 border-ink rounded-full px-5 py-2.5 shadow-[3px_3px_0_var(--peach)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--peach)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ericka-bermudez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink text-[15px] font-extrabold no-underline bg-card border-2 border-ink rounded-full px-5 py-2.5 shadow-[3px_3px_0_var(--rose)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--rose)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-card border-2 border-ink rounded-2xl p-7 shadow-[6px_6px_0_var(--rose)] -rotate-1 hover:rotate-0 transition-transform"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-extrabold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-input-bg border-2 border-ink rounded-[10px] px-3.5 py-3 text-ink text-base focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-extrabold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-input-bg border-2 border-ink rounded-[10px] px-3.5 py-3 text-ink text-base focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-extrabold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="bg-input-bg border-2 border-ink rounded-[10px] px-3.5 py-3 text-ink text-base resize-y focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="self-start bg-accent text-accent-ink font-extrabold text-[15px] border-2 border-ink rounded-full px-[26px] py-3 shadow-[3px_3px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--ink)] transition-transform disabled:opacity-60 disabled:pointer-events-none focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-[3px]"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>

        {submitSuccess && (
          <p
            role="status"
            className="m-0 text-[15px] font-extrabold text-ink bg-sage border-2 border-ink rounded-[10px] px-3.5 py-2.5"
          >
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
