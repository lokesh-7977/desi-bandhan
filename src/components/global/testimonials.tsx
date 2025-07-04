"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote, Heart } from "lucide-react";
import { useEffect, useState } from "react";

type CarouselApi = {
    scrollNext: () => void;
};

const TestimonialsCarousel = () => {
    const [api, setApi] = useState<CarouselApi | undefined>();

    useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [api]);

    const testimonials = [
        {
            name: "Arjun & Kavya",
            role: "Verified Couple",
            location: "Bangalore, India",
            avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&crop=faces",
            quote: "We've made incredible friends here! The community is so welcoming and respectful. Love how inclusive this platform is.",
            rating: 5,
            gradient: "from-blue-400 to-indigo-400"
        },
        {
            name: "Rahul Kumar",
            role: "Digital Marketing Specialist",
            location: "Delhi, India",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
            quote: "The quality of conversations here is amazing. People are genuine, verified, and looking for real connections.",
            rating: 5,
            gradient: "from-green-400 to-teal-400"
        },
        {
            name: "Anita & Sunita",
            role: "LGBTQ+ Couple",
            location: "Pune, India",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
            quote: "Love how inclusive and safe this community feels. We found couples who share our values and interests effortlessly.",
            rating: 5,
            gradient: "from-purple-400 to-pink-400"
        },
        {
            name: "Vikram Singh",
            role: "Entrepreneur",
            location: "Chennai, India",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
            quote: "The consent-first approach and verification system give me confidence that everyone here is serious about meaningful connections.",
            rating: 5,
            gradient: "from-orange-400 to-red-400"
        },
        {
            name: "Meera & Raj",
            role: "Creative Professionals",
            location: "Hyderabad, India",
            avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces",
            quote: "We've attended amazing events through this platform and built lasting friendships. The community guidelines ensure everyone feels respected.",
            rating: 5,
            gradient: "from-cyan-400 to-blue-400"
        },
        {
            name: "Sana Patel",
            role: "Artist",
            location: "Ahmedabad, India",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces",
            quote: "A wonderful space to meet like-minded people. The platform's focus on respect and safety is truly appreciated.",
            rating: 5,
            gradient: "from-yellow-400 to-pink-400"
        }
    ];

    return (
        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
                        Real Stories, Real Connections
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Hear from our amazing community members across India
                    </p>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 h-full">
                                    <CardContent className="p-6 md:p-8 space-y-6 h-full flex flex-col">
                                        <Quote className="w-8 h-8 text-brand-primary" />
                                        
                                        <p className="text-slate-700 text-base md:text-lg leading-relaxed italic flex-grow">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        
                                        <div className="flex items-center gap-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=667eea&color=fff&size=150`;
                                                    }}
                                                />
                                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                                                    <Heart className="w-2 h-2 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm md:text-base">{testimonial.name}</p>
                                                <p className="text-xs md:text-sm text-slate-600">{testimonial.role}</p>
                                                <p className="text-xs text-slate-500">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </div>
                </Carousel>

                {/* Mobile scroll indicator */}
                <div className="flex justify-center mt-8 md:hidden">
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-slate-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
