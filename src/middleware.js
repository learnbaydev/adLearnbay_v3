import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // =========================
  // 🚫 410 GONE ROUTES
  // =========================
  const goneRoutes = [
    "/full-stack-software-development-program",
    "/full-stack-software-development-program/",
    "/dsa",
    "/dsa/",
    "/job-guarantee-or-money-back-data-science-ai-s4",
    "/job-guarantee-or-money-back-data-science-ai-s4/",
  ];

  if (goneRoutes.includes(pathname)) {
    return new NextResponse("<h1>This page has been removed</h1>", {
      status: 410,
      headers: {
        "content-type": "text/html",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // =========================
  // 🔧 FIX &amp;
  // =========================
  if (pathname.includes("&amp;")) {
    const cleanPath = pathname.replace(/&amp;/g, "and");

    return NextResponse.redirect(new URL(cleanPath, req.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
