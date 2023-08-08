import container from "@/dependcencyInjection.config";
import { User } from "@/models/User";
import { IRepository } from "@/repositories/interfaces/IRepository";
import { REPOSITORIES_TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const newUser = new User({

  });
  newUser.name = "John"
  // roles: ["admin", "user"],
  newUser.createdAt = new Date()
  newUser.updatedAt = new Date()
  newUser.isDeleted = false
  const userRepository = container.get<IRepository<User>>(REPOSITORIES_TYPES.UserRepository);
  console.log("Hallo")
  const user = await userRepository.create(newUser);

  return NextResponse.json(user);
}
