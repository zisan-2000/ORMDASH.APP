// Data.jsx

export const menuItems = [
  { name: "My Feeds", icon: "fas fa-rss", path: "/" },
  { name: "Bundles", icon: "fas fa-layer-group", path: "/templates" },
  { name: "Collections", icon: "fas fa-bookmark", path: "/plans" },
  { name: "Bots & Alerts", icon: "fas fa-bolt", path: "/categories" },
  { name: "Explore", icon: "fas fa-search", path: "/plans" },
];

export const planInfo = {
  plan: "Basic Trial",
  daysLeft: 6,
  feeds: "0 / 15",
};

export const upgradeData = {
  buttonLabel: "Upgrade",
};

import { FaCheckCircle, FaClipboardList, FaCog, FaTasks } from "react-icons/fa"; // React-Icons থেকে ইমপোর্ট করা

export const tasks = [
  { task: "Connect your OpenAI Key", status: "Done", icon: <FaCheckCircle /> },
  { task: "Configure payment gateways", status: "Done", icon: <FaCog /> },
  { task: "Set business details", status: "Done", icon: <FaClipboardList /> },
  { task: "Setup membership plans", status: "Done", icon: <FaTasks /> },
];

//Plan Data.jsx

export const billingOptions = {
  trialPlan: "Basic",
  trialDaysLeft: 6,
  Discount: 17, // 17% discount
  subscriptionLink: "#", // replace with actual subscription link if needed
};

export const planOptions = [
  {
    title: "Basic",
    monthlyPrice: 10,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: false,
  },
  {
    title: "Developer",
    monthlyPrice: 20,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: true,
  },
  {
    title: "Pro",
    monthlyPrice: 100,
    get yearlyPrice() {
      return (this.monthlyPrice * 12).toFixed(2); // Calculate yearly price dynamically
    },
    get monthlySave() {
      return (this.monthlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate monthly save dynamically
    },
    get yearlySave() {
      return (this.yearlyPrice * (billingOptions.Discount / 100)).toFixed(2); // Calculate yearly save dynamically
    },
    switchMonthlyBilling: "Switch to monthly billing",
    switchYearlyBilling: "Switch to yearly billing",
    mostPopular: false,
  },
];
