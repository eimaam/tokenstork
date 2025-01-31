"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import BottomNavbar from "./BottomNavbar";
import useMobile from "@/app/hooks/useMobile";

const { Header } = Layout;

const navigation = [
  { name: "Tokens", href: "/" },
  { name: "Learn", href: "/learn" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
];

export default function Navbar({}: {}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useMobile();

  const menuItems = navigation?.map((item) => ({
    key: item.href,
    label: <Link href={item.href} className="!text-textcolor hover:!text-accent !font-medium  !no-underline">{item.name}</Link>,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-[100px]"
    >
    <Header
      className="fixed !w-full left-0 right-0 z-50 px-4 transition-all duration-300 bg-secondary text-textcolor backdrop-blur-lg shadow-sm"
      style={{ padding: 0, height: "auto" }}
    >
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <h1 className="m-0">
            <a href="/" className="flex items-center">
              <Image
                src="/logo-simple-bch.png"
                alt="TokenStork - Delivering beautiful new CashTokens on BCH since 2023"
                width={isMobile ? 180 : 277}
                height={isMobile ? 33 : 50}
                title="TokenStork - Delivering beautiful new CashTokens on BCH since 2023"
                priority={true}
              />
            </a>
          </h1>

          <motion.div 
            className="hidden md:block ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Menu
              mode="horizontal"
              selectedKeys={pathname ? [pathname] : []}
              items={menuItems}
              className="border-none bg-transparent"
            />
          </motion.div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md text-textcolor  focus:outline-none"
            title="menu toggle"
          >
            <MenuOutlined />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-secondary/80 backdrop-blur-lg border-t border-accent/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Menu
              mode="vertical"
              selectedKeys={[pathname]}
              items={menuItems}
              className="border-none py-2"
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                background: 'transparent'
              }}
              theme="dark"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Header>
    {isMobile && <BottomNavbar />}
    </motion.div>
  );
}
