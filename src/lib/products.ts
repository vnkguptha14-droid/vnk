import esp32 from "@/assets/esp32.svg";
import raspberryPi from "@/assets/raspberry-pi.svg";
import gpioPins from "@/assets/gpio-pins.svg";
import securityCamera from "@/assets/security-camera.svg";
import surveillanceSystem from "@/assets/surveillance-system.svg";
import laptopForensics from "@/assets/laptop-forensics.svg";
import embeddedSystem from "@/assets/embedded-system.svg";
import setupBox from "@/assets/setup-box.svg";
import cameraModule from "@/assets/camera-module.svg";
import iotGateway from "@/assets/iot-gateway.svg";
import securityPanel from "@/assets/security-panel.svg";

export type Product = {
  id?: number;
  src: string;
  title: string;
  alt: string;
  points: string[];
  category: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    src: esp32,
    title: "Wireless Control Board",
    alt: "Wireless control board with smart connectivity",
    points: [
      "Smart wireless control board with integrated Wi-Fi and Bluetooth for remote connectivity",
      "Perfect for smart devices, IoT projects, and automated systems",
      "Used in PPE detection systems for reliable connectivity and real-time processing",
      "Powerful dual-core processor with 520 KB memory and 4 MB storage",
      "Low power consumption at 3.3V, Manufactured with premium quality components"
    ],
    category: "Smart Controllers"
  },
  {
    id: 2,
    src: raspberryPi,
    title: "Smart Mini Computer",
    alt: "Smart mini computer for connected applications",
    points: [
      "Compact smart computer designed for surveillance, automation, and connected devices",
      "Perfect for security cameras, smart home systems, and IoT solutions",
      "Easy setup with pre-configured systems ready for immediate deployment",
      "Reliable performance for continuous monitoring and real-time processing",
      "Powerful quad-core processor with flexible memory options (512MB-8GB)",
      "Includes storage options and power adapter for complete installation"
    ],
    category: "Smart Computers"
  },
  {
    id: 3,
    src: gpioPins,
    title: "Smart Connection Port",
    alt: "Smart connection port for device integration",
    points: [
      "Smart connection interface for seamless integration with sensors and devices",
      "Works perfectly with our Wireless Control Board and Smart Mini Computer",
      "Plug-and-play connectivity for cameras, sensors, and external equipment",
      "Essential for building complete security and automation systems",
      "Precise control for real-time monitoring and data collection",
      "Universal compatibility with multiple voltage levels and communication types",
      "Industrial-grade reliability for continuous operation"
    ],
    category: "Connection Interfaces"
  },
  {
    id: 4,
    src: securityCamera,
    title: "Security Camera",
    alt: "Security camera and surveillance hardware",
    points: [
      "We manufacture complete security camera solutions",
      "Assembled with Smart Mini Computer, 5MP OV5647 camera modules",
      "NOIR option available for night vision applications",
      "Includes IR LED boards and bullet-type CCTV housings",
      "Designed for PPE detection, surveillance systems, and 24/7 monitoring",
      "Features motion detection and remote access capabilities",
      "Smart Mini Computer 512MB RAM, 5MP OV5647 Camera Module",
      "15-pin to 22-pin CSI cable, 850nm IR LED Board",
      "CCTV Bullet Housing, 16GB MicroSD Card, 5V 2A Power Adapter"
    ],
    category: "Security Hardware"
  },
  {
    id: 5,
    src: surveillanceSystem,
    title: "Surveillance System",
    alt: "Surveillance camera and monitoring setup",
    points: [
      "We build comprehensive surveillance systems",
      "Integrating multiple security cameras, IoT gateways, and monitoring software",
      "Manufactured using our custom camera modules and Smart Mini Computer-based controllers",
      "Provides real-time video analytics, alert notifications, and remote access",
      "Used in applications like PPE detection and facility security",
      "Up to 16 channels, 1080p resolution, H.265 compression",
      "Smart motion tracking, Mobile apps, Custom firmware"
    ],
    category: "Security Systems"
  },
  {
    id: 6,
    src: laptopForensics,
    title: "Laptop Forensics",
    alt: "Laptop forensic utility and investigation services",
    points: [
      "Our laptop forensic utility is a specialized software tool we develop",
      "Used for digital forensics, data recovery, and evidence collection",
      "Works alongside our hardware products like Wireless Control Board and Smart Mini Computer",
      "Enables comprehensive investigations including PPE detection data analysis",
      "Supports chain of custody management",
      "Supports multiple file systems, Hardware write blockers",
      "MD5/SHA hashing, Timeline analysis, Compatible with Wireless Control Board and Smart Mini Computer"
    ],
    category: "Forensic Tools"
  },
  {
    id: 7,
    src: embeddedSystem,
    title: "Embedded System",
    alt: "Embedded system board and custom electronics",
    points: [
      "We design and manufacture custom embedded systems",
      "Combining our Wireless Control Boards, Smart Mini Computers, and Smart Connection Ports",
      "Optimized for specific applications like PPE detection and surveillance",
      "Used in IoT projects with real-time processing capabilities",
      "Industrial-grade reliability and performance",
      "ARM/Cortex processors, Custom sensors",
      "Industrial temperature range, Real-time OS support, Manufactured components"
    ],
    category: "Embedded Systems"
  },
  {
    id: 8,
    src: setupBox,
    title: "Set Top Box",
    alt: "Hardware set top boxes and installation kits",
    points: [
      "We manufacture pre-configured set top box kits",
      "Including all necessary components for quick deployment",
      "Features Smart Mini Computer-based systems with camera modules",
      "Includes power adapters and installation hardware",
      "Perfect for surveillance setups and embedded applications",
      "Smart Mini Computer, Camera Module, CSI Cable",
      "IR LED Board, Housing, MicroSD Card, Power Adapter",
      "Misc Cables and screws"
    ],
    category: "Installation Kits"
  },
  {
    id: 9,
    src: cameraModule,
    title: "Camera Module",
    alt: "Camera module and imaging hardware",
    points: [
      "We produce high-quality camera modules like the 5MP OV5647",
      "NOIR options available for night vision applications",
      "Manufactured with CSI interfaces and IR LED integration",
      "Designed for use in security cameras and surveillance systems",
      "Used in PPE detection setups and embedded applications",
      "5MP OV5647 sensor, 15-pin to 22-pin CSI cable",
      "850nm IR LED Board, Auto exposure, Manufactured for reliability"
    ],
    category: "Imaging Hardware"
  },
  {
    id: 10,
    src: iotGateway,
    title: "IoT Gateway",
    alt: "IoT gateway for connected devices",
    points: [
      "We manufacture intelligent IoT gateways",
      "Using Smart Mini Computer and Wireless Control Board platforms",
      "Connects devices to cloud services with data processing capabilities",
      "Includes security features for reliable operation",
      "Essential for surveillance systems and PPE detection networks",
      "Used in remote monitoring applications",
      "Raspberry Pi Zero 2 W, Wireless Control Board integration",
      "Multiple wireless protocols, Linux-based, RESTful APIs, MQTT support"
    ],
    category: "IoT Solutions"
  },
  {
    id: 11,
    src: securityPanel,
    title: "Security Panel",
    alt: "Security monitoring panel and control system",
    points: [
      "We manufacture central security control panels",
      "Features zone monitoring, alarm management, and user access control",
      "Built using embedded systems and Smart Connection Ports",
      "Designed for integration with surveillance cameras and IoT devices",
      "Used in comprehensive security solutions",
      "16-256 zones, Touchscreen interface, GSM/GPRS backup",
      "API integration, Backup battery, Manufactured components"
    ],
    category: "Control Systems"
  },
  {
    id: 12,
    src: iotGateway,
    title: "Infotainment Systems",
    alt: "Infotainment and interactive display systems",
    points: [
      "We develop advanced infotainment solutions with beautiful, responsive UX/UI",
      "Built with LVGL (Light and Versatile Graphics Library) for embedded displays",
      "Cross-platform development using Flutter for mobile and web applications",
      "Perfect for car infotainment, smart home control panels, and interactive kiosks",
      "Real-time video playback, touch controls, and multi-language support",
      "LVGL framework for resource-efficient graphics on embedded systems",
      "Flutter development for iOS, Android, and Web platforms",
      "Seamless integration with Security Panels, IoT Gateways, and surveillance systems"
    ],
    category: "Infotainment"
  },
];

export const getAllCategories = (): string[] => {
  const categories = new Set(PRODUCTS.map(p => p.category));
  return Array.from(categories).sort();
};

export const searchProducts = (
  query: string,
  category?: string
): Product[] => {
  let filtered = PRODUCTS;

  // Filter by category if provided
  if (category && category !== "All") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter by search query
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.points.some(point => point.toLowerCase().includes(lowerQuery))
    );
  }

  return filtered;
};
