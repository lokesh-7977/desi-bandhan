
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Star, MessageCircle } from "lucide-react";

const PremiumWallDemo = () => {
  const [showWall, setShowWall] = useState(false);

  const messages = [
    { sender: "Alex", message: "Hey! I loved your profile, we have so much in common!", time: "2:30 PM" },
    { sender: "You", message: "Thank you! I'd love to know more about your interests", time: "2:45 PM" },
    { sender: "Alex", message: "This message would be blurred...", time: "3:00 PM", premium: true }
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Chat with Alex
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${msg.sender === "You" ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-xs ${
                  msg.sender === "You"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-800"
                } ${msg.premium && showWall ? "blur-sm" : ""}`}
              >
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs opacity-70 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}

          {!showWall && (
            <Button 
              onClick={() => setShowWall(true)}
              variant="outline" 
              size="sm"
              className="w-full"
            >
              Simulate Premium Wall
            </Button>
          )}

          {showWall && (
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg" />
              <CardContent className="relative z-10 p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    You've used your 2 free messages
                  </h3>
                  <p className="text-gray-600">
                    Unlock deep conversations now and continue building this connection
                  </p>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Go Premium to Continue
                </Button>

                <p className="text-xs text-gray-500">
                  Join thousands of premium members today
                </p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumWallDemo;