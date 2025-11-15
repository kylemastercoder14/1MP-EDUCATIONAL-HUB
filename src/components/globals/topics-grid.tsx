/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { topics, getAllCategories } from "@/lib/topics";
import {
  Clock,
  BookOpen,
  ArrowRight,
  Rocket,
  Compass,
  Package,
  Truck,
  Megaphone,
  BarChart,
  FileText,
  Wrench,
  Settings,
  Smile,
  ShieldCheckIcon,
} from "lucide-react";
import { JSX, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const tabs = [
  {
    title: "Courses",
    description: "Learn about increasing sales.",
    icon: "/tabs/01.svg",
    iconDark: "/tabs/01-dark.svg",
  },
  {
    title: "Product Categories",
    description:
      "Browse through all our categories.",
    icon: "/tabs/02.svg",
    iconDark: "/tabs/02-dark.svg",
  },
  {
    title: "Policy Center",
    description: "Check the latest policies and news.",
    icon: "/tabs/03.svg",
    iconDark: "/tabs/03-dark.svg",
  },
];

const rawProductCategories = [
  {
    category: "Arts, Crafts & Sewing",
    subCategory:
      "Kinitting & Crochet, Gift Wrapping, Beading & Jewelry Making",
  },
  {
    category: "Automotive",
    subCategory:
      "Covers Mats & Cushions, Car Stickers, Motorcycle Parts, Tires & Wheels",
  },
  {
    category: "Beauty & Health",
    subCategory:
      "Hair Care, Makeup, Sanitary, Lenses, Oral Care, Foot, Hand & Nail Care, Personal Care",
  },
  {
    category: "Beauty & Personal Care Services",
    subCategory:
      "Hair Salons, Manicure & Pedicure, Tattoo & Piercing Services, Barber Shop, Makeup Artists & Beauty Services",
  },
  {
    category: "Bikes & Automotive",
    subCategory:
      "Motorcycle Parts & Accessories, Car Parts & Accessories, Car Care & Maintenance, Bike Accessories, Bike Parts, Riding Gear, Automotive Tools & Equipments, Navigations & Electronics",
  },
  {
    category: "Consumer Electronics",
    subCategory:
      "Graphics Cards, Gaming Keyboards, Iphone, Gaming Monitors, Gaming Phone, Android Phone",
  },
  {
    category: "Creative Services",
    subCategory: "Graphic & Web Design, Editing Services",
  },
  {
    category: "E-Learning Services",
    subCategory:
      "Sign Language Classes, Technical Writing, Review Classes, Video Editing, Graphic Design, Web Development, Content Writing, Motivational Speaker, Operating System Installer, Online Tutoring, English Proficiency, Parenting Classes, Gardening & Urban Farming, Project Management, Financial Literacy & Budgeting, DIY Crafts & Handicrafts",
  },
  {
    category: "Education & Training Services",
    subCategory:
      "Art & Music Lessons, Online Courses, Tutoring Services, Dance & Yoga Classes, Driving School",
  },
  {
    category: "Event Services",
    subCategory:
      "Catering Services, Event Planning & Coordination, DJ & Music Services, Photography & Videography, Floral Designs & Arrangements",
  },
  {
    category: "Fabrication Services",
    subCategory: "Moulds, Steel, Aluminum, Casting Services",
  },
  {
    category: "Fashion & Apparel",
    subCategory:
      "Business & Casual Attire, Jumpsuits, Skirts & Shorts, Dresses, Blouses & Shirts, Pants, Cosplay Costume, Denim Apparel, Coat & Jacket, Swimwear, Polos, Sweaters, Ukay-ukay, Footwear, Tops & Camis, Wedding Wear, Shirt, Formal Attire",
  },
  {
    category: "Food & Beverages",
    subCategory:
      "Dairy & Eggs, Pastries, Grocery Staples, Salad, Carinderia, Condiments & Sauces, Street Foods, Beverages, Meat & Seafood, International Food, Pasta, Foods & Supplements, Frozen Foods",
  },
  {
    category: "General Merchandise",
    subCategory:
      "Household & Home Essentials, Personal Care & Wellness, Groceries & Pantry, Office & School Supplies, Clothing & Accessories, Electronics & Accessories, Toys, Games & Hobbies, Pets & Animals, Tools & Hardwares, Outdoor & Sports",
  },
  {
    category: "Health & Wellness Services",
    subCategory:
      "Chiropractic Services, Dental Services, Medical Services, Massage Therapy, Fitness Training, Mental Health & Therapy",
  },
  {
    category: "Home Services",
    subCategory:
      "Cleaning Services, Pest Control, Automotive, Roofing Services, Steel Fabrication, Upholstery, Plumbing, Electrical, Heating, Ventilation, Air Conditioning (HVAC), Home Renovation",
  },
  {
    category: "Home Supplies",
    subCategory:
      "Cleaning Supplies, Kitchen Essentials, Home Organization, Furniture & Decor, Bedding & Linens, Home Improvement, Gardening & Outdoor, Bath, Home Decor, Lighting & Accessories, Rugs & Mats, Irons & Steamers, Travel & To-go Drinkware, Cookware, Bakeware, Air Quality, Closet & Laundry Storage, Glassware & Drinkware, Blankets & Throws",
  },
  {
    category: "Jewelry & Accessories",
    subCategory:
      "Jewelry Boxes & Organizers, Personalized Products, Watches, Glasses, Hats & Caps, Belts, Ties, Wallets, Keyrings & Keychains",
  },
  {
    category: "Pet Supplies",
    subCategory:
      "Pet Toys, Food & Treats, Pet Apparel & Accessories, Grooming Supplies",
  },
  {
    category: "Professional Services",
    subCategory:
      "IT Services, Financial Planning & Advice, Legal Services, Accounting & Bookkeeping",
  },
  {
    category: "Real Estate Services",
    subCategory: "Commercial Rentals, Vacation Rentals, Brokers",
  },
  {
    category: "Rubber & Plastics",
    subCategory: "PEEK, Silicone Rubber, PP, Plastic Rods",
  },
  {
    category: "Sports & Outdoor",
    subCategory:
      "Yoga & Fitness, Game Room Accessories, Swimming, Diving & Water Sports, Activewear, Bags & Backpacks, Camping & Hiking",
  },
  {
    category: "Technology & Programming",
    subCategory:
      "Penetration Testing, CompTIA A+, Network+, Security+ Prep, Logic Building, Ethical Hacking, Object-Oriented Programming, Database Management, Network Security, Data Structures & Algorithm, IT Support & Troubleshooting, Mobile App Development, Game Development",
  },
  {
    category: "Tools & Hardwares",
    subCategory: "Paints & Coatings, Power Tools, Safety & Security, Hand Tools",
  },
  {
    category: "Toys & Games",
    subCategory:
      "Party Supplies, Building Toys, Electronic Toys, Learning & Education, Stuffed Toys",
  },
  {
    category: "Transportation & Logistic Services",
    subCategory:
      "Motorcycle Courier Service, GPS Monitoring Services, Airport Transfer Services, Car Rentals & Leasing, Courier & Delivery Services, LTO Assistance, Moving Service (Lipat Bahay), Pabili/Pasabuy Services, Vehicle Towing Services, Car Insurance Processing, Express Document Delivery, Bulky Item Delivery",
  },
  {
    category: "Utencils Supplies",
    subCategory:
      "Dishwashing Tools, Condiment Dispensers, Spoons, Forks & Knives, Cooking Pots & Steamers, Lunch & Bento Boxes, Peelers, Graters & Mashers, Frying Pans & Sauce Pans, Serving Utensils, Cooking Utensils, Plastic & Glass Containers, Measuring Cups, Cutlery Sets",
  },
];

const productCategoryDescriptions: Record<string, string> = {
  "Arts, Crafts & Sewing":
    "Materials and tools for DIY projects, from knitting to jewelry making and creative gift wrapping.",
  Automotive:
    "Accessories, protection, and parts to maintain and personalize cars and motorcycles.",
  "Beauty & Health":
    "Everyday essentials for hair, skin, oral care, and overall personal wellness.",
  "Beauty & Personal Care Services":
    "Professional beauty services for hair, nails, makeup, and body art.",
  "Bikes & Automotive":
    "Specialized parts, accessories, and maintenance gear for bikes, cars, and riders.",
  "Consumer Electronics":
    "Gadgets and accessories for gaming, communication, and everyday digital life.",
  "Creative Services":
    "Professional design and editing services for branding, content, and media.",
  "E-Learning Services":
    "Online classes and digital skills training across academics, tech, and lifestyle topics.",
  "Education & Training Services":
    "Structured lessons, tutoring, and training for students, professionals, and hobbyists.",
  "Event Services":
    "End-to-end services for planning, decorating, catering, and documenting events.",
  "Fabrication Services":
    "Custom metal and material fabrication for molds, structures, and industrial needs.",
  "Fashion & Apparel":
    "Clothing and footwear for casual, formal, and special occasions, including cosplay.",
  "Food & Beverages":
    "Ready-to-eat meals, snacks, drinks, and grocery staples for everyday cravings.",
  "General Merchandise":
    "All-around essentials from home and office supplies to toys, tools, and more.",
  "Health & Wellness Services":
    "Professional care and therapies supporting physical fitness and mental well-being.",
  "Home Services":
    "On-site services for cleaning, repairs, renovation, and home systems maintenance.",
  "Home Supplies":
    "Household essentials, decor, and tools to organize, clean, and improve your home.",
  "Jewelry & Accessories":
    "Stylish add-ons like watches, eyewear, hats, and organizers to complete any look.",
  "Pet Supplies":
    "Food, toys, grooming items, and accessories to keep pets healthy and happy.",
  "Professional Services":
    "Specialized business support in IT, finance, law, and accounting.",
  "Real Estate Services":
    "Assistance with finding, renting, or managing commercial and vacation properties.",
  "Rubber & Plastics":
    "Industrial-grade rubber and plastic materials for manufacturing and custom builds.",
  "Sports & Outdoor":
    "Gear, apparel, and accessories for fitness, sports, and outdoor adventures.",
  "Technology & Programming":
    "Training and services in IT, cybersecurity, programming, and software development.",
  "Tools & Hardwares":
    "Power tools, hand tools, and safety gear for construction, repairs, and DIY work.",
  "Toys & Games":
    "Fun and educational toys, party items, and games for kids and families.",
  "Transportation & Logistic Services":
    "Logistics, delivery, and transport solutions for documents, parcels, and people.",
  "Utencils Supplies":
    "Kitchen and dining utensils for cooking, serving, and organizing food and drinks.",
};

const productCategories = rawProductCategories.map((item) => ({
  category: item.category,
  description: productCategoryDescriptions[item.category] ?? "",
  subcategories: item.subCategory.split(",").map((s) => s.trim()),
}));

export default function TopicsGrid() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this number based on your grid layout
  const categories = ["All", ...getAllCategories()];
  const paginationRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredTopics =
    selectedCategory === "All"
      ? topics
      : topics.filter((topic) => topic.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredTopics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTopics = filteredTopics.slice(startIndex, endIndex);

  const topicsLeft = [
    "How to register and verify your seller account",
    "Creating attractive product listings",
    "Understanding the order flow",
    "Creating store coupons and product discounts",
    "Conversion rate and traffic sources",
  ];

  const topicsRight = [
    "How to register and verify your rider account",
    "Requirements needed for onboarding",
    "Understanding the delivery flow",
    "Handling customer communications and special delivery instructions",
    "Maximizing commissions",
  ];

  const categoryIcons: Record<string, JSX.Element> = {
    "Getting Started": <Rocket className="size-4 mr-1" />,
    "Product Management": <Package className="size-4 mr-1" />,
    "Order Management": <Truck className="size-4 mr-1" />,
    Marketing: <Megaphone className="size-4 mr-1" />,
    Analytics: <BarChart className="size-4 mr-1" />,
    Policies: <FileText className="size-4 mr-1" />,
    "Advanced Topics": <Wrench className="size-4 mr-1" />,
    "Tools and Resources": <Settings className="size-4 mr-1" />,
    "Success Stories": <Smile className="size-4 mr-1" />,
    Support: <ShieldCheckIcon className="size-4 mr-1" />,
  };

  const handlePageChange = (page: number) => {
    // Save current scroll position relative to the pagination component
    const scrollPosition = window.scrollY;
    const paginationPosition =
      paginationRef.current?.getBoundingClientRect().top || 0;
    const relativePosition = scrollPosition + paginationPosition;

    setCurrentPage(page);

    // After state update, restore scroll position
    setTimeout(() => {
      const newPaginationPosition =
        paginationRef.current?.getBoundingClientRect().top || 0;
      const newScrollPosition = relativePosition - newPaginationPosition;
      window.scrollTo({ top: newScrollPosition });
    }, 0);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 mb-12 grid-cols-1 gap-10">
            <div className="bg-white shadow border rounded-md px-5 py-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  On-demand educational topics
                </h2>
                <a
                  href="/hot-topics"
                  className="text-red-600 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[50%] h-60">
                  <Image
                    src="/featured-topics/2.png"
                    alt="On Demand Educational Topics"
                    fill
                    className="rounded-lg size-full object-cover"
                  />
                </div>
                <ul className="space-y-2 w-[50%] text-sm">
                  {topicsLeft.map((topic, idx) => (
                    <li
                      onClick={() =>
                        router.push(
                          `/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                      key={idx}
                      className={`cursor-pointer px-2 py-1 hover:bg-red-100 hover:text-red-600 rounded`}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white shadow border rounded-md px-5 py-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  A complete guide to delivery rider onboarding
                </h2>
                <a
                  href="/policies"
                  className="text-red-600 font-medium flex text-sm items-center gap-1 hover:underline"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex gap-4">
                <div className="relative w-[50%] h-60">
                  <Image
                    src="/featured-topics/1.png"
                    alt="Delivery Rider Onboarding"
                    fill
                    className="rounded-lg size-full object-cover"
                  />
                </div>
                <ul className="space-y-2 w-[50%] text-sm">
                  {topicsRight.map((topic, idx) => (
                    <li
                      onClick={() =>
                        router.push(
                          `/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                      key={idx}
                      className={`cursor-pointer px-2 py-1 hover:bg-red-100 hover:text-red-600 rounded`}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white mb-12 shadow border rounded-xl grid lg:grid-cols-3 grid-cols-1">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              const isLast = index === tabs.length - 1;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-5 flex items-center gap-3 cursor-pointer transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-tl from-[#800020] to-red-400 text-white"
                        : "bg-white text-black"
                    }
                    ${index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""}
                    ${isLast ? "rounded-tr-xl rounded-br-xl" : ""}
                  `}
                >
                  <div className="relative size-20">
                    <Image
                      src={isActive ? tab.icon : tab.iconDark}
                      alt={tab.title}
                      fill
                      className="size-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                    <p className="font-medium text-sm">{tab.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Filter */}
          {activeIndex === 0 && (
            <Carousel opts={{ align: "center" }} className="w-full px-2">
              <CarouselContent className="flex items-center">
                {categories.map((category) => (
                  <CarouselItem key={category} className="basis-auto">
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1); // Reset to first page when category changes
                      }}
                      className={`whitespace-nowrap rounded-full px-4 py-2 flex items-center gap-1
                        ${
                          selectedCategory === category
                            ? "bg-[#800020] text-white hover:bg-[#600018]"
                            : ""
                        }
                      `}
                    >
                      {categoryIcons[category] ?? (
                        <Compass className="w-4 h-4 mr-1" />
                      )}
                      {category}
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-full border bg-white shadow" />
              <CarouselNext className="rounded-full border bg-white shadow" />
            </Carousel>
          )}
        </motion.div>

        {activeIndex === 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedTopics.map((topic, index) => (
                <motion.div
                  key={topic.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/topic/${topic.slug}`}>
                    <Card className="h-full p-0 hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardContent className="p-0">
                        <div className="h-60 w-full rounded-t-lg relative overflow-hidden">
                          <Image
                            src={topic.image || ""}
                            alt={topic.title}
                            fill
                            className="size-full"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge
                              variant="secondary"
                              className="bg-[#800020] hover:bg-[#800020] text-white border-0 text-xs"
                            >
                              {topic.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-black font-semibold line-clamp-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {topic.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {topic.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {topic.sections.length} sections
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No topics found in this category.
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredTopics.length > itemsPerPage && (
              <div className="mt-8 flex justify-center" ref={paginationRef}>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                          }
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page);
                            }}
                            isActive={page === currentPage}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) {
                            handlePageChange(currentPage + 1);
                          }
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}

        {activeIndex === 1 && (
          <div className="mt-6">
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20%]">Category</TableHead>
                  <TableHead className="w-[40%]">Description</TableHead>
                  <TableHead className="w-[40%]">Sub-categories</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productCategories.map((category) => (
                  <TableRow key={category.category}>
                    <TableCell className="align-top font-semibold text-gray-900">
                      {category.category}
                    </TableCell>
                    <TableCell className="align-top text-gray-700">
                      {category.description}
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.map((sub) => (
                          <Badge
                            key={sub}
                            variant="secondary"
                            className="text-[11px] font-medium bg-gray-100 text-gray-800 border-0"
                          >
                            {sub}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption className="text-xs text-gray-500">
                Product and service categories with brief seller-focused descriptions and their main sub-categories.
              </TableCaption>
            </Table>
          </div>
        )}

        {activeIndex === 2 && (
          <div className="mt-10 flex justify-center">
            <Card className="max-w-xl w-full border-dashed border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="flex items-center justify-center size-12 rounded-full bg-yellow-100 text-yellow-700 mb-1">
                  <FileText className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">Policy & News Center</h3>
                <p className="text-sm text-gray-600">
                  This section is currently under construction. Soon you&apos;ll find updated seller
                  policies, announcements, and important platform news here.
                </p>
                <p className="text-xs text-gray-500">
                  Check back regularly while we prepare detailed guidelines and resources to help you
                  stay compliant and informed.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
