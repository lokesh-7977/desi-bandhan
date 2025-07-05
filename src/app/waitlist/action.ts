"use server";

import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

const waitlistSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  gender: z.string().optional(),
});

export const WaitlistForm = createServerAction()
  .input(waitlistSchema)
  .handler(async ({ input: formData }) => {
    try {
      const client = await clientPromise;
      const db = client.db("desi");
      const collection = db.collection("waitlist");

      const existing = await collection.findOne({
        $or: [
          { email: formData.email },
          ...(formData.phone ? [{ phone: formData.phone }] : []),
        ],
      });

      if (existing) {
        return {
          success: false,
          message:
            existing.email === formData.email
              ? "Email already exists."
              : "Phone number already exists.",
        };
      }

      const doc = {
        firstName: formData.name?.split(" ")[0] ?? null,
        lastName: formData.name?.split(" ")[1] ?? null,
        fullName: formData.name ?? null,
        email: formData.email,
        phone: formData.phone ?? null,
        dateOfBirth: formData.dateOfBirth ?? null,
        city: formData.city ?? null,
        state: formData.state ?? null,
        gender: formData.gender ?? null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await collection.insertOne(doc);

      if (!result.acknowledged) {
        throw new Error("Failed to add to waitlist.");
      }

      revalidatePath("/");
      return { success: true, message: "You're on the waitlist!" };
    } catch {
      return { success: false, message: "Something went wrong." };
    }
  });