"use client";


import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, Camera, Heart, MessageSquare, Sparkles, Compass, Zap } from "lucide-react";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal = ({ isOpen, onClose }: OnboardingModalProps) => {
  const [step, setStep] = useState<"userType" | "singleFlow" | "coupleFlow">("userType");
  const [userType, setUserType] = useState<"single" | "couple" | null>(null);

  const handleUserTypeSelect = (type: "single" | "couple") => {
    setUserType(type);
    setStep(type === "single" ? "singleFlow" : "coupleFlow");
  };

  const resetFlow = () => {
    setStep("userType");
    setUserType(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === "userType" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome! Let's Get Started
              </DialogTitle>
              <DialogDescription className="text-center text-lg">
                Choose your profile type to begin your journey
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card 
                className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 hover:border-purple-300"
                onClick={() => handleUserTypeSelect("single")}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">I'm Single</CardTitle>
                  <CardDescription>
                    Join as an individual looking to connect and explore
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center">No photo verification required</Badge>
                    <Badge variant="outline" className="w-full justify-center">Quick setup process</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 hover:border-pink-300"
                onClick={() => handleUserTypeSelect("couple")}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">We're a Couple</CardTitle>
                  <CardDescription>
                    Join as a verified couple seeking like-minded connections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center">Photo verification required</Badge>
                    <Badge variant="outline" className="w-full justify-center">Premium verification process</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {step === "singleFlow" && <SingleOnboarding onBack={resetFlow} />}
        {step === "coupleFlow" && <CoupleOnboarding onBack={resetFlow} />}
      </DialogContent>
    </Dialog>
  );
};

const SingleOnboarding = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    orientation: "",
    interests: [] as string[]
  });

  const orientations = ["Straight", "Bi", "Queer", "Prefer not to say"];
  const interests = [
    { id: "friendship", label: "Friendship", icon: Heart },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "srsp", label: "SRSP", icon: Sparkles },
    { id: "exploring", label: "Exploring", icon: Compass },
    { id: "fantasy", label: "Fantasy Talk", icon: Zap }
  ];

  const toggleInterest = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Single Profile Setup
        </DialogTitle>
        <DialogDescription>
          Tell us about yourself to find your perfect connections
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6 mt-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              placeholder="Your first name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password"
            type="password" 
            placeholder="Create a secure password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          />
        </div>

        <div className="space-y-3">
          <Label>Sexual Orientation</Label>
          <div className="grid grid-cols-2 gap-3">
            {orientations.map((orientation) => (
              <Button
                key={orientation}
                variant={formData.orientation === orientation ? "default" : "outline"}
                className={`justify-start ${formData.orientation === orientation ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                onClick={() => setFormData(prev => ({ ...prev, orientation }))}
              >
                {orientation}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Interests (Select all that apply)</Label>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest) => (
              <Button
                key={interest.id}
                variant={formData.interests.includes(interest.id) ? "default" : "outline"}
                className={`justify-start gap-2 ${formData.interests.includes(interest.id) ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                onClick={() => toggleInterest(interest.id)}
              >
                <interest.icon className="w-4 h-4" />
                {interest.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Create Profile
          </Button>
        </div>
      </div>
    </>
  );
};

const CoupleOnboarding = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    partnerA: { name: "", email: "", password: "" },
    partnerB: { name: "", email: "" },
    interests: [] as string[],
    consent: false
  });

  const interests = [
    { id: "swap", label: "Swap", icon: Users },
    { id: "cuckold", label: "Cuckold", icon: Heart },
    { id: "romantic", label: "Romantic Chat", icon: MessageSquare },
    { id: "explore", label: "Explore", icon: Compass }
  ];

  const toggleInterest = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Couple Profile Setup
        </DialogTitle>
        <DialogDescription>
          Create your verified couple profile together
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6 mt-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Partner A Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input 
                placeholder="First name"
                value={formData.partnerA.name}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  partnerA: { ...prev.partnerA, name: e.target.value }
                }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input 
                type="email" 
                placeholder="email@example.com"
                value={formData.partnerA.email}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  partnerA: { ...prev.partnerA, email: e.target.value }
                }))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input 
              type="password" 
              placeholder="Create account password"
              value={formData.partnerA.password}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                partnerA: { ...prev.partnerA, password: e.target.value }
              }))}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Partner B Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input 
                placeholder="First name"
                value={formData.partnerB.name}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  partnerB: { ...prev.partnerB, name: e.target.value }
                }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Email (Optional)</Label>
              <Input 
                type="email" 
                placeholder="email@example.com or leave blank"
                value={formData.partnerB.email}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  partnerB: { ...prev.partnerB, email: e.target.value }
                }))}
              />
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-purple-700">
              <Camera className="w-5 h-5" />
              Verification Photo Required
            </CardTitle>
            <CardDescription>
              Upload a live couple selfie to verify your relationship
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
              Take Couple Selfie
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Label>Shared Interests</Label>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest) => (
              <Button
                key={interest.id}
                variant={formData.interests.includes(interest.id) ? "default" : "outline"}
                className={`justify-start gap-2 ${formData.interests.includes(interest.id) ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                onClick={() => toggleInterest(interest.id)}
              >
                <interest.icon className="w-4 h-4" />
                {interest.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox 
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed">
            We both agree to the platform rules and consent to profile visibility within the community.
          </Label>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            disabled={!formData.consent}
          >
            Create Couple Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default OnboardingModal;
