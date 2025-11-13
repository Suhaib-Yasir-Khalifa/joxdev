import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "suhaibcv.pdf");
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Suhaib_CV.pdf"',
      },
    });
  } catch (error) {
    console.error("Error serving PDF file:", error);
    return new NextResponse("Error downloading file", { status: 500 });
  }
}
