import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baipor Boonsa — Frontend Developer & UX/UI Designer",
  description: "พอร์ตโฟลิโอส่วนตัวของสุภาวดี บุญสา (Baipor Boonsa) นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้ ที่สนใจ UX/UI Design และ Frontend Development",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
