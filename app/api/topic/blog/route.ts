import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/topic/blog:
 *   get:
 *     description: View all blog
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request: NextRequest) {
    let json_response = {
      status: "success",
      results: "blog"
    };
    return NextResponse.json(json_response);
  }
  