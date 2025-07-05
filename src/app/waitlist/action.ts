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

      const email = formData.email.trim().toLowerCase(); // Normalize email case
      const phone = formData.phone?.trim();

      // 🔍 Step 1: Check if email already exists (case-insensitive)
      const emailExists = await collection.findOne({ 
        email: { $regex: new RegExp(`^${email}$`, 'i') }
      });

      if (emailExists) {
        throw new Error("This email is already on the waitlist.");
      }

      // 🔍 Step 2 (Optional): Check if phone exists, only if provided
      if (phone) {
        const phoneExists = await collection.findOne({ phone });
        if (phoneExists) {
          throw new Error("This phone number is already on the waitlist.");
        }
      }

      // 📝 Step 3: Normalize and insert
      const trimmedName = formData.name?.trim() || "";
      const [firstName = null, lastName = null] = trimmedName
        ? trimmedName.split(" ")
        : [];

      const doc = {
        firstName,
        lastName,
        fullName: trimmedName || null,
        email, // Already normalized above
        phone: phone || null,
        dateOfBirth: formData.dateOfBirth || null,
        city: formData.city?.trim() || null,
        state: formData.state?.trim() || null,
        gender: formData.gender?.trim() || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Try to insert with duplicate key error handling
      const result = await collection.insertOne(doc);

      if (!result.acknowledged) {
        throw new Error("Failed to add to waitlist.");
      }

      revalidatePath("/");
      return { success: true, message: "You're on the waitlist!" };
      
    } catch (error) {
      console.error("WaitlistForm error:", error);
      
      // Handle MongoDB duplicate key errors
      if (typeof error === "object" && error !== null && "code" in error && (error as any).code === 11000) {
        return {
          success: false,
          message: "This email is already on the waitlist.",
        };
      }
      
      // Handle custom thrown errors
      if (error instanceof Error && error.message.includes("already on the waitlist")) {
        return {
          success: false,
          message: error.message,
        };
      }
      
      return { 
        success: false, 
        message: "Something went wrong. Please try again." 
      };
    }
  });