import container from "@/dependcencyInjection.config";
import { IUserService } from "@/services/IUserService";
import { SERVICES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/auth/signUp:
 *   post:
 *     description: Đăng ký
 *     responses:
 *       200:
 */
export async function POST(request: NextRequest) {
    try {
        const UserService = container.get<IUserService>(SERVICES_TYPES.UserService);

        const check = await UserService.SignUp(await request.json());
        if (check) return NextResponse.json({ ok: check }, {
            status: 200
        });
        console.log("error!!!!")
        return NextResponse.json({ message: "User exist!" }, {
            status: 400
        });
    } catch (e) {
        console.error(e)
        return NextResponse.json({ message: "User exist!" }, {
            status: 400
        });
    }
}
