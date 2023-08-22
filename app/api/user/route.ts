import container from "@/dependcencyInjection.config";
import { User } from "@/models/User";
import { IRepository } from "@/repositories/interfaces/IRepository";
import { IUserService } from "@/services/IUserService";
import { REPOSITORIES_TYPES, SERVICES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const UserService = container.get<IUserService>(SERVICES_TYPES.UserService);

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const uid = url.searchParams.get("uid");
  if (!uid)
    return NextResponse.json(
      { status: "Not Oke" },
      {
        status: 400,
      }
    );

  const user = await UserService.GetUserInfo(uid);

  if (user != null) {
    return NextResponse.json(
      {
        status: "Oke",
        data: user,
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { status: "Not Oke" },
      {
        status: 400,
      }
    );
  }
}

export async function PUT(request: NextRequest) {
  const rs = await UserService.UpdateUserInfo(await request.json());

  if (rs) {
    return NextResponse.json(
      { status: "Oke" },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { status: "Not Oke" },
      {
        status: 400,
      }
    );
  }
}
