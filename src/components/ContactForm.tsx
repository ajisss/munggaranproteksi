import { type FormEvent } from "react";

const TO = "sales@munggaranproteksi.com";

export default function ContactForm({ accessKey: _ }: { accessKey: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;

    const subject = `Pesan dari ${name} - Munggaran Proteksi`;
    const body = `Nama: ${name}\nNo. WhatsApp: ${phone}\nEmail: ${email}\n\nKebutuhan Proyek:\n${message}`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-700">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink-700">
            No. WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-700">
          Kebutuhan Proyek
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Kirim Pesan
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.27 3.13a.75.75 0 011.03-.88l16.5 8.25a.75.75 0 010 1.34L4.3 19.99a.75.75 0 01-1.03-.88L6 12zm0 0h7.5" /></svg>
      </button>
    </form>
  );
}
