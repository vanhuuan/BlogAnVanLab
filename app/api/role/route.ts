import container from "@/dependcencyInjection.config";
import { Role } from "@/models/Role";
import { IRepository } from "@/repositories/interfaces/IRepository";
import { REPOSITORIES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/role:
 *   get
 *     description: add role
 *     responses:
 *       200:
 *         description: oke
 */
export async function GET(request: NextRequest) {

    const releRepository = container.get<IRepository<Role>>(REPOSITORIES_TYPES.RoleRepository);

    const user = new Role()
    user.name = "User"

    const admin = new Role()
    admin.name = "admin"

    await releRepository.create(user)
    await releRepository.create(admin)

    let json_response = {
      status: "success",
      results: "topic"
    };
    return NextResponse.json(json_response);
  }
  