"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../core/components/spinner";
import { useAuth } from "../hooks/useAuth";
const getHomeRoute = () => {
  return "/practice";
};

const Home = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      const homeRoute = getHomeRoute();

      router.replace(homeRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Spinner sx={{ height: "100%" }} />;
};

export default Home;
