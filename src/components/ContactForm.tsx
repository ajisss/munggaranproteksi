import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ accessKey }: { accessKey: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      <input type="hidden" name="subject" value="Pesan baru dari website Munggaran Proteksi" />

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
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-600">
          Pesan berhasil dikirim. Tim kami akan segera menghubungi Anda.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Gagal mengirim pesan. Silakan hubungi kami langsung via WhatsApp.
        </p>
      )}
    </form>
  );
}
