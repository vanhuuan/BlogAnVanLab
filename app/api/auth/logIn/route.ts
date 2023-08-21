import container from "@/dependcencyInjection.config";
import { getEnvVariable } from "@/lib/helpers";
import { signJWT } from "@/lib/token";
import { IUserService } from "@/services/IUserService";
import { SERVICES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const UserService = container.get<IUserService>(SERVICES_TYPES.UserService);

        const user = await UserService.Login(await request.json());
        
        if (user != null) {
            const token = await signJWT(
                { sub: user!.id },
                { exp: `${getEnvVariable("JWT_EXPIRES_IN_MINUTES")}` }
            )

            return NextResponse.json({
                user: user,
                token: token
            }, {
                status: 200
            })
        }

        return NextResponse.json({ message: "Wrong Username or Password" }, {
            status: 400
        });
    } catch (e) {
        console.error(e)
        return NextResponse.json({ message: "Wrong Username or Password" }, {
            status: 400
        });
    }
}
