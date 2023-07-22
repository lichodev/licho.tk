"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import LinkBox from "./LinkBox";
import { LinkDto } from "../lib/link";

export default function LinkList() {
  const [baseUrl, setBaseUrl] = useState("");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR<LinkDto[]>("/api/links", fetcher);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  return (
    <div className={`flex flex-col gap-2 ${isLoading ? "animate-pulse" : ""}`}>
      {isLoading &&
        [1, 2, 3].map(() => (
          <>
            <div className="bg-secondary border-[8px] p-4">
              <div className="bg-slate-200 rounded p-2 w-[100px] mb-2"></div>
              <div className="bg-slate-200 rounded p-3 w-[300px] mb-2"></div>
              <div className="bg-slate-200 rounded p-2 w-[200px]"></div>
            </div>
          </>
        ))}

      {data &&
        data.map((link) => (
          <LinkBox
            key={link.shortUrl}
            baseUrl={baseUrl}
            shortLink={link}
          ></LinkBox>
        ))}
    </div>
  );
}
