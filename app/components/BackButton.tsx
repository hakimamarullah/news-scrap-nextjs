"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <p
      className="text-3xl font-bold text-black-800 hover:underline cursor-pointer"
      onClick={() => router.back()}
    >
      ←
    </p>
  );
};

export default BackButton;
