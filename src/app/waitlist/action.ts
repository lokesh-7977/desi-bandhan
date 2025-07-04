"use server";

import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache"; 

type FormData = {
  email: string;
  name?: string;
  phone?: string;
  dateOfBirth?: string; 
  city?: string; 
  state?: string; 
};
export async function WaitlistForm(formData: FormData) {
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
        message: existing.email === formData.email
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
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await collection.insertOne(doc);

    if (!result.acknowledged) {
      return { success: false, message: "Failed to add to waitlist." };
    }

    revalidatePath("/");
    return { success: true, message: "You're on the waitlist!" };
  } catch (error) {
    console.error("[WAITLIST_ERROR]", error);
    return { success: false, message: "Something went wrong." };
  }
}
