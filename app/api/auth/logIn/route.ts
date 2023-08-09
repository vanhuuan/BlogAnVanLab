import container from "@/dependcencyInjection.config";
import { IUserService } from "@/services/IUserService";
import { SERVICES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/auth/logIn:
 *   post:
 *     description: Đăng nhập
 *     responses:
 *       200:
 */
export async function POST(request: NextRequest) {
    try {
        const UserService = container.get<IUserService>(SERVICES_TYPES.UserService);

        const user = await UserService.Login(await request.json());
        if (user != null) return NextResponse.json(JSON.stringify(user), {
            status: 200
        })
        return NextResponse.json({ message: "Wrong Username or Password" }, {
            status: 400
        });
    } catch (e) {
        return NextResponse.json({ message: "Wrong Username or Password" }, {
            status: 400
        });
    }
}
