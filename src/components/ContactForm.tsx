import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { z } from "zod";
import { sendContactMail } from "@/lib/contact.functions";



const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Add meg a neved (legalább 2 karakter)." })
    .max(100, { message: "A név legfeljebb 100 karakter lehet." }),
  contact: z
    .string()
    .trim()
    .min(5, { message: "Add meg az e-mail címed vagy telefonszámod." })
    .max(255, { message: "Legfeljebb 255 karakter lehet." })
    .refine(
      (v) => /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(v) || /^[+()\d][\d\s\-()/]{5,}$/.test(v),
      { message: "Érvényes e-mail címet vagy telefonszámot adj meg." },
    ),
  message: z
    .string()
    .trim()
    .min(10, { message: "Írj néhány szót a céljaidról (legalább 10 karakter)." })
    .max(1000, { message: "Az üzenet legfeljebb 1000 karakter lehet." }),
  captcha: z.string().trim().min(1, { message: "Válaszolj az ellenőrző kérdésre." }),
  consent: z.literal(true, { message: "Az adatkezelés elfogadása kötelező." }),
});

type Errors = Partial<Record<"name" | "contact" | "message" | "captcha" | "consent", string>>;

const inputClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary";

export function ContactForm() {
  const send = useServerFn(sendContactMail);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    contact: "",
    message: "",
    captcha: "",
    consent: false,
  });

  const [[a, b], setPair] = useState<[number, number]>([3, 4]);
  useEffect(() => {
    setPair([Math.floor(Math.random() * 8) + 2, Math.floor(Math.random() * 8) + 2]);
  }, []);

  function set<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSendError(null);
    const result = schema.safeParse(values);
    const next: Errors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
    }
    if (!next.captcha && Number(values.captcha.trim()) !== a + b) {
      next.captcha = "Helytelen válasz — próbáld újra.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await send({
        data: {
          name: values.name.trim(),
          contact: values.contact.trim(),
          message: values.message.trim(),
        },
      });
      if (res.ok) {
        setSent(true);
        setValues({ name: "", contact: "", message: "", captcha: "", consent: false });
      } else {
        setSendError(res.error ?? "Nem sikerült elküldeni az üzenetet.");
      }
    } catch {
      setSendError("Nem sikerült elküldeni az üzenetet. Próbáld újra később.");
    } finally {
      setSending(false);
    }
  }


  const requiredFieldsFilled =
    values.name.trim().length > 0 &&
    values.contact.trim().length > 0 &&
    values.message.trim().length > 0 &&
    values.captcha.trim().length > 0 &&
    values.consent;

  return (

    <form className="space-y-5 rounded-sm border border-border bg-card p-8" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="text-sm text-muted-foreground">
          Neved <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          value={values.name}
          maxLength={100}
          onChange={(e) => set("name", e.target.value)}
          aria-invalid={!!errors.name}
          className={inputClass}
        />
        {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm text-muted-foreground">
          E-mail vagy telefon <span className="text-primary">*</span>
        </label>
        <input
          id="contact"
          value={values.contact}
          maxLength={255}
          onChange={(e) => set("contact", e.target.value)}
          aria-invalid={!!errors.contact}
          className={inputClass}
        />
        {errors.contact && <p className="mt-1.5 text-xs text-destructive">{errors.contact}</p>}
      </div>

      <div>
        <label htmlFor="msg" className="text-sm text-muted-foreground">
          Célod, tapasztalatod <span className="text-primary">*</span>
        </label>
        <textarea
          id="msg"
          rows={5}
          value={values.message}
          maxLength={1000}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClass}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="captcha" className="text-sm text-muted-foreground">
          Ember vagyok: mennyi {a} + {b}? <span className="text-primary">*</span>
        </label>
        <input
          id="captcha"
          inputMode="numeric"
          value={values.captcha}
          maxLength={4}
          onChange={(e) => set("captcha", e.target.value)}
          aria-invalid={!!errors.captcha}
          className={inputClass}
        />
        {errors.captcha && <p className="mt-1.5 text-xs text-destructive">{errors.captcha}</p>}
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            id="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
          />
          <span>
            Elolvastam és elfogadom az{" "}
            <Link to="/adatvedelem" className="text-primary underline underline-offset-4">
              adatvédelmi nyilatkozatot
            </Link>
            , és hozzájárulok az adataim kapcsolatfelvétel céljából történő kezeléséhez.{" "}
            <span className="text-primary">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-xs text-destructive">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {sending ? "Küldés…" : "Üzenet küldése"}
      </button>

      {sendError && <p className="text-sm text-destructive">{sendError}</p>}

      {sent && (
        <p className="text-sm text-primary">Köszönöm az üzenetet! Hamarosan keresni foglak.</p>
      )}

    </form>
  );
}
