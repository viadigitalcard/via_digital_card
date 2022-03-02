import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";
// import CreateDigiCard from "./createDigiCard";
import { useEffect, useState } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  const loading = status === "loading";
  // console.log(session);
  return <header>Landing page</header>;
}
