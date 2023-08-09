import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/topic:
 *   get
 *     description: View all topic
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request: NextRequest) {
    let json_response = {
      status: "success",
      results: "topic"
    };
    return NextResponse.json(json_response);
  }
  