import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  contact: z.string().trim().min(5).max(255),
  message: z.string().trim().min(10).max(1000),
});

export const sendContactMail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const fromEmail = "czakonorbert88@gmail.com";
    const subject = `Új kapcsolatfelvétel — ${data.name}`;
    const body = `Név: ${data.name}\nElérhetőség: ${data.contact}\n\nÜzenet:\n${data.message}`;

    const url = new URL("https://api.idopontcenter.hu/Fitness/SendMail");
    url.searchParams.set("name", data.name);
    url.searchParams.set("fromEmail", fromEmail);
    url.searchParams.set("subject", subject);
    url.searchParams.set("body", body);

    try {
      const res = await fetch(url.toString(), { method: "GET" });
      if (!res.ok) {
        return { ok: false as const, error: `Hiba a küldés során (${res.status}).` };
      }
      return { ok: true as const };
    } catch {
      return { ok: false as const, error: "A szolgáltatás jelenleg nem elérhető." };
    }
  });
