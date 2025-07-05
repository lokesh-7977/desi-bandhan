"use server";

import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createServerAction } from "zsa";

const waitlistSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  gender: z.string().min(1, "Gender is required"),
  lookingFor: z.string().min(1, "Looking for is required"),
});

export const WaitlistForm = createServerAction()
  .input(waitlistSchema)
  .handler(async ({ input: formData }) => {
    try {
      const client = await clientPromise;
      const db = client.db("desi-bandhan");
      const collection = db.collection("waitlist");

      const email = formData.email.trim().toLowerCase();

      // Check if email already exists
      const emailExists = await collection.findOne({ email });

      if (emailExists) {
        return {
          success: false,
          message: "This email is already on the waitlist.",
        };
      }

      const trimmedName = formData.name.trim();
      const [firstName = "", ...lastNameParts] = trimmedName.split(" ");
      const lastName = lastNameParts.join(" ");

      const doc = {
        firstName: firstName || null,
        lastName: lastName || null,
        fullName: trimmedName,
        email,
        dateOfBirth: formData.dateOfBirth.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        gender: formData.gender.trim(),
        lookingFor: formData.lookingFor.trim(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await collection.insertOne(doc);

      if (!result.acknowledged) {
        return {
          success: false,
          message: "Failed to add to waitlist. Please try again later.",
        };
      }

      revalidatePath("/");
      return {
        success: true,
        message: "You're on the waitlist!",
      };

    } catch (error) {
      
      // Handle MongoDB duplicate key error
      if (typeof error === "object" && error !== null && "code" in error && (error as { code?: number }).code === 11000) {
        return {
          success: false,
          message: "This email is already on the waitlist.",
        };
      }

      if (error instanceof Error) {
        return {
          success: false,
          message: error.message || "Something went wrong. Please try again.",
        };
      }
      
      return {
        success: false,
        message: "Unexpected error. Please try again.",
      };
    }
  });