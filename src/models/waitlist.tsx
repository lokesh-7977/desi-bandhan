import { Schema, model, models, Document, Model } from "mongoose";
import { z } from "zod";

export const waitlistZodSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last name is required").optional(),
    fullName: z.string().min(1, "Full Name is required").optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone is required"),
    dateOfBirth: z.string().optional(),
    city: z.string().min(1, "City is required").optional(),
    state: z.string().min(1, "State is required").optional(),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export type WaitlistType = z.infer<typeof waitlistZodSchema>;

export interface WaitlistDocument extends WaitlistType, Document {}

const waitlistSchema = new Schema<WaitlistDocument>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        fullName: { type: String, required: false },
        dateOfBirth: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"], required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date },
    },
    { timestamps: true }
);

const WaitlistModel: Model<WaitlistDocument> =
    models.Waitlist || model<WaitlistDocument>("Waitlist", waitlistSchema);

export default WaitlistModel;
