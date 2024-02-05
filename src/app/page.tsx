import Button from "@src/components/button";
import { PAGE_URL } from "@src/utils/constants";
import Link from "next/link";

export default function App() {
  return (
    <main>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Ilham Cendana</h1>
          <p className="text-sm text-neutral-400">RushOwl Test</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={PAGE_URL.Q1}>
            <Button>Question 1</Button>
          </Link>
          <Link href={PAGE_URL.Q2}>
            <Button>Question 2</Button>
          </Link>
          <Link href={PAGE_URL.Q3}>
            <Button>Question 3</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
