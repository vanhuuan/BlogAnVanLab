import container from "@/dependcencyInjection.config";
import { User } from "@/models/User";
import { IRepository } from "@/repositories/interfaces/IRepository";
import { IUserService } from "@/services/IUserService";
import { REPOSITORIES_TYPES, SERVICES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const UserService = container.get<IUserService>(SERVICES_TYPES.UserService);

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Test user
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request: NextRequest) {
  const user = await UserService.Login(await request.json());

  return NextResponse.json(user);
}
